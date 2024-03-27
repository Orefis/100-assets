function DashboardContent() {
  return (
    // TODO WSZYSTKO TUTAJ JEST DO POPRAWY............
    <div className="h-screen flex flex-row flex-wrap">
      <div className="grid grid-cols-3 lg:grid-cols-1 gap-5">
        <div className="card col-span-1">
          <div className="card-body h-full flex flex-col ">
            <div>
              <h1 className="text-lg font-bold tracking-wide">
                Congratulations ADMIN
              </h1>
              <p className="text-gray-600 mt-2">Now you have:</p>
            </div>

            <div className="flex flex-row mt-10 items-end">
              <div className="flex-1">
                <h1 className="font-extrabold text-4xl text-teal-400">0</h1>
                <p className="mt-3 mb-4 text-xs text-gray-500">
                  You have done 0% more assets today.
                </p>
                <a href="#" className="btn-shadow py-3">
                  view sales
                </a>
              </div>

              <div className="flex-1 ml-10 w-32 h-32 lg:w-auto lg:h-auto overflow-hidden"></div>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
