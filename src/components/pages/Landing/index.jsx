import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg'; // adjust path if needed

import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import { decodeBase64 } from '../../../utils/decodeBase64.js';

export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const handleViewData = () => {
    navigate('/graphs'); // Adjust destination as needed
  };

  const handleDownloadData = () => {
    downloadCSV();
  };

  return (
    <div className="flex flex-col items-center bg-white w-full font-serif">
      
      {/* Header */}
      <header className="bg-[#5c5c4a] text-white w-full py-10 px-4 text-center">
        <h1 className="text-[40px] font-serif font-normal tracking-wide">
          Asylum Office Grant Rate Tracker
        </h1>
        <h3 className="mt-2 text-[13px] font-serif leading-tight mx-auto max-w-none whitespace-nowrap overflow-hidden text-ellipsis">
          The Asylum Office Grant Rate Tracker provides asylum seekers, researchers, policymakers, and the public an interactive tool to explore USCIS data on Asylum Office decisions
        </h3>
      </header>

      {/* Graph Section */}
      <section className="flex flex-col items-center py-12">
        <div className="flex flex-wrap justify-center gap-12 mb-8">
          
          {/* Graph Card - Office */}
          <div className="flex flex-col items-center">
            <img src={barGraph} alt="Bar Graph" className="w-[280px] h-[280px] object-contain" />
            <p className="mt-3 text-center text-black font-medium">
              Search Grant Rates By Office
            </p>
          </div>

          {/* Graph Card - Nationality */}
          <div className="flex flex-col items-center">
            <img src={pieChart} alt="Pie Chart" className="w-[280px] h-[280px] object-contain" />
            <p className="mt-3 text-center text-black font-medium">
              Search Grant Rates By Nationality
            </p>
          </div>

          {/* Graph Card - Timeline */}
          <div className="flex flex-col items-center">
            <img src={lineGraph} alt="Line Graph" className="w-[280px] h-[280px] object-contain" />
            <p className="mt-3 text-center text-black font-medium">
              Search Grant Rates Over Time
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center mt-4">
          <button
            onClick={handleViewData}
            className="bg-gray-400 text-white text-xs px-4 py-2 hover:bg-gray-500 transition"
            style={{ borderRadius: '0px' }}
          >
            View the Data
          </button>

          <button
            onClick={handleDownloadData}
            className="bg-gray-400 text-white text-xs px-4 py-2 hover:bg-gray-500 transition"
            style={{ borderRadius: '0px' }}
          >
            Download the Data
          </button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-20 px-8 gap-20 max-w-6xl mx-auto">
      <img
  src={paperStack}
  alt="Stack of Paper"
  className="w-[1400px] h-[400px] object-cover shadow-lg rounded"
/>

       <div className="max-w-2xl text-black text-center md:text-left">
  <h2 className="text-base font-semibold mb-4">Human Rights First</h2>
  <p className="text-xs leading-relaxed">
    Human Rights First has created a search tool to give you a user-friendly way to explore a data set of asylum decisions between FY 2016 and May 2021 by the USCIS Asylum Office, which we received through a Freedom of Information Act request. You can search for information on asylum grant rates by year, nationality, and asylum office, visualize the data with charts and heat maps, and download the data set.
  </p>
</div>
</section>

<section className="bg-white py-16 px-4 text-center">
  {/* Section Header */}
  <h2 className="text-2xl md:text-3xl font-serif font-medium mb-14">
    Systemic Disparity Insights
  </h2>

  {/* Stat Cards */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
    {/* Card 1 */}
    <div className="flex flex-col items-center text-center">
      <h3 className="text-xl font-medium mb-2">36%</h3>
      <p className="text-xs leading-relaxed max-w-xs">
        By the end of the Trump administration, the average asylum office grant rate had
        fallen 36% from an average of 44 percent in fiscal year 2016 to 28 percent in fiscal year 2020.
      </p>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col items-center text-center">
      <h3 className="text-xl font-medium mb-2">5%</h3>
      <p className="text-xs leading-relaxed max-w-xs">
        The New York asylum office grant rate dropped to 5 percent in fiscal year 2020.
      </p>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col items-center text-center">
      <h3 className="text-xl font-medium mb-2">6x Lower</h3>
      <p className="text-xs leading-relaxed max-w-xs">
        Between fiscal year 2017 and 2020, the New York asylum office’s average grant rate was
        6 times lower than the San Francisco asylum office.
      </p>
    </div>
  </div>

  {/* Button + Back to Top */}
  <div className="mt-12 flex flex-col items-center">
    <button
      className="bg-[#5A584E] text-white text-xs px-4 py-1.5 rounded hover:bg-[#4c4a41] transition"
    >
      Read More
    </button>
    <a href="#top" className="mt-3 text-xs text-gray-700 hover:text-black">
  Back To Top ^
</a>

  </div>
</section>

    </div>
  );
};

