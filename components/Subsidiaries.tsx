import React from 'react';
import { SubsidiaryItem } from '../types';
import { Fish, Building2 } from 'lucide-react';

interface SubsidiariesProps {
  title: string;
  items: SubsidiaryItem[];
  lang: 'en' | 'bn';
}

const Subsidiaries: React.FC<SubsidiariesProps> = ({ title, items, lang }) => {
  return (
    <section id="subsidiaries" className="py-24 bg-ramillan-dark text-ramillan-light relative">
       {/* Background pattern */}
       <div className="absolute inset-0 opacity-5" 
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #CFC1A8 1px, transparent 0)', backgroundSize: '40px 40px' }}>
       </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 text-ramillan-light ${lang === 'bn' ? 'font-bengali' : 'font-serif'}`}>
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-ramillan-gold rounded-2xl transform translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300"></div>
              <div className="relative bg-[#333333] p-10 rounded-2xl border border-gray-700 h-full flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-ramillan-dark rounded-full border border-ramillan-gold/30">
                   {index === 0 ? <Building2 size={32} className="text-ramillan-accent"/> : <Fish size={32} className="text-ramillan-accent"/>}
                </div>
                
                <h3 className={`text-2xl font-bold mb-2 text-ramillan-accent ${lang === 'bn' ? 'font-bengali' : 'font-serif'}`}>
                  {item.name}
                </h3>
                <span className={`inline-block px-3 py-1 rounded-full text-xs tracking-widest bg-ramillan-dark text-ramillan-gold mb-4 border border-ramillan-gold/20 uppercase font-sans`}>
                  {item.type}
                </span>
                <p className={`text-gray-300 leading-relaxed ${lang === 'bn' ? 'font-bengali' : 'font-sans'}`}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subsidiaries;