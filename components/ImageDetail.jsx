import React from "react";
import Image from "next/image";
import interior1 from "/images/interior1.jpeg";
import interior2 from "/images/interior2.jpeg";
import interior3 from "/images/interior3.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ImageDetail = () => {
  useEffect(() => {
    AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 200, // values from 0 to 3000, with step 50ms
      duration: 700, // values from 0 to 3000, with step 50ms
      mirror: true,
    });
  }, []);

  return (
    <section class="text-gray-600 body-font mt-[10%]">
      <div class="container mx-auto ">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            천지인 한의원
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-bigbase pt-5">
            천지인 한의원(구. 홍석 한의원)은 다양한 치료 경험과 전문 지식을
            바탕으로 환자의 건강을 위하여 최선을 다하고 있습니다. <br /> 정확한
            진단을 통한 처방과 치료로 최상의 진료를 목표로 합니다. 한의원에서는
            침, 한약, 부항, 뜸, 추나요법 등의 다양한 치료법을 이용하여 다양한
            건강 상태를 진단하고 치료합니다. 이러한 요법은 신체의 자연 치유
            과정을 자극하고 순환을 개선하며 에너지 흐름의 균형을 유지하여 질병을
            치료하고 건강을 향상시킵니다.
          </p>
        </div>
        <div class="flex items-center justify-center">
          <div class="">
            <div data-aos="fade" class="flex space-x-4">
              <Image
                alt="gallery"
                class=" w-full h-full object-cover object-center"
                src={interior2}
                width={400}
                height={400}
              />
              <Image
                alt="gallery"
                class=" w-full h-full object-cover object-center"
                src={interior1}
                width={400}
                height={400}
              />
              <Image
                alt="gallery"
                class=" w-full h-full object-cover object-center"
                src={interior3}
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageDetail;
