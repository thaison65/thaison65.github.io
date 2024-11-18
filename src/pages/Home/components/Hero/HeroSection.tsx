import React from 'react';
import Infos from './Infos';
import { myPhoto } from '../../../../assets/images';
import { Button } from '../../../../components/common/Button';
import { BriefcaseSVG, DownloadSVG, LinkSVG, LocationSVG, MailSVG } from '../../../../assets/icons';
import { Modal } from '../../../../components/common/Modals';
import AboutHero from './AboutHero';
import SkillsList from './SkillsList';
import PDFContent from '../PDFContent';
import { skills } from '../../../../data';

import './Hero.scss';

interface HeroSectionProps {}

const items = [
  {
    id: 'email',
    icon: <MailSVG width={'20'} height={'20'} fill="#12F7D6" />,
    context: 'dangthaison8354@gmail.com',
  },
  {
    id: 'location',
    icon: <LocationSVG width={'20'} height={'20'} fill="#12F7D6" />,
    context: 'Binh Tan Distrist, Ho Chi Minh City, Viet Nam',
  },
  {
    id: 'briefcase',
    icon: <BriefcaseSVG width={'20'} height={'20'} fill="#12F7D6" />,
    context: 'Full-time',
  },
  {
    id: 'link',
    icon: <LinkSVG width={'20'} height={'20'} fill="#12F7D6" />,
    context: 'https://www.linkedin.com/in/thaison65',
  },
];

const HeroSection: React.FC<HeroSectionProps> = () => {
  const [show, setShow] = React.useState<boolean>(false);

  function handleClose() {
    setShow(false);
  }

  return (
    <section id="section-hero" className="content">
      <h1>Deverloper</h1>
      <div className="content-hero">
        <div className="content-cv">
          <article className="photo-name">
            <figure>
              <img src={myPhoto} alt="My Photo" loading="lazy" />
            </figure>

            <div>
              <h3>Shaun</h3>
              <p>Front-end developer</p>
            </div>
          </article>

          <section className="info">
            <Infos items={items} />
            <SkillsList skills={skills} />
          </section>

          <div className="btn-action">
            <Button variant="secondary" icon={<DownloadSVG />} onClick={() => setShow(true)}>
              Download CV
            </Button>
          </div>
          <Modal show={show} title="CV-DangThaiSon" onClose={handleClose}>
            <PDFContent />
          </Modal>
        </div>

        <section className="about-cv">
          <AboutHero />
        </section>
      </div>
    </section>
  );
};

export default HeroSection;
