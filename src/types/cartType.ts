import { Dispatch, SetStateAction } from 'react'
import { ProductType } from './productType'

export type CartItemType = {
  product: ProductType
  quantity: number
}

export type CartType = {
  cartItems: CartItemType[]
  setCartItems: Dispatch<SetStateAction<CartItemType[]>>
  totalCartPrice: number
  setTotalCartPrice: Dispatch<SetStateAction<number>>
  addItemToCart: (product: ProductType, quantity: number) => void
  handleAddQuantityProduct: (product: ProductType) => void
  handleDeductQuantityProduct: (product: ProductType) => void
  handleRemoveAllItems: () => void
}
