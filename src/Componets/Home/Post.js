import { useEffect, useState } from "react";
// nan
export default function Post({ namep, Key, link, classNam, styleSheet }) {
  let [clana, setCla] = useState();
  useEffect(() => {
    if (Key === 1) {
      setCla("c1lan");
    } else if (Key === 2) {
      setCla("c2lan");
    } else if (Key === 3) {
      setCla("c3lan");
    }
  }, [Key]);
  return (
    <a href={link}>
      <div className={classNam + " Post " + clana} style={styleSheet}>
        <h1>{namep}</h1>
      </div>
    </a>
  );
}
