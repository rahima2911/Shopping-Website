"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, ShoppingCart, Truck, Shield, Headphones, ArrowRight, Zap, Award } from "lucide-react"

const HomePage = () => {
  const [showAllProducts, setShowAllProducts] = useState(false)

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: "$99.99",
      originalPrice: "$129.99",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      badge: "Best Seller",
      badgeColor: "bg-gradient-to-r from-amber-500 to-orange-500"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: "$199.99",
      originalPrice: "$249.99",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      badge: "New Arrival",
      badgeColor: "bg-gradient-to-r from-emerald-500 to-teal-500"
    },
    {
      id: 3,
      name: "Ergonomic Laptop Stand",
      price: "$49.99",
      originalPrice: "$69.99",
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      badge: "Limited Sale",
      badgeColor: "bg-gradient-to-r from-red-500 to-pink-500"
    },
    {
      id: 4,
      name: "Portable Bluetooth Speaker",
      price: "$79.99",
      originalPrice: "$99.99",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      badge: "Popular",
      badgeColor: "bg-gradient-to-r from-purple-500 to-indigo-500"
    },
  ]

  const additionalProducts = [
    {
      id: 5,
      name: "Mechanical Gaming Keyboard",
      price: "$129.99",
      originalPrice: "$159.99",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      badge: "Gaming Pro",
      badgeColor: "bg-gradient-to-r from-cyan-500 to-blue-500"
    },
    {
      id: 6,
      name: "Precision Wireless Mouse",
      price: "$39.99",
      originalPrice: "$54.99",
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      badge: "Trending",
      badgeColor: "bg-gradient-to-r from-rose-500 to-pink-500"
    },
    {
      id: 7,
      name: "Multi-Port USB-C Hub",
      price: "$69.99",
      originalPrice: "$89.99",
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      badge: "Essential",
      badgeColor: "bg-gradient-to-r from-slate-500 to-gray-600"
    },
    {
      id: 8,
      name: "Adjustable Phone Stand",
      price: "$24.99",
      originalPrice: "$34.99",
      rating: 4.1,
      image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      badge: "Compact",
      badgeColor: "bg-gradient-to-r from-violet-500 to-purple-500"
    },
  ]

  const displayProducts = showAllProducts ? [...featuredProducts, ...additionalProducts] : featuredProducts

  const features = [
    {
      icon: <Truck className="w-7 h-7" />,
      title: "Express Delivery",
      description: "Fast & free shipping worldwide",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Secure Payments",
      description: "Bank-level security guaranteed",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Headphones className="w-7 h-7" />,
      title: "Expert Support",
      description: "24/7 premium customer care",
      gradient: "from-purple-500 to-indigo-500"
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.05)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-full px-4 py-2">
                  <Zap className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm font-medium text-indigo-700">Premium Tech Collection</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                  Discover
                  <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Innovation
                  </span>
                  <span className="block text-4xl lg:text-5xl mt-2 text-gray-700">That Inspires</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Experience the future of technology with our curated collection of premium electronics, designed for those who demand excellence.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  Explore Collection
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-gray-300 hover:border-indigo-300 text-gray-700 hover:text-indigo-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-indigo-50">
                  Learn More
                </button>
              </div>
              
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-amber-500" />
                  <span className="text-sm font-medium text-gray-700">Award Winning</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[1,2,3,4,5].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-700">50K+ Reviews</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-3xl transform -rotate-6"></div>
              <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-white/20 backdrop-blur-sm">
                <Image
                  src="/assets/herosection.png"
                  alt="Premium Tech Products"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Excellence</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group text-center p-8 rounded-2xl hover:bg-gradient-to-br hover:from-gray-50 hover:to-white transition-all duration-300 hover:shadow-lg border border-transparent hover:border-gray-100">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Featured Collection</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Handpicked premium products that define quality, innovation, and exceptional value
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={250}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className={`absolute top-4 left-4 ${product.badgeColor} text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm`}>
                    {product.badge}
                  </span>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">
                      <ShoppingCart className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) 
                              ? "text-amber-400 fill-current" 
                              : "text-gray-200"
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-500 font-medium">({product.rating})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                    <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                    <span className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded-lg font-semibold">
                      Save {Math.round((1 - parseFloat(product.price.slice(1)) / parseFloat(product.originalPrice.slice(1))) * 100)}%
                    </span>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group/btn">
                    <ShoppingCart className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button 
              className="bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-indigo-300 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => setShowAllProducts(!showAllProducts)}
            >
              {showAllProducts ? "Show Featured Only" : "View Complete Collection"}
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Stay Ahead</h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                Join our exclusive community and be the first to discover revolutionary products, insider deals, and tech innovations.
              </p>
            </div>
            
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all duration-300"
                />
                <button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
                  Join Now
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-3">No spam. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage