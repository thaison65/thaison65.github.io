import React from 'react';
import { DiscordSVG, GithubSVG, LinkedinSVG } from '../../../assets/icons';
import { Link } from 'react-router-dom';

// Remove empty IconListProps interface
export interface SupLinkProps {
  children: React.ReactNode;
  url: string;
}

const SupLink: React.FC<SupLinkProps> = ({ children, url }) => {
  if (url) {
    return (
      <a href={url} target="_blank" className="icon-item" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link to="/" className="icon-item">
      {children}
    </Link>
  );
};

const IconList: React.FC = React.memo(() => {
  const icons = [
    {
      url: 'https://www.linkedin.com/in/thaison65',
      icon: <LinkedinSVG fill="#12F7D6" width={'20'} height={'20'} />,
      title: 'Linkedin',
    },
    {
      url: 'https://github.com/thaison65',
      icon: <GithubSVG fill="#12F7D6" width={'20'} height={'20'} />,
      title: 'Github',
    },
    { url: '', icon: <DiscordSVG fill="#12F7D6" width={'20'} height={'20'} />, title: 'Discord' },
  ];

  return (
    <>
      {icons.map((item, index) => (
        <SupLink url={item.url} key={index}>
          <figure>{item.icon}</figure>
          <span className="icon-title">{item.title}</span>
        </SupLink>
      ))}
    </>
  );
});

export default IconList;
