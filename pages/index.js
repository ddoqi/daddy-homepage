import Head from "next/head";
import HeadComponent from "@/components/Layout/HeadComponent";

import ImageDetail from "@/components/imageDetail";
import MainIntroduce from "@/components/MainIntroduce";
import HospitalIntroduce from "@/components/HospitalIntroduce";
import Contact from "@/components/Contact";
import HospitalDetailIntroduce from "@/components/HospitalDetailIntroduce";

export default function Home() {
  return (
    <>
      <Head>
        <title>DaddyHomePage</title>
      </Head>
      <main>
        {/* 네비게이션 */}
        <HeadComponent />
        {/* 메인 첫화면 */}
        <MainIntroduce />
        {/* 병원 소개 */}
        <HospitalIntroduce />
        {/* 갤러리 */}
        <ImageDetail />
        {/* 연락처 */}
        <Contact />
        {/* 병원 디테일 소개 이미지 */}
        <HospitalDetailIntroduce />
        {/* 병원 찾기 */}
        <br />
        <div>
          <h3>여기 병원 지도 들어갈꾸임ㅇㅅㅇ</h3>
        </div>
      </main>
    </>
  );
}
