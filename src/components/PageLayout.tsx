import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import GridBackground from './GridBackground';
import NetworkCanvas from './NetworkCanvas';

const PageLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col relative">
    <GridBackground />
    <NetworkCanvas intensity="medium" respectReducedMotion={false} />
    <Navbar />
    <motion.main
      className="flex-1 relative z-10 pt-16 bg-background/85"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.main>
    <Footer />
  </div>
);

export default PageLayout;
