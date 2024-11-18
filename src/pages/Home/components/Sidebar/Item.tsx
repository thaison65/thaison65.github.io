import React, { useState, useEffect, useRef } from 'react';

interface ItemIconProps {
  idHref: string;
  title: string;
  icon: React.ReactNode;
}

const ItemIcon: React.FC<ItemIconProps> = ({ idHref, title, icon }) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const itemRef = useRef<HTMLAnchorElement>(null);

  // Function to handle click
  const handleClick = (id: string) => {
    setActiveId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // IntersectionObserver for detecting section in view
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }, // Adjust threshold for triggering
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <a
      href={`#${idHref}`}
      className={`item-icon ${activeId === idHref ? 'active' : ''}`}
      title={title}
      onClick={() => handleClick(idHref)}
      ref={itemRef}
    >
      {icon}
      <span>{title}</span>
    </a>
  );
};

export default ItemIcon;
