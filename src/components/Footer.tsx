export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-web3-dark">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-web3-accent rounded-sm flex items-center justify-center">
            <span className="text-black font-bold text-xs font-display">C</span>
          </div>
          <span className="text-white font-display font-semibold tracking-tight">Chinedu Emmanuel</span>
        </div>
        
        <div className="text-gray-500 text-sm font-mono tracking-wide uppercase">
          &copy; {currentYear} &mdash; All Rights Reserved
        </div>

        <div className="flex gap-8 text-xs font-mono uppercase tracking-widest text-gray-500">
          <a href="#hero" className="hover:text-web3-accent transition-colors">Back to top</a>
          <a href="https://blockchainhub.africa" target="_blank" rel="noopener noreferrer" className="hover:text-web3-accent transition-colors">BlockchainHub Africa</a>
        </div>
      </div>
    </footer>
  );
}
