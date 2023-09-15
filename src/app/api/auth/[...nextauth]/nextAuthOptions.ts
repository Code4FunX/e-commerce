import { usersRepositoryMock } from '@/@core/mocks/users.repository.mock'
import bcrypt from 'bcrypt'
import { NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials?.username || !credentials?.password) {
          return null
        }

        const user = await usersRepositoryMock.findByEmail(
          credentials?.username
        )

        if (!user) {
          return null
        }

        if (!bcrypt.compareSync(credentials.password, user.password)) {
          return null
        }

        return { id: user.id, email: user.email, name: user.fullName }
      },
    }),
  ],
}
