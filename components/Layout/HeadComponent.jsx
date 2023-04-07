import React from "react";
import Image from "next/image";
import logo3 from "/images/logo3.png";

const HeadComponent = () => {
  return (
    <div>
      <header class="p-3 text-gray-800 body-font">
        <div class="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div class="flex title-font font-medium items-center text-gray-900 ">
            <Image src={logo3} alt="nope" width={200} height={150} />
          </div>
          <nav class="md:ml-auto flex flex-wrap items-center text-[20px] text-[#FFA559] justify-center">
            <div class="header-nav-text">Home</div>
            <div class="header-nav-text">인사말</div>
            <div class="header-nav-text">갤러리</div>
            <div class="header-nav-text">연락처</div>
            <div class="header-nav-text">진료과목</div>
            <div class="header-nav-text">오시는길</div>
            <div class="header-nav-text">공지사항</div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default HeadComponent;
