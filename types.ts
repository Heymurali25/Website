
import React from 'react';

export interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ExpertiseItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ContentFormat {
  icon: React.ReactNode;
  title: string;
  example: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface Stat {
    value: string;
    label: string;
}
