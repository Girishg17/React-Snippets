import React, { useState } from 'react';
import styles from './Accordions.module.css'; 

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    { title: "Section 1", content: "Content for section 1" },
    { title: "Section 2", content: "Content for section 2" },
    { title: "Section 3", content: "Content for section 3" }
  ];

  return (
    <div className={styles.accordion}>
      {accordionData.map((item, index) => (
        <div key={index} className={styles['accordion-item']}>
          <div 
            className={styles['accordion-title']} 
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.title}</span>
            <span className={styles.icon}>
              {activeIndex === index ? '−' : '+'}
            </span>
          </div>
          {activeIndex === index && (
            <div className={styles['accordion-content']}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
