import React from 'react';

import { HeroSection } from './components/Hero/index';

import './Home.scss';
import { Sidebar } from './components/Sidebar';
import { About } from './components/About';

export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div id="home">
      <Sidebar />
      <HeroSection />
      <About />
    </div>
  );
};

export default HomePage;
