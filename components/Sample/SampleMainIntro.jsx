import React from "react";
import Image from "next/image";
import brandLogo from "/images/brandLogo.png";

const SampleMainIntro = () => {
  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="w-[50%] flex items-center justify-center bg-white">
        <Image
          src={brandLogo}
          className=""
          width={200}
          height={300}
          alt="mainPhoto"
        />
      </div>
      <div className=" w-[80%]">
        <div
          className="
   h-screen bg-contain bg-no-repeat bg-center bg-mainbg
   flex justify-center items-center
"
        >
          <div className="w-full bg-white bg-opacity-80 p-5">
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-5xl pb-3 text-brandbrown100 font-bold">
                천지인 한의원
              </h3>
              <h3 className="text-2xl text-brandbrown100 font-bold">
                ( 구. 홍석한의원 )
              </h3>
              <h3 className="text-2xl text-orange-500 mt-3 font-bold">
                환자 중심의 진료와 친절한 서비스로, 여러분의 건강을 함께
                지킵니다.
              </h3>
              <div className="my-5 flex-col flex justify-center items-center text-brandbrown100">
                <h3 className="text-xl">예약문의</h3>
                <h3 className="text-xl">TEL.061-726-9988</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleMainIntro;
