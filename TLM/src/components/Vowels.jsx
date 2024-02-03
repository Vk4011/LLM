import React, { useState } from "react";
import "../styles/Vowels.css";

const Vowels = () => {
  return (
    <div>
      <center>
        <div className="container">
          <div className="t t1">&#x0C05;</div>
          <div className="t t2">&#x0C06;</div>
          <div className="t t3">&#x0C07;</div>
          <div className="t t4">&#x0C08;</div>
          <div className="t t5">&#x0C09;</div>
          <div className="t t6">&#x0C0A;</div>
          <div className="t t7">&#x0C0B;</div>
          <div className="t t8">&#x0C0C;</div>
          <div className="t t9">&#x0C0E;</div>
          <div className="t t10">&#x0C0F;</div>
          <div className="t t11">&#x0C10;</div>
          <div className="t t12">&#x0C12;</div>
          <div className="t t13">&#x0C13;</div>
          <div className="t t14">&#x0C14;</div>
          <div className="t t15">&#x0C05;&#x0C02;</div>
          <div className="t t16">&#x0C05;&#x0C03;</div>
        </div>
        <V />
      </center>
    </div>
  );
};

function V() {
  return (
    <div>
      <div className="container">
        <div className="t t1">{"\u0C3E"}</div>
        <div className="t t2">{"\u0C3F"}</div>
        <div className="t t3">{"\u0C40"}</div>
        <div className="t t4">{"\u0C41"}</div>
        <div className="t t5">{"\u0C42"}</div>
        <div className="t t6">{"\u0C43"}</div>
        <div className="t t7">{"\u0C44"}</div>
        <div className="t t8">{"\u0C62"}</div>
        <div className="t t9">{"\u0C63"}</div>
        <div className="t t10">{"\u0C46"}</div>
        <div className="t t11">{"\u0C47"}</div>
        <div className="t t12">{"\u0C48"}</div>
        <div className="t t13">{"\u0C4A"}</div>
        <div className="t t14">{"\u0C4B"}</div>
        <div className="t t15">{"\u0C4C"}</div>
        <div className="t t16">{"\u0C02"}</div>
        <div className="t t17">{"\u0C03"}</div>
      </div>
    </div>
  );
}

export default Vowels;
