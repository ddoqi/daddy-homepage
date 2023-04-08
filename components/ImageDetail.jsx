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
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom.
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
