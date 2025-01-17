import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

const Testimonials = ({ testimonials }) => {
  const backgroundColors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-teal-500",
    "bg-indigo-500",
    "bg-gray-500"
  ];

  return (
    <section class="bg-gray-50">
  <div class="max-w-[100%] px-4 py-12 mx-auto sm:px-6 lg:px-8 xl:py-24">
  <div className="flex flex-col items-center justify-center lg:flex-row">
          <div className="text-center w-full lg:w-[45%] mb-8 lg:mb-0">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          Parents Love Our Program!
        </h2>
        <p class="mt-4 text-gray-700">
          This compilation features a carefully curated list of the top 10 parent reviews, providing valuable insights and perspectives on various topics.
        </p>
      </div>
      <div class=" h-full lg:max-w-96 mt-8 lg:mt-0 max-w-[16rem]">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div class={`flex flex-col items-center justify-center h-[400px]  p-2 text-center rounded-lg shadow-lg ${backgroundColors[index % backgroundColors.length]}`}>
                <p class="text-2xl font-bold text-white sm:text-3xl">
                  {testimonial.name}
                </p>
                {Array.isArray(testimonial.testimonial) ? (
                  testimonial.testimonial.map((text, i) => (
                    <p key={i} class="mt-4 text-white">
                      {text}
                    </p>
                  ))
                ) : (
                  <p class="mt-4 text-white">
                    {testimonial.testimonial}
                  </p>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </div>
</section>
    
  );
};

export default Testimonials;




