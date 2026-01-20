export type Language = 'en' | 'bn';

export interface SectionContent {
  title: string;
  subtitle?: string;
  description?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface SubsidiaryItem {
  name: string;
  type: string;
  description: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address1: string;
  address2: string;
}

export interface Content {
  nav: {
    home: string;
    services: string;
    subsidiaries: string;
    ceo: string;
    contact: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
  };
  services: {
    sectionTitle: string;
    items: ServiceItem[];
  };
  subsidiaries: {
    sectionTitle: string;
    items: SubsidiaryItem[];
  };
  ceo: {
    name: string;
    designation: string;
    member: string;
    quote: string;
  };
  contact: {
    sectionTitle: string;
    getInTouch: string;
    info: ContactInfo;
  };
  footer: {
    rights: string;
  };
}