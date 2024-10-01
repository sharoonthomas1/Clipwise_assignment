import React, { useState } from 'react';
const ProductCard = ({ imageSrc, title, price }) => {
    return (
        <div className="text-[20px] w-[322px] text-center py-6 rounded-3xl border-2 border-gray-6 transition duration-300 ease-in-out hover:shadow-[0px_4px_50px_rgba(120,143,156,0.25)]">
            <div className="flex justify-center pb-4">
                <img src={imageSrc} alt={title} />
            </div>
            <h1 className="text-[#4F4F4F]">{title}</h1>
            <span className="text-[#317189] font-bold">{price}</span>
            <div className="py-5">
                <button
                    className="text-[#75CCEB] border-3 px-12 py-4 rounded-2xl font-bold text-sm transition duration-300 ease-in-out hover:text-white hover:shadow-[0px_10px_25px_rgba(112,184,251,0.45)] hover:bg-[linear-gradient(90deg,#75CCEB_0%,#6FB4FF_100%)]"
                    style={{ border: "3px solid #75CCEB" }}
                >
                    SHOP NOW
                </button>
            </div>
        </div>
    );
};

const ProductList = () => {
    const initialProducts = [
        { id: 1, imageSrc: "/images/stone.png", title: "CRYSTALS AGATE PHONE GRIP", price: "18.99$" },
        { id: 2, imageSrc: "/images/stone.png", title: "CRYSTALS AGATE PHONE GRIP", price: "18.99$" },
        { id: 3, imageSrc: "/images/stone.png", title: "CRYSTALS AGATE PHONE GRIP", price: "18.99$" },
        { id: 4, imageSrc: "/images/stone.png", title: "CRYSTALS AGATE PHONE GRIP", price: "18.99$" },
        { id: 5, imageSrc: "/images/stone.png", title: "CRYSTALS AGATE PHONE GRIP", price: "18.99$" },
        { id: 6, imageSrc: "/images/stone.png", title: "CRYSTALS AGATE PHONE GRIP", price: "18.99$" },
        { id: 7, imageSrc: "/images/stone.png", title: "CRYSTALS AGATE PHONE GRIP", price: "18.99$" },
        { id: 8, imageSrc: "/images/stone.png", title: "CRYSTALS AGATE PHONE GRIP", price: "18.99$" },
    ];

    const additionalProducts = [
        { id: 9, imageSrc: "/images/stone.png", title: "CRYSTALS AGATE PHONE GRIP", price: "18.99$" },
        { id: 10, imageSrc: "/images/stone.png", title: "CRYSTALS AGATE PHONE GRIP", price: "18.99$" },
        { id: 11, imageSrc: "/images/stone.png", title: "CRYSTALS AGATE PHONE GRIP", price: "18.99$" },
        { id: 12, imageSrc: "/images/stone.png", title: "CRYSTALS AGATE PHONE GRIP", price: "18.99$" },
    ];

    const [visibleProducts, setVisibleProducts] = useState(initialProducts);
    const handleViewAll = () => {
        setVisibleProducts([...visibleProducts, ...additionalProducts]);
    };

    return (
        <div>
            <div className="flex xs:justify-center sm:justify-between py-16 flex-wrap gap-y-10 ">
                {visibleProducts.map(product => (
                    <ProductCard key={product.id} imageSrc={product.imageSrc} title={product.title} price={product.price} />
                ))}
            </div>
            <div className="flex justify-center">
                <button
                    className="text-[#75CCEB] border-3 px-9 py-3 rounded-2xl font-bold text-sm transition duration-300 ease-in-out hover:text-white hover:shadow-[0px_10px_25px_rgba(112,184,251,0.45)] hover:bg-[linear-gradient(90deg,#75CCEB_0%,#6FB4FF_100%)]"
                    style={{ border: "3px solid #75CCEB" }}
                    onClick={handleViewAll}
                >
                    View All
                </button>
            </div>
        </div>
    );
};

export default ProductList;
