import React from "react";
import LinkButton from "@repo/ui/linkButton";

const NavigateButton = () => {
  return (
    <div className="flex justify-center">
      <LinkButton rightArrow shadow label="ALL Courses" url="/course" />
    </div>
  );
};

export default NavigateButton;
