import React from "react";

const Contact = () => {
  return (
    <section class="text-gray-600 body-font border-t-4 border-b-4 border-orange-300 mt-[15%]">
      {/* <div className="bg-orange-100">.</div> */}
      <div class="container px-5 py-24 mx-auto flex flex-wrap ">
        <h2 class="sm:text-3xl text-2xl text-gray-900 text-decoration-line: underline font-medium title-font mb-2 md:w-2/5">
          운영 시간
        </h2>
        <div class="md:w-3/5 md:pl-6">
          <p class="leading-relaxed text-2xl">
            운영시간 : 평일 08:30~18:30 / 토 08:30~16:00
            <br />
            (목-오전 진료만 / 일요일 휴진)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
