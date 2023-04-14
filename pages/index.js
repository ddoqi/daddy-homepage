import Head from "next/head";
import HeadComponent from "@/components/Layout/HeadComponent";
import ImageDetail from "@/components/ImageDetail";
import MainIntroduce from "@/components/MainIntroduce";
import HospitalIntroduce from "@/components/HospitalIntroduce";
import Contact from "@/components/Contact";
import HospitalDetailIntroduce from "@/components/HospitalDetailIntroduce";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import FooterComponent from "@/components/Layout/FooterComponent";
import DetailIntroduce from "@/components/DetailIntroduce";
import TopButton from "@/components/Layout/TopButton";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const mainRef = useRef(null);
  const introduceRef = useRef(null);
  const galleryRef = useRef(null);
  const operatingTimeRef = useRef(null);
  const departmentRef = useRef(null);

  return (
    <>
      <Head>
        <title>천지인 한의원</title>
      </Head>
      <main>
        {/* 네비게이션 */}
        <HeadComponent
          mainRef={mainRef}
          introduceRef={introduceRef}
          galleryRef={galleryRef}
          operatingTimeRef={operatingTimeRef}
          departmentRef={departmentRef}
        />
        {/* 메인 첫화면 */}
        <div ref={mainRef}>
          <MainIntroduce />
        </div>

        {/* 병원 소개 */}
        <div ref={introduceRef}>
          <HospitalIntroduce />
        </div>

        <div>
          <DetailIntroduce />
        </div>

        {/* 갤러리 */}
        <div ref={galleryRef}>
          <ImageDetail />
        </div>

        {/* 연락처 */}
        <div ref={operatingTimeRef}>
          <Contact />
        </div>

        {/* 병원 디테일 소개 이미지 */}
        <div ref={departmentRef}>
          <HospitalDetailIntroduce />
        </div>
        <TopButton />
        <FooterComponent />
      </main>
    </>
  );
}
