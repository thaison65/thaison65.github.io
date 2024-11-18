import React from 'react';

interface InfoProps {
  items: ItemInfoProps[];
}

export interface ItemInfoProps {
  id: string;
  icon: React.ReactNode;
  context: string;
}

const ItemInfo: React.FC<ItemInfoProps> = (props) => {
  const { id, icon, context } = props;

  return (
    <div key={id} className="item-info">
      {icon}
      <p>{context}</p>
    </div>
  );
};

const Infos: React.FC<InfoProps> = ({ items }) => {
  return (
    <>
      {items.map((value: ItemInfoProps) => (
        <ItemInfo key={value.id} {...value} />
      ))}
    </>
  );
};

export default Infos;
