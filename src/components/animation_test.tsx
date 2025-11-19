import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const sections = [
  {
    title: 'Custom-built, impactful tools',
    description:
      'Agents aren\'t useful without hyperspecific tools deeply integrated into your core business systems.',
    image: '/images/section1.png',
  },
  {
    title: 'Monitor your agents in real time',
    description:
      'See your entire agent workforce operating in real time.',
    image: '/images/section2.png',
  },
  {
    title: 'Simple, per-hour pricing',
    description:
      'Pay only for the time it’s running, just like a human team member.',
    image: '/images/section3.png',
  },
];
export default function ScrollSections() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex flex-col lg:flex-row relative max-w-7xl mx-auto min-h-screen py-32 gap-16">
      {/* LEFT: Text Sections */}
      <div className="flex-1 flex flex-col gap-32 z-10">
        {sections.map((section, i) => {
          const [ref, inView] = useInView({
            threshold: 0.5,
            triggerOnce: false,
          });
          if (inView && activeIndex !== i) {
            setActiveIndex(i);
          }
          return (
            <div key={i} ref={ref} className="min-h-[60vh]">
              <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
              <p className="text-lg text-gray-400 max-w-xl">{section.description}</p>
            </div>
          );
        })}
      </div>
      {/* RIGHT: Sticky Image */}
      <div className="flex-1 sticky top-20 h-[80vh] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={sections[activeIndex].image}
            src={sections[activeIndex].image}
            alt="Section Visual"
            className="rounded-xl shadow-xl max-h-full object-contain transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}