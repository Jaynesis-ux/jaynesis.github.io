import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { motion } from 'motion/react';

export const BuildingSection = () => {
  return (
    <section 
      id="projects"
      className="bg-bg-primary text-text-primary px-6 sm:px-10 pt-32 pb-20 border-b border-border-subtle rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 relative z-50"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <FadeIn delay={0}>
          <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,8vw,80px)] leading-none mb-12">
            What I'm Building
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="text-xl sm:text-2xl font-medium mb-10 text-text-primary/90 italic">
            I am building a life that can hold ambition without losing soul.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <ul className="text-left font-light text-xl sm:text-2xl space-y-4 mb-16 opacity-80 mx-auto inline-block">
            <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-[var(--text-primary)]"></span> A life where my family is proud.</li>
            <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-[var(--text-primary)]"></span> A life where my word means something.</li>
            <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-[var(--text-primary)]"></span> A life where my work creates value.</li>
            <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-[var(--text-primary)]"></span> A life where my mind keeps expanding.</li>
            <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-[var(--text-primary)]"></span> A life where my love is felt, not just spoken.</li>
            <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-[var(--text-primary)]"></span> A life where my legacy is bigger than my ego.</li>
          </ul>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="uppercase tracking-widest font-black text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] to-gray-500">
            I am not trying to be everywhere.<br/>
            I am trying to be real somewhere.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export const MindRoomSection = () => {
  return (
    <section id="mind" className="bg-bg-primary py-20 pb-32">
      <div className="bg-bg-inverse text-text-inverse px-6 sm:px-10 py-24 sm:py-32 rounded-[40px] md:rounded-[60px] mx-4 sm:mx-10 border border-text-inverse/10 shadow-2xl relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[rgba(0,0,0,0.03)] to-transparent pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <FadeIn delay={0}>
            <h2 className="font-black uppercase text-[clamp(2.5rem,8vw,80px)] leading-none mb-6">
              My Mind As A Room
            </h2>
            <p className="font-light text-2xl opacity-70 mb-16 italic">If my mind were a room, it would not be empty.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              { label: "A library,", reason: "because I think in layers." },
              { label: "A chapel,", reason: "because I carry reverence for meaning." },
              { label: "A war room,", reason: "because I am always refining strategy." },
              { label: "A throne room,", reason: "because I believe in self-command." },
              { label: "A garden,", reason: "because softness still lives in me." },
              { label: "A battlefield,", reason: "because growth is never passive." },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.1} className="flex flex-col sm:flex-row sm:items-start gap-2 border-b border-text-inverse/10 pb-4">
                <span className="font-black uppercase tracking-wider text-xl shrink-0">{item.label}</span>
                <span className="font-light text-lg sm:text-xl opacity-80 sm:mt-[2px]">{item.reason}</span>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.6}>
            <p className="font-medium text-xl sm:text-2xl border-l-4 border-text-inverse pl-6 py-2">
              Some days all of those rooms are peaceful.<br/>
              Some days they are in conflict.<br/>
              Either way, I am learning to be the one who stays in the center.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export const BeliefsSection = () => {
  return (
    <section className="bg-bg-primary text-text-primary px-6 sm:px-10 py-32 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 relative z-20">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn delay={0}>
          <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,7vw,70px)] leading-none mb-20">
            A Few Things I Believe
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-6 font-light text-xl sm:text-2xl md:text-3xl">
          {[
            "I believe effort matters.",
            "I believe character outlasts charm.",
            "I believe consistency is more attractive than intensity.",
            "I believe a man should have standards, but also self-awareness.",
            "I believe love should not feel like punishment.",
            "I believe growth should be visible.",
            "I believe quiet strength is underrated.",
            "I believe a full life requires both fire and discipline."
          ].map((belief, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <p className="opacity-80 hover:opacity-100 transition-opacity duration-300">
                "{belief}"
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer id="contact" className="bg-bg-primary pt-20 pb-10 px-6 sm:px-10 border-t border-border-subtle text-center">
      <FadeIn delay={0}>
        <div className="inline-block border border-border-subtle rounded-[30px] px-8 py-8 md:px-16 md:py-12 mb-16">
          <p className="text-text-primary font-medium text-xl sm:text-2xl md:text-3xl italic leading-relaxed">
            “I am not here to perform a life.<br/>
            I am here to live one worth remembering.”
          </p>
        </div>

        <h2 className="hero-heading font-black text-5xl sm:text-6xl uppercase tracking-widest mb-6">JAY</h2>
        <p className="text-text-primary/60 font-light uppercase tracking-widest text-xs sm:text-sm">
          Malaysia • MBA Student • Writer • Thinker • Builder
        </p>

        <p className="text-text-primary/30 text-xs mt-24">
          &copy; {new Date().getFullYear()} JAY. All rights reserved.
        </p>
      </FadeIn>
    </footer>
  );
};
