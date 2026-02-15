import { motion } from 'framer-motion';

const stats = [
    { value: "%100", label: "Çağrı Analizi", desc: "Örneklem hatası olmadan tam kapsam." },
    { value: "%40", label: "Maliyet Tasarrufu", desc: "Hatalı bilgi kaynaklı kayıplarda azalma." },
    { value: "%25", label: "Turnover Azalışı", desc: "Çalışan bağlılığı ile düşen sirkülasyon." },
    { value: "0", label: "Veri İhlali", desc: "KVKK tam uyumlu maskeleme teknolojisi." },
];

export default function Impact() {
    return (
        <section id="impact" className="py-24 bg-dark-900 border-y border-white/5 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            Rakamlarla <span className="text-safe-400">SafeVox Etkisi</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            SafeVox, sadece bir yazılım değil, ölçülebilir değer yaratan bir stratejik ortaktır.
                            Operasyonel körlüğü ortadan kaldırarak hem ekonomik hem de sosyal fayda sağlar.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="bg-white/5 p-6 rounded-2xl border border-white/5">
                                    <div className="text-4xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-safe-400 to-vox-400">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm font-bold text-gray-300 mb-1">{stat.label}</div>
                                    <div className="text-xs text-gray-500">{stat.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-safe-600/20 to-vox-600/20 rounded-3xl blur-3xl" />
                        <div className="relative bg-dark-800 border border-white/10 rounded-3xl p-8 shadow-2xl">
                            <h3 className="text-2xl font-bold mb-6 border-b border-white/10 pb-4">Kurumsal Kazanımlar</h3>
                            <ul className="space-y-4">
                                {[
                                    "Uyumluluk risklerinin minimize edilmesi",
                                    "Satış zekası ile gelir artışı",
                                    "Eğitim ve işe alım maliyetlerinde düşüş",
                                    "Objektif ve şeffaf performans kültürü",
                                    "Marka itibarının korunması"
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center gap-3 text-gray-300"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-safe-500/20 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-safe-500" />
                                        </div>
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
