"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CartItem } from "@/components/ui/cart-item"
import { Input } from "@/components/ui/input"


const initialCartItems = [
  {
    id: "1",
    title: "Ut diam consequat",
    color: "Brown",
    size: "XL",
    price: 32.00,
    quantity: 1,
    image: "/images/cart-1.png",
  },
  {
    id: "2",
    title: "Vel faucibus posuere",
    color: "Brown",
    size: "XL",
    price: 32.00,
    quantity: 1,
    image: "/images/cart-2.png",
  },
  {
    id: "3",
    title: "Ac vitae vestibulum",
    color: "Brown",
    size: "XL",
    price: 32.00,
    quantity: 1,
    image: "/images/cart-3.png",
  },
  {
    id: "4",
    title: "Elit massa diam",
    color: "Brown",
    size: "XL",
    price: 32.00,
    quantity: 1,
    image: "/images/cart-4.png",
  },
  {
    id: "5",
    title: "Proin pharetra elementum",
    color: "Brown",
    size: "XL",
    price: 32.00,
    quantity: 1,
    image: "/images/cart-5.png",
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = React.useState(initialCartItems)
  const [shippingCountry, setShippingCountry] = React.useState("")
  const [shippingState, setShippingState] = React.useState("")
  const [shippingZip, setShippingZip] = React.useState("")

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 6.00
  const total = subtotal + shipping

  const handleQuantityChange = (id: string, quantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const handleClearCart = () => {
    setCartItems([])
  }

  return (
    <div>
  {/* Page Header */}
  <div className="h-[286px] bg-[#F6F5FF]  flex items-center py-16">
    <div className="container  md:w-[1177px] mx-auto px-4">
      <h1 className="text-3xl text-center text-[#151875] md:text-left font-bold mb-4">Shopping Cart</h1>
      <div className="flex flex-wrap justify-center text-[#151875] md:justify-start items-center gap-2 text-sm">
        <Link href="/">Home</Link>
        <span>•</span>
        <Link href="/pages">Pages</Link>
        <span>•</span>
        <span className="text-[#FB2E86]">Shopping Cart</span>
      </div>
    </div>
  </div>

  {/* Cart Content */}
  <div className="container md:w-[1177px] mx-auto px-4 py-8">
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div className="w-full ">
          <table className="w-full text-sm ">
            <thead>
              <tr className="border-b  text-left md:text-xl font-heading text-[#151875]">
                <th className="py-4">Product</th>
                <th className="py-4">Price</th>
                <th className="py-4">Quantity</th>
                <th className="py-4">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  {...item}
                  onQuantityChange={handleQuantityChange}
                  onRemove={handleRemoveItem}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 flex  flex-wrap gap-4 justify-center lg:justify-between">
          <Button
            variant="outline"
            onClick={handleClearCart}
            className="bg-[#FB2E86] px-4 rounded-[4px] text-white hover:bg-[#FB2E86]/90"
          >
            Clear Cart
          </Button>
          <Button
            variant="outline"
            asChild
            className="bg-[#FB2E86] px-4 rounded-[4px] text-white hover:bg-[#FB2E86]/90"
          >
            <Link href="/Products">Update Cart</Link>
          </Button>
        </div>
      </div>
      <div className="space-y-8 px-2">
        {/* Cart Totals */}
        <h2 className="text-xl text-center text-[#151875] font-bold mb-4">Cart Totals</h2>
        <div className="rounded-xl bg-[#F4F4FC] p-6">
         
          <div className="space-y-4">
            <div className="flex justify-between border-b py-4 text-[#151875] font-semibold font-heading">
              <span>Subtotals:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b py-4 text-[#151875] font-semibold font-heading">
              <span>Totals:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-500 py-2">
              ✓ Shipping & taxes calculated at checkout
            </p>
            <Button
              className="w-full bg-green-500 rounded-[6px] font-semibold text-white hover:bg-green-600/90"
              asChild
            >
              <Link href="/checkout">Proceed To Checkout</Link>
            </Button>
          </div>
        </div>

        {/* Calculate Shipping */}
        <h2 className="text-xl text-center text-[#151875] font-bold mb-4">Calculate Shipping</h2>
        <div className="rounded-xl bg-[#F4F4FC] p-6 text-gray-500 font-medium">
          
          <div className="space-y-2">
            <Input
              placeholder="Bangladesh"
              value={shippingCountry}
              onChange={(e) => setShippingCountry(e.target.value)}
               className="rounded-lg bg-[#F4F4FC] outline-none border-none  text-gray-500 font-medium"
            />
            <hr/>
            <Input
              placeholder="Mirpur Dhaka - 1200"
              value={shippingState}
              onChange={(e) => setShippingState(e.target.value)}
               className="rounded-lg bg-[#F4F4FC] outline-none border-none  text-gray-500 font-medium"
            />
             <hr/>
            <Input
              placeholder="Postal Code"
              value={shippingZip}
              onChange={(e) => setShippingZip(e.target.value)}
               className="rounded-lg bg-[#F4F4FC] outline-none border-none  text-gray-500 font-medium"
            />
             <hr/>
            <Button className="w-full bg-[#FB2E86] rounded-[6px] text-white hover:bg-[#FB2E86]/90">
              Calculate Shipping
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}