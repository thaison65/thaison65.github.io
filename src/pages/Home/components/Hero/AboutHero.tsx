import React from 'react';
import { MailSVG } from '../../../../assets/icons';

interface AboutHeroProps {}

const AboutHero: React.FC<AboutHeroProps> = () => {
  return (
    <>
      <div className="about-cv-header">
        <span className="context-code">&lt;h1&gt;</span>
        <p className="title-about">
          Hey <br /> I'm <span className="context-name">Shaun</span>, <br /> Front-end Developer
        </p>
        <span className="context-code">&lt;/h1&gt;</span>
      </div>

      <div className="about-cv-header">
        <span className="context-code">&lt;p&gt;</span>
        <p>
          I have extensive knowledge of front-end development and feel the most confident working
          with ReactJS. I always want to grow, make daily efforts to better understand the
          programming industry. With a solid background in JavaScript and TypeScript, I'm not afraid
          to step outside the box to learn and explore new areas in the field. In addition, I am
          self-learning other areas, such as Java (Spring Boot), to better meet the job
          requirements.
        </p>
        <span className="context-code">&lt;/p&gt;</span>
      </div>

      <div className="talk">
        <h2>Let's Talk</h2>
        <div>
          <MailSVG width={'24'} height={'24'} fill="#12F7D6" />
        </div>
      </div>
    </>
  );
};

export default AboutHero;
