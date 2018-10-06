import React from 'react';

function Output({calculate}) {
  return (
    <div className="row">
      <output>{calculate}</output>
    </div>
  );
}

export default Output;
