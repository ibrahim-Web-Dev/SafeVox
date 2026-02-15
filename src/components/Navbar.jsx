import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mic, Activity } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Özellikler', href: '#features' },
        { name: 'Nasıl Çalışır', href: '#how-it-works' },
        { name: 'Etki', href: '#impact' },
        { name: 'Ekip', href: '#team' },
        { name: 'İletişim', href: '#contact' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 w-full z-50 transition-all duration-300',
                scrolled ? 'bg-dark-900/80 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-safe-500 to-vox-600 rounded-xl shadow-lg group-hover:shadow-safe-500/25 transition-all duration-300">
                        <Mic className="w-5 h-5 text-white absolute" />
                        <Activity className="w-5 h-5 text-white/50 absolute animate-pulse" />
                    </div>
                    <span className="text-2xl font-display font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                        SafeVox
                    </span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-safe-500 transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                    <button className="px-5 py-2.5 bg-white text-dark-900 text-sm font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg shadow-white/10">
                        Demoyu İncele
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-300 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-dark-900/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-gray-300 hover:text-safe-400"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button className="w-full py-3 bg-safe-600 text-white font-bold rounded-lg mt-4">
                                Demoyu İncele
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
