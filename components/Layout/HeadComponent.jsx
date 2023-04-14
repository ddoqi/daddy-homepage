import React from "react";
import Image from "next/image";
import logo3 from "/images/logo3.png";

const HeadComponent = ({
  mainRef,
  introduceRef,
  galleryRef,
  operatingTimeRef,
  departmentRef,
}) => {
  const handleScrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <header class="p-3 text-gray-800 body-font lg:bg-white bg-[#FFD3B2] px-10">
        <div class="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div class="flex title-font font-medium items-center text-gray-900 ">
            <Image src={logo3} alt="nope" width={200} height={150} />
          </div>
          <nav class="md:ml-auto flex flex-wrap items-center text-[20px] text-white lg:text-[#FFA559] justify-center">
            <div
              class="header-nav-text"
              onClick={() => handleScrollToRef(mainRef)}
            >
              Home
            </div>
            <div
              class="header-nav-text"
              onClick={() => handleScrollToRef(introduceRef)}
            >
              인사말
            </div>
            <div
              class="header-nav-text"
              onClick={() => handleScrollToRef(galleryRef)}
            >
              갤러리
            </div>
            <div
              class="header-nav-text"
              onClick={() => handleScrollToRef(operatingTimeRef)}
            >
              운영시간
            </div>
            <div
              class="header-nav-text"
              onClick={() => handleScrollToRef(departmentRef)}
            >
              진료과목
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default HeadComponent;
