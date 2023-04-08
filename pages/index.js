import Head from "next/head";
import HeadComponent from "@/components/Layout/HeadComponent";
import ImageDetail from "@/components/ImageDetail";
import MainIntroduce from "@/components/MainIntroduce";
import HospitalIntroduce from "@/components/HospitalIntroduce";
import Contact from "@/components/Contact";
import HospitalDetailIntroduce from "@/components/HospitalDetailIntroduce";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>천지인 한의원</title>
      </Head>
      <main>
        {/* 네비게이션 */}
        <HeadComponent />
        {/* 메인 첫화면 */}
        <div>
          <MainIntroduce />
        </div>

        {/* 병원 소개 */}
        <div data-aos="fade-up">
          <HospitalIntroduce />
        </div>

        {/* 갤러리 */}
        <ImageDetail />

        {/* 연락처 */}
        <Contact />
        {/* 병원 디테일 소개 이미지 */}
        <HospitalDetailIntroduce />
        {/* 병원 찾기 */}
        <div>
          <h3>여기 병원 지도 왜이러실까</h3>
        </div>
      </main>
    </>
  );
}
