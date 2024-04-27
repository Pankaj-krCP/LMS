import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { underlineGreenCSS } from "../../../_utils/constant";

const Calender = () => {
  const events = [
    { id: 1, title: "Meeting with client", date: new Date(2024, 4, 1) },
    { id: 2, title: "Submit project proposal", date: new Date(2024, 4, 5) },
  ];
  return (
    <div className="bg-white dark:bg-slate-800 p-4 shadow-lg rounded-lg">
      <h2 className={`${underlineGreenCSS} text-lg font-semibold mb-2`}>
        My Calendar
      </h2>
      <div>
        <Calendar
          className="border-gray-200 border-2 rounded-lg custom-calendar"
          tileClassName={({ date }) => {
            const event = events.find(
              (event) => event.date.toDateString() === date.toDateString()
            );
            return event ? "bg-blue-200" : null;
          }}
        />
      </div>
    </div>
  );
};

export default Calender;
