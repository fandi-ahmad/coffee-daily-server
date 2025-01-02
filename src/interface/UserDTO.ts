export interface UserDTO {
  id?: number
  email: string
  password: string
  role: 'nonadmin' | 'admin'
  access_token?: string
}

export interface UserUpdateDTO {
  email?: string
  password?: string
  access_token?: string
}

export interface UserBuyerDTO {
  id?: number
  photo: string
  username: string
  phone_number: string
  gender?: 'man' | 'woman'
  address: string
}

export interface UserSellerDTO {
  id?: number
  photo: string
  username: string
  address: string
}