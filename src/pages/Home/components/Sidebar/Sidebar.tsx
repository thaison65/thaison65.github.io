import React from 'react';

import './Sidebar.scss';
import { CodeSVG, EditSVG, GridSVG, MailSVG, MonitorSVG, UserSVG } from '../../../../assets/icons';
import Item from './Item';

export interface SidebarProps {}

const icons = [
  {
    id: 'home',
    title: 'Home',
    icon: <GridSVG width={'24'} height={'24'} fill="#ffffff" />,
  },
  {
    id: 'about',
    title: 'About Me',
    icon: <UserSVG width={'24'} height={'24'} fill="#ffffff" />,
  },
  {
    id: 'skill',
    title: 'Skills',
    icon: <CodeSVG width={'24'} height={'24'} fill="#ffffff" />,
  },
  {
    id: 'work',
    title: 'Works',
    icon: <MonitorSVG width={'24'} height={'24'} fill="#ffffff" />,
  },
  {
    id: 'blog',
    title: 'Blogs',
    icon: <EditSVG width={'24'} height={'24'} fill="#ffffff" />,
  },
  {
    id: 'contact',
    title: 'Contact',
    icon: <MailSVG width={24} height={24} fill="#ffffff" />,
  },
];

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <aside id="sidebar">
      {icons.map((item) => {
        return <Item key={item.id} idHref={item.id} title={item.title} icon={item.icon} />;
      })}
    </aside>
  );
};

export default Sidebar;
