import Image from "next/image";
import React from "react";
import logo3 from "../../images/logo3.png";

const FooterComponent = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-[#F7CBAC] mt-[10%]">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image src={logo3} width={200} height={100} alt="한의원 로고" />
          </a>
          <div className=" text-md text-[#f8f0f0] sm:ml-4 sm:pl-6 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            천지인한의원 | 대표 : 홍 석<h4>전라남도 순천시 조례신대앞길 19</h4>
            <h4>061-726-9988</h4>
          </div>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"></span>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;
