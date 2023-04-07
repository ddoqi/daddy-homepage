import React from "react";
import Image from "next/image";
import interior1 from "/images/interior1.jpeg";
import image3 from "/images/image3.png";
import image4 from "/images/image4.png";
import image5 from "/images/image5.png";

const ImageDetail = () => {
  return (
    <section class="text-gray-600 body-font bg-blue-200">
      <div class="container mx-auto ">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            병원 갤러리 영역저기여?
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom.
          </p>
        </div>
        <div class="flex -m-4">
          <div class="w-1/2 p-4">
            <div class="flex">
              <Image
                alt="gallery"
                class=" w-full h-full object-cover object-center"
                src={interior1}
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
