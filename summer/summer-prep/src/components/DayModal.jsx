const DayModal = ({ isOpen, onClose, day, month }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 max-w-90vw">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{month} {day}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Did you complete your habit today?
            </label>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Yes ✓
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                No ✗
              </button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">
              Notes (optional):
            </label>
            <textarea 
              className="w-full border border-gray-300 rounded px-3 py-2"
              rows="3"
              placeholder="How did it go today?"
            />
          </div>
        </div>
        
        <div className="flex justify-end mt-6">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 mr-2"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default DayModal;
