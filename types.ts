
// Fix: Import React to resolve 'Cannot find namespace React' when using React.ReactNode
import React from 'react';

export interface Milestone {
  year?: string;
  title: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}
