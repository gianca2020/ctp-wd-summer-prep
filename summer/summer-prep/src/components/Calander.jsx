import { useState } from 'react'
import PopUp from './PopUp'

const Calendar = () => {
  // Array of months with their days
  const months = [
    { name: 'January', days: 31 },
    { name: 'February', days: 28 }, // Note: leap year logic can be added later
    { name: 'March', days: 31 },
    { name: 'April', days: 30 },
    { name: 'May', days: 31 },
    { name: 'June', days: 30 },
    { name: 'July', days: 31 },
    { name: 'August', days: 31 },
    { name: 'September', days: 30 },
    { name: 'October', days: 31 },
    { name: 'November', days: 30 },
    { name: 'December', days: 31 }
  ];

  const [currentMonthIndex, setCurrentMonthIndex] = useState(0); // Start with January (index 0)
  const [selectedDay, setSelectedDay] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const currentMonth = months[currentMonthIndex];
  const daysInMonth = currentMonth.days;
  
  const totalCells = 35;
  const days = Array.from({ length: totalCells }, (_, i) => {
    const dayNumber = i + 1;
    return dayNumber <= daysInMonth ? dayNumber : null;
  });

  const handlePrevMonth = () => {
    setCurrentMonthIndex(prevIndex => 
      prevIndex === 0 ? months.length - 1 : prevIndex - 1
    );
  };

  const handleNextMonth = () => {
    setCurrentMonthIndex(prevIndex => 
      prevIndex === months.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedDay(null);
  };

  return (
    <div>
      <div className="flex items-center justify-center gap-4">
        <button 
          onClick={handlePrevMonth}
          className="text-2xl font-bold hover:bg-red-200 hover:text-red-800 rounded-full p-2 transition-colors "
        >
          ←
        </button>
        <div className="bg-red-100 rounded-lg w-[45vw] h-[55vh] flex flex-col border-3 border-red-800">
          <div className="grid grid-cols-7 gap-1 p-4 pb-2 border-b-4 border-red-800 bg-red-300 ">
            <div className="col-span-3 flex items-center">
              <p className="font-semibold">0/{daysInMonth}</p>
            </div>
            <div className="flex items-center justify-center text-lg font-bold">
              <p>{currentMonth.name}</p>
            </div>
            <div className="col-span-2"></div>
            <div className="flex items-center justify-center text-lg font-semibold">
              <p>Streak:</p>
            </div>
          </div>
          <div className="grid grid-cols-7 grid-rows-5 gap-1 flex-1 min-h-0 p-4 pt-2">
            {days.map((day, index) => (
              day ? (
                <div 
                  key={index} 
                  className="bg-white rounded flex items-center justify-center text-xs sm:text-sm font-medium hover:bg-gray-100 cursor-pointer min-h-0 aspect-square max-h-full transition-colors"
                  onClick={() => handleDayClick(day)}
                >
                  <p>{day}</p>
                </div>
              ) : (
                <div key={index} className="min-h-0 aspect-square"></div>
              )
            ))}
          </div>
        </div>
        <button 
          onClick={handleNextMonth}
          className="text-2xl font-bold hover:bg-red-200 hover:text-red-800 rounded-full p-2 transition-colors"
        >
          →
        </button>
      </div>
      
      {isPopupOpen && (
        <PopUp 
          onClose={handleClosePopup}
          day={selectedDay}
          month={currentMonth.name}
        />
      )}
    </div>
  )
}

export default Calendar