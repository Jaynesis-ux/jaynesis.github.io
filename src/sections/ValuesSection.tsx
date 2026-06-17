import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { motion } from 'motion/react';

const values = [
  {
    name: "Honor",
    desc: "My honor comes from what I do for the people I love when nobody is watching."
  },
  {
    name: "Loyalty",
    desc: "Not convenience. Not temporary alignment. Real loyalty."
  },
  {
    name: "Growth",
    desc: "I want every season of my life to make me wiser, stronger, and clearer."
  },
  {
    name: "Authenticity",
    desc: "I would rather be misunderstood for who I am than admired for who I am pretending to be."
  },
  {
    name: "Depth",
    desc: "I do not enjoy surface-level living. I like what lasts. I like what matters."
  }
];

export const ValuesSection = () => {
  return (
    <section 
      id="philosophy" 
      className="bg-bg-inverse px-6 sm:px-10 py-24 sm:py-32 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 relative z-40"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        <div className="lg:col-span-1">
          <FadeIn delay={0}>
            <h2 className="text-text-inverse font-black uppercase text-[clamp(2.5rem,8vw,80px)] leading-none lg:sticky lg:top-32">
              What I Value
            </h2>
          </FadeIn>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-12">
          {values.map((v, i) => (
            <FadeIn key={v.name} delay={i * 0.1}>
              <div className="border-l-4 border-text-inverse pl-6 sm:pl-10 py-2">
                <h3 className="text-text-inverse font-black uppercase text-3xl sm:text-4xl mb-4">
                  {v.name}
                </h3>
                <p className="text-text-inverse font-light text-xl sm:text-2xl opacity-80">
                  {v.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
