import React, { createContext, useEffect, useState } from "react";
import TempData from "./../Data/templates.json";
import Post from "../Componets/Home/Post";

export const Word = createContext(null);

let HeadContext = ({ children }) => {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth });

  const [stateBarList, setBarList] = useState({
    turn: false,
    click: true,
    type: "defult",
  });
  const imgsP = TempData.data;
  let arrImgs = imgsP.map((data) => {
    return (
      <Post Key={data.id} namep={data.img} key={data.id} link={data.link} />
    );
  });
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 500) {
        sessionStorage.setItem("Barlist", "none");
      }
      setWindowSize({ width: window.innerWidth });
    });
  }, []);
  let [onNewNote, setNewNote] = useState(false);
  let [logDisplay, setlogDisplayPhone] = useState("desktop");
  useEffect(() => {
    if (windowSize.width >= 1200) {
      setlogDisplayPhone("desktop");
    } else if (windowSize.width <= 500) {
      setlogDisplayPhone("phone");
    } else {
      setlogDisplayPhone("ipad");
    }
  }, [windowSize.width]);
  const PhoneDisplay = async (type, setdata, data) => {
    if (type === "DynamicStyle") {
      window.addEventListener("resize", () => {
        data(setdata);
      });
      if (windowSize.width >= 1200) {
        await data(setdata);
      } else if (windowSize.width <= 500) {
        await data(setdata);
      } else {
        await data(setdata);
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
  const [APINot, setAPiNot] = useState("none");
  // const APIPromse = async () => {
  //   const fee = axios.get("http://127.0.0.1:8080/api/viwes");
  //   setViwes((await fee).data.viwes);
  // };

  // useEffect(() => console.log(Viwes), [Viwes]);

  // useEffect(() => APIPromse(), []);
  let StateWord = {
    Viwes,
    Prodict,
    setProdict,
    setViwes,
    PhoneDisplay,
    logDisplay,
    stateBarList,
    setBarList,
    arrImgs,
    onNewNote,
    setNewNote,
    APINot,
    setAPiNot,
  };
  return <Word.Provider value={StateWord}>{children}</Word.Provider>;
};

export default HeadContext;
