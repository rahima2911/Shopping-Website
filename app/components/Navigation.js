"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ShoppingCart, Search, User, Menu, X, Heart, Package } from "lucide-react"
import { useSession, signOut } from "next-auth/react"

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { data: session } = useSession()
  const user = session?.user

  const navItems = [
    { href: "/home", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (path) => pathname === path

  const handleSignIn = () => router.push("/login")
  const handleSignOut = () => {
    signOut({ callbackUrl: "/login" })
  }

  return (
    <header className="relative bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-50/50 via-white/80 to-slate-50/50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            href={user ? "/home" : "/"} 
            className="group flex items-center space-x-3 text-slate-800 hover:text-slate-900 transition-all duration-300"
          >
            <div className="relative">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105 border border-slate-200/50">
                <Package className="w-6 h-6 text-slate-700" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-300 to-slate-400 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              ShopTech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {user && navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-6 py-3 text-sm font-medium transition-all duration-200 rounded-xl group ${
                  isActive(item.href) 
                    ? "text-slate-800 bg-slate-100 shadow-sm" 
                    : "text-slate-600 hover:text-slate-800 hover:bg-slate-50"
                }`}
              >
                {isActive(item.href) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-200/80 to-slate-100/80 rounded-xl"></div>
                )}
                <span className="relative">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            {user ? (
              <>
                <button className="group p-3 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all duration-200 hover:scale-105">
                  <Search className="w-5 h-5" />
                </button>
                
                <button className="group p-3 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all duration-200 hover:scale-105">
                  <Heart className="w-5 h-5" />
                </button>
                
                <button className="group relative p-3 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all duration-200 hover:scale-105">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-slate-600 to-slate-700 text-white text-xs rounded-full flex items-center justify-center font-medium shadow-lg">
                    3
                  </span>
                </button>
                
                <button className="group p-3 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all duration-200 hover:scale-105">
                  <User className="w-5 h-5" />
                </button>
                
                <div className="h-6 w-px bg-slate-200 mx-2"></div>
                
                <button
                  className="relative px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white font-medium rounded-xl hover:from-slate-600 hover:to-slate-700 transition-all duration-200 hover:shadow-lg hover:scale-105 text-sm"
                  onClick={handleSignOut}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-slate-600 to-slate-800 rounded-xl blur opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                  <span className="relative">Logout</span>
                </button>
              </>
            ) : (
              <button
                className="relative px-8 py-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white font-medium rounded-xl hover:from-slate-600 hover:to-slate-700 transition-all duration-200 hover:shadow-lg hover:scale-105"
                onClick={handleSignIn}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-slate-600 to-slate-800 rounded-xl blur opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                <span className="relative">Sign In</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="absolute left-0 right-0 top-full bg-white/95 backdrop-blur-lg border-t border-gray-200/50 shadow-xl">
              <div className="px-4 py-6">
                <nav className="flex flex-col space-y-2 mb-6">
                  {user && navItems.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`px-4 py-3 text-sm font-medium transition-all duration-200 rounded-xl ${
                        isActive(item.href) 
                          ? "text-slate-800 bg-slate-100 shadow-sm" 
                          : "text-slate-600 hover:text-slate-800 hover:bg-slate-50"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                
                <div className="border-t border-gray-200/50 pt-6">
                  {user ? (
                    <>
                      <div className="grid grid-cols-4 gap-3 mb-6">
                        <button className="group p-4 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all duration-200 flex flex-col items-center space-y-1">
                          <Search className="w-5 h-5" />
                          <span className="text-xs">Search</span>
                        </button>
                        <button className="group p-4 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all duration-200 flex flex-col items-center space-y-1">
                          <Heart className="w-5 h-5" />
                          <span className="text-xs">Wishlist</span>
                        </button>
                        <button className="group relative p-4 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all duration-200 flex flex-col items-center space-y-1">
                          <div className="relative">
                            <ShoppingCart className="w-5 h-5" />
                            <span className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-slate-600 to-slate-700 text-white text-xs rounded-full flex items-center justify-center font-medium">
                              3
                            </span>
                          </div>
                          <span className="text-xs">Cart</span>
                        </button>
                        <button className="group p-4 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all duration-200 flex flex-col items-center space-y-1">
                          <User className="w-5 h-5" />
                          <span className="text-xs">Profile</span>
                        </button>
                      </div>
                      <button
                        className="w-full relative px-6 py-4 bg-gradient-to-r from-slate-700 to-slate-800 text-white font-medium rounded-xl hover:from-slate-600 hover:to-slate-700 transition-all duration-200 hover:shadow-lg"
                        onClick={handleSignOut}
                      >
                        <div className="absolute -inset-1 bg-gradient-to-r from-slate-600 to-slate-800 rounded-xl blur opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                        <span className="relative">Logout</span>
                      </button>
                    </>
                  ) : (
                    <button
                      className="w-full relative px-6 py-4 bg-gradient-to-r from-slate-700 to-slate-800 text-white font-medium rounded-xl hover:from-slate-600 hover:to-slate-700 transition-all duration-200 hover:shadow-lg"
                      onClick={() => {
                        router.push("/login")
                        setIsMenuOpen(false)
                      }}
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-slate-600 to-slate-800 rounded-xl blur opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                      <span className="relative">Sign In</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navigation