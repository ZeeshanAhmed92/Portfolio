import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Terminal } from 'lucide-react';

const stats = [
  { value: 20, suffix: '+', label: 'Global Clients' },
  { value: 5, suffix: '+', label: 'Years of Innovation' },
  { value: 25, suffix: '+', label: 'AI Solutions Built' },
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-glow mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for AI Consulting</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Engineering the <span className="text-gradient">Future of AI</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Specializing in Production-Ready RAG, Voice Assistants, and Autonomous Agents that drive measurable business growth.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button variant="hero" size="xl" asChild>
                <Link to="/projects">Explore Projects <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">Book a Consultation</Link>
              </Button>
            </div>

            <div className="flex gap-8">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-bold text-gradient">{stat.value}{stat.suffix}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Terminal Visual */}
          <div className="hidden lg:block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-cyan-500 rounded-lg blur opacity-20" />
            <div className="relative glass border-glow rounded-lg p-6 font-mono text-sm text-blue-300 shadow-2xl">
              <div className="flex gap-1.5 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <p className="text-gray-500 italic mb-2">// Initializing AI Environment...</p>
              <p><span className="text-primary">import</span> {'{ Agent }'} <span className="text-primary">from</span> 'zeeshan-ai';</p>
              <p className="mt-2"><span className="text-primary">const</span> engineer = <span className="text-yellow-400">new</span> Agent('Zeeshan');</p>
              <p>engineer.setStack(['RAG', 'LLMs', 'VoiceAI']);</p>
              <p className="mt-4 text-green-400 font-bold">{'>'} Ready to scale your business.</p>
              <p className="animate-pulse text-white mt-1">_</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;