import React from 'react';
import Collapsible from 'react-collapsible';
import '../styles/ProjectCard.scss';

const ProjectCard = ({ cardContent }) => {
  return (
    <div
      className="project-card"
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-delay={cardContent.animationDelay || 0}
    >
      <div className="project-card__container">
        <Collapsible trigger={cardContent.heading}>
          <div className="project-card__description-content">
            <p>{cardContent.description}</p>
            <ul>
              {cardContent.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <a
              href={cardContent.link}
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
        </Collapsible>
      </div>
    </div>
  );
};

export default ProjectCard;
