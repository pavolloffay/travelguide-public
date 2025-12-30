import React from 'react';
import { motion } from 'motion/react';
import { Navigation, Sparkles, MessageCircle, Youtube, Instagram, Heart } from 'lucide-react';
import { PhoneFrame } from './components/ui/PhoneFrame';
import StoreDownloadButton from '../imports/StoreDownloadButton';
import LegalPage from '../components/LegalPage';
import { Routes, Route, Link } from 'react-router-dom';
import logoImage from '../assets/344226a331ba1ca77b8c10b6d6c1c7754a0570bc.png';
import appScreenshot from '../assets/2c7337a9768ee367c53ac993f4744aa51effd785.png';
import appScreenshot2 from '../assets/506116e2a27c3d23d609137158d7a51c92059f33.png';
import appScreenshot3 from '../assets/f91b732fb6735cd89a05a11893dfb57394a110cf.png';
import appScreenshot4 from '../assets/4793c232bb52353ab5dc73bb4776b3c6a8f0de69.png';

function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20">
      {/* Hero Section */}
      <header className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex flex-col items-center">
              <img
                src={logoImage}
                alt="TravelGuide Logo"
                className="w-64 h-64 md:w-96 md:h-96 object-contain"
              />
              <span className="text-4xl md:text-6xl font-bold text-white -mt-16 md:-mt-24">Nunu</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white"
          >
            Your AI Travel Guide
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-neutral-400 max-w-2xl mb-12"
          >
            Unlock the world's stories for everyone. We provide high-quality, personalized AI audio tours that turn any location into a journey of discovery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            {/* Google Play Store Button */}
            <motion.button
              whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
              whileTap={{ scale: 0.95 }}
              className="w-44"
            >
              <StoreDownloadButton />
            </motion.button>

            {/* Apple App Store Button */}
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgb(64 64 64)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 bg-neutral-800 text-white px-4 py-2.5 rounded-xl border border-neutral-700 w-44 min-h-[52px]"
            >
              <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-full h-full object-contain" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.96,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.37 12.36,4.26 13,3.5Z" />
                </svg>
              </div>
              <div className="flex flex-col items-start justify-center">
                <p className="font-sans text-[10px] uppercase font-medium text-neutral-300 leading-none mb-1">Download on the</p>
                <div className="text-base font-bold text-neutral-100 leading-none">App Store</div>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </header>

      {/* How it Works Section */}
      <section className="py-32 bg-neutral-950 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-24 bg-gradient-to-b from-white via-white to-neutral-500 bg-clip-text text-transparent"
          >
            How it works
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 perspective-[2000px]">
            {[
              {
                icon: <Navigation className="w-8 h-8 text-white" />,
                title: "Explore",
                description: "Find hidden gems and popular landmarks around you with our interactive map.",
                gradient: "from-white/10 to-white/5",
                shadow: "shadow-white/10",
                delay: 0
              },
              {
                icon: <Sparkles className="w-8 h-8 text-white" />,
                title: "Learn",
                description: "Get instant AI-powered insights and historical facts about any landmark you discover.",
                gradient: "from-white/10 to-white/5",
                shadow: "shadow-white/10",
                delay: 0.2
              },
              {
                icon: <MessageCircle className="w-8 h-8 text-white" />,
                title: "Deep dive",
                description: "Deep dive into the landmark by asking follow up questions to your personal AI guide.",
                gradient: "from-white/10 to-white/5",
                shadow: "shadow-white/10",
                delay: 0.4
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, rotateX: 80, y: 40 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: step.delay,
                  type: "spring",
                  bounce: 0.3
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  rotateX: 5,
                  rotateY: 5,
                  zIndex: 10
                }}
                className="group relative flex flex-col items-center text-center p-8 rounded-[2.5rem] bg-neutral-900/40 border border-neutral-800 backdrop-blur-md [transform-style:preserve-3d] hover:bg-neutral-900/60 transition-colors duration-300"
              >
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-8 border border-white/5 shadow-xl ${step.shadow} [transform:translateZ(50px)] group-hover:scale-110 transition-transform duration-500`}
                >
                  {step.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-white [transform:translateZ(30px)]">{step.title}</h3>
                <p className="text-neutral-400 leading-relaxed [transform:translateZ(20px)] group-hover:text-neutral-200 transition-colors duration-300">{step.description}</p>

                {/* 3D Border gradient effect */}
                <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-white/10 group-hover:ring-white/20 transition-all duration-300 [transform:translateZ(0px)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-24 overflow-hidden relative">
        <div className="flex flex-col items-center w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-24 bg-gradient-to-b from-white via-white to-neutral-500 bg-clip-text text-transparent"
          >
            Experience the journey
          </motion.h2>

          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center w-full max-w-[1600px] relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.75 }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 0.75,
                transition: { duration: 0.6 }
              }}
              whileHover={{
                scale: 0.85,
                zIndex: 50,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              className="origin-center -my-12 md:my-0 md:-mx-6 lg:-mx-10 cursor-pointer"
            >
              <PhoneFrame>
                <div className="absolute inset-0 bg-black">
                  <div className="transform scale-[0.999] origin-top-left h-full w-full">
                    <img
                      src={appScreenshot}
                      alt="TravelGuide Map View"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </PhoneFrame>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.75 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 0.75,
                transition: { duration: 0.6, delay: 0.1 }
              }}
              whileHover={{
                scale: 0.85,
                zIndex: 50,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              className="origin-center -my-12 md:my-0 md:-mx-6 lg:-mx-10 cursor-pointer"
            >
              <PhoneFrame>
                <div className="absolute inset-0 bg-black">
                  <div className="transform scale-[0.999] origin-top-left h-full w-full">
                    <img
                      src={appScreenshot2}
                      alt="TravelGuide Detail View"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </PhoneFrame>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.75 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 0.75,
                transition: { duration: 0.6, delay: 0.2 }
              }}
              whileHover={{
                scale: 0.85,
                zIndex: 50,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              className="origin-center -my-12 md:my-0 md:-mx-6 lg:-mx-10 cursor-pointer"
            >
              <PhoneFrame>
                <div className="absolute inset-0 bg-black">
                  <div className="transform scale-[0.999] origin-top-left h-full w-full">
                    <img
                      src={appScreenshot3}
                      alt="TravelGuide AI Features"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </PhoneFrame>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.75 }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 0.75,
                transition: { duration: 0.6, delay: 0.3 }
              }}
              whileHover={{
                scale: 0.85,
                zIndex: 50,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              className="origin-center -my-12 md:my-0 md:-mx-6 lg:-mx-10 cursor-pointer"
            >
              <PhoneFrame>
                <div className="absolute inset-0 bg-black">
                  <div className="transform scale-[0.999] origin-top-left h-full w-full">
                    <img
                      src={appScreenshot4}
                      alt="TravelGuide Visited View"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </PhoneFrame>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-neutral-900 bg-neutral-950">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-8 mb-8">
            <a href="https://www.youtube.com/@nunutravelguide" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
              <Youtube size={20} />
              <span className="text-sm">YouTube</span>
            </a>
            <a href="https://www.instagram.com/nunutravelguide" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
              <Instagram size={20} />
              <span className="text-sm">Instagram</span>
            </a>
          </div>

          <div className="flex justify-center gap-6 mb-8 text-sm text-neutral-500">
            <Link to="/privacy-policy" className="hover:text-neutral-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-neutral-300 transition-colors">Terms of Service</Link>
          </div>

          <div className="text-neutral-600 text-sm flex items-center justify-center gap-1">
            Made with <Heart size={14} className="text-red-600 fill-red-600" /> in Switzerland
          </div>
          <div className="mt-4 text-xs text-neutral-700">
            &copy; {new Date().getFullYear()} TravelGuide. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<LegalPage source="/PRIVACY_POLICY.md" title="Privacy Policy" />} />
      <Route path="/terms" element={<LegalPage source="/TERMS_AND_CONDITIONS.md" title="Terms of Service" />} />
    </Routes>
  );
}
