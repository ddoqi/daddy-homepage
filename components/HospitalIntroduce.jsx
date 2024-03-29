import React from "react";
import Image from "next/image";
import introduce from "/images/introduce.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HospitalIntroduce = () => {
  useEffect(() => {
    AOS.init({
      mirror: true,
    });
  }, []);
  return (
    <div
      className="flex items-stretch mt-[10%]
    h-screen"
    >
      <div className="pl-[5%] flex items-center justify-center ">
        <Image
          src={introduce}
          className="p-10"
          width={500}
          height={400}
          alt="mainPhoto"
        />
      </div>
      <div className="flex items-center justify-end w-[60%] bg-introduceBg bg-cover">
        <div
          data-aos="fade-up"
          className="
          text-brandbrown100 py-5
            bg-white rounded-xl bg-opacity-90 flex w-[60%] pl-5 items-end justify-end"
        >
          <div>
            <div className="pr-3 py-3">
              {/* <h3 className="text-xl pt-5 pb-5">한의원 소개</h3> */}
              <p className="pb-5 text-bigbase">
                방문해주셔서 감사합니다. <br />
                천지인한의원은 홍석한의원에서 상호만 천지인으로 변경되었습니다.
                <br /> <br />
                불편한 곳이 있다면 언제든지 오셔서 상담받으시고
                <br />
                적합한 치료로 건강을 챙기세요! <br />
                친절한 서비스와 치료로 만족을 드리기 위해 최선을 다하겠습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalIntroduce;
