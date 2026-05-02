import { motion } from 'motion/react';
import { Award, Star } from 'lucide-react';

export default function Awards({ id }: { id: string }) {
  return (
    <section id={id} className="py-32 relative overflow-hidden">
      {/* Decorative light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-web3-accent/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-16">Awards & Recognition</h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto p-12 glass-card rounded-[3rem] border-white/10"
        >
          <div className="w-20 h-20 bg-web3-accent/10 rounded-full flex items-center justify-center mx-auto mb-8 text-web3-accent">
            <Award size={40} />
          </div>
          <h3 className="text-3xl font-display font-bold text-white mb-4">ECCIMA Award for Impact</h3>
          <p className="text-gray-400 text-lg leading-relaxed italic">
            "Recognized for contributions to innovation, ecosystem development, and community impact."
          </p>
          <div className="flex justify-center gap-2 mt-8 text-web3-accent">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
