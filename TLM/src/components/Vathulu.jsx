import React from "react";
import Vathuluprop from "./Vathuluprop";

function Vathulu() {
  const unicodeValues = ["\u0C15", "\u0C16", "\u0C17", "\u0C18", "\u0C19"];
  const colors = ['a', 'b', 'c', 'd', 'e', 'f'];

  const r1 = ["\u0C1A", "\u0C1B", "\u0C1C", "\u0C1D", "\u0C1E"];
  const r2 = ["\u0C1F", "\u0C20", "\u0C21", "\u0C22", "\u0C23"];
  const r3 = ["\u0C24", "\u0C25", "\u0C26", "\u0C27", "\u0C28"];
  const r4 = ["\u0C2A", "\u0C2B", "\u0C2C", "\u0C2D", "\u0C2E"];
  const r5 = ["\u0C2F", "\u0C30", "\u0C32", "\u0C35"];
  const r6 = ["\u0C36", "\u0C37", "\u0C38", "\u0C39", "\u0C33"];
  

  return (
    <div>
      {/* <h1>Wattles</h1> */}
      <Vathuluprop unicodeValues={unicodeValues} color={colors[0]} />
      <Vathuluprop unicodeValues={r1} color={colors[1]} />  
      <Vathuluprop unicodeValues={r2} color={colors[2]} />
      <Vathuluprop unicodeValues={r3} color={colors[3]} />
      <Vathuluprop unicodeValues={r4} color={colors[4]} />
      <Vathuluprop unicodeValues={r5} color={colors[5]} />
      <Vathuluprop unicodeValues={r6} color={colors[0]} />
    </div>
  );
}

export default Vathulu;






