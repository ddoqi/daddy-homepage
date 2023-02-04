import React from "react";
import Image from "next/image";
import introduction2 from "/images/introduction2.png";

const HospitalDetailIntroduce = () => {
  return (
    <div className="flex flex-col items-center mx-3 mt-5">
      <div className="m-auto">
        <Image src={introduction2} width={760} height={600} />
      </div>
    </div>
  );
};

export default HospitalDetailIntroduce;
