export interface TOrder {
  player: string,
  coupon: string,
  email: string,
  items: {
    id: number,
    a: number
  }[]
}

export interface TProduct {
  id: number,
  image: string,
  name: string,
  description_html: string,
  description: string,
  price: number,
  is_glow: boolean,
  icon: string
}

export interface TCategory {
  id: number,
  name: string,
  products: TProduct[]
}