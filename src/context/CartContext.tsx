'use client'
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { CartItemType, CartType } from '@/types/cartType'
import { ProductType } from '@/types/productType'

const CartContext = createContext<CartType | undefined>(undefined)

type CartContextProviderProps = {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [showCart, setShowCart] = useState(false)
  const [formValid, setFormValid] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [showTopNav, setShowTopNav] = useState(false)
  const [cartItems, setCartItems] = useState<CartItemType[]>([])
  const [totalCartPrice, setTotalCartPrice] = useState<number>(0)

  const addItemToCart = useCallback(
    (product: ProductType, quantity: number) => {
      setCartItems((prevCartItems) => {
        const exists = prevCartItems?.find(
          (item: CartItemType) => item.product.slug === product.slug
        )
        if (!exists) {
          return [...prevCartItems, { product, quantity }]
        }
        return prevCartItems.map((item: CartItemType) =>
          item.product.slug === product.slug
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      })
      setShowCart((prevVal) => !prevVal)
    },
    []
  )

  const handleAddQuantityProduct = useCallback((product: ProductType) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.map((item: CartItemType) =>
        item.product.slug === product.slug
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    })
  }, [])

  const handleDeductQuantityProduct = useCallback((product: ProductType) => {
    setCartItems((prevCartItems) => {
      return prevCartItems
        .map((item: CartItemType) =>
          item.product.slug === product.slug
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity !== 0)
    })
  }, [])

  const handleRemoveAllItems = useCallback(() => {
    setCartItems([])
  }, [])

  useEffect(() => {
    const totalPrice = cartItems.reduce((total, item) => {
      if (item.product && typeof item.product.price === 'number') {
        return total + item.product.price * item.quantity
      }
      return total
    }, 0)
    setTotalCartPrice(totalPrice)
  }, [cartItems])

  useEffect(() => {
    if (!isMounted) {
      const storedCartItems = localStorage.getItem('cartItems')
      setCartItems(storedCartItems ? JSON.parse(storedCartItems) : [])
      setIsMounted(true)
      return
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems, isMounted])

  const contextValue = useMemo(
    () => ({
      cartItems,
      totalCartPrice,
      addItemToCart,
      handleRemoveAllItems,
      handleAddQuantityProduct,
      handleDeductQuantityProduct,
      setCartItems,
      setTotalCartPrice,
      showCart,
      setShowCart,
      formValid,
      setFormValid,
      showTopNav,
      setShowTopNav,
    }),
    [
      cartItems,
      totalCartPrice,
      addItemToCart,
      handleRemoveAllItems,
      handleAddQuantityProduct,
      handleDeductQuantityProduct,
      setCartItems,
      setTotalCartPrice,
      showCart,
      setShowCart,
      formValid,
      setFormValid,
      showTopNav,
      setShowTopNav,
    ]
  )

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  )
}

export function useCartContext() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCartContext must be used within a CartContextProvider')
  }
  return context
}
