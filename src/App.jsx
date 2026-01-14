import React, { useState } from 'react';
import { Phone, MapPin, Clock, Menu, X, CheckCircle, Heart, Car, Calendar, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation Helper Component
const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-800">
      
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 text-sm relative z-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-2">
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-secondary" /> <span className="font-semibold">1-800-322-6717</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-secondary" /> <span>Canton Township, MI</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-secondary" /> <span>Mon–Fri 8AM–6PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold text-dark uppercase tracking-tight leading-none">
              Gherghel <span className="text-primary">Transport</span>
            </h1>
            <span className="text-[10px] md:text-xs text-gray-500 font-medium tracking-wide mt-1">
              DBA SG RESIDENTIAL LLC | ADVANCE CARE 365
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-600 hover:text-primary font-medium text-sm tracking-wide transition">
                {link.name}
              </a>
            ))}
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:18003226717" 
              className="bg-secondary hover:bg-amber-600 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-amber-500/30 transition flex items-center gap-2"
            >
              <Phone size={18} /> Call Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-dark" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="md:hidden bg-white border-t p-4 flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-gray-800 py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="tel:18003226717" className="bg-primary text-white text-center py-3 rounded-lg font-bold">
              Call 1-800-322-6717
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative h-[650px] md:h-[750px] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=2070&auto=format&fit=crop" 
            alt="Caregiver helping smiling senior woman into a car" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/80 to-blue-900/40 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-12">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-3/5 space-y-6 text-center md:text-left">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block bg-secondary/20 text-secondary border border-secondary/50 px-4 py-1 rounded-full text-sm font-bold mb-4 backdrop-blur-sm">
                  Safe. Reliable. Compassionate.
                </span>
                <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                  Dignified Transport for <br/>
                  <span className="text-secondary">Those Who Served</span>
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                  Specialized transportation for Seniors (55+), Veterans, and individuals with mobility challenges. We don't just drive; we care.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#contact" 
                    className="bg-secondary hover:bg-amber-600 text-white text-center px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-amber-900/20 transition"
                  >
                    Request a Ride
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="tel:18003226717" 
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 text-center px-8 py-4 rounded-xl font-bold text-lg transition flex justify-center items-center gap-2"
                  >
                    <Phone size={20} /> 1-800-322-6717
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Stats / Info Bar */}
      <div className="bg-white shadow-lg relative z-20 -mt-8 mx-4 md:mx-auto container rounded-xl p-6 md:p-10 border-b-4 border-secondary grid md:grid-cols-3 gap-6">
         {[
            { icon: Shield, title: "Safety First", desc: "Door-to-door assistance for every rider." },
            { icon: CheckCircle, title: "Reliable & On-Time", desc: "We respect your appointment times." },
            { icon: Heart, title: "Compassionate Care", desc: "Trained to support seniors & veterans." },
         ].map((item, i) => (
           <FadeIn key={i} delay={i * 0.2}>
             <div className="flex items-start gap-4">
               <div className="bg-blue-50 p-3 rounded-lg text-primary">
                 <item.icon size={28} strokeWidth={1.5} />
               </div>
               <div>
                 <h4 className="font-bold text-dark text-lg">{item.title}</h4>
                 <p className="text-gray-500 text-sm">{item.desc}</p>
               </div>
             </div>
           </FadeIn>
         ))}
      </div>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 relative">
              <FadeIn>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                        src="" 
                        alt="Caregiver assisting senior man with walker near a car" 
                        className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
                    />
                    <div className="absolute bottom-0 left-0 bg-primary/90 text-white p-6 rounded-tr-2xl backdrop-blur-sm">
                        <p className="font-bold text-2xl">Mobility Support</p>
                        <p className="text-sm text-blue-100">Patient assistance provided</p>
                    </div>
                </div>
                {/* Decorative Pattern */}
                <div className="absolute -z-10 top-[-20px] left-[-20px] w-full h-full border-2 border-secondary/30 rounded-2xl"></div>
              </FadeIn>
            </div>
            
            <div className="md:w-1/2">
              <FadeIn delay={0.2}>
                <h4 className="text-secondary font-bold uppercase tracking-widest mb-2">About Us</h4>
                <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6 leading-tight">More Than Just a <br/>Ride Service.</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  <span className="font-bold text-primary">SG Residential LLC</span> (DBA Gherghel Transportation & Advance Care 365) was founded on a simple promise: to treat every passenger like family.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We understand that medical appointments, grocery runs, and social outings are vital to maintaining independence. That is why our drivers are trained not just in safety, but in patience and empathy.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Door-through-door service (we don't just honk)",
                    "Wheelchair & mobility aid friendly vehicles",
                    "Real-time updates for family members"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                      <div className="bg-green-100 text-green-600 rounded-full p-1">
                        <CheckCircle size={16} /> 
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 relative">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Comprehensive Transport Services</h2>
              <p className="text-gray-600 text-lg">Whether it is a recurring dialysis appointment or a one-time family visit, we have the right vehicle and the right driver for you.</p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Medical Appointments", desc: "Reliable rides to dialysis, chemotherapy, and check-ups.", icon: Heart, color: "text-red-500", bg: "bg-red-50" },
              { title: "Pharmacy & Errands", desc: "Assistance with prescription pick-ups and grocery shopping.", icon: CheckCircle, color: "text-blue-500", bg: "bg-blue-50" },
              { title: "Veteran Services", desc: "Dedicated transport to VA hospitals and veteran events.", icon: Shield, color: "text-indigo-500", bg: "bg-indigo-50" },
              { title: "Social Outings", desc: "Stay connected with family, church, and community events.", icon: Calendar, color: "text-orange-500", bg: "bg-orange-50" },
              { title: "Airport Transfers", desc: "Assisted travel support for arrivals and departures.", icon: Car, color: "text-green-500", bg: "bg-green-50" },
              { title: "Mobility Support", desc: "Vehicles equipped for walkers and foldable wheelchairs.", icon: Phone, color: "text-purple-500", bg: "bg-purple-50" },
            ].map((service, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group h-full"
                >
                  <div className={`${service.bg} ${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-dark">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Why Us Banner */}
      <section id="why-us" className="py-20 bg-primary relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
               <FadeIn>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Families Trust Us</h2>
                <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                  We know that trusting someone with your loved one's safety is a big decision. That is why transparency and communication are at the core of what we do.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "GPS tracked vehicles for peace of mind",
                    "Drivers background checked & drug tested",
                    "CPR and First Aid certified staff"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                      <div className="bg-secondary rounded-full p-1">
                        <CheckCircle size={16} className="text-white" />
                      </div>
                      <span className="font-semibold text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
            <div className="md:w-1/2">
              <FadeIn delay={0.3}>
                <div className="bg-white text-dark p-8 md:p-10 rounded-2xl shadow-2xl relative">
                  <div className="absolute -top-6 -right-6 bg-secondary text-white w-20 h-20 rounded-full flex items-center justify-center font-bold shadow-lg rotate-12">
                    Open<br/>24/7
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Ready to schedule?</h3>
                  <p className="text-gray-600 mb-6">Our dispatch team is ready to help you coordinate your next trip.</p>
                  <a href="tel:18003226717" className="block w-full bg-primary hover:bg-blue-800 text-white text-center py-4 rounded-xl font-bold text-xl transition mb-4">
                    Call 1-800-322-6717
                  </a>
                  <p className="text-center text-sm text-gray-500">No hidden fees. Free quotes.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-dark mb-12">Kind Words from Clients</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Professional, on time, and very kind. Scheduling was easy, and the ride was comfortable.", author: "Mary J., Canton" },
              { text: "Great service for my parent’s appointments. Communication was clear and respectful.", author: "The Robinson Family" },
              { text: "Dependable transportation for VA visits, it made the day much easier.", author: "John D., US Army Vet" }
            ].map((review, idx) => (
              <FadeIn key={idx} delay={idx * 0.2}>
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 relative h-full flex flex-col justify-between">
                  <div>
                    <div className="flex justify-center text-secondary mb-4">
                        {[1,2,3,4,5].map(star => <span key={star}>★</span>)}
                    </div>
                    <p className="text-gray-700 italic mb-6 text-lg">"{review.text}"</p>
                  </div>
                  <p className="font-bold text-dark border-t border-gray-200 pt-4 block">{review.author}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
              
              {/* Contact Info Side */}
              <div className="lg:w-2/5 bg-dark text-white p-12 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                  <p className="mb-10 text-gray-400">Call to schedule, or send a request and we will follow up shortly.</p>
                  
                  <div className="space-y-8">
                    <div className="flex items-center gap-5">
                      <div className="bg-white/10 p-3 rounded-lg">
                        <Phone className="text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Emergency & Booking</p>
                        <p className="font-bold text-xl">1-800-322-6717</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-5">
                       <div className="bg-white/10 p-3 rounded-lg">
                        <MapPin className="text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Headquarters</p>
                        <p className="font-bold text-lg">5405 S Sheldon Rd,<br/>Canton Township, MI 48188</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-5">
                       <div className="bg-white/10 p-3 rounded-lg">
                        <Clock className="text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Operating Hours</p>
                        <p className="font-bold">Mon–Fri 8:00 AM–6:00 PM</p>
                        <p className="text-sm text-gray-400">Weekends by appointment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Side */}
              <div className="lg:w-3/5 p-8 md:p-12">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-dark">Request a Ride</h3>
                    <span className="hidden md:flex items-center text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> Online
                    </span>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                      <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-primary focus:outline-none transition" placeholder="Jane Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                      <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-primary focus:outline-none transition" placeholder="(555) 123-4567" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Ride Type</label>
                    <select className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-primary focus:outline-none transition appearance-none">
                      <option>Select one...</option>
                      <option>Medical appointment</option>
                      <option>Pharmacy pick-up</option>
                      <option>VA or veteran services visit</option>
                      <option>Grocery shopping and errands</option>
                      <option>Community or social outing</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Details (Date, Time, Location)</label>
                    <textarea className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 h-32 focus:ring-2 focus:ring-primary focus:outline-none transition resize-none" placeholder="Please provide pick-up location and appointment time..."></textarea>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4 pt-2">
                    <button className="flex-1 bg-primary hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition shadow-lg flex justify-center items-center gap-2 group">
                      Send Request <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                    </button>
                  </div>
                </form>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-gray-400 py-16 border-t border-gray-800">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white text-2xl font-bold mb-6 tracking-tight">Gherghel Transportation</h4>
            <p className="mb-4 text-gray-400 leading-relaxed max-w-sm">
                Providing safe, reliable, and compassionate transportation for our community's seniors and veterans. Because everyone deserves to move with dignity.
            </p>
            <div className="flex gap-4 mt-6">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition cursor-pointer text-white">f</div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition cursor-pointer text-white">in</div>
            </div>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-6 text-lg">Quick Links</h5>
            <ul className="space-y-3">
                {navLinks.map(link => (
                    <li key={link.name}><a href={link.href} className="hover:text-secondary transition">{link.name}</a></li>
                ))}
            </ul>
          </div>

          <div>
             <h5 className="text-white font-bold mb-6 text-lg">Contact</h5>
             <ul className="space-y-3">
                <li className="flex gap-3"><Phone size={18} className="text-secondary"/> 1-800-322-6717</li>
                <li className="flex gap-3"><MapPin size={18} className="text-secondary"/> 5405 S Sheldon Rd,<br/>Canton, MI 48188</li>
                <li className="flex gap-3"><Clock size={18} className="text-secondary"/> Mon-Fri: 8am - 6pm</li>
             </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-16 pt-8 border-t border-gray-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs">© {new Date().getFullYear()} SG Residential LLC. All rights reserved.</p>
            <p className="text-xs mt-2 md:mt-0">Privacy Policy | Terms of Service</p>
        </div>
      </footer>
    </div>
  );
};

export default App;