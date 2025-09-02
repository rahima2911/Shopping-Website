"use client"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { 
  User, Mail, Phone, MapPin, Calendar, 
  Users, Lock, Eye, EyeOff, Upload, 
  X, UserPlus, CheckCircle, AlertCircle,
  Camera, Shield, Sparkles
} from "lucide-react"
import { signIn } from "next-auth/react"
// Note: Install react-hot-toast: npm install react-hot-toast
// import toast, { Toaster } from 'react-hot-toast'

// Toast replacement (remove when using actual react-hot-toast)
const toast = {
  success: (message) => console.log('Success:', message),
  error: (message) => console.log('Error:', message),
  loading: (message) => console.log('Loading:', message)
}

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    gender: "male",
    birthdate: "",
    password: "",
    confirmPassword: "",
    profilePicture: null
  })

  const [previewImage, setPreviewImage] = useState(null)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [fieldErrors, setFieldErrors] = useState({})
  const [touchedFields, setTouchedFields] = useState({})
  const [loading, setLoading] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)
  const fileInputRef = useRef(null)
  const router = useRouter()

  // Password strength checker
  const calculatePasswordStrength = (password) => {
    let strength = 0
    if (password.length >= 8) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/[a-z]/.test(password)) strength++
    if (/[0-9]/.test(password)) strength++
    if (/[^A-Za-z0-9]/.test(password)) strength++
    return strength
  }

  // Real-time field validation
  const validateField = (name, value) => {
    const errors = {}
    
    switch (name) {
      case 'name':
        if (!value.trim()) {
          errors.name = 'Full name is required'
        } else if (value.length < 2) {
          errors.name = 'Name must be at least 2 characters long'
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          errors.name = 'Name can only contain letters and spaces'
        }
        break
        
      case 'email':
        if (!value.trim()) {
          errors.email = 'Email address is required'
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
          errors.email = 'Please enter a valid email address'
        }
        break
        
      case 'phone':
        if (!value.trim()) {
          errors.phone = 'Phone number is required'
        } else if (!/^\+?[\d\s-()]{10,}$/.test(value.replace(/\s/g, ''))) {
          errors.phone = 'Please enter a valid phone number'
        }
        break
        
      case 'address':
        if (!value.trim()) {
          errors.address = 'Address is required'
        } else if (value.length < 10) {
          errors.address = 'Please enter a complete address'
        }
        break
        
      case 'birthdate':
        if (!value) {
          errors.birthdate = 'Birth date is required'
        } else {
          const birthDate = new Date(value)
          const today = new Date()
          const age = today.getFullYear() - birthDate.getFullYear()
          if (age < 13) {
            errors.birthdate = 'You must be at least 13 years old to register'
          } else if (age > 120) {
            errors.birthdate = 'Please enter a valid birth date'
          }
        }
        break
        
      case 'password':
        if (!value) {
          errors.password = 'Password is required'
        } else if (value.length < 8) {
          errors.password = 'Password must be at least 8 characters long'
        } else {
          const strength = calculatePasswordStrength(value)
          if (strength < 3) {
            errors.password = 'Password is too weak. Use uppercase, lowercase, numbers, and special characters'
          }
        }
        break
        
      case 'confirmPassword':
        if (!value) {
          errors.confirmPassword = 'Please confirm your password'
        } else if (value !== formData.password) {
          errors.confirmPassword = 'Passwords do not match'
        }
        break
    }
    
    return errors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    
    if (name === "profilePicture") {
      const file = e.target.files[0]
      if (file) {
        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
          toast.error("File size must be less than 5MB")
          return
        }
        
        // Validate file type
        if (!file.type.startsWith('image/')) {
          toast.error("Please select a valid image file")
          return
        }
        
        const previewUrl = URL.createObjectURL(file)
        setPreviewImage(previewUrl)
        setFormData(prev => ({ ...prev, profilePicture: file }))
        toast.success("Profile picture uploaded successfully")
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
      
      // Calculate password strength
      if (name === 'password') {
        setPasswordStrength(calculatePasswordStrength(value))
      }
      
      // Real-time validation
      if (touchedFields[name]) {
        const fieldError = validateField(name, value)
        setFieldErrors(prev => ({
          ...prev,
          ...fieldError,
          ...(Object.keys(fieldError).length === 0 && { [name]: undefined })
        }))
      }
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouchedFields(prev => ({ ...prev, [name]: true }))
    
    const fieldError = validateField(name, value)
    setFieldErrors(prev => ({
      ...prev,
      ...fieldError,
      ...(Object.keys(fieldError).length === 0 && { [name]: undefined })
    }))
  }

  const handleRemoveImage = () => {
    if (previewImage) {
      URL.revokeObjectURL(previewImage)
    }
    setPreviewImage(null)
    setFormData(prev => ({ ...prev, profilePicture: null }))
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
    toast.success("Profile picture removed")
  }

  const validateAllFields = () => {
    const requiredFields = ['name', 'email', 'phone', 'address', 'birthdate', 'password', 'confirmPassword']
    let allErrors = {}
    
    requiredFields.forEach(field => {
      const fieldErrors = validateField(field, formData[field])
      allErrors = { ...allErrors, ...fieldErrors }
    })
    
    setFieldErrors(allErrors)
    setTouchedFields(Object.fromEntries(requiredFields.map(field => [field, true])))
    
    return Object.keys(allErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateAllFields()) {
      toast.error("Please fix all validation errors before submitting")
      return
    }

    setLoading(true)
    const toastId = toast.loading("Creating your account...")

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("name", formData.name)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("password", formData.password)
      formDataToSend.append("phone", formData.phone)
      formDataToSend.append("address", formData.address)
      formDataToSend.append("gender", formData.gender)
      formDataToSend.append("birthdate", formData.birthdate)
      
      if (formData.profilePicture) {
        formDataToSend.append("profilePicture", formData.profilePicture)
      }

      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: formDataToSend
      })

      const result = await response.json()

      if (!response.ok) {
        toast.error(result.message || "Registration failed. Please try again.")
      } else {
        toast.success("Registration successful! Signing you in...")
        
        try {
          const signInResult = await signIn("credentials", {
            email: formData.email,
            password: formData.password,
            redirect: false
          })
    
          if (signInResult?.error) {
            toast.error("Registration successful but auto-login failed. Please login manually.")
            router.push("/login")
          } else if (signInResult?.ok) {
            toast.success("Welcome! Redirecting to dashboard...")
            router.push("/home")
          }
        } catch (err) {
          console.error("Login error:", err)
          toast.error("Registration successful but auto-login failed. Please login manually.")
          router.push("/login")
        }
      }
    } catch (error) {
      console.error("Signup error:", error)
      toast.error("An unexpected error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const getFieldClassName = (fieldName) => {
    const hasError = fieldErrors[fieldName] && touchedFields[fieldName]
    const hasValue = formData[fieldName]
    
    return `w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 
      ${hasError 
        ? 'border-red-500 bg-red-50 focus:border-red-600 focus:ring-red-200' 
        : hasValue 
          ? 'border-green-500 bg-green-50 focus:border-green-600 focus:ring-green-200'
          : 'border-gray-200 bg-white hover:border-blue-300 focus:border-blue-500 focus:ring-blue-200'
      } 
      focus:outline-none focus:ring-4 placeholder-gray-400`
  }

  const getPasswordStrengthColor = (strength) => {
    if (strength < 2) return 'bg-red-500'
    if (strength < 4) return 'bg-yellow-500'
    return 'bg-green-500'
  }

  const getPasswordStrengthText = (strength) => {
    if (strength < 2) return 'Weak'
    if (strength < 4) return 'Medium'
    return 'Strong'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Add Toaster component when using react-hot-toast */}
      {/* <Toaster position="top-right" /> */}
      
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl shadow-blue-500/10 overflow-hidden border border-white/20">
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Form */}
            <div className="lg:w-2/3 p-8 lg:p-12">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-3">
                    Create Your Account
                  </h2>
                  <p className="text-gray-600 text-lg">Join thousands of satisfied customers worldwide</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information Section */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                      <User className="w-5 h-5 mr-2 text-blue-500" />
                      Personal Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Enter your full name"
                          className={getFieldClassName('name')}
                          required
                        />
                        {fieldErrors.name && touchedFields.name && (
                          <div className="mt-2 flex items-center text-red-600 text-sm">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {fieldErrors.name}
                          </div>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Enter your email"
                          className={getFieldClassName('email')}
                          required
                        />
                        {fieldErrors.email && touchedFields.email && (
                          <div className="mt-2 flex items-center text-red-600 text-sm">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {fieldErrors.email}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Enter your phone number"
                          className={getFieldClassName('phone')}
                          required
                        />
                        {fieldErrors.phone && touchedFields.phone && (
                          <div className="mt-2 flex items-center text-red-600 text-sm">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {fieldErrors.phone}
                          </div>
                        )}
                      </div>

                      <div>
                        <label htmlFor="gender" className="block text-sm font-semibold text-gray-700 mb-2">
                          Gender *
                        </label>
                        <select
                          id="gender"
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          className={getFieldClassName('gender')}
                          required
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                        Complete Address *
                      </label>
                      <input
                        id="address"
                        name="address"
                        type="text"
                        value={formData.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter your complete address"
                        className={getFieldClassName('address')}
                        required
                      />
                      {fieldErrors.address && touchedFields.address && (
                        <div className="mt-2 flex items-center text-red-600 text-sm">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {fieldErrors.address}
                        </div>
                      )}
                    </div>

                    <div>
                      <label htmlFor="birthdate" className="block text-sm font-semibold text-gray-700 mb-2">
                        Birth Date *
                      </label>
                      <input
                        id="birthdate"
                        name="birthdate"
                        type="date"
                        value={formData.birthdate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getFieldClassName('birthdate')}
                        required
                      />
                      {fieldErrors.birthdate && touchedFields.birthdate && (
                        <div className="mt-2 flex items-center text-red-600 text-sm">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {fieldErrors.birthdate}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Security Section */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-blue-500" />
                      Account Security
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                          Password *
                        </label>
                        <div className="relative">
                          <input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            value={formData.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Create a strong password"
                            className={`${getFieldClassName('password')} pr-12`}
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                        
                        {formData.password && (
                          <div className="mt-3">
                            <div className="flex items-center justify-between text-sm mb-2">
                              <span className="text-gray-600">Password Strength:</span>
                              <span className={`font-medium ${
                                passwordStrength < 2 ? 'text-red-600' : 
                                passwordStrength < 4 ? 'text-yellow-600' : 'text-green-600'
                              }`}>
                                {getPasswordStrengthText(passwordStrength)}
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor(passwordStrength)}`}
                                style={{ width: `${(passwordStrength / 5) * 100}%` }}
                              />
                            </div>
                          </div>
                        )}
                        
                        {fieldErrors.password && touchedFields.password && (
                          <div className="mt-2 flex items-center text-red-600 text-sm">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {fieldErrors.password}
                          </div>
                        )}
                      </div>

                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                          Confirm Password *
                        </label>
                        <div className="relative">
                          <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Confirm your password"
                            className={`${getFieldClassName('confirmPassword')} pr-12`}
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                        {fieldErrors.confirmPassword && touchedFields.confirmPassword && (
                          <div className="mt-2 flex items-center text-red-600 text-sm">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {fieldErrors.confirmPassword}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Profile Picture Section */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                      <Camera className="w-5 h-5 mr-2 text-blue-500" />
                      Profile Picture (Optional)
                    </h3>
                    
                    {previewImage ? (
                      <div className="flex items-center space-x-6">
                        <div className="relative group">
                          <img
                            src={previewImage}
                            alt="Profile preview"
                            className="w-32 h-32 rounded-2xl object-cover border-4 border-white shadow-lg group-hover:shadow-xl transition-shadow"
                          />
                          <div className="absolute inset-0 bg-black/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <button
                              type="button"
                              onClick={handleRemoveImage}
                              className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-lg font-medium text-gray-800">Perfect! Looking good 😊</p>
                          <p className="text-gray-600">You can change this anytime later</p>
                          <button
                            type="button"
                            onClick={handleRemoveImage}
                            className="mt-2 text-red-600 hover:text-red-500 font-medium"
                          >
                            Remove photo
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div 
                        className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-blue-400 hover:bg-blue-50/50 transition-all duration-300 cursor-pointer group"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <input
                          ref={fileInputRef}
                          type="file"
                          name="profilePicture"
                          accept="image/*"
                          onChange={handleChange}
                          className="hidden"
                        />
                        <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                          <Camera className="w-8 h-8 text-blue-500" />
                        </div>
                        <h4 className="text-lg font-medium text-gray-800 mb-2">Add your photo</h4>
                        <p className="text-gray-600 mb-4">Help others recognize you</p>
                        <div className="inline-flex items-center px-6 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors">
                          <Upload className="w-4 h-4 mr-2" />
                          Choose Photo
                        </div>
                        <p className="mt-3 text-sm text-gray-500">PNG, JPG up to 5MB</p>
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center text-lg"
                  >
                    {loading ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <UserPlus className="w-6 h-6 mr-3" />
                        Create My Account
                      </>
                    )}
                  </button>

                  <div className="text-center pt-4">
                    <p className="text-gray-600">
                      Already have an account?{" "}
                      <Link href="/login" className="text-blue-600 hover:text-blue-500 font-semibold hover:underline transition-colors">
                        Sign in here
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Side - Enhanced Illustration */}
            <div className="lg:w-1/3 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />

              
              <div className="relative h-full flex items-center justify-center p-12">
                <div className="text-center text-white">
                  <div className="w-40 h-40 mx-auto mb-8 bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/20 transform hover:scale-105 transition-transform duration-300">
                    <UserPlus className="w-20 h-20 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-6">Welcome to Our Community</h3>
                  <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                    Join millions of users who trust us with their shopping experience. 
                    Get exclusive deals, personalized recommendations, and premium support.
                  </p>
                  
                  <div className="space-y-4 text-left">
                    <div className="flex items-center text-blue-100">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                      Secure & encrypted data protection
                    </div>
                    <div className="flex items-center text-blue-100">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                      24/7 customer support
                    </div>
                    <div className="flex items-center text-blue-100">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                      Exclusive member-only benefits
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage