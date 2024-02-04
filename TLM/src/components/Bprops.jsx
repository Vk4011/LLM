import React from 'react';
import Vathuluprop from './Props';
import "../styles/Block.css";


function Bprops({ unicodeValues, colors }) {
  return (
    <div>
      <div className="block">
        <div className="left">
          <div className="c1">
            {unicodeValues.map((value, index) => (
              <div className={`c t${index + 1} ${colors}`} key={index}>{value}</div>
            ))}
          </div>
        </div>
        <div className="right">
          <Vathuluprop unicodeValues={unicodeValues} color={colors} />
        </div>
      </div>
    </div>
  );
}

export default Bprops;
