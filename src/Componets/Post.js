import { useEffect, useState } from "react";

export default function Post({ namep, Key, link }) {
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
      <div className={"Post " + clana}>
        <h1>{namep}</h1>
      </div>
    </a>
  );
}
