import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, User, ShoppingCart, ChevronDown, Star } from 'lucide-react'
import home from "./assets/k.png"
import butterChicken from "./assets/butter-chicken.jpg"
import masalaDosa from "./assets/masala-dosa.jpg"
import paneerTikka from "./assets/paneer-tikka.jpg"
import biryani from "./assets/biryani.jpg"
import gulabJamun from "./assets/gulab-jamun.jpg"
import mangoLassi from "./assets/mango-lassi.jpg"
import samosa from "./assets/samosa.jpg"
import chai from "./assets/chai.jpg"
import mo from "./assets/momo.jpg"


const menuItems = [
  { id: 1, name: 'Butter Chicken', description: 'Tender chicken in creamy tomato sauce', price: 250, category: 'Main Course', rating: 4.8, popular: true, image: butterChicken },
  { id: 2, name: 'Masala Dosa', description: 'Crispy crepe with spiced potato filling', price: 120, category: 'Breakfast', rating: 4.7, popular: true, image: masalaDosa },
  { id: 3, name: 'Paneer Tikka', description: 'Grilled cottage cheese with spices', price: 180, category: 'Appetizer', rating: 4.5, popular: true, image: paneerTikka },
  { id: 4, name: 'Biryani', description: 'Fragrant rice dish with aromatic spices', price: 220, category: 'Main Course', rating: 4.9, popular: true, image: biryani },
  { id: 5, name: 'Gulab Jamun', description: 'Sweet milk solids balls in sugar syrup', price: 80, category: 'Dessert', rating: 4.6, popular: false, image: gulabJamun },
  { id: 6, name: 'Mango Lassi', description: 'Refreshing yogurt drink with mango', price: 70, category: 'Drinks', rating: 4.4, popular: false, image: mangoLassi },
  { id: 7, name: 'Samosa', description: 'Crispy pastry with savory filling', price: 40, category: 'Snacks', rating: 4.3, popular: false, image: samosa },
 
  { id: 8, name: 'Chai', description: 'Traditional Nepali spiced tea', price: 30, category: 'Drinks', rating: 4.5, popular: false, image: chai },
  { id: 9, name: 'Momo', description: ' Best-loved street food With spicy chatni', price: 120, category: 'Snacks', rating: 4.5, popular: true, image: mo },

]

