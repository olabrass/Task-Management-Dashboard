

const Timer = () => {
return (
    <>
          <div className="bg-white shadow-lg rounded-2xl px-6 py-4 flex items-center gap-8">

    {/* Time Display */}
    <div className="text-center">
      <p className="text-sm text-gray-500">
        Task Timer
      </p>

      <h2 className="text-3xl font-bold text-gray-800">
        00:00
      </h2>
    </div>

    {/* Buttons */}
    <div className="flex items-center gap-3">

      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium transition cursor-pointer"
      >
        Start
      </button>

      <button
        className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-xl font-medium transition cursor-pointer"
      >
        Reset
      </button>

    </div>

  </div>
    </>
)
}

export default Timer;