import React from "react";
import Image from "next/image";
import detailIntroduce from "/images/detailIntroduce1.jpeg";

const DetailIntroduce = () => {
  return (
    <div className="flex flex-col items-center p-3 lg:p-0">
      <div className="mt-[10%] mb-5">
        <div className="text-center mb-[5%] "></div>
        <Image src={detailIntroduce} width={760} height={600} />
      </div>
    </div>
  );
};

export default DetailIntroduce;
