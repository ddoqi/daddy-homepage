import React from "react";
import Image from "next/image";
import image2 from "/images/image2.png";

const HospitalIntroduce = () => {
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
        className="w-full bg-black bg-opacity-40 p-5"
      >
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-5xl pb-3 text-brandyellow100 font-bold">
            천지인 한의원
          </h3>
          <h3 className="text-2xl text-brandyellow100">( 구. 홍석한의원 )</h3>
          <h3 className="text-xl text-white mt-3">
            환자 중심의 진료와 친절한 서비스로, 여러분의 건강을 함께 지킵니다.
          </h3>
          <div className="my-5 flex-col flex justify-center items-center text-white">
            <h3 className="text-xl">예약문의</h3>
            <h3 className="text-xl">TEL.061-726-9988</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalIntroduce;
