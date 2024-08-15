import { FaCheckCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
const Reminder = () => {
  return (
    <>
      <div className="reminder_card border-2 border-gray-300 rounded-xl p-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="flex items-center gap-2">
            <GoDotFill className="text-red-500" /> High
          </h2>
          <span>
            <FaCheckCircle className="text-[#60CEA7] text-2xl" />
          </span>
        </div>
        <p className="text-gray-400">Today 12:00pm</p>
        <p>Deliver PoC to client</p>
      </div>
    </>
  );
};

export default Reminder;
