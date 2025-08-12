const PopUp = ({ opacity = 50, onClose, day, month }) => {
  return (
    <div
      className="fixed inset-0 bg-black flex items-center justify-center"
      style={{ backgroundColor: `rgba(0, 0, 0, ${opacity / 100})` }}
      onClick={onClose}
    >
      <div 
        className="bg-red-900 p-6 rounded-lg shadow-lg flex flex-col gap-4 justify-center items-center max-w-lg w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-white text-xl font-bold">{month} {day}</h2>
        <select className="border-2 border-red-300 rounded-md p-2 w-full text-white bg-red-900">
          <option value="">Select habit type...</option>
          <option value="exercise">Exercise</option>
          <option value="reading">Reading</option>
        <option value="meditation">Meditation</option>
        <option value="water">Drink Water</option>
        <option value="sleep">Sleep Early</option>
      </select>
      <input
        type="text"
        placeholder="Add habit name..."
        className="border-2 border-red-300 rounded-md p-2 w-full text-white bg-red-900 focus:outline-none"
      />
      <div className="flex flex-row justify-between mt-4 w-full">
      <p 
        className="bg-red-700 text-white rounded-md p-2 hover:bg-red-800 hover:cursor-pointer"
        onClick={onClose}
      >
        Cancel
      </p>
      <p className="bg-green-700 text-white rounded-md p-2 hover:bg-green-800 hover:cursor-pointer">
        Add Habit
      </p>
      </div>
    </div>
    </div>
  );
};

export default PopUp