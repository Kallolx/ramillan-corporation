import React from 'react';
import { Content } from '../types';

interface CEOProfileProps {
  data: Content['ceo'];
  lang: 'en' | 'bn';
}

const CEOProfile: React.FC<CEOProfileProps> = ({ data, lang }) => {
  return (
    <section id="ceo" className="py-24 bg-ramillan-accent/20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Image Side (Simulated) */}
          <div className="w-full md:w-1/2 flex justify-center relative">
             <div className="absolute inset-0 bg-ramillan-gold/20 rounded-full blur-3xl transform -translate-x-10 translate-y-10"></div>
             
             {/* Card Style Frame for CEO Image */}
             <div className="relative w-80 h-96 md:w-96 md:h-[30rem] bg-ramillan-dark rounded-t-full rounded-b-3xl p-3 shadow-2xl">
                 <div className="w-full h-full bg-gray-600 rounded-t-full rounded-b-2xl overflow-hidden relative">
                    <img 
                        src="https://picsum.photos/600/800?grayscale" 
                        alt={data.name} 
                        className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ramillan-dark via-transparent to-transparent opacity-90"></div>
                 </div>
                 
                 {/* Floating Name Badge */}
                 <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[90%] bg-ramillan-light p-4 rounded-xl shadow-lg text-center">
                    <h3 className={`text-xl font-bold text-ramillan-dark ${lang === 'bn' ? 'font-bengali' : 'font-serif'}`}>
                        {data.name}
                    </h3>
                    <p className={`text-sm text-gray-600 uppercase tracking-widest ${lang === 'bn' ? 'font-bengali' : 'font-sans'}`}>
                        {data.designation}
                    </p>
                 </div>
             </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2">
             <div className="inline-block px-4 py-2 bg-ramillan-dark text-ramillan-gold text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6">
                {lang === 'en' ? 'Leadership' : 'নেতৃত্ব'}
             </div>
             
             <h2 className={`text-4xl md:text-5xl font-bold text-ramillan-dark mb-4 ${lang === 'bn' ? 'font-bengali' : 'font-serif'}`}>
                {data.name}
             </h2>
             
             <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-ramillan-gold"></div>
                <span className={`text-lg font-medium text-ramillan-gray ${lang === 'bn' ? 'font-bengali' : 'font-serif'}`}>
                    {data.member}
                </span>
             </div>

             <blockquote className="relative">
                <span className="absolute -top-6 -left-4 text-8xl text-ramillan-gold opacity-30 font-serif">"</span>
                <p className={`text-xl md:text-2xl text-ramillan-dark leading-relaxed italic relative z-10 ${lang === 'bn' ? 'font-bengali' : 'font-serif'}`}>
                    {data.quote}
                </p>
             </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOProfile;