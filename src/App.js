import Page from "./Componets/Home/Page";
import Cv from "./Componets/Home/Cv";
import Scm from "./Componets/Home/SM";
import Post from "./Componets/Home/Post";
import Template from "./Componets/Home/Container";
import TempData from "./Data/templates.json";
import "./Styles/App.css";
import "./Styles/StylePage.css";
import { useEffect, useState } from "react";
function App() {
  const imgsP = TempData.data;
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
    if (!sessionStorage.getItem("loading")) {
      sessionStorage.setItem("loading", "none");
    }

    if (sessionStorage.getItem("loading") !== "view") {
      setloading(true);
      setTimeout(() => {
        setloading(false);
      }, 1000);
      sessionStorage.setItem("loading", "view");
    }
  }, [loading]);

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
