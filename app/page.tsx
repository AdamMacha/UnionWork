import Hero from '@/components/hero';
import Features from '@/components/features';
import Stats from '@/components/stats';
import HowItWorks from '@/components/how-it-works';
import Investments from '@/components/investments';
import CTA from '@/components/cta';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <HowItWorks />
      <Investments />
      <CTA />
    </>
  );
}