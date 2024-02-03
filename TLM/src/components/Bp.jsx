import React from "react";
import Bprops from "./Bprops";

function Bp() {
  const block1UnicodeValues = ["\u0C15","\u0C16","\u0C17","\u0C18","\u0C19"];
  const block1Colors = ["pink","blue","green","purple","red","orange","violet"];
  const c1 = ["\u0C1A", "\u0C1B", "\u0C1C", "\u0C1D", "\u0C1E"];
  const c2 = ["\u0C1F", "\u0C20", "\u0C21", "\u0C22", "\u0C23"];
  const c3 = ['\u0C24', '\u0C25', '\u0C26', '\u0C27', '\u0C28'];
  const c4 = ['\u0C2A', '\u0C2B', '\u0C2C', '\u0C2D', '\u0C2E'];
  const c5 = [  '\u0C2F', '\u0C30', '\u0C32', '\u0C35'];
  const c6 = ['\u0C36', '\u0C37', '\u0C38', '\u0C39', '\u0C33'];

  return (
    <div>
      <Bprops unicodeValues={block1UnicodeValues} colors={block1Colors[0]} />
      <Bprops unicodeValues={c1} colors={block1Colors[1]} />
      <Bprops unicodeValues={c2} colors={block1Colors[2]} />
      <Bprops unicodeValues={c3} colors={block1Colors[3]} />
      <Bprops unicodeValues={c4} colors={block1Colors[4]} />
      <Bprops unicodeValues={c5} colors={block1Colors[5]} />
      <Bprops unicodeValues={c6} colors={block1Colors[6]} />
    </div>
  );
}

export default Bp;
