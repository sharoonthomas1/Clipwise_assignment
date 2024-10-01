import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container w-[569px]  h-[554px] rounded-[50px]"style={{boxShadow:"0px 4px 50px 0px rgba(120, 143, 156, 0.25)"}}>
      <Slider {...settings}>
        <div className="bg-[#fff] text-white h-[554px] rounded-[50px] relative shadow-lg bg-no-repeat mb-[30px]" >
        <div className="absolute left-[20%] top-[12%]"><img src="/images/crystal.png" alt="" /></div>
        <div className="w-[100%] absolute bottom-5 left-[50%] transform -translate-x-1/2 text-xl text-center">
            <h1 className="text-[#818181] pb-9 ">CRYSTAL AGATE PHONE GRIP <span className="text-[#317189] font-semibold">- 18.99$</span></h1>
            </div>
            <div className="bg-[#8A93E5] absolute top-[10%] px-6 py-2" style={{borderRadius: "0px 8px 8px 0px"}}>New lot</div>
        </div>      
        <div className="bg-[#fff] text-white h-[554px] rounded-[50px] relative shadow-lg bg-no-repeat mb-[30px]" >
        <div className="absolute left-[20%] top-[12%]"><img src="/images/crystal.png" alt="" /></div>
        <div className="w-[100%] absolute bottom-5 left-[50%] transform -translate-x-1/2 text-xl text-center">
            <h1 className="text-[#818181] pb-9 ">CRYSTAL AGATE PHONE GRIP <span className="text-[#317189] font-semibold">- 18.99$</span></h1>
            </div>
            <div className="bg-[#8A93E5] absolute top-[10%] px-6 py-2" style={{borderRadius: "0px 8px 8px 0px"}}>New lot</div>
        </div>
        <div className="bg-[#fff] text-white h-[554px] rounded-[50px] relative shadow-lg bg-no-repeat mb-[30px]" >
        <div className="absolute left-[20%] top-[12%]"><img src="/images/crystal.png" alt="" /></div>
        <div className="w-[100%] absolute bottom-5 left-[50%] transform -translate-x-1/2 text-xl text-center">
            <h1 className="text-[#818181] pb-9 ">CRYSTAL AGATE PHONE GRIP <span className="text-[#317189] font-semibold">- 18.99$</span></h1>
            </div>
            <div className="bg-[#8A93E5] absolute top-[10%] px-6 py-2" style={{borderRadius: "0px 8px 8px 0px"}}>New lot</div>
        </div>
        <div className="bg-[#fff] text-white h-[554px] rounded-[50px] relative shadow-lg bg-no-repeat mb-[30px]" >
        <div className="absolute left-[20%] top-[12%]"><img src="/images/crystal.png" alt="" /></div>
        <div className="w-[100%] absolute bottom-5 left-[50%] transform -translate-x-1/2 text-xl text-center">
            <h1 className="text-[#818181] pb-9 ">CRYSTAL AGATE PHONE GRIP <span className="text-[#317189] font-semibold">- 18.99$</span></h1>
            </div>
            <div className="bg-[#8A93E5] absolute top-[10%] px-6 py-2" style={{borderRadius: "0px 8px 8px 0px"}}>New lot</div>
        </div>
        <div className="bg-[#fff] text-white h-[554px] rounded-[50px] relative shadow-lg bg-no-repeat mb-[30px]" >
        <div className="absolute left-[20%] top-[12%]"><img src="/images/crystal.png" alt="" /></div>
        <div className="w-[100%] absolute bottom-5 left-[50%] transform -translate-x-1/2 text-xl text-center">
            <h1 className="text-[#818181] pb-9 ">CRYSTAL AGATE PHONE GRIP <span className="text-[#317189] font-semibold">- 18.99$</span></h1>
            </div>
            <div className="bg-[#8A93E5] absolute top-[10%] px-6 py-2" style={{borderRadius: "0px 8px 8px 0px"}}>New lot</div>
        </div>
        <div className="bg-[#fff] text-white h-[554px] rounded-[50px] relative shadow-lg bg-no-repeat mb-[30px]" >
        <div className="absolute left-[20%] top-[12%]"><img src="/images/crystal.png" alt="" /></div>
        <div className="w-[100%] absolute bottom-5 left-[50%] transform -translate-x-1/2 text-xl text-center">
            <h1 className="text-[#818181] pb-9 ">CRYSTAL AGATE PHONE GRIP <span className="text-[#317189] font-semibold">- 18.99$</span></h1>
            </div>
            <div className="bg-[#8A93E5] absolute top-[10%] px-6 py-2" style={{borderRadius: "0px 8px 8px 0px"}}>New lot</div>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;