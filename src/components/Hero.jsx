import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Activity, Zap, Shield } from 'lucide-react';
import VideoModal from './VideoModal';

export default function Hero() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-safe-600/20 rounded-full blur-[100px] animate-blob"></div>
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-vox-600/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-safe-300 text-sm font-medium mb-6 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-safe-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-safe-500"></span>
                        </span>
                        Yapay Zeka Destekli Performans Yönetimi
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-6">
                        <span className="block text-white">Geleneksel Denetimi</span>
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-safe-400 via-vox-400 to-purple-400">
                            Yıkan Dijital Koç
                        </span>
                    </h1>

                    <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
                        Müşteri temsilcilerinizi denetleyen değil, geliştiren yapay zeka.
                        Duygu analizi, stres yönetimi ve otonom eğitim modülleriyle
                        operasyonel verimliliği %100'e çıkarın.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-safe-600 to-vox-600 rounded-xl font-bold text-white hover:opacity-90 transition-all shadow-lg shadow-safe-500/25 group">
                            Hemen Keşfet
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => setIsVideoOpen(true)}
                            className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-white hover:bg-white/10 transition-all backdrop-blur-sm group"
                        >
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                <Play className="w-4 h-4 fill-current ml-0.5" />
                            </div>
                            Tanıtım Filmi
                        </button>
                    </div>

                    <div className="mt-12 flex items-center gap-8 text-gray-500 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <Shield className="w-5 h-5 text-safe-500" />
                            <span>%100 KVKK Uyumlu</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Activity className="w-5 h-5 text-vox-500" />
                            <span>Gerçek Zamanlı Analiz</span>
                        </div>
                    </div>
                </motion.div>

                {/* Visual Element */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative z-10 bg-dark-800/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
                        {/* Mock Interface */}
                        <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/5">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center border-2 border-green-500">
                                    <span className="text-lg font-bold">A.Y</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">Ahmet Yılmaz</h3>
                                    <p className="text-sm text-gray-400">Kıdemli Temsilci</p>
                                </div>
                            </div>
                            <div className="px-4 py-2 bg-green-500/10 text-green-400 rounded-lg text-sm font-bold border border-green-500/20">
                                Skor: 94/100
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-gray-400 text-sm">Duygu Durumu</span>
                                    <span className="text-safe-400 text-sm font-bold">Pozitif</span>
                                </div>
                                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full w-[85%] bg-gradient-to-r from-safe-500 to-vox-500"></div>
                                </div>
                            </div>

                            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-gray-400 text-sm">Stres Seviyesi</span>
                                    <span className="text-green-400 text-sm font-bold">Düşük</span>
                                </div>
                                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full w-[15%] bg-green-500"></div>
                                </div>
                            </div>

                            <div className="p-4 bg-safe-500/10 rounded-xl border border-safe-500/20 flex gap-4 items-start">
                                <Zap className="w-5 h-5 text-safe-400 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-white font-bold text-sm mb-1">AI Önerisi</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                        Müşteri memnuniyeti yüksek. Çözüm odaklı yaklaşımınız için tebrikler.
                                        Bir sonraki öneri: Çapraz satış fırsatını değerlendirin.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Absolute floating elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-8 top-1/2 p-4 bg-dark-900 border border-white/10 rounded-2xl shadow-xl flex items-center gap-3"
                        >
                            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-bold">Ses Analizi Aktif</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <VideoModal
                isOpen={isVideoOpen}
                onClose={() => setIsVideoOpen(false)}
                videoId="vROLFZpDPvw"
            />
        </section>
    );
}
