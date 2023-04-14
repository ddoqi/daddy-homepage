import React from "react";
import Image from "next/image";
import introduce from "/images/introduce.jpeg";

const HospitalDetailIntroduce = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="mt-[10%] mb-5">
        <div className="text-center mb-[5%] "></div>
        <Image src={introduce} width={760} height={600} />
      </div>
    </div>
  );
};

export default HospitalDetailIntroduce;
