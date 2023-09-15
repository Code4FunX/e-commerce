import { User } from '../entities/user.entity'
import { UsersRepository } from '../interfaces/users.repository'

export class UsersRepositoryMock implements UsersRepository {
  private readonly users: User[] = [
    new User({
      id: '1',
      fullName: 'caio',
      email: 'test@gmail.com',
      password: '12345',
    }),
  ]

  findByEmail(email: string): Promise<User | null> {
    return Promise.resolve(
      this.users.find((user) => user.email === email) || null
    )
  }

  save(user: User): Promise<User> {
    this.users.push(user)
    return Promise.resolve(user)
  }
}

export const usersRepositoryMock = new UsersRepositoryMock()
