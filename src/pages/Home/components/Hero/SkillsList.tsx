import React from 'react';

interface SkillsListProps {
  skills: string[];
}

const SkillsList: React.FC<SkillsListProps> = ({ skills }) => {
  return (
    <div className="info-lable">
      {skills.map((skill, index) => (
        <span key={index}>{skill}</span>
      ))}
    </div>
  );
};

export default SkillsList;
