export class User {
  private readonly _id: string
  private readonly _fullName: string
  private readonly _email: string
  private readonly _password: string

  constructor(user: {
    id: string
    fullName: string
    email: string
    password: string
  }) {
    this._id = user.id
    this._fullName = user.fullName
    this._email = user.email
    this._password = user.password
  }

  get fullName(): string {
    return this._fullName
  }

  get email(): string {
    return this._email
  }

  get password(): string {
    return this._password
  }

  get id(): string {
    return this._id
  }
}
