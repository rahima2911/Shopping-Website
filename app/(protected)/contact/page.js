"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, MessageCircle, Headphones, Globe, Send, ArrowRight, CheckCircle, Zap, Shield, Users, Star } from "lucide-react"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    orderNumber: "",
    message: "",
    priority: "",
    newsletter: false,
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
  }

  const contactMethods = [
    { 
      icon: <Mail className="w-6 h-6" />, 
      title: "Email Support", 
      description: "Get expert help via email", 
      contact: "support@shoptech.com", 
      availability: "24/7 Response",
      gradient: "from-blue-500 to-cyan-500",
      highlight: "Most Popular"
    },
    { 
      icon: <Phone className="w-6 h-6" />, 
      title: "Phone Support", 
      description: "Direct line to our specialists", 
      contact: "+1 (555) 123-4567", 
      availability: "Mon-Fri 9AM-6PM EST",
      gradient: "from-emerald-500 to-teal-500",
      highlight: "Instant"
    },
    { 
      icon: <MessageCircle className="w-6 h-6" />, 
      title: "Live Chat", 
      description: "Real-time messaging support", 
      contact: "Available on website", 
      availability: "24/7 Available",
      gradient: "from-purple-500 to-indigo-500",
      highlight: "Quick"
    },
    { 
      icon: <Headphones className="w-6 h-6" />, 
      title: "Video Consultation", 
      description: "Face-to-face premium assistance", 
      contact: "Schedule appointment", 
      availability: "Mon-Fri 10AM-5PM EST",
      gradient: "from-amber-500 to-orange-500",
      highlight: "Premium"
    },
  ]

  const offices = [
    { 
      city: "New York", 
      address: "123 Innovation Tower, NY 10001", 
      phone: "+1 (555) 123-4567", 
      email: "ny@shoptech.com",
      timezone: "EST",
      flag: "🇺🇸"
    },
    { 
      city: "San Francisco", 
      address: "456 Tech Valley, CA 94105", 
      phone: "+1 (555) 987-6543", 
      email: "sf@shoptech.com",
      timezone: "PST",
      flag: "🇺🇸"
    },
    { 
      city: "London", 
      address: "789 Commerce Hub, London EC1A 1BB", 
      phone: "+44 20 7123 4567", 
      email: "london@shoptech.com",
      timezone: "GMT",
      flag: "🇬🇧"
    },
  ]

  const faqs = [
    { question: "How can I track my order status?", answer: "Use the tracking number sent to your email after purchase for real-time updates." },
    { question: "What is your return policy?", answer: "We offer a hassle-free 30-day return policy for all items in original condition." },
    { question: "Do you ship internationally?", answer: "Yes, we ship to over 75 countries worldwide with express shipping options." },
    { question: "How can I modify my order?", answer: "Contact us within 1 hour of placing your order to make changes or cancellations." },
  ]

  const responseStats = [
    { time: "< 2 mins", label: "Live Chat", icon: "💬" },
    { time: "< 1 hour", label: "Email Reply", icon: "📧" },
    { time: "< 30 secs", label: "Phone Answer", icon: "📞" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(148,163,184,0.05)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-full px-6 py-3">
                <Users className="w-5 h-5 text-indigo-600" />
                <span className="text-sm font-bold text-indigo-700">We are Here to Help</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                Get In
                <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Questions, feedback, or need assistance? Our dedicated support team is ready to provide exceptional 
                service through your preferred communication channel.
              </p>
            </div>

            {/* Response Time Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto">
              {responseStats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900">{stat.time}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-3 gap-12">
        {/* Enhanced Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Send className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Send Us a Message</h2>
                  <p className="text-indigo-100">We will respond within 2 hours during business hours</p>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">First Name *</label>
                    <input 
                      type="text" 
                      name="firstName" 
                      value={formData.firstName} 
                      onChange={handleInputChange}
                      placeholder="John" 
                      required 
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 text-gray-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Last Name *</label>
                    <input 
                      type="text" 
                      name="lastName" 
                      value={formData.lastName} 
                      onChange={handleInputChange}
                      placeholder="Doe" 
                      required 
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 text-gray-700"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Email Address *</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange}
                    placeholder="john.doe@example.com" 
                    required 
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567" 
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Subject *</label>
                  <select 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleInputChange} 
                    required
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 text-gray-700"
                  >
                    <option value="">Choose your inquiry type</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Support</option>
                    <option value="technical">Technical Issue</option>
                    <option value="billing">Billing Question</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Feedback & Suggestions</option>
                  </select>
                </div>

                {/* Order Number */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Order Number <span className="text-gray-400">(if applicable)</span></label>
                  <input 
                    type="text" 
                    name="orderNumber" 
                    value={formData.orderNumber} 
                    onChange={handleInputChange}
                    placeholder="#ORD123456" 
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Your Message *</label>
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleInputChange}
                    placeholder="Please describe your inquiry in detail..."
                    rows="6" 
                    required
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                {/* Priority */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Priority Level</label>
                  <select 
                    name="priority" 
                    value={formData.priority} 
                    onChange={handleInputChange}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 text-gray-700"
                  >
                    <option value="">Select priority level</option>
                    <option value="low">Low - General inquiry</option>
                    <option value="medium">Medium - Order related</option>
                    <option value="high">High - Technical issue</option>
                    <option value="urgent">Urgent - Immediate attention needed</option>
                  </select>
                </div>

                {/* Newsletter */}
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
                  <input 
                    type="checkbox" 
                    name="newsletter" 
                    checked={formData.newsletter} 
                    onChange={handleInputChange}
                    className="w-5 h-5 text-indigo-600 border-2 border-gray-300 rounded mt-0.5 focus:ring-indigo-500"
                  />
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-gray-700">Stay Updated</label>
                    <p className="text-sm text-gray-600">Subscribe to our newsletter for exclusive updates, deals, and product launches</p>
                  </div>
                </div>

                {/* Submit */}
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" /> 
                  Send Message
                </button>

                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 bg-gray-50 p-3 rounded-xl">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  We typically respond within 2-4 hours during business hours
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Enhanced Sidebar */}
        <div className="space-y-8">
          {/* Contact Methods */}
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-gray-900 to-slate-800 p-6 text-white">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <Shield className="w-6 h-6" /> 
                Contact Channels
              </h3>
              <p className="text-gray-300 text-sm mt-2">Choose your preferred way to connect</p>
            </div>
            
            <div className="p-6 space-y-6">
              {contactMethods.map((method, i) => (
                <div key={i} className="group p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:shadow-lg">
                  <div className="flex gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${method.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-gray-900">{method.title}</h4>
                        <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-semibold">
                          {method.highlight}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{method.description}</p>
                      <p className="text-sm text-indigo-600 font-semibold">{method.contact}</p>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {method.availability}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <Clock className="w-6 h-6" /> 
                Business Hours
              </h3>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-gray-700">Monday - Friday</span>
                  <span className="text-gray-600">9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-gray-700">Saturday</span>
                  <span className="text-gray-600">10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-gray-700">Sunday</span>
                  <span className="text-red-600 font-semibold">Closed</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-emerald-600 bg-emerald-50 p-3 rounded-lg">
                  <Globe className="w-4 h-4" />
                  <span className="font-semibold">Live chat & email support available 24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Global Offices */}
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <MapPin className="w-6 h-6" /> 
                Global Offices
              </h3>
            </div>
            
            <div className="p-6 space-y-6">
              {offices.map((office, i) => (
                <div key={i} className="group p-4 rounded-xl border-2 border-gray-100 hover:border-indigo-200 hover:bg-indigo-50 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl mt-1">{office.flag}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 flex items-center gap-2">
                        {office.city}
                        <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                          {office.timezone}
                        </span>
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">{office.address}</p>
                      <p className="text-sm text-gray-600">{office.phone}</p>
                      <p className="text-sm text-indigo-600 font-semibold">{office.email}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced FAQ */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Quick Answers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find instant solutions to common questions. Need more help? Our support team is always ready to assist.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {faqs.map((faq, i) => (
              <div key={i} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:-translate-y-1">
                <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-gradient-to-r from-gray-100 to-gray-200 hover:from-indigo-600 hover:to-purple-600 text-gray-700 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto group">
              View All FAQs
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-100 rounded-2xl p-8 lg:p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-rose-500 rounded-2xl mb-6 text-white shadow-lg">
              <Zap className="w-8 h-8" />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Support</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              For critical issues requiring immediate attention including security concerns, payment problems, or urgent technical difficulties
            </p>
            
            <button className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 mx-auto transition-all duration-300 shadow-lg hover:shadow-xl group">
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Emergency Hotline: +1 (555) 911-HELP
            </button>
            
            <p className="text-sm text-gray-500 mt-4">Available 24/7 for critical issues only</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage