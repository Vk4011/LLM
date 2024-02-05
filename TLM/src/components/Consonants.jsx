import React from "react";
import "../styles/Consonants.css";
import Props from "./Props";

function Consonants() {
  const characters = ["\u0C1A", "\u0C1B", "\u0C1C", "\u0C1D", "\u0C1E"];
  console.log(characters);
  const classNames = ["t1", "t2", "t3", "t4", "t5"];
  const k = ["k m1", "k m2", "k m3", "k m4", "k m5"];
  const k2 = ["ch m1", "ch m2", "ch m3", "ch m4", "ch m5"];
  const k3 = ["th m1", "th m2", "th m3", "th m4", "th m5"];
  const k4 = ["p m1", "p m2", "p m3", "p m4", "p m5"];
  const k5 = ["y m1", "y m2", "y m3", "y m4", "y m5"];

  const r3 = ["\u0C1F", "\u0C20", "\u0C21", "\u0C22", "\u0C23"];
  const r4 = ["\u0C24", "\u0C25", "\u0C26", "\u0C27", "\u0C28"];
  const r5 = ["\u0C2A", "\u0C2B", "\u0C2C", "\u0C2D", "\u0C2E"];
  const r6 = ["\u0C2F", "\u0C30", "\u0C32", "\u0C35"];
  const r7 = ["\u0C36", "\u0C37", "\u0C38", "\u0C39", "\u0C33"];
  const teluguNumerals = [
    "\u0C66",
    "\u0C67",
    "\u0C68",
    "\u0C69",
    "\u0C6A",
    "\u0C6B",
    "\u0C6C",
    "\u0C6D",
    "\u0C6E",
    "\u0C6F",
  ];
  return (
    <>
      <div>
        <div className="c1">
          <div className="c t1">{"\u0C15"}</div>
          <div className="c t2">&#x0C16;</div>
          <div className="c t3">&#x0C17;</div>
          <div className="c t4">&#x0C18;</div>
          <div className="c t5">&#x0C19;</div>
        </div>
      </div>
      <br />
      <div>
        <br />
        <div>
          <Props characters={characters} classNames={k} />
        </div>
        <br />
        <div>
          <Props characters={r3} classNames={k2} />
        </div>
        <br />
        <div>
          <Props characters={r4} classNames={k3} />
        </div>
        <br />
        <div>
          <Props characters={r5} classNames={k4} />
        </div>
        <br />
        <div>
          <Props characters={r6} classNames={k5} />
        </div>
        <br />
        <div>
          <Props characters={r7} classNames={classNames} />
        </div>
        <br />
        {/* <div>
          <Props characters={teluguNumerals} classNames={classNames} />
        </div> */}
      </div>
    </>
  );
}

export default Consonants;
