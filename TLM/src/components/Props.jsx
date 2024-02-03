import React from 'react';

function Props({ characters, classNames }) {
  return (
    <div>
      <div className="c1">
        {characters.map((char, index) => (
          <div key={index} className={`c ${classNames[index]}`}>
            {char}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Props;
