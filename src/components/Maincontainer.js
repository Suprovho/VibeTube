import React from "react";
import ButtonLIst from "./ButtonLIst";
import VedioContainer from "./VedioContainer";

const Maincontainer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 md:bg-center md:justify-center">
      <div className="hidden sm:block">
      <ButtonLIst />
      </div>
      <VedioContainer />
    </div>
  );
};

export default Maincontainer;
