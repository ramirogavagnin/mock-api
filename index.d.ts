type Url = string
type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[]

interface ClientUser {
  id: string
  avatar: string
  age: number
  email: string
  name: string
  role: 'admin' | 'user'
  surname: string
  token: string
}

interface ServerUser extends ClientUser {
  password: string
}
