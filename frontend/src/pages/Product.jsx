import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ShopContext } from "../context/ShopContext";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);

  const colorOptions = {
    Red: "#dc2626",
    Blue: "#2563eb",
    Green: "#16a34a",
    Black: "#000000",
    White: "#ffffff",
    Yellow: "#facc15",
    Brown: "#92400e",
  };

  const fecthProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fecthProductData();
  }, [productId]);

  return productData ? (
    <div className="my-10 px-4 mb-40 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="pt-10 transition-opacity ease-in duration-500 opacity-100">
        {/* Product Data */}
        <div className="flex gap-12 sm:gap-12 flex-xol sm:flex-row">
          {/* Product Images */}
          <div className="flex-1 flex flex-col gap-3 sm:flex-row">
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
              {productData.image.map((item, index) => (
                <img
                  onClick={() => setImage(item)}
                  src={item}
                  key={index}
                  alt=""
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                />
              ))}
            </div>
            <div className="w-full sm:w-[80%]">
              <img src={image} alt="" className="w-full height-auto" />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1">
            <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
            <p className="mt-5 text-3x1 font-light">
              {currency}
              {productData.price}
            </p>
            <p className="mt-5 text-gray-500 md:w-4/5">
              {productData.description}
            </p>
            <div className="flex flex-col gap-4 my-8">
              <p>Select Colour</p>
              <div className="flex gap-3">
                {productData.color.map((colorName, index) => {
                  const colorValue = colorOptions[colorName];
                  if (!colorValue) return null;

                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(colorName)}
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition ${
                        selectedColor === colorName
                          ? "border-gray-900 "
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <span
                        className="w-8 h-8 rounded-full"
                        style={{ backgroundColor: colorValue }}
                      />
                    </button>
                  );
                })}
              </div>
              {selectedColor && (
                <p className="text-sm text-gray-600">
                  Selected: <span className="font-medium">{selectedColor}</span>
                </p>
              )}
            </div>
            <button
              onClick={() => addToCart(productData._id, selectedColor)}
              className="bg-black text-white px-8 py-3 text-sm active:bg-gray rounded-xs"
            >
              ADD TO CART
            </button>
            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
              <p>text1</p>
              <p>text2</p>
              <p>text3</p>
            </div>
          </div>
        </div>

        {/* Description and Review */}
        <div className="mt-20">
          <div className="flex">
            <b className="border px-5 py-3 text-sm">DESCRIPTION</b>
            <p className="border px-5 py-3 text-sm">Reviews!</p>
          </div>
          <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
            <p>poop and some more other poop i guess</p>
            <p>
              Some other issues about poop and stuff but idk i guess we will
              find out one way or another at some point today or tomorrow
            </p>
          </div>
        </div>

        {/* Related Products */}

        <RelatedProducts
          category={productData.category}
          currentItem={productData}
        />
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
