function App() {
  const answers = [
    { color: "bg-gray-500", text: "Colorful Style Sheets" },
    { color: "bg-green-500", text: "Cascading Style Sheets" },
    { color: "bg-red-500", text: "Computer Style Sheets" },
    { color: "bg-gray-500", text: "Creative Style Sheets" },
  ];
  return (
    <div className="w-[100%] h-[100vh] bg-purple-900 flex justify-center items-center">
      <div className="lg:w-[30%] lg:h-[50%]   flex  flex-col justify-center items-center lg:p-5 gap-5">
        <h1 className="text-3xl text-white font-bold mb-10">
          What does Css Stand For?
        </h1>
        {answers.map((answer, index) => (
          <button
            key={{ index }}
            className={`${answer.color} text-white w-full p-2 `}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
