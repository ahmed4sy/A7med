import Page from "./Componets/Page";
import Cv from "./Componets/Cv";
import Scm from "./Componets/SM";
import Post from "./Componets/Post";
import Template from "./Componets/Container";
import "./Styles/App.css";
import "./Styles/StylePage.css";
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
  return (
    <div>
      <Page>
        <Cv />
        <Scm />
        <Template>{arrImgs}</Template>
      </Page>
    </div>
  );
}

export default App;
