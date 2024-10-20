
"use client";
import Image from "next/image";
import { useState } from "react";
import { FaChartBar, FaMedal, FaFileAlt } from "react-icons/fa"; 
import Page1 from "./pageItems/page1"; 
import Page2 from "./pageItems/page2"; 
import Page3 from "./pageItems/page3";
import { MdPerson } from "react-icons/md"; 

export default function HomePage() {
  const [activePage, setActivePage] = useState("page2");

  const renderContent = () => {
    switch (activePage) {
      case "page1":
        return <Page1 />; 
      case "page2":
        return <Page2 />;
      case "page3":
        return <Page3 />; 
      default:
        return <HomeContent />; 
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

        {/* <div className="flex h-screen overflow-hidden border-solid   border-t-1 border-r-0 border-b-0 border-l-0  border-gray-100   "> */}
        <div className="sm:flex sm:h-screen sm:overflow-hidden sm:border-solid   sm:border-t-1 sm:border-r-0 sm:border-b-0 sm:border-l-0  border-gray-100   ">
          {/* Left Navbar */}
          {/* <nav className="w-64   bg-white p-6 shadow-md border border-black  "> */}
          <nav className="lg:w-64   bg-white p-6 shadow-md border border-black lg:p-0 p-6  ">
          {/* <nav className="   w-25 sm:w-64 bg-white sm:p-6 shadow-md border border-black"> */}
          {/* <ul className=" flex sm:block  sm:list-none sm:p-0 sm:space-y-4"> */}
          {/* <ul className=" flex sm:block  sm:list-none sm:p-0 sm:space-y-4"> */}
          <ul className="flex flex-col sm:flex-row sm:block list-none sm:p-0 sm:space-y-4  ">
          {/* <ul > */}
              <li>
                <button
                  onClick={() => setActivePage("page1")}
                  className={`flex items-center gap-3 w-full py-3 px-4  border-none transition-all duration-300 ${
                    activePage === "page1"
                      ? "bg-blue-100 text-blue-600 border "
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
