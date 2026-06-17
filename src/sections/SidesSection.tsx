import React from 'react';
import { FadeIn } from '../components/FadeIn';

import { motion } from 'motion/react';

const sides = [
  {
    name: "The Philosopher",
    desc: (
      <>
        <p className="mb-4">I am obsessed with the questions people avoid.</p>
        <ul className="list-disc pl-5 mb-4 space-y-1 opacity-80">
          <li>What makes a life worth living?</li>
          <li>Why do people betray what they know is right?</li>
          <li>Is love a feeling, a choice, or a responsibility?</li>
          <li>What does it mean to be powerful without becoming cruel?</li>
          <li>How do you remain soft without becoming weak?</li>
        </ul>
        <p className="opacity-80">I like conversations that go somewhere. I like ideas that stretch me. I like truth even when it is uncomfortable.</p>
      </>
    )
  },
  {
    name: "The Strategist",
    desc: (
      <>
        <p className="mb-4">I am drawn to leadership, business, human behavior, and the way people organize power, emotion, and ambition.</p>
        <p className="mb-4 opacity-80">I pay attention to patterns. I notice what people say, what they avoid, what they repeat, and what they reveal without meaning to.</p>
        <p className="mb-2 opacity-80">I am interested in:</p>
        <ul className="list-disc pl-5 mb-4 space-y-1 opacity-80">
          <li>leadership and influence</li>
          <li>business and management</li>
          <li>psychology and decision-making</li>
          <li>negotiation and strategy</li>
          <li>personal development</li>
          <li>discipline and execution</li>
        </ul>
        <p className="font-medium mt-4">I respect intelligence, but I respect applied intelligence even more.</p>
      </>
    )
  },
  {
    name: "The Romantic",
    desc: (
      <>
        <p className="mb-4">I believe love should be felt in effort, not just in words.</p>
        <p className="mb-4 opacity-80 italic">A bouquet is never just a bouquet.<br/>A message is never just a message.<br/>A thoughtful act is never just a gesture.</p>
        <p className="mb-4 opacity-80">Love, to me, is presence. It is intention. It is consistency. It is the willingness to show someone they matter in ways that cannot be faked.</p>
        <p className="opacity-80">I believe in romance that is sincere, not performative. In affection that is steady, not confusing. In loyalty that does not need to be begged for.</p>
      </>
    )
  },
  {
    name: "The Observer",
    desc: (
      <>
        <p className="mb-4">I notice what other people miss.</p>
        <ul className="list-disc pl-5 mb-4 space-y-1 opacity-80">
          <li>The pause before an answer.</li>
          <li>The shift in energy.</li>
          <li>The difference between a person’s image and their habits.</li>
          <li>The gap between what is said and what is meant.</li>
        </ul>
        <p className="mb-4 opacity-80">I think a lot. I read people well. I can tell when something is real and when something is being sold.</p>
        <p className="font-medium mt-4">That does not make me cynical.<br/>It just makes me careful.</p>
      </>
    )
  },
  {
    name: "The Jester",
    desc: (
      <>
        <p className="mb-4">I do not believe maturity means becoming boring.</p>
        <p className="mb-4 opacity-80">I like wit. I like banter. I like humor that has soul in it. I like being able to laugh even while thinking deeply.</p>
        <p className="font-medium mt-4">Life is serious enough already.<br/>A man should be able to carry weight and still smile.</p>
      </>
    )
  }
];

export const SidesSection = () => {
  return (
    <section 
      id="gallery" 
      className="bg-bg-inverse rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-6 sm:px-10 py-24 sm:py-32 relative z-20"
    >
      <FadeIn delay={0} y={40}>
        <h2 className="text-text-inverse font-black uppercase text-center text-[clamp(2.5rem,8vw,100px)] mb-16 sm:mb-24 leading-none">
          The Many Sides Of Me
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
        {sides.map((side, i) => (
          <FadeIn key={side.name} delay={0.1 + (i % 2) * 0.2} y={30} className={`flex flex-col ${i === 4 ? 'md:col-span-2 md:max-w-2xl md:mx-auto' : ''}`}>
            <h3 className="text-text-inverse font-black uppercase text-3xl sm:text-4xl mb-6 pb-4 border-b-2 border-text-inverse/10">
              {side.name}
            </h3>
            <div className="text-text-inverse text-lg sm:text-xl font-light leading-relaxed">
              {side.desc}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
