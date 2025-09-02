import Link from "next/link"
import { Package, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react"

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Services", href: "/services" },
      { name: "Contact", href: "/contact" },
      { name: "Careers", href: "/careers" },
    ],
    support: [
      { name: "Help Center", href: "/help" },
      { name: "Shipping Info", href: "/shipping" },
      { name: "Returns", href: "/returns" },
      { name: "Track Order", href: "/track" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Refund Policy", href: "/refund" },
    ],
    categories: [
      { name: "Electronics", href: "/electronics" },
      { name: "Gadgets", href: "/gadgets" },
      { name: "Accessories", href: "/accessories" },
      { name: "Smart Home", href: "/smart-home" },
    ],
  }

  const socialLinks = [
    { name: "Facebook", href: "https://facebook.com/shoptech", icon: Facebook },
    { name: "Twitter", href: "https://twitter.com/shoptech", icon: Twitter },
    { name: "Instagram", href: "https://instagram.com/shoptech", icon: Instagram },
    { name: "LinkedIn", href: "https://linkedin.com/company/shoptech", icon: Linkedin },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-1"></div>
      </div>
      
      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="group flex items-center space-x-3 mb-8">
              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-800 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-slate-500 to-slate-700 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                ShopTech
              </span>
            </Link>
            
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
              Your premium destination for cutting-edge technology and innovative gadgets. 
              Experience excellence in every product we deliver.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="group flex items-center text-sm text-gray-300 hover:text-white transition-colors duration-200">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mr-4 group-hover:bg-slate-700 transition-colors duration-200">
                  <Mail className="w-4 h-4" />
                </div>
                <span>support@shoptech.com</span>
              </div>
              <div className="group flex items-center text-sm text-gray-300 hover:text-white transition-colors duration-200">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mr-4 group-hover:bg-slate-700 transition-colors duration-200">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="group flex items-center text-sm text-gray-300 hover:text-white transition-colors duration-200">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mr-4 group-hover:bg-slate-700 transition-colors duration-200">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>123 Tech Avenue, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="group">
            <h3 className="text-lg font-semibold mb-6 relative">
              Company
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-slate-500 to-transparent"></div>
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-200 text-sm relative inline-block group-hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="group">
            <h3 className="text-lg font-semibold mb-6 relative">
              Support
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-slate-500 to-transparent"></div>
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-200 text-sm relative inline-block group-hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="group">
            <h3 className="text-lg font-semibold mb-6 relative">
              Categories
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-slate-500 to-transparent"></div>
            </h3>
            <ul className="space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-200 text-sm relative inline-block group-hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="group">
            <h3 className="text-lg font-semibold mb-6 relative">
              Legal
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-slate-500 to-transparent"></div>
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-200 text-sm relative inline-block group-hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800/50 mt-16 pt-12">
          <div className="max-w-lg mx-auto text-center lg:text-left lg:mx-0">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Stay in the Loop
            </h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Get exclusive access to new arrivals, special offers, and tech insights delivered straight to your inbox.
            </p>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="relative flex bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-transparent border-none focus:outline-none focus:ring-0 text-white placeholder-gray-400 text-sm"
                />
                <button className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 px-8 py-4 transition-all duration-200 group-hover:shadow-lg flex items-center space-x-2">
                  <Send className="w-4 h-4" />
                  <span className="font-medium">Subscribe</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative border-t border-gray-800/50 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-6 md:mb-0">
              © 2024 ShopTech. Crafted with precision and care.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 bg-slate-800/80 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-slate-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    aria-label={social.name}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-slate-600 to-slate-700 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <IconComponent className="relative w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-200" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer