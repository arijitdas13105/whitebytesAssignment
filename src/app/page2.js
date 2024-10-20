

import Image from "next/image";
import { FaTrophy, FaCheckSquare } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateStatistics } from "./lib/statisticsSlice";
import LineChart from "./LineChart";
import ProgressBarChart from "./ProgressBarChart";
import QuestionAnalysisChart from "./QuestionAnalysisChart";
import UpdateBox from "./UpdateBox"; // Import UpdateBox

export default function Page2() {
  const dispatch = useDispatch();
  const { rank, percentile, correctAnswers, totalQuestions } = useSelector(
    (state) => state.statistics
  );

  const [showUpdateBox, setShowUpdateBox] = useState(false);
  const [newRank, setNewRank] = useState(rank);
  const [newPercentile, setNewPercentile] = useState(percentile);
  const [newCorrectAnswers, setNewCorrectAnswers] = useState(correctAnswers);

  const handleUpdate = () => {
    dispatch(
      updateStatistics({
        rank: newRank,
        percentile: newPercentile,
        correctAnswers: newCorrectAnswers,
      })
    );
    setShowUpdateBox(false);
  };

  return (
    <>
      <div className="flex flex-row w-full h-full justify-around ">
        <div className="flex flex-col gap-10 p-5 border border-black flex-1">
          <span className="font-bold">Skill Test</span>

          <div className="border  flex items-center justify-between p-4 border-solid border-gray-200 rounded-lg">
            <div>
              <Image src="/assets/htmlimg.png" width={35} height={35} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold">Hypertext Markup Language</span>
              <span>Exam time and details...</span>
            </div>
            <div>
              <button
                className="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                onClick={() => setShowUpdateBox(true)}
              >
                Update
              </button>
            </div>
          </div>

          <div className="border  p-4 border-solid border-gray-200 rounded-lg ">
            <span className="font-bold">Quick Statistics</span>
            <div className="flex border border-black justify-between">
              <div className="flex-1 items-center flex border-r border-red-500 gap-4 p-4">
                <div>
                  <FaTrophy className="text-yellow-500" size={25} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold">{rank}</span>
                  <span className="text-gray-500">Your Rank</span>
                </div>
              </div>

              <div className="flex-1 items-center flex border-r border-red-500 gap-6 p-4">
                <div>
                  <GiNotebook size={25} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold">{percentile}%</span>
                  <span className="text-gray-500">Percentile</span>
                </div>
              </div>

              <div className="flex-1 items-center flex border-r border-red-500 gap-4 p-4">
                <div>
                  <FaCheckSquare className="text-green-500" size={25} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl">
                    {correctAnswers}/{totalQuestions}
                  </span>
                  <span className="text-gray-500">Correct Answers</span>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 border-solid border-gray-200 rounded-lg ">
            <h1 className="font-bold text-xl">Comparison Graph</h1>
            <div className="mt-4">
              <LineChart />
            </div>
          </div>
        </div>

        <div className="flex-1 border border-blue-500 flex flex-col p-5 gap-10 ">
          <div className="border-solid border-gray-200 rounded-lg p-2">
            <h2 className="text-lg font-bold">Syllabus Wise Analysis</h2>

            <ProgressBarChart />
          </div>
          <div className="border-solid border-gray-200 rounded-lg ">
            <QuestionAnalysisChart />
          </div>
        </div>

      </div>

      {showUpdateBox && (
        <UpdateBox
          newRank={newRank}
          setNewRank={setNewRank}
          newPercentile={newPercentile}
          setNewPercentile={setNewPercentile}
          newCorrectAnswers={newCorrectAnswers}
          setNewCorrectAnswers={setNewCorrectAnswers}
          handleUpdate={handleUpdate}
          setShowUpdateBox={setShowUpdateBox}
        />
      )}
    </>
  );
}
