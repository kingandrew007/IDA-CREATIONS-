import React, { useEffect } from 'react';
import './styles/OurWork.css';

function OurWork() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('.work-step');
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className='ourwork-outer'>
      <h1>
        <strong style={{ fontSize: '40px', color: 'rgb(254, 254, 147)' }}>
          Our Working Process
        </strong>
      </h1>
      <p style={{ color: 'white', fontSize: '24px' }} className='ourwork-color'>
        A well-structured workflow with great design execution
      </p>

      <div className="work-step">
        <div className="work-content">
          <h2 style={{ fontSize: '30px', color: 'rgb(254, 254, 147)' }} className="text-start">
            Discussion
          </h2>
          <strong style={{ color: 'white', fontSize: '24px' }} className='ourwork-color'>
            Understand the client's business goals and challenges to build a strong relationship.
          </strong>
        </div>
        <div className="work-image">
          <img src="https://idacreations.com/img/7566.jpg" alt="Discussion" />
        </div>
      </div>

      <div className="work-step">
        <div className="work-image">
          <img src="https://idacreations.com/img/3081627.jpg" alt="Ideate" />
        </div>
        <div className="work-content">
          <h5 style={{ fontSize: '30px', color: 'rgb(254, 254, 147)' }} className="text-start">
            Ideate
          </h5>
          <strong style={{ color: 'white', fontSize: '24px' }}>
            Gather ideas and create the first concept for the future product.
          </strong>
        </div>
      </div>

      <div className="work-step">
        <div className="work-content">
          <h5 style={{ fontSize: '30px', color: 'rgb(254, 254, 147)' }} className="text-start">
            Execution
          </h5>
          <strong style={{ color: 'white', fontSize: '24px' }}>
            Provide the first draft of a project, accept minor and major revisions.
          </strong>
        </div>
        <div className="work-image">
          <img src="https://idacreations.com/img/Work_7.jpg" alt="Execution" />
        </div>
      </div>
    </div>
  );
}

export default OurWork;
