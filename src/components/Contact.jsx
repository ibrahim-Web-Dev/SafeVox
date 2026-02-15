import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
    return (
        <footer id="contact" className="bg-dark-900 border-t border-white/5 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 lg:col-span-2">
                        <a href="#" className="text-3xl font-display font-bold text-white mb-6 block">
                            SafeVox
                        </a>
                        <p className="text-gray-400 max-w-sm mb-8">
                            İletişim merkezlerinde devrim yaratan yapay zeka teknolojisi.
                            Geleneksel denetimi yıkan, çalışanı güçlendiren dijital koç.
                        </p>
                        <div className="flex gap-4">
                            {[Github, Linkedin, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-safe-500 hover:text-white transition-all">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Hızlı Erişim</h4>
                        <ul className="space-y-4">
                            {['Özellikler', 'Nasıl Çalışır', 'Etki', 'Ekip'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-safe-400 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">İletişim</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="w-5 h-5 text-safe-500" />
                                ibrahimyilmaz0713@gmail.com
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="w-5 h-5 text-safe-500" />
                                0551 158 71 45
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-safe-500" />
                                Çankaya, Ankara
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; 2024 SafeVox. Tüm hakları saklıdır.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
                        <a href="#" className="hover:text-white transition-colors">Kullanım Koşulları</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
