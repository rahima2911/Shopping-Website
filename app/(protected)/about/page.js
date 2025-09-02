import Image from "next/image"
import { Target, Award, Globe, Heart, Zap, TrendingUp, Shield, Users, Rocket, Star, CheckCircle, ArrowRight } from "lucide-react"

const AboutPage = () => {
  const stats = [
    { 
      number: "500K+", 
      label: "Global Customers", 
      icon: "🌍",
      description: "Worldwide reach"
    },
    { 
      number: "1M+", 
      label: "Products Delivered", 
      icon: "📦",
      description: "Successfully shipped"
    },
    { 
      number: "99.8%", 
      label: "Customer Satisfaction", 
      icon: "⭐",
      description: "Exceptional service"
    },
    { 
      number: "24/7", 
      label: "Premium Support", 
      icon: "🎧",
      description: "Always available"
    },
  ]

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer Obsession",
      description: "Every decision, every innovation, every solution is crafted with our customers at the heart of everything we do.",
      gradient: "from-rose-500 to-pink-500",
      highlight: "Our Foundation"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Uncompromising Quality",
      description: "We meticulously curate and verify every product, ensuring excellence is never negotiable in our marketplace.",
      gradient: "from-emerald-500 to-teal-500",
      highlight: "Quality Promise"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Relentless Innovation",
      description: "Pioneering tomorrow's shopping experience today through cutting-edge technology and forward-thinking solutions.",
      gradient: "from-amber-500 to-orange-500",
      highlight: "Future Ready"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Excellence",
      description: "Transcending borders to deliver world-class experiences, connecting cultures through commerce and care.",
      gradient: "from-blue-500 to-cyan-500",
      highlight: "Worldwide"
    },
  ]

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Visionary",
      image: "https://images.unsplash.com/photo-1650462957489-1c104d090218?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Forbes 30 Under 30 | 15+ years transforming digital commerce",
      expertise: "Strategic Leadership",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      name: "Marcus Rodriguez",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "AI Pioneer | Former Google & Tesla | Stanford PhD",
      expertise: "Technology Innovation",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      name: "Elena Thompson",
      role: "Head of Customer Excellence",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Customer Experience Guru | Harvard MBA | Award Winner",
      expertise: "Customer Success",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      name: "James Kim",
      role: "VP of Global Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Supply Chain Expert | Ex-Amazon | MIT Graduate",
      expertise: "Operations Excellence",
      gradient: "from-emerald-500 to-teal-500"
    },
  ]

  const milestones = [
    { 
      year: "2020", 
      title: "The Genesis", 
      description: "Founded with a revolutionary vision to redefine online shopping experiences globally",
      icon: "🚀",
      achievement: "Company Launch"
    },
    { 
      year: "2021", 
      title: "First Breakthrough", 
      description: "Achieved first 10,000 customers milestone, establishing trust and market presence",
      icon: "🎯",
      achievement: "10K Users"
    },
    { 
      year: "2022", 
      title: "Product Revolution", 
      description: "Expanded to 50,000+ premium products across 20+ categories with AI-powered curation",
      icon: "📈",
      achievement: "Massive Scale"
    },
    { 
      year: "2023", 
      title: "Global Expansion", 
      description: "Launched international operations across 75+ countries with localized experiences",
      icon: "🌎",
      achievement: "Worldwide Reach"
    },
    { 
      year: "2024", 
      title: "Industry Leadership", 
      description: "Celebrating 500K+ customers and industry recognition as innovation leader",
      icon: "👑",
      achievement: "Market Leader"
    },
  ]

  const achievements = [
    { 
      award: "E-commerce Innovation Excellence 2024", 
      organization: "Global Tech Awards",
      icon: "🏆",
      gradient: "from-amber-500 to-yellow-500"
    },
    { 
      award: "Customer Choice Champion", 
      organization: "Digital Commerce Institute",
      icon: "⭐",
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      award: "Fastest Growing Tech Company", 
      organization: "Fortune Business Weekly",
      icon: "🚀",
      gradient: "from-purple-500 to-indigo-500"
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(148,163,184,0.05)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-full px-6 py-3">
                <Rocket className="w-5 h-5 text-indigo-600" />
                <span className="text-sm font-bold text-indigo-700">Our Story of Innovation</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                Transforming
                <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Commerce
                </span>
                <span className="block text-4xl lg:text-5xl mt-2 text-gray-700">Into Experience</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Since 2020, we have been crafting the future of digital commerce, where technology meets human connection 
                to create extraordinary shopping experiences that inspire and delight customers worldwide.
              </p>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-indigo-200 hover:-translate-y-1">
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-900 font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-500">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="group bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-10 lg:p-12 border border-indigo-100 hover:border-indigo-200 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Mission</h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2"></div>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To revolutionize global commerce by creating an intelligent, secure, and deeply personal shopping ecosystem 
                that empowers customers to discover, connect, and thrive while enabling businesses to reach their full potential 
                in an interconnected world.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-10 lg:p-12 border border-emerald-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Vision</h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-2"></div>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become the worlds most trusted and innovative commerce platform, where cutting-edge technology seamlessly 
                blends with human values, creating meaningful connections that transcend transactions and build lasting relationships 
                across global communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Core Values That Drive Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These fundamental principles shape our culture, guide our decisions, and define who we are as an organization
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:-translate-y-2">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {value.icon}
                    </div>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-semibold">
                      {value.highlight}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Meet Our Visionary Leaders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The brilliant minds and passionate hearts driving innovation, excellence, and transformation in everything we do
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className={`relative bg-gradient-to-br ${member.gradient} p-1 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500`}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={250}
                      height={250}
                      className="w-full h-64 rounded-3xl object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className={`bg-gradient-to-r ${member.gradient} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                      {member.expertise}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 pt-4">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-indigo-600 font-semibold">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Our Journey of Excellence</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Milestones that define our growth, innovation, and unwavering commitment to transforming commerce
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 to-purple-500"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-16 last:mb-0 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 ml-16 lg:ml-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl">{milestone.icon}</div>
                      <div>
                        <div className="text-sm text-amber-400 font-bold">{milestone.year}</div>
                        <div className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded-full">
                          {milestone.achievement}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{milestone.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-slate-900">
                  {milestone.year.slice(-2)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-3xl">
              <Award className="w-10 h-10 text-amber-600" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Industry Recognition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Honored by industry leaders and peers for our commitment to innovation, excellence, and customer satisfaction
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((recognition, index) => (
              <div key={index} className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${recognition.gradient} rounded-2xl mb-6 text-white text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {recognition.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                  {recognition.award}
                </h3>
                <p className="text-gray-600 font-medium">{recognition.organization}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">2024 Winner</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Join Our Success Story</h2>
            <p className="text-xl text-indigo-100 leading-relaxed max-w-3xl mx-auto">
              Become part of our journey as we continue to pioneer the future of commerce, innovation, and customer excellence. 
              Your story becomes part of ours.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-indigo-600 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-indigo-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Explore Careers
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage