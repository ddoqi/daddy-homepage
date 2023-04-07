import React from "react";
import Image from "next/image";
import image2 from "/images/image2.png";

const MainIntroduce = () => {
  return (
    <div
      className="
   h-screen bg-contain bg-no-repeat bg-center bg-mainbg
   flex justify-center items-center
"
    >
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="2000"
        className="w-full bg-[#f9cb6e] bg-opacity-80 p-5"
      >
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-5xl text-white font-bold">천지인 한의원</h3>
          <h3 className="text-xl text-[#b8753f] font-bold">
            ( 구. 홍석한의원 )
          </h3>
          <h3 className="text-center text-[21px] text-[#fffdeb] mt-5">
            최상의 진료를 목표로 합니다.
            <br /> 환자 중심의 진료와 친절함으로 건강을 지킵니다.
          </h3>
          <div className="my-5 flex-col flex justify-center items-center text-brandbrown100 ">
            <h3 className="text-xl">예약문의</h3>
            <h3 className="text-xl">TEL.061-726-9988</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainIntroduce;
