import React from 'react';
import { FadeIn } from '../components/FadeIn';

export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen relative flex flex-col items-center justify-center px-6 sm:px-10 py-32 bg-bg-primary">
      
      <div className="max-w-4xl w-full flex flex-col items-center z-10">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,10vw,120px)] mb-16">
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-8 text-text-primary font-light leading-relaxed text-lg sm:text-xl md:text-2xl w-full">
          <FadeIn delay={0.2} y={30}>
            <p className="text-center font-medium italic mb-6 text-text-primary/80">
              Most people know a version of me.<br/>
              Very few know the full picture.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} y={30}>
            <p>
              I am the kind of person who can move between worlds without fully belonging to any one of them. I can think like a philosopher, speak like a strategist, love like a poet, joke like a jester, and stand like a man who knows what he believes.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} y={30}>
            <p>
              At my core, I am someone who cares deeply about growth, purpose, self-respect, loyalty, and becoming the kind of man whose presence means something.
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={30}>
            <p>
              I am currently pursuing my MBA in Business Management in Malaysia, and that journey is more than academics to me. It is part of a bigger mission: to sharpen my mind, strengthen my discipline, and position myself for a life of impact.
            </p>
          </FadeIn>

          <FadeIn delay={0.6} y={30}>
            <div className="mt-8 text-center font-medium uppercase tracking-wider text-base sm:text-lg md:text-xl border-l-4 border-text-primary pl-6 py-2 text-left">
              I do not want a shallow life.<br/>
              I want a meaningful one.<br/><br/>
              I do not want to be remembered for noise.<br/>
              I want to be remembered for substance.
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
