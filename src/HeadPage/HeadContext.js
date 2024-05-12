import React, { createContext, useEffect, useState } from "react";
export const Word = createContext(null);

const HeadContext = ({ children }) => {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth });

  useEffect(() => {
    window.addEventListener("resize", () =>
      setWindowSize({ width: window.innerWidth })
    );
  }, []);

  const PhoneDisplay = async (type, setdata, data) => {
    if (type === "DynamicStyle") {
      await window.addEventListener("resize", () => {
        data(setdata);
      });
      if (windowSize.width >= 1200) {
        await data(setdata);
        return "desktop";
      } else if (windowSize.width <= 500) {
        await data(setdata);
        return "phone";
      } else {
        await data(setdata);
        return "ipad";
      }
    } else if (type === "ConstStyle") {
      if (windowSize.width <= 500) {
        for (let ran = 0; ran < setdata.length; ran++) {
          await setdata[ran]([data[ran]]);
        }
      }
    }
  };
  let [Prodict, setProdict] = useState(false);
  const [Viwes, setViwes] = useState(0);
  // const APIPromse = async () => {
  //   const fee = axios.get("http://127.0.0.1:8080/api/viwes");
  //   setViwes((await fee).data.viwes);
  // };

  // useEffect(() => console.log(Viwes), [Viwes]);

  // useEffect(() => APIPromse(), []);
  let StateWord = { Viwes, Prodict, setProdict, setViwes, PhoneDisplay };
  return <Word.Provider value={StateWord}>{children}</Word.Provider>;
};

export default HeadContext;
