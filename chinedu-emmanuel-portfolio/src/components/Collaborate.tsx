import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const targets = [
  "Web3 Protocols & Foundations",
  "Developer Communities",
  "Universities",
  "Innovation Hubs"
];

const areas = [
  "Blockchain education programs",
  "Ecosystem expansion in Africa",
  "Strategic partnerships",
  "Community and developer growth"
];

export default function Collaborate({ id }: { id: string }) {
  return (
    <section id={id} className="py-32 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Let’s Collaborate</h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              I partner with forward-thinking organizations to build sustainable Web3 ecosystems and bridge the gap between technology and talent in Africa.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-web3-accent font-mono text-xs uppercase tracking-widest mb-6 font-bold">I work with:</h4>
                <ul className="space-y-4">
                  {targets.map(item => (
                    <li key={item} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 size={16} className="text-web3-accent/50" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-web3-accent font-mono text-xs uppercase tracking-widest mb-6 font-bold">Engagement Areas:</h4>
                <ul className="space-y-4">
                  {areas.map(item => (
                    <li key={item} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 size={16} className="text-web3-accent/50" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="relative">
            <motion.div 
              initial={{ rotate: -2, scale: 0.95 }}
              whileInView={{ rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-12 rounded-[3rem] border-white/10 relative z-10"
            >
              <h3 className="text-3xl font-display font-bold mb-6 text-white text-center">Ready to build something impactful?</h3>
              <p className="text-gray-400 text-center mb-10 leading-relaxed">
                Reach out to discuss partnerships, program design, or ecosystem growth strategies.
              </p>
              <a 
                href="mailto:emmanuel@blockchainhub.africa"
                className="w-full bg-white text-black py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-web3-accent transition-all duration-300"
              >
                Send an Email
                <ArrowRight size={20} />
              </a>
            </motion.div>
            {/* Background blob */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-web3-accent/20 blur-[60px] rounded-full z-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
