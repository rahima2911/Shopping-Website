"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Mail, Lock, Eye, EyeOff, LogIn, Shield, Sparkles, Zap, Star } from "lucide-react"

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [focusedField, setFocusedField] = useState("")
  const router = useRouter()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const isEmailValid = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return regex.test(email)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    if (!isEmailValid(formData.email)) {
      setError("Please enter a valid email address")
      setLoading(false)
      return
    }

    if (formData.password.length < 4) {
      setError("Password must be at least 4 characters long")
      setLoading(false)
      return
    }

    try {
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false
      })

      if (result?.error) {
        setError("Invalid email or password")
      } else if (result?.ok) {
        router.push("/home")
      }
    } catch (err) {
      console.error("Login error:", err)
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '5s'}}></div>
      </div>
      
      <div className="relative flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full">
          <div className="relative group">
            {/* Glowing border effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary-400 via-purple-500 to-blue-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500 animate-pulse"></div>
            
            <div className="relative bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden border border-white/80">
              <div className="flex flex-col lg:flex-row">
                {/* Left Side - Form */}
                <div className="lg:w-3/5 p-8 lg:p-16 relative">
                  {/* Floating decoration */}
                  <div className="absolute top-8 right-8 w-24 h-24 bg-gradient-to-br from-primary-100 to-purple-100 rounded-full blur-2xl opacity-50"></div>
                  
                  <div className="max-w-md mx-auto relative z-10">
                    <div className="text-center mb-12">
                      <div className="relative inline-block mb-8">
                        <div className="absolute -inset-3 bg-gradient-to-r from-primary-500 to-purple-500 rounded-3xl blur opacity-30 animate-pulse"></div>
                        <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-purple-600 rounded-3xl shadow-xl">
                          <Shield className="w-10 h-10 text-white" />
                          <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                            <Sparkles className="w-3 h-3 text-white" />
                          </div>
                        </div>
                      </div>
                      
                      <h2 className="text-5xl font-bold bg-gradient-to-r from-primary-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4 animate-pulse">
                        Welcome Back!
                      </h2>
                      <p className="text-gray-600 text-lg font-medium">Enter your credentials and lets get started</p>
                    </div>

                    {error && (
                      <div className="mb-8 relative group">
                        <div className="absolute -inset-2 bg-gradient-to-r from-red-400 to-pink-500 rounded-2xl blur opacity-50 animate-pulse"></div>
                        <div className="relative p-5 bg-red-50/90 backdrop-blur-sm border-2 border-red-200 rounded-2xl">
                          <p className="text-sm text-red-700 font-semibold flex items-center">
                            <Zap className="w-4 h-4 mr-2" />
                            {error}
                          </p>
                        </div>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="space-y-8">
                        <div className="group">
                          <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-4">
                            <Mail className="w-5 h-5 inline mr-3 text-primary-600" />
                            Email Address
                          </label>
                          <div className="relative">
                            <div className={`absolute -inset-2 rounded-2xl blur transition-all duration-300 ${
                              focusedField === 'email' 
                                ? 'bg-gradient-to-r from-primary-400 to-blue-500 opacity-40' 
                                : 'bg-gradient-to-r from-gray-300 to-gray-400 opacity-0 group-hover:opacity-30'
                            }`}></div>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              onFocus={() => setFocusedField('email')}
                              onBlur={() => setFocusedField('')}
                              placeholder="Enter your email address"
                              className={`relative w-full px-6 py-5 bg-white/80 backdrop-blur-sm border-2 rounded-2xl text-gray-800 placeholder-gray-500 transition-all duration-300 font-medium ${
                                focusedField === 'email'
                                  ? 'border-primary-500 shadow-lg transform scale-[1.02]'
                                  : error && !isEmailValid(formData.email) && formData.email
                                    ? 'border-red-400 shadow-red-200/50 shadow-lg'
                                    : 'border-gray-200 hover:border-primary-300 hover:shadow-md'
                              }`}
                              required
                            />
                            {formData.email && isEmailValid(formData.email) && (
                              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                  <Star className="w-3 h-3 text-white" />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="group">
                          <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-4">
                            <Lock className="w-5 h-5 inline mr-3 text-primary-600" />
                            Password
                          </label>
                          <div className="relative">
                            <div className={`absolute -inset-2 rounded-2xl blur transition-all duration-300 ${
                              focusedField === 'password' 
                                ? 'bg-gradient-to-r from-primary-400 to-purple-500 opacity-40' 
                                : 'bg-gradient-to-r from-gray-300 to-gray-400 opacity-0 group-hover:opacity-30'
                            }`}></div>
                            <input
                              id="password"
                              name="password"
                              type={showPassword ? "text" : "password"}
                              value={formData.password}
                              onChange={handleChange}
                              onFocus={() => setFocusedField('password')}
                              onBlur={() => setFocusedField('')}
                              placeholder="Enter your password"
                              className={`relative w-full px-6 py-5 pr-16 bg-white/80 backdrop-blur-sm border-2 rounded-2xl text-gray-800 placeholder-gray-500 transition-all duration-300 font-medium ${
                                focusedField === 'password'
                                  ? 'border-primary-500 shadow-lg transform scale-[1.02]'
                                  : error && formData.password.length < 4 && formData.password
                                    ? 'border-red-400 shadow-red-200/50 shadow-lg'
                                    : 'border-gray-200 hover:border-primary-300 hover:shadow-md'
                              }`}
                              required
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute inset-y-0 right-0 flex items-center pr-6 text-gray-500 hover:text-primary-600 transition-all duration-200 hover:scale-110"
                            >
                              {showPassword ? <EyeOff className="w-6 h-6" /> : <Eye className="w-6 h-6" />}
                            </button>
                            {formData.password && formData.password.length >= 4 && (
                              <div className="absolute right-16 top-1/2 transform -translate-y-1/2">
                                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                  <Star className="w-3 h-3 text-white" />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center group cursor-pointer">
                          <div className="relative">
                            <input
                              id="remember"
                              name="remember"
                              type="checkbox"
                              className="w-6 h-6 text-primary-600 border-2 border-gray-300 rounded-lg focus:ring-primary-500 focus:ring-2 bg-white hover:border-primary-400 transition-all duration-200 cursor-pointer"
                            />
                          </div>
                          <label htmlFor="remember" className="ml-3 text-sm font-semibold text-gray-700 cursor-pointer group-hover:text-primary-600 transition-colors duration-200">
                            Remember me for 30 days
                          </label>
                        </div>
                        <Link 
                          href="/forgot-password" 
                          className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-all duration-200 hover:underline decoration-2 underline-offset-4"
                        >
                          Forgot password?
                        </Link>
                      </div>

                      <div className="relative group">
                        <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 via-purple-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
                        <button
                          type="submit"
                          disabled={loading}
                          className="relative w-full py-5 px-8 bg-gradient-to-r from-primary-600 via-primary-700 to-purple-600 text-white font-bold rounded-2xl hover:from-primary-500 hover:via-primary-600 hover:to-purple-500 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1 text-lg"
                        >
                          <span className="relative flex items-center justify-center">
                            {loading ? (
                              <div className="flex items-center space-x-3">
                                <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                                <span>Signing you in...</span>
                              </div>
                            ) : (
                              <>
                                <LogIn className="w-6 h-6 mr-3 group-hover:translate-x-2 transition-transform duration-300" />
                                Sign In to Your Account
                                <Sparkles className="w-5 h-5 ml-3 animate-pulse" />
                              </>
                            )}
                          </span>
                        </button>
                      </div>

                      <div className="text-center pt-6">
                        <p className="text-gray-600 text-lg">
                          Don not have an account yet?{" "}
                          <Link 
                            href="/signup" 
                            className="font-bold text-transparent bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text hover:from-primary-700 hover:to-purple-700 transition-all duration-200 hover:underline decoration-2 underline-offset-4"
                          >
                            Create account →
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Right Side - Illustration */}
                <div className="lg:w-2/5 relative bg-gradient-to-br from-primary-600 via-purple-600 to-blue-600 overflow-hidden">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
                  </div>
                  
                  <div className="relative flex items-center justify-center h-full p-12">
                    <div className="text-center text-white max-w-sm">
                      <div className="relative mb-10 group">
                        <div className="absolute -inset-6 bg-gradient-to-r from-white/30 to-yellow-300/30 rounded-full blur-2xl animate-pulse"></div>
                        <div className="relative w-48 h-48 mx-auto bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border-2 border-white/30 group-hover:scale-110 transition-all duration-500">
                          <div className="relative">
                            <Image
                              src="/assets/image2.png"
                              alt="Premium Experience"
                              width={140}
                              height={140}
                              className="w-32 h-32 object-cover rounded-full shadow-2xl border-4 border-white/50"
                            />
                            <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                              <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                              <Star className="w-4 h-4 text-white animate-pulse" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
                        Premium Experience Awaits
                      </h3>
                      <p className="text-primary-100 leading-relaxed mb-8 text-lg font-medium">
                        Join our exclusive community and unlock amazing deals, personalized recommendations, and VIP support.
                      </p>
                      
                      <div className="flex items-center justify-center space-x-3 text-primary-200">
                        <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                          <Shield className="w-5 h-5" />
                          <span className="text-sm font-semibold">Secure & Protected</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating decorative elements */}
                  <div className="absolute top-12 right-12 w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 animate-bounce" style={{animationDelay: '1s'}}></div>
                  <div className="absolute bottom-12 left-12 w-12 h-12 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 animate-bounce" style={{animationDelay: '3s'}}></div>
                  <div className="absolute top-1/2 right-8 w-8 h-8 bg-yellow-400/30 rounded-xl backdrop-blur-sm animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage