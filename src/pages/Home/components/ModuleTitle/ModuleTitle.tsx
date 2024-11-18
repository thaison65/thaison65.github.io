import React from 'react';
import MouseSVG from '../../../../assets/icons/MouseSVG';
import { Line2SVG, LineSVG } from '../../../../assets/icons';

import './ModuleTitle.scss';

interface ModuleTitleProps {
  title?: string;
  description?: string;
}

const ModuleTitle: React.FC<ModuleTitleProps> = ({ title, description }) => {
  return (
    <>
      <section className="container-module-title">
        <div className="content-module">
          <MouseSVG fill="#12F7D6" />
          <LineSVG fill="#ffffff" />
        </div>
        {title && description && (
          <div className="content-module-title content-module">
            <h1>{title}</h1>
            <Line2SVG />
            <p>{description}</p>
          </div>
        )}
      </section>
    </>
  );
};

export default ModuleTitle;
