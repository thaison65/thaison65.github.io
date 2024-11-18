import React from 'react';
import ModuleTitle from '../ModuleTitle/ModuleTitle';
import { imageWorking } from '../../../../assets/images';

import './About.scss';

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <>
      <section id="about" className="content">
        <ModuleTitle />
        <div className="container-about">
          <div className="content-about">
            <div className="about-title">
              <span>About Me</span>
            </div>
            <div className="about-text">
              <span className="context-code">&lt;p&gt;</span>

              <div className="content-text">
                <h3>Hello!</h3>
                <p>
                  My name is Shaun and I specialize in web development using <span>HTML</span>,{' '}
                  <span>CSS</span>, <span>JS</span>, and <span>REACT</span>, etc.,
                </p>
                <p>
                  I am a highly motivated individual and eternal optimist, dedicated to writing
                  clear, concise, powerful, and efficient code. Striving to constantly learn and
                  improve.
                </p>
                <p>
                  When I am not coding, I am blogging, reading, or working on a new hands-on art
                  project like photography.
                </p>
                <p>
                  I like to have my perspectives and beliefs challenged to 1 Seen through new eyes.
                </p>
              </div>

              <span className="context-code">&lt;/p&gt;</span>
            </div>
          </div>
          <figure>
            <img src={imageWorking} alt="Photo you working" />
          </figure>
        </div>
      </section>
    </>
  );
};

export default About;
