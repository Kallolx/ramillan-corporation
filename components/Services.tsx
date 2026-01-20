import React from 'react';
import { ServiceItem } from '../types';
import { Ship, Plane, Truck, HardHat } from 'lucide-react';

interface ServicesProps {
  title: string;
  items: ServiceItem[];
  lang: 'en' | 'bn';
}

const iconMap: Record<string, React.ReactNode> = {
  'import': <Ship size={40} />,
  'export': <Plane size={40} />,
  'box': <Truck size={40} />,
  'briefcase': <HardHat size={40} />,
};

const Services: React.FC<ServicesProps> = ({ title, items, lang }) => {
  return (
    <section id="services" className="py-24 bg-ramillan-light relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-ramillan-accent rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 text-ramillan-dark ${lang === 'bn' ? 'font-bengali' : 'font-serif'}`}>
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-ramillan-accent/30"
            >
              <div className="w-16 h-16 bg-ramillan-light rounded-full flex items-center justify-center text-ramillan-dark mb-6 group-hover:bg-ramillan-dark group-hover:text-ramillan-gold transition-colors duration-300">
                {iconMap[item.icon]}
              </div>
              <h3 className={`text-xl font-bold mb-3 text-ramillan-dark ${lang === 'bn' ? 'font-bengali' : 'font-serif'}`}>
                {item.title}
              </h3>
              <p className={`text-gray-600 leading-relaxed ${lang === 'bn' ? 'font-bengali' : 'font-sans'}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;