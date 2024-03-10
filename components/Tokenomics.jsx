import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

const Tokenomics = () => {
  const data = {
    datasets: [
      {
        data: [30, 70],
        backgroundColor: ["#FAA002", "#0082FF"],
        rotation: 252,
        borderWidth: 0,
        cutout: "70%",
      },
    ],
  };
  return (
    <div className="bg-white rounded-lg px-2 py-4 lg:p-10 lg:flex flex-col gap-y-6 hidden">
      <h2 className="text-4xl font-bold">Tokenomics</h2>
      <p className="text-2xl font-bold">Initial Distribution</p>
      <div className="flex gap-x-5 md:gap-x-10">
        <div className="w-28 md:w-52 h-28 md:h-52">
          <Doughnut data={data} />
        </div>
        <div className="flex flex-col justify-center gap-y-4 font-light text-[#3E424A]">
          <div className="flex items-center gap-x-4">
            <div className="bg-[#0082FF] w-3 h-3 rounded-full"></div>
            <p>Crowdsale investors: 80%</p>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="bg-[#FAA002] w-3 h-3 rounded-full"></div>
            <p>Foundation: 20%</p>
          </div>
        </div>
      </div>
      <p className="text-[#3E424A]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

export default Tokenomics;
