import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import GridBackground from './GridBackground';
import NetworkCanvas from './NetworkCanvas';

type Intensity = 'low' | 'medium' | 'high';

const PageLayout = ({ children, intensity = 'medium' }: { children: ReactNode; intensity?: Intensity }) => (
  <div className="min-h-screen flex flex-col relative">
    <GridBackground />
    <NetworkCanvas intensity={intensity} respectReducedMotion={false} />
    <Navbar />
    <main className="flex-1 relative z-10 pt-16 bg-background/85 page-enter">
      {children}
    </main>
    <Footer />
  </div>
);

export default PageLayout;
