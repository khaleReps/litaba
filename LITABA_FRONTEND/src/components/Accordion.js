import React from 'react';

function Accordion({ title, content }) {
  return (
    <div className="accordion">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="true" aria-controls="collapseExample">
            {title}
          </button>
        </h2>
        <div id="collapseExample" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
