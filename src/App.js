import Page from "./Componets/Page";
import Cv from "./Componets/Cv";
import Scm from "./Componets/SM";
import Post from "./Componets/Post";
import Template from "./Componets/Container";
import "./Styles/App.css";
import "./Styles/StylePage.css";
import { useEffect, useState } from "react";
function App() {
  const imgsP = [
    { id: 1, img: "Cmoney", link: "https://cmoney-one.vercel.app/" },
    { id: 2, img: "Bank Lonas", link: "https://bank-loans.vercel.app/" },
    { id: 3, img: "Select Exam", link: "https://seletc.vercel.app/" },
  ];
  let arrImgs = imgsP.map((data) => {
    return (
      <Post Key={data.id} namep={data.img} key={data.id} link={data.link} />
    );
  });
  const [width, setWidth] = useState(window.innerWidth);
  let [loa, setLoa] = useState("sizeC");
  useEffect(() => {
    setWidth(window.innerWidth);
    if (width <= 500) {
      setLoa("sizeP");
    }
  }, [width]);
  let [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <div className={"load " + loa}>
          <div className="loading"></div>
          <img alt="loading" src="wait.gif" />
        </div>
      ) : (
        <div>
          <Page>
            <Cv />
            <Scm />
            <Template>{arrImgs}</Template>
          </Page>
        </div>
      )}
    </>
  );
}

export default App;
