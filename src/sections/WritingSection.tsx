import React, { useState } from 'react';
import { FadeIn } from '../components/FadeIn';

const articles = [
  {
    title: "On Self-Respect",
    content: (
      <>
        <p className="mb-4 opacity-80">Self-respect is not loud. It does not always announce itself. Sometimes it looks like restraint. Sometimes it looks like walking away. Sometimes it looks like refusing to shrink just to be accepted.</p>
        <p className="font-medium">People often admire confidence without understanding the cost of becoming a man who no longer begs to be chosen.</p>
      </>
    )
  },
  {
    title: "On Love",
    content: (
      <>
        <p className="mb-4 opacity-80">Love is not just chemistry. Love is not just attraction. Love is not just what feels good in the moment.</p>
        <p className="mb-4 font-medium italic">Real love has spine.<br/>Real love has memory.<br/>Real love has action behind it.</p>
        <p className="opacity-80">The kind of love I respect is the kind that remains honest when the excitement fades.</p>
      </>
    )
  },
  {
    title: "On Modern Relationships",
    content: (
      <>
        <p className="mb-4 opacity-80">Too many people confuse attention with intention.</p>
        <ul className="list-disc pl-5 mb-4 space-y-1 opacity-80">
          <li>They enjoy access without clarity.</li>
          <li>They enjoy benefits without commitment.</li>
          <li>They enjoy convenience while avoiding responsibility.</li>
        </ul>
        <p className="font-medium mt-4">Indecision is still a decision.</p>
      </>
    )
  },
  {
    title: "On Leadership",
    content: (
      <>
        <p className="mb-4 opacity-80">Leadership is not a title. It is not decoration. It is not something you wear.</p>
        <p className="mb-4 opacity-80">Leadership is the ability to influence, to guide, to protect, to decide, and to carry weight without losing yourself.</p>
        <p className="font-medium mt-4">Titles can be assigned.<br/>Respect must be earned.</p>
      </>
    )
  }
];

export const WritingSection = () => {
  const [subscribed, setSubscribed] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
    }, 1000);
  };

  return (
    <section id="journal" className="bg-bg-primary rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 z-30 relative px-6 sm:px-10 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0}>
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,8vw,100px)] leading-none mb-6">
              My Writing Corner
            </h2>
            <p className="text-text-primary/70 font-light text-xl max-w-2xl mx-auto">
              This is where I put things into words. I write about love, discipline, masculinity, self-respect, leadership, pain, growth, and the quiet things that sit too long in the chest if they are never named.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {articles.map((article, i) => (
            <FadeIn key={article.title} delay={i * 0.1}>
              <div className="border border-border-subtle rounded-[30px] p-8 sm:p-10 h-full bg-gradient-to-b from-bg-primary to-bg-primary hover:border-text-primary/30 transition-colors duration-300">
                <h3 className="text-text-primary font-bold uppercase text-2xl mb-6 tracking-wide">
                  {article.title}
                </h3>
                <div className="text-text-primary font-light text-[1.1rem] leading-relaxed">
                  {article.content}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Newsletter Section */}
        <FadeIn delay={0.4}>
          <div className="mt-24 sm:mt-32 max-w-2xl mx-auto text-center border-t border-border-subtle pt-16">
            <h3 className="text-text-primary font-black uppercase tracking-widest text-2xl sm:text-3xl mb-4">
              Stay in the loop
            </h3>
            <p className="text-text-primary/60 font-light text-lg mb-8">
              Thoughts on life, leadership, and purpose. Delivered quietly to your inbox.
            </p>
            
            {subscribed ? (
              <div className="p-4 bg-text-primary/5 text-text-primary rounded-2xl font-medium tracking-wide uppercase border border-border-subtle">
                Thanks for subscribing. I'll write to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <input 
                  type="email" 
                  required
                  placeholder="Enter your email" 
                  className="w-full sm:w-auto flex-1 bg-transparent border-b-2 border-text-primary/20 text-text-primary px-4 py-3 font-light focus:outline-none focus:border-text-primary transition-colors interactive placeholder-text-primary/40 rounded-none"
                />
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto rounded-full border border-text-primary text-text-primary px-8 py-3 uppercase tracking-widest font-medium hover:bg-[var(--text-primary)] hover:text-text-inverse transition-colors whitespace-nowrap interactive disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
