import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import dashboardHero from "@/assets/dashboard-hero.jpg";
import DemoModal from "@/components/DemoModal";
import { ContainerScroll } from "@/components/ContainerScroll";

const Hero = () => {
  return (
    <section 
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #0F0C29 0%, #302B63 50%, #24243E 100%)",
        position: "relative"
      }}
    >
      {/* Background Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.1) 0%, transparent 50%)"
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 sm:space-y-12">
          {/* Main Headlines */}
          <div className="space-y-6">
            {/* Subtitle */}
            <motion.h2 
              className="text-white/85 font-semibold tracking-[0.08em] leading-tight"
              style={{
                fontSize: "clamp(1.2rem, 3vw, 2.5rem)",
                fontFamily: "'Inter', 'SF Pro Display', -apple-system, sans-serif",
                textTransform: "uppercase",
                marginBottom: "20px"
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              EXPERIENCE THE POWER OF ECOM AUTOMATION WITH
            </motion.h2>

            {/* Main Title */}
            <motion.h1 
              className="font-black text-center leading-[0.9] tracking-[0.02em]"
              style={{
                fontSize: "clamp(4rem, 12vw, 10rem)",
                fontFamily: "'Inter', 'SF Pro Display', -apple-system, sans-serif",
                textTransform: "uppercase",
                background: "linear-gradient(135deg, #667EEA 0%, #764BA2 25%, #F093FB 50%, #C471ED 75%, #667EEA 100%)",
                backgroundSize: "200% 200%",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 4px 20px rgba(102, 126, 234, 0.3))",
                animation: "gradient-shift 8s ease-in-out infinite alternate"
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 1, 
                delay: 0.4,
                ease: [0.68, -0.55, 0.265, 1.55]
              }}
            >
              SYNVELO
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-white/70 leading-relaxed tracking-[0.02em]"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                fontWeight: "400",
                marginTop: "30px"
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              The Operating System for Modern Ecommerce
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <button
              className="px-10 py-4 text-lg font-semibold text-white rounded-[30px] border-none cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #667EEA 0%, #764BA2 100%)",
                boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(102, 126, 234, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(102, 126, 234, 0.3)";
              }}
            >
              Start Free Trial
            </button>
            
            <button
              className="px-10 py-4 text-lg font-semibold text-white rounded-[30px] cursor-pointer transition-all duration-300 border-2"
              style={{
                background: "transparent",
                borderColor: "rgba(255, 255, 255, 0.3)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.6)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              Watch Demo
            </button>
          </motion.div>
        </div>
        
        {/* Dashboard Preview with ContainerScroll - moved to center */}
        <div className="mt-16 sm:mt-24">
          <ContainerScroll titleComponent={<div className="mx-auto text-center mb-20">
                
                
              </div>}>
            <img src={dashboardHero} alt="Synvelo FBA Dashboard - Real-time analytics and automation" className="mx-auto rounded-2xl object-cover h-full object-left-top" draggable={false} />
          </ContainerScroll>
        </div>
      </div>
    </section>
  );
};

export default Hero;