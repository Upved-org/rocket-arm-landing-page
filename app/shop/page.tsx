"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

type Product = {
  id: string
  name: string
  price: number
  description: string
  image: string
  category: "ball" | "apparel" | "accessories"
  badge?: string
}

const products: Product[] = [
  {
    id: "pro-ball",
    name: "RocketArm Pro Ball",
    price: 180,
    description: "Competition-grade sensor ball with GPS, accelerometer, and gyroscope. Measures speed up to 200+ mph and height up to 500m. Real-time Bluetooth sync.",
    image: "/images/ball-trans.png",
    category: "ball",
    badge: "PRO",
  },
  {
    id: "regular-ball",
    name: "RocketArm Ball",
    price: 25,
    description: "Entry-level sensor ball. Measures throw speed and height with smartphone app connectivity. Perfect for casual throwers.",
    image: "/images/ball-trans.png",
    category: "ball",
  },
  {
    id: "tee-black",
    name: "RocketArm Tee — Black",
    price: 35,
    description: "Premium cotton tee with embroidered RocketArm logo. Unisex fit.",
    image: "/images/ball-trans.png",
    category: "apparel",
  },
  {
    id: "tee-white",
    name: "RocketArm Tee — White",
    price: 35,
    description: "Premium cotton tee with embroidered RocketArm logo. Unisex fit.",
    image: "/images/ball-trans.png",
    category: "apparel",
  },
  {
    id: "hoodie",
    name: "RocketArm Hoodie",
    price: 75,
    description: "Heavyweight fleece hoodie with RocketArm branding. Oversized fit.",
    image: "/images/ball-trans.png",
    category: "apparel",
    badge: "NEW",
  },
  {
    id: "cap",
    name: "RocketArm Cap",
    price: 30,
    description: "Structured six-panel cap with embroidered logo. Adjustable strap.",
    image: "/images/ball-trans.png",
    category: "accessories",
  },
]

const categories = [
  { id: "all", name: "All Products" },
  { id: "ball", name: "Sensor Balls" },
  { id: "apparel", name: "Apparel" },
  { id: "accessories", name: "Accessories" },
]

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [cart, setCart] = useState<{id: string, qty: number}[]>([])

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  const addToCart = (productId: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === productId)
      if (existing) {
        return prev.map(item => 
          item.id === productId ? { ...item, qty: item.qty + 1 } : item
        )
      }
      return [...prev, { id: productId, qty: 1 }]
    })
  }

  const cartTotal = cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id)
    return sum + (product?.price || 0) * item.qty
  }, 0)

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0)

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b-2 border-foreground p-6 md:p-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <Link href="/" className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent hover:underline">
              ← Back to Home
            </Link>
            <h1 className="font-serif text-4xl md:text-6xl mt-2 italic">THE SHOP.</h1>
          </div>
          
          {/* Cart indicator */}
          {cartCount > 0 && (
            <div className="border-2 border-foreground p-4 bg-accent text-foreground">
              <p className="font-mono text-xs uppercase tracking-widest">
                Cart: {cartCount} items — ${cartTotal}
              </p>
            </div>
          )}
        </div>
      </header>

      {/* Category Filter */}
      <div className="border-b-2 border-foreground/10 px-6 md:px-12 py-4 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex gap-2 min-w-max">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`font-mono text-xs uppercase tracking-widest px-4 py-2 border-2 transition-all ${
                selectedCategory === cat.id
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent border-foreground/30 hover:border-foreground"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <section className="p-6 md:p-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <div 
                key={product.id}
                className="border-2 border-foreground bg-background group hover:bg-muted/30 transition-colors"
              >
                {/* Product Image */}
                <div className="relative aspect-square border-b-2 border-foreground bg-gradient-to-br from-muted/20 to-muted/5 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-accent text-foreground font-mono text-[10px] uppercase tracking-widest px-3 py-1">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif text-xl md:text-2xl italic leading-tight">{product.name}</h3>
                    <span className="font-mono text-lg md:text-xl font-bold text-accent shrink-0 ml-4">
                      ${product.price}
                    </span>
                  </div>
                  
                  <p className="font-mono text-xs text-muted-foreground mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <button
                    onClick={() => addToCart(product.id)}
                    className="w-full bg-foreground text-background font-mono text-xs uppercase tracking-widest py-4 hover:bg-accent hover:text-foreground transition-colors border-2 border-foreground"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t-2 border-foreground p-6 md:p-12 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl italic mb-4">
            MEASURE YOUR POWER.
          </h2>
          <p className="font-mono text-sm text-background/70 mb-6">
            Every RocketArm ball comes with sensors to measure your throw speed and height. 
            Compare with friends, compete in challenges, and see how you stack up globally.
          </p>
          <Link
            href="/#challenge"
            className="inline-block bg-accent text-foreground font-mono text-sm uppercase tracking-widest px-8 py-4 border-2 border-background hover:bg-background hover:text-foreground transition-colors"
          >
            Join the Challenge →
          </Link>
        </div>
      </section>
    </main>
  )
}
