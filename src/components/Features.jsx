import { motion } from 'framer-motion';
import { Shield, Cpu, Activity, GraduationCap, Mic, Smile } from 'lucide-react';

const features = [
    {
        icon: <Mic className="w-8 h-8 text-safe-400" />,
        title: "Akustik & Semantik Analiz",
        description: "Sadece kelimeleri değil, ses tonundaki stresi ve frekans değişimlerini de analiz eden hibrit yapı.",
        color: "from-safe-500/20 to-safe-500/5"
    },
    {
        icon: <Smile className="w-8 h-8 text-vox-400" />,
        title: "Duygu İklimi Ölçümü",
        description: "Müşteri ve temsilci arasındaki duygusal atmosferi ölçerek 'denetim körlüğü'ne son verir.",
        color: "from-vox-500/20 to-vox-500/5"
    },
    {
        icon: <GraduationCap className="w-8 h-8 text-purple-400" />,
        title: "Otonom Eğitim Modülleri",
        description: "Tespit edilen eksikliklere göre Turkcell Geleceği Yazanlar'dan kişiye özel eğitim ataması yapar.",
        color: "from-purple-500/20 to-purple-500/5"
    },
    {
        icon: <Shield className="w-8 h-8 text-green-400" />,
        title: "KVKK Veri Kalkanı",
        description: "TCKN ve telefon gibi hassas verileri milisaniyeler içinde maskeleyerek %100 güvenli kayıt tutar.",
        color: "from-green-500/20 to-green-500/5"
    },
    {
        icon: <Activity className="w-8 h-8 text-red-400" />,
        title: "Tükenmişlik Tespiti",
        description: "Yorgunluk ve stres seviyelerini izleyerek proaktif mola önerileri sunar, çalışan refahını korur.",
        color: "from-red-500/20 to-red-500/5"
    },
    {
        icon: <Cpu className="w-8 h-8 text-amber-400" />,
        title: "Rasyonel Raporlama",
        description: "Orta kademe yöneticilere veri odaklı, objektif performans raporları sunar.",
        color: "from-amber-500/20 to-amber-500/5"
    }
];

export default function Features() {
    return (
        <section id="features" className="py-24 relative bg-dark-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-4">
                        Geleceğin Çağrı Merkezi Teknolojisi
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        SafeVox, sıradan bir denetim aracı değil; operasyonunuzun görünmeyen risklerini
                        yöneten bir yapay zeka ekosistemidir.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-8 rounded-3xl bg-gradient-to-br ${feature.color} border border-white/5 hover:border-white/10 transition-all hover:translate-y-[-5px]`}
                        >
                            <div className="mb-6 bg-dark-900/50 w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/5">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
