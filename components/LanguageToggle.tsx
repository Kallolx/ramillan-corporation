import React from 'react';
import { Language } from '../types';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  currentLang: Language;
  onToggle: (lang: Language) => void;
  isScrolled?: boolean;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLang, onToggle, isScrolled }) => {
  return (
    <button
      onClick={() => onToggle(currentLang === 'en' ? 'bn' : 'en')}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm
        ${
          isScrolled 
            ? 'bg-ramillan-dark text-ramillan-light hover:bg-gray-800' 
            : 'bg-ramillan-light text-ramillan-dark hover:bg-ramillan-accent'
        }
      `}
    >
      <Globe size={16} />
      <span>{currentLang === 'en' ? 'বাংলা' : 'English'}</span>
    </button>
  );
};

export default LanguageToggle;