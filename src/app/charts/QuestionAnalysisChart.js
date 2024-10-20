import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);

const QuestionAnalysisChart = () => {
  const { rank, percentile, correctAnswers, totalQuestions } = useSelector(
    (state) => state.statistics
  );

  //   const totalQuestions = 15;
  //   const correctAnswers = 13;
  const incorrectAnswers = totalQuestions - correctAnswers;

  const data = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        label: "Question Analysis",
        data: [correctAnswers, incorrectAnswers],
        backgroundColor: ["rgba(54, 162, 235, 1)", "rgba(201, 203, 207, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(201, 203, 207, 1)"],
        borderWidth: 2,
        cutout: "70%", 
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <>
      <div className=" p-4">
        <div className="flex  justify-between">
          <strong>Question Analysis</strong>
          <div style={{ fontSize: "24px", color: "#007bff" }}>
            {correctAnswers}/{totalQuestions}
          </div>
        </div>
        <p>
          You scored {correctAnswers} question{correctAnswers > 1 ? "s" : ""}{" "}
          correct out of {totalQuestions}.However it still needs some
          improvements
        </p>
      </div>
      <div
        className="p-4"
        style={{ position: "relative", width: "300px", margin: "auto" }}
      >
        <div
          style={{
            position: "relative",
            width: "200px",
            height: "200px",
            margin: "auto",
          }}
        >
          <Doughnut data={data} options={options} />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "30px",
            }}
          >
            🎯
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionAnalysisChart;
