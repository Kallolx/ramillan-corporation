import React from 'react';
import { ContactInfo } from '../types';
import { Phone, Mail, MapPin } from 'lucide-react';

interface ContactProps {
  title: string;
  data: ContactInfo;
  lang: 'en' | 'bn';
}

const Contact: React.FC<ContactProps> = ({ title, data, lang }) => {
  return (
    <section id="contact" className="py-24 bg-ramillan-light relative">
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 text-ramillan-dark ${lang === 'bn' ? 'font-bengali' : 'font-serif'}`}>
          {title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Contact Methods */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-ramillan-gold">
            <h3 className={`text-2xl font-bold mb-6 text-ramillan-dark ${lang === 'bn' ? 'font-bengali' : 'font-serif'}`}>
               {lang === 'en' ? 'Direct Contact' : 'সরাসরি যোগাযোগ'}
            </h3>
            
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-ramillan-light rounded-full flex items-center justify-center text-ramillan-dark shrink-0">
                        <Mail size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</p>
                        <a href={`mailto:${data.email}`} className="text-lg font-medium hover:text-ramillan-gold transition-colors break-all">
                            {data.email}
                        </a>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-ramillan-light rounded-full flex items-center justify-center text-ramillan-dark shrink-0">
                        <Phone size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                        <a href={`tel:${data.phone}`} className="text-lg font-medium hover:text-ramillan-gold transition-colors">
                            {data.phone}
                        </a>
                    </div>
                </div>
            </div>
          </div>

          {/* Card 2: Dhaka Office */}
          <div className="bg-ramillan-dark p-8 rounded-2xl shadow-lg text-ramillan-light relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-ramillan-gold rounded-full blur-3xl opacity-20 transform translate-x-10 -translate-y-10"></div>
             
             <h3 className={`text-2xl font-bold mb-6 text-ramillan-accent ${lang === 'bn' ? 'font-bengali' : 'font-serif'}`}>
               {lang === 'en' ? 'Dhaka Office' : 'ঢাকা অফিস'}
            </h3>
            <div className="flex items-start gap-4 relative z-10">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-ramillan-gold shrink-0">
                    <MapPin size={20} />
                </div>
                <p className={`text-lg leading-relaxed ${lang === 'bn' ? 'font-bengali' : 'font-sans'}`}>
                    {data.address1}
                </p>
            </div>
          </div>

          {/* Card 3: Khulna Office */}
          <div className="bg-[#3a3a3a] p-8 rounded-2xl shadow-lg text-ramillan-light relative overflow-hidden">
            <h3 className={`text-2xl font-bold mb-6 text-ramillan-accent ${lang === 'bn' ? 'font-bengali' : 'font-serif'}`}>
               {lang === 'en' ? 'Khulna Office' : 'খুলনা অফিস'}
            </h3>
            <div className="flex items-start gap-4 relative z-10">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-ramillan-gold shrink-0">
                    <MapPin size={20} />
                </div>
                <p className={`text-lg leading-relaxed ${lang === 'bn' ? 'font-bengali' : 'font-sans'}`}>
                    {data.address2}
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;