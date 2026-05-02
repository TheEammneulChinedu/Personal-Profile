import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail as MailIcon, Instagram as InstagramIcon, Linkedin as LinkedinIcon, Copy as CopyIcon, Check as CheckIcon } from 'lucide-react';

export default function Contact({ id }: { id: string }) {
  const [copied, setCopied] = useState(false);
  const email = "emmanuel@blockchainhub.africa";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    { 
      name: 'LinkedIn', 
      icon: <LinkedinIcon size={24} />, 
      href: 'https://www.linkedin.com/in/chineduemmanuel-bha/',
      handle: 'Chinedu Emmanuel'
    },
    { 
      name: 'Instagram', 
      icon: <InstagramIcon size={24} />, 
      href: 'https://instagram.com/emmanuel.chinedu_',
      handle: '@emmanuel.chinedu_'
    }
  ];

  return (
    <section id={id} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Contact</h2>
          <p className="text-gray-500">Let's connect and share ideas.</p>
        </div>

        <div className="flex flex-col items-center gap-12">
          {/* Email Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="w-full max-w-xl glass-card p-6 md:p-10 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-web3-accent">
                <MailIcon size={24} />
              </div>
              <div className="text-left">
                <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">Email Me</div>
                <div className="text-lg md:text-xl font-display font-bold text-white">{email}</div>
              </div>
            </div>
            <button 
              onClick={copyToClipboard}
              className={`p-4 rounded-2xl transition-all duration-300 flex items-center justify-center ${copied ? 'bg-web3-accent text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}`}
            >
              {copied ? <CheckIcon size={20} /> : <CopyIcon size={20} />}
            </button>
          </motion.div>

          {/* Socials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-xl">
            {socials.map((social) => (
              <a 
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-8 rounded-[2rem] flex items-center gap-6 group hover:border-web3-accent/40 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-web3-accent group-hover:text-black transition-all duration-500">
                  {social.icon}
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">{social.name}</div>
                  <div className="text-lg font-display font-bold text-white group-hover:text-web3-accent transition-colors">{social.handle}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
