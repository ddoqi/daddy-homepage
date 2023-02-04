import React from "react";
import Image from "next/image";
import image2 from "/images/image2.png";

const HospitalIntroduce = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image alt="gallery" src={image2} width={720} height={600} />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            천지인한의원
            <br />
            (구.홍석한의원) 소개
          </h1>
          <p class="mb-8 leading-relaxed">
            "천지인한의원"은 홍석한의원에서 상호만 천지인으로 변경되었습니다.
            불편한 곳이 있다면 언제든지 오셔서 상담받으시고 적합한 치료로 건강을
            챙기세요! 모든 병은 미리 예방하거나 신속한 치료가 완치 가능성을
            높이고 삶의 질을 높이는 길입니다. 친절한서비스와 치료로 만족을
            드리기 위해 최선을 다하겠습니다.
          </p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              진료시간 안내
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalIntroduce;
