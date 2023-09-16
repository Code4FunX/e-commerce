import { User } from '@/@core/entities/user.entity'
import { usersRepositoryMock } from '@/@core/mocks/users.repository.mock'
import bcrypt from 'bcrypt'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest) => {
  const { fullName, email, password } = await req.json()

  if (!fullName || !email || !password) {
    return NextResponse.json({ message: 'Missing fields.' }, { status: 400 })
  }

  let user = await usersRepositoryMock.findByEmail(email)
  if (user) {
    return NextResponse.json({ message: 'Bad request' }, { status: 400 })
  }

  const hash = bcrypt.hashSync(password, 10) // we could use Dependency Inversion here

  user = await usersRepositoryMock.save(
    new User({ id: '2', fullName, email, password: hash })
  )
  return NextResponse.json({
    fullName,
    email,
  })
}
