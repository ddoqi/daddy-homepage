import React from "react";
import Image from "next/image";
import image1 from "/images/image1.png";

const HeadComponent = () => {
  return (
    <div>
      <header class="text-gray-800 body-font ">
        <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src={image1} alt="nope" width={200} height={150} />
            <h3 className="ml-3 text-xl mb-2">천지인 한의원</h3>
            {/* <image src="../../images/image1.png"></image> */}
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-lg justify-center">
            <a class="mr-5 hover:text-gray-900">Home</a>
            <a class="mr-5 hover:text-gray-900">인사말</a>
            <a class="mr-5 hover:text-gray-900">갤러리</a>
            <a class="mr-5 hover:text-gray-900">연락처</a>
            <a class="mr-5 hover:text-gray-900">진료과목</a>
            <a class="mr-5 hover:text-gray-900">오시는길</a>
            <a class="mr-5 hover:text-gray-900">공지사항</a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default HeadComponent;
