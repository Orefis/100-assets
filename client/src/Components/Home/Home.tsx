import Sidebar from "../Sidebar/Siedebar";

function Home() {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div>
        <div>TITLE</div>
        <div>CONTENT</div>
      </div>
    </div>
    // TODO: zmienic nazwe z home na homepage
    // TODO: zrobic componenty title i content jak oreuzywalna czesc
  );
}

export default Home;
