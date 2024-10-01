function Lastsec() {
  return (
      <div className="relative">
        <img src="/images/bg_img.png" alt="" className="w-[1519px] h-[1100px]" />
        <div className="flex justify-end items-center absolute top-3 right-0 flex-wrap">
          <div className="text-end">
            <h1 className="text-[40px] text-[#31546D] text-end">BEST PRICE</h1>
            <h2 className="text-[64px] text-[#31546D] font-bold leading-[50px]">Agate Phone Grip</h2>
            <div className="flex items-center justify-end">
              <span className="text-[#41A0B7] text-2xl mr-4">44.50$</span>
              <h2 className="text-[70px] text-[#E35B3E] font-bold py-2">19.50$</h2>
            </div>
            <div className="flex justify-end">
              <p className="text-[#31546D] text-end w-[400px]">
                These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another color or design!
              </p>
            </div>
            <div className="py-8"><button className="text-[#fff] border-3 px-12 py-4 rounded-2xl font-bold text-sm " style={{ background: 'linear-gradient(90deg, #75CCEB 0%, #6FB4FF 100%)' }}>
              SHOP NOW
            </button></div>
          </div>
          <div className="xs:w-[400px]  sm:w-[744px]">
            <img src="/images/circle-main.png" alt="" />
          </div>
        </div>
        <div className="bg-[#0a294dcc] py-[125px] absolute bottom-0 w-[100%] "></div>
      </div>
  )
}
export default Lastsec;
