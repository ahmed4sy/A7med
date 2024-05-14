import Bar from "../Home/Bar";
import Post from "../Home/Post";
import TempData from "./../../Data/templates.json";
export default function Projects(params) {
  const data = TempData.data;
  return (
    <div className={"ProjectsPage"}>
      <Post
        namep={data[0].img}
        link={data[0].link}
        Key={data[0].id}
        classNam="Postpage"
        styleSheet={{ top: 85, left: 50, width: 210, height: 180 }}
      />
      <Post
        namep={data[1].img}
        link={data[1].link}
        Key={data[1].id}
        classNam="Postpage"
        styleSheet={{ top: 300, left: 50, width: 210, height: 180 }}
      />
      <Post
        namep={data[2].img}
        link={data[2].link}
        Key={data[2].id}
        classNam="Postpage"
        styleSheet={{ top: 500, left: 50, width: 210, height: 180 }}
      />
      <Bar />
    </div>
  );
}
