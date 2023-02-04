import React from "react";
import introduction from "/images/introduction.png";
import introduction2 from "/images/introduction2.png";
import mainPage from "/images/mainPage.png";

import Image from "next/image";

const MainIntroduce = () => {
  return (
    <div className="flex flex-col items-center mt-5">
      {/* <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        메인 페이지 영역
      </h1> */}
      <Image src={mainPage} width={1200} height={400} />
      <div className="m-auto">
        {/* <Image src={introduction2} width={700} height={400} /> */}
        {/* <Image src={introduction} width={700} height={400} /> */}
      </div>
    </div>
  );
};

export default MainIntroduce;
