import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { customShadow, underlineGreenCSS } from "../../../_utils/constant";

const Calender = () => {
  const events = [
    { id: 1, title: "Meeting with client", date: new Date(2024, 4, 1) },
    { id: 2, title: "Submit project proposal", date: new Date(2024, 4, 5) },
  ];
  return (
    <div className={`p-4 rounded-lg ${customShadow}`}>
      <h2 className={`${underlineGreenCSS} text-lg font-semibold mb-2`}>
        My Calendar
      </h2>
      <div className="flex justify-center py-2">
        <div className="inline-flex items-center">
          <Calendar
            className="!border-none rounded-lg custom-calendar !bg-inherit"
            tileClassName={({ date }) => {
              const event = events.find(
                (event) => event.date.toDateString() === date.toDateString()
              );
              return event ? "bg-blue-200" : null;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Calender;
