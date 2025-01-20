import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { QuantityInput } from "@/components/ui/quantity-input"

interface CartItemProps {
  id: string
  title: string
  color: string
  size: string
  price: number
  quantity: number
  image: string
  onQuantityChange: (id: string, quantity: number) => void
  onRemove: (id: string) => void
}

export function CartItem({
  id,
  title,
  color,
  size,
  price,
  quantity,
  image,
  onQuantityChange,
  onRemove,
}: CartItemProps) {
  return (
    <tr className="border-b pr-4">
      <td className="py-4 ">
        <div className="flex items-center gap-2 md:gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 hidden md:block rounded-full hover:bg-red-50 hover:text-red-500"
            onClick={() => onRemove(id)}
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="relative h-14 w-14 md:h-20 md:w-20">
            <img src={image} alt={title} className="object-cover" />
          </div>
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm hidden md:block text-gray-500">
              Color: {color}, Size: {size}
            </p>
          </div>
        </div>
      </td>
      <td className="py-4 text-[#151875] font-semibold">${price.toFixed(2)}</td>
      <td className="py-4">
        <QuantityInput
          value={quantity}
          onChange={(value) => onQuantityChange(id, value)}
        />
      </td>
      <td className="py-4 text-[#151875] font-semibold">${(price * quantity).toFixed(2)}</td>
    </tr>
  )
}