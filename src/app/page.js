
"use client";
import Image from "next/image";
import { useState } from "react";
import { FaChartBar, FaMedal, FaFileAlt } from "react-icons/fa"; // Importing icons
import Page1 from "./page1"; // Importing Page1 component
import Page2 from "./page2"; // Importing Page2 component
import Page3 from "./page3"; // Importing Page3 component
import { MdPerson } from "react-icons/md"; // Import the human icon

export default function HomePage() {
  const [activePage, setActivePage] = useState("page2");

  const renderContent = () => {
    switch (activePage) {
      case "page1":
        return <Page1 />; // Page1 content will be displayed (Dashboard)
      case "page2":
        return <Page2 />; // Page2 content will be displayed (Skill Test)
      case "page3":
        return <Page3 />; // Page3 content will be displayed (Internship)
      default:
        return <HomeContent />; // Default Home content
    }
  };

  return (
    <>
      <div>
        <div className="flex justify-between py-6 px-16  ">
          <div className=" border-2 border-red-600">
            <Image src="/assets/logo.png" width={150} height={50} />
          </div>
          <div className="flex items-center space-x-2 border-solid border-gray-200 rounded-lg p-2 shadow-sm bg-white">
      {/* Icon */}
      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center ">
        <MdPerson className="text-gray-600 text-2xl" /> {/* Icon with size and color */}
      </div>
      
      {/* Name */}
      <div className="text-black font-semibold">
        Rahil Siddique {/* Replace with dynamic name if needed */}
      </div>
    </div>
        </div>

        <div className="flex h-screen overflow-hidden border-solid   border-t-1 border-r-0 border-b-0 border-l-0  border-gray-100   ">
          {/* Left Navbar */}
          <nav className="w-64 bg-white p-6 shadow-md border border-black">
            <ul className="list-none p-0 space-y-4">
              <li>
                <button
                  onClick={() => setActivePage("page1")}
                  className={`flex items-center gap-3 w-full py-3 px-4  border-none transition-all duration-300 ${
                    activePage === "page1"
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-600 bg-white"
                  }`}
                >
                  <FaChartBar
                    size={20}
                    className={
                      activePage === "page1" ? "text-blue-600" : "text-gray-600"
                    }
                  />
                  <span className="text-lg font-medium">Dashboard</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage("page2")}
                  className={`flex items-center gap-3 w-full py-3 px-4 border-none transition-all duration-300 ${
                    activePage === "page2"
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-600 bg-white"
                  }`}
                >
                  <FaMedal
                    size={20}
                    className={
                      activePage === "page2" ? "text-blue-600" : "text-gray-600"
                    }
                  />
                  <span className="text-lg font-medium">Skill Test</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage("page3")}
                  className={`flex items-center gap-3 w-full py-3 px-4 border-none transition-all duration-300 ${
                    activePage === "page3"
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-600   bg-white"
                  }`}
                >
                  <FaFileAlt
                    size={20}
                    className={
                      activePage === "page3" ? "text-blue-600" : "text-gray-600"
                    }
                  />
                  <span className="text-lg font-medium">Internship</span>
                </button>
              </li>
            </ul>
          </nav>

          {/* Right Main Content */}
          <main className="flex-1 p-6 overflow-y-auto">
            {renderContent()} {/* Render content based on state */}
          </main>
        </div>
      </div>
    </>
  );
}

// Components for the Home page content
function HomeContent() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Welcome to the Homepage</h1>
      <p className="mt-4">
        Select a page from the left-side menu to see different content.
      </p>
    </div>
  );
}
