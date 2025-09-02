import { ShoppingCart, Truck, RefreshCw, Shield, Headphones, Gift, CreditCard, Users, ArrowRight, CheckCircle, Star, Zap } from "lucide-react"

const ServicesPage = () => {
  const services = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Smart Shopping Experience",
      description: "Discover products effortlessly with our AI-powered recommendations and intuitive search technology.",
      features: ["AI-powered search", "Smart comparisons", "Personalized wishlist", "One-click checkout"],
      price: "Free",
      gradient: "from-blue-500 to-cyan-500",
      highlight: "Most Popular"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Lightning Fast Delivery",
      description: "Experience unprecedented speed with our premium logistics network and real-time tracking system.",
      features: ["Same-day delivery", "Express shipping", "Live tracking", "SMS notifications"],
      price: "From $5.99",
      gradient: "from-emerald-500 to-teal-500",
      highlight: "Express"
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Hassle-Free Returns",
      description: "30-day guarantee with instant refunds and free return shipping for complete peace of mind.",
      features: ["30-day window", "Free return shipping", "Instant refunds", "Easy exchanges"],
      price: "Free",
      gradient: "from-purple-500 to-indigo-500",
      highlight: "Guaranteed"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Premium Protection",
      description: "Comprehensive warranty coverage and damage protection to safeguard your valuable purchases.",
      features: ["Extended warranties", "Damage coverage", "Replacement service", "Expert support"],
      price: "From $9.99",
      gradient: "from-red-500 to-rose-500",
      highlight: "Secure"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Expert Customer Care",
      description: "24/7 premium support with dedicated specialists ready to assist you through any channel.",
      features: ["Live chat support", "Phone assistance", "Video consultations", "Priority response"],
      price: "Free",
      gradient: "from-amber-500 to-orange-500",
      highlight: "24/7 Available"
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Luxury Gift Services",
      description: "Transform your purchases into memorable gifts with premium wrapping and personalized touches.",
      features: ["Premium wrapping", "Custom messages", "Gift receipts", "Scheduled delivery"],
      price: "From $2.99",
      gradient: "from-pink-500 to-rose-500",
      highlight: "Special"
    },
  ]

  const premiumFeatures = [
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: "Elite Membership",
      description: "Unlock exclusive perks, early access to sales, and VIP customer treatment",
      benefits: ["Free premium delivery", "Exclusive discounts", "Early access", "VIP support"]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Personal Shopping Assistant",
      description: "Your dedicated style expert for curated recommendations and personalized service",
      benefits: ["Personal consultant", "Custom recommendations", "Style advice", "Priority service"]
    },
  ]

  const processSteps = [
    { step: "1", title: "Discover", description: "Explore our curated collection", icon: "🔍" },
    { step: "2", title: "Choose", description: "Select your perfect items", icon: "❤️" },
    { step: "3", title: "Secure", description: "Safe & easy checkout", icon: "🔒" },
    { step: "4", title: "Receive", description: "Fast delivery to your doorstep", icon: "🚀" },
  ]

  const stats = [
    { number: "500K+", label: "Happy Customers", icon: "👥" },
    { number: "99.9%", label: "Uptime Guarantee", icon: "⚡" },
    { number: "24/7", label: "Support Available", icon: "🎧" },
    { number: "30 Days", label: "Return Policy", icon: "↩️" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(148,163,184,0.05)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-full px-6 py-3">
                <Zap className="w-5 h-5 text-indigo-600" />
                <span className="text-sm font-semibold text-indigo-700">Premium Service Experience</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                Services That
                <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Define Excellence
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Experience unparalleled service quality with our comprehensive suite of premium solutions, 
                designed to exceed expectations at every touchpoint of your journey.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Service Portfolio</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 overflow-hidden hover:-translate-y-2">
                <div className="p-8 space-y-6">
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {service.icon}
                    </div>
                    <div className="text-right space-y-2">
                      <span className="inline-block bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 px-3 py-1.5 rounded-full text-sm font-bold border border-emerald-200">
                        {service.price}
                      </span>
                      <div className="text-xs text-indigo-600 font-semibold bg-indigo-50 px-2 py-1 rounded-full">
                        {service.highlight}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                  
                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA */}
                  <button className="w-full bg-gradient-to-r from-gray-50 to-gray-100 hover:from-indigo-600 hover:to-purple-600 text-gray-700 hover:text-white border border-gray-200 hover:border-transparent py-3 rounded-xl font-semibold transition-all duration-300 shadow-sm hover:shadow-lg flex items-center justify-center gap-2 group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-6 py-3 backdrop-blur-sm">
              <Star className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-semibold">Exclusive Premium Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold">Elite Experience</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Elevate your experience with our premium services, designed for those who demand nothing but the finest.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {premiumFeatures.map((feature, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1 text-white space-y-4">
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-200">
                          <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-3 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl">
              Upgrade to Premium
            </button>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">How We Deliver Excellence</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures a seamless experience from start to finish
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group relative">
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-indigo-200 to-purple-200 -translate-x-8 z-0"></div>
                )}
                
                <div className="relative z-10 space-y-6">
                  {/* Step Circle */}
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full flex flex-col items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <div className="text-2xl mb-1">{step.icon}</div>
                      <div className="text-sm font-bold">Step {step.step}</div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Ready to Experience Excellence?</h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Join our community of satisfied customers and discover why we are the preferred choice for premium shopping experiences. Your journey to excellence starts here.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="border-2 border-gray-300 hover:border-indigo-300 text-gray-700 hover:text-indigo-700 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-indigo-50">
              Contact Our Experts
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage