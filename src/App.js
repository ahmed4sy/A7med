import Page from "./Componets/Page";
import Cv from "./Componets/Cv";
import Scm from "./Componets/SM";
import Post from "./Componets/Post";
import Template from "./Componets/Container";
import "./Styles/App.css";
import "./Styles/StylePage.css";
function App() {
  const items = undefined;
  console.log(items?.[0]); // Prints undefined

  return (
    <div>
      <Page>
        <Cv />
        <Scm />
        <Template>
          <Post />
          <Post />
          <Post />
        </Template>
      </Page>
    </div>
  );
}

export default App;
