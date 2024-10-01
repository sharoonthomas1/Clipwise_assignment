import ProductList from "./Card";

function Product() {
    return (
        <>
            <div className="mx-auto px-[4%] ">
                <div className="flex flex-col  items-center justify-center  py-8  ">
                <h1 className="text-[#31546D] font-bold text-[46px] pb-4">All product</h1>
                <hr class="w-20 opacity-30 bg-gray-400 h-1 text-center"></hr>
                </div>
                <div className="flex gap-x-24">
                    <div className="flex items-center gap-x-3 xs:text-[12px] sm:text-[16px]">
                        <span className="font-bold text-[#9AB0C0]">Filter:</span>
                        <h2 className="text-[#31546D] font-bold ">All Products</h2>
                        <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.86603 6.5C4.48113 7.16667 3.51887 7.16667 3.13397 6.5L0.535898 2C0.150998 1.33333 0.632122 0.500001 1.40192 0.500001L6.59807 0.5C7.36788 0.5 7.849 1.33333 7.4641 2L4.86603 6.5Z" fill="#31546D" />
                        </svg>
                    </div>
                    <div className="flex items-center gap-x-3 xs:text-[12px] sm:text-[16px]">
                        <span className="font-bold text-[#9AB0C0]">Sort:</span>
                        <h2 className="text-[#31546D] font-bold ">Best Selling</h2>
                        <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.86603 6.5C4.48113 7.16667 3.51887 7.16667 3.13397 6.5L0.535898 2C0.150998 1.33333 0.632122 0.500001 1.40192 0.500001L6.59807 0.5C7.36788 0.5 7.849 1.33333 7.4641 2L4.86603 6.5Z" fill="#31546D" />
                        </svg>
                    </div>
                </div>
                {/* product */}
             <ProductList/>
            </div>
        </>
    )
}
export default Product;