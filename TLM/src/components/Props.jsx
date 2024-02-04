import React from "react";
import "../styles/Vathulu.css";

function Props({ unicodeValues, color }) {
  const renderConsonant = (consonant) => {
    return unicodeValues.map((value, index) => (
      <div className="vth" key={index}>
        <div className={`r1 ${color}`}>{`${value}\u0C3F`}</div>
        <div className={`r1 ${color}`}>{`${value}\u0C40`}</div>
        <div className={`r1 ${color}`}>{`${value}\u0C41`}</div>
        <div className={`r1 ${color}`}>{`${value}\u0C42`}</div>
        <div className={`r1 ${color}`}>{`${value}\u0C43`}</div>
        <div className={`r1 ${color}`}>{`${value}\u0C44`}</div>
        <div className={`r1 ${color}`}>{`${value}\u0C62`}</div>
        <div className={`r1 ${color}`}>{`${value}\u0C63`}</div>
        <div className={`r1 ${color}`}>{`${value}\u0C46`}</div>
        <div className={`r1 ${color}`}>{`${value}\u0C47`}</div>
        <div className={`r1 ${color}`}>{`${value}\u0C48`}</div>
        <div className={`r1 ${color}`}>{`${value}\u0C4A`}</div>
        <div className={`r1 ${color}`}>{`${value}\u0C4B`}</div>
        <div className={`r1 ${color}`}>{`${value}\u0C4C`}</div>
        <div className={`r1 ${color}`}>{`${value}\u0C02`}</div>
        <div className={`r1 ${color}`}>{`${value}\u0C03`}</div>
      </div>
    ));
  };

  return (
    <div>
      <div className="vthulu">{renderConsonant(unicodeValues, color)}</div>
    </div>
  );
}

export default Props;