export default function TiffinDelivery() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isSignupOpen, setIsSignupOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('Popular')

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen)
    setIsSignupOpen(false)
  }
  const toggleSignup = () => {
    setIsSignupOpen(!isSignupOpen)
    setIsLoginOpen(false)
  }
  const toggleCart = () => setIsCartOpen(!isCartOpen)

  const categories = ['Popular', 'All', 'Breakfast', 'Main Course', 'Appetizer', 'Snacks', 'Dessert', 'Drinks']

  const filteredItems = selectedCategory === 'Popular'
    ? menuItems.filter(item => item.popular)
    : selectedCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory)

  const addToCart = (item) => {
    setCartItems([...cartItems, item])
  }

  const removeFromCart = (id) => {
    const index = cartItems.findIndex(item => item.id === id)
    if (index !== -1) {
      const newCartItems = [...cartItems]
      newCartItems.splice(index, 1)
      setCartItems(newCartItems)
    }
  }

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-yellow-50 text-gray-800">
      <header className="bg-purple-700 text-white p-4 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">TastyTiffin</h1>
          <nav className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6">
              <li><button onClick={() => scrollToSection('menu')} className="hover:text-yellow-300 transition-colors">Menu</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-yellow-300 transition-colors">About</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-yellow-300 transition-colors">Contact</button></li>
            </ul>
            <button onClick={toggleLogin} className="bg-yellow-400 text-purple-800 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors flex items-center shadow-md">
              <User size={18} className="mr-2" />
              Login
            </button>
            <button onClick={toggleCart} className="bg-white text-purple-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center shadow-md">
              <ShoppingCart size={18} className="mr-2" />
              Cart ({cartItems.length})
            </button>
          </nav>
          <button className="md:hidden text-white" onClick={toggleMenu}>
            <Menu size={24} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-64 bg-purple-700 text-white p-4 z-50 shadow-lg"
          >
            <button className="absolute top-4 right-4 text-white" onClick={toggleMenu}>
              <X size={24} />
            </button>
            <nav className="mt-12">
              <ul className="space-y-4">
                <li><button onClick={() => { scrollToSection('menu'); toggleMenu(); }} className="block hover:text-yellow-300 transition-colors">Menu</button></li>
                <li><button onClick={() => { scrollToSection('about'); toggleMenu(); }} className="block hover:text-yellow-300 transition-colors">About</button></li>
                <li><button onClick={() => { scrollToSection('contact'); toggleMenu(); }} className="block hover:text-yellow-300 transition-colors">Contact</button></li>
              </ul>
              <button onClick={toggleLogin} className="mt-6 bg-yellow-400 text-purple-800 px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors flex items-center w-full justify-center">
                <User size={18} className="mr-2" />
                Login
              </button>
              <button onClick={() => { toggleCart(); toggleMenu(); }} className="mt-4 bg-white text-purple-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center w-full justify-center">
                <ShoppingCart size={18} className="mr-2" />
                Cart ({cartItems.length})
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isLoginOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={toggleLogin}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={toggleLogin}
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold mb-6 text-purple-700">Login</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
                </div>
                <div className="mb-6">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
                </div>
                <button type="submit" className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors shadow-md">
                  Log In
                </button>
              </form>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">Don't have an account?</p>
                <button onClick={toggleSignup} className="mt-2 text-purple-600 hover:text-purple-700 font-medium">
                  Sign Up
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSignupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={toggleSignup}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={toggleSignup}
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold mb-6 text-purple-700">Sign Up</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="signup-email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
                </div>
                <div className="mb-6">
                  <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input type="password" id="signup-password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
                </div>
                <button type="submit" className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors shadow-md">
                  Sign Up
                </button>
              </form>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">Already have an account?</p>
                <button onClick={toggleLogin} className="mt-2 text-purple-600 hover:text-purple-700 font-medium">
                  Log In
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={toggleCart}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white p-4 rounded-lg shadow-xl max-w-md w-full relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={toggleCart}
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold mb-4 text-purple-700">Your Cart</h2>
              
              <div className="max-h-60 overflow-y-auto">
                {cartItems.length === 0 ? (
                  <p className="text-gray-600">Your cart is empty.</p>
                ) : (
                  <>
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between items-center mb-4">
                        <div>
                          <h4 className="font-semibold text-lg text-purple-800">{item.name}</h4>
                          <p className="text-gray-600">₹{item.price}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 font-medium"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </>
                )}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-gray-800">Total:</span>
                  <span className="text-2xl font-bold text-purple-600">₹{totalPrice}</span>
                </div>
                <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors shadow-md">
                  Place Order
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
          >
            <img src={home} alt="Delicious Tiffin" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-yellow-400 opacity-10"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-5xl font-bold mb-4 text-center"
              >
                Delicious Tiffin for Students
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-2xl mb-8 text-center"
              >
                Healthy, affordable meals delivered to your doorstep
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                onClick={() => scrollToSection('menu')}
                className="bg-yellow-400 text-purple-800 px-8 py-3 rounded-full font-semibold text-lg hover:bg-yellow-300 transition-colors shadow-lg"
              >
                Explore Menu
              </motion.button>
            </div>
          </motion.div>
        </section>

        <section id="menu" className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-purple-800">Our Menu</h3>
          <div className="flex flex-wrap gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-purple-600 hover:bg-purple-100'
                } transition-colors shadow-md`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="font-bold text-xl mb-2 text-purple-800">{item.name}</h4>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-purple-600">₹{item.price}</span>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 mr-1" />
                      <span className="font-semibold">{item.rating}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="mt-4 w-full bg-yellow-400 text-purple-800 py-2 px-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors shadow-md"
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="about" className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-purple-800">About Us</h3>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-700 mb-4">
              TastyTiffin is dedicated to providing delicious, healthy, and affordable meals to students. Our mission is to ensure that every student has access to nutritious food that fuels their academic journey.
            </p>
            <p className="text-gray-700 mb-4">
              Founded by a group of food enthusiasts and former students, we understand the challenges of balancing studies, social life, and proper nutrition. That's why we've created a diverse menu that caters to various tastes and dietary requirements.
            </p>
            <p className="text-gray-700">
              With TastyTiffin, you can enjoy the convenience of doorstep delivery without compromising on taste or health. Join us in our journey to make student life more delicious and nutritious!
            </p>
          </div>
        </section>

        <section id="contact">
          <h3 className="text-3xl font-bold mb-8 text-purple-800">Contact Us</h3>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2 bg-white rounded-xl shadow-lg p-8">
              <h4 className="text-xl font-semibold mb-4 text-purple-800">Get in Touch</h4>
              <p className="mb-2"><strong>Address:</strong> Biratnagar, Trafic Chock</p>
              <p className="mb-2"><strong>Phone:</strong> +977 9812345678</p>
              <p className="mb-2"><strong>Email:</strong> testytiffin@gmail.com</p>
            </div>
            <form className="md:w-1/2 bg-white rounded-xl shadow-lg p-8">
              <h4 className="text-xl font-semibold mb-4 text-purple-800">Send us a Message</h4>
              <div className="mb-4">
                <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" />
              </div>
              <div className="mb-4">
                <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" />
              </div>
              <div className="mb-4">
                <textarea placeholder="Your Message" rows={4} className="w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-purple-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors shadow-md">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-purple-700 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">TastyTiffin</h3>
              <p className="mb-4">Delivering delicious and nutritious meals to students across Biratnagar.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-yellow-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-yellow-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-yellow-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-yellow-300">Home</a></li>
                <li><a href="#menu" className="hover:text-yellow-300">Menu</a></li>
                <li><a href="#about" className="hover:text-yellow-300">About Us</a></li>
                <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <p className="mb-2">Biratnagar, Trafic Chock</p>
              <p className="mb-2">Phone: +977 9812345678</p>
              <p>Email: tastytiffin@gmail.com</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-purple-600 text-center">
            <p>&copy; 2023 TastyTiffin. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
