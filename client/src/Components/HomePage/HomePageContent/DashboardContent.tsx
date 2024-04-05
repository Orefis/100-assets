import HeaderBar from "../../HeaderBar/HeaderBar";

function DashboardContent() {
  return (
    <div>
      <div>
        <HeaderBar>Dashboard</HeaderBar>
      </div>
      <div className="py-4 px-4 bg-gray-400 flex items-center justify-between">
        <div className="m-2 h- w-20 flex bg-white">box 1</div>
        <div className="m-2 h-20 w-20 flex bg-white">box 1</div>
        <div className="m-2 h-20 w-20 flex bg-white">box 1</div>
        <div className="m-2 h-20 w-20 flex bg-white">box 1</div>
      </div>
    </div>
  );
}

export default DashboardContent;
