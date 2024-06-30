import React from "react";
import Navbar from "../components/common/Navbar";
import CuttleryImage from "../assets/CuttleryImg.png";
import HomeSection from "../assets/HomeSection.png";
import ShopSection from "../assets/ShopSection.png";
import Button from "../components/ui/Button";
import CircleTextOverlay from "../components/ui/CircleTextOverlay";
import ClothesBanner from "../assets/ClothesBanner.png";
import Footer from "../components/common/Footer";
import ClothesImg from "../assets/ClothesImg.jpg";
import HomeImg from "../assets/HomeImg.png";
import FoodLogo from "../assets/FoodLogo.png";
import Clothes2Img from "../assets/Clothes2Img.png";

const HomePage = () => {
  return (
    <div className="relative">
      <Navbar />

      {/*Main Container */}
      <div className="bg-lightNavy flex flex-row">
        {/*Heading*/}
        <div className="hidden md:block text-cream font-handwritten absolute top-[90px] left-1/2 transform -translate-x-1/2 text-center">
          <h2 className="text-3xl">BUY SELL AND RENT</h2>
          <h1 className="text-5xl">ANYTHING</h1>
          <h2 className="text-3xl">FROM JUST ONE CLICK</h2>
        </div>
        {/*First Section */}
        <div className="hidden md:block flex flex-col items-center justify-center space-y-4 pt-8">
          {/* First Div */}
          <div className="flex flex-col items-center justify-center font-bold text-cream text-4xl">
            <h1>SHARE</h1>
            <h1>AND</h1>
            <h1>DEAL</h1>
          </div>
          {/*Line */}
          <div class="w-16 h-1 px-2 bg-cream rounded-lg shadow-inner ml-8"></div>

          {/* Second Div */}
          <div className="relative">
            <div className="absolute top-3 left-[65px] transform -translate-x-1/2 text-center text-3xl">
              <h2 className="text-cream">BUY</h2>
              <h2 className="text-cream">FOOD</h2>
              <h2 className="text-cream">MEAL</h2>
            </div>
            <div className="w-32 h-32 rounded-full border-cream border-2"></div>
          </div>

          {/*Line */}
          <div class="w-16 h-1 px-2 bg-cream rounded-lg shadow-inner ml-8"></div>

          {/*Image */}
          <div>
            <img src={CuttleryImage} className="h-44 w-44" />
          </div>
        </div>

        {/*Second Section */}
        <div className="hidden md:block flex flex-col space-y-4 mt-3">
          {/*First Image */}
          <div>
            <img src={HomeSection} className="w-64 h-64" />
          </div>
          {/*Second Image */}
          <div>
            <img src={ShopSection} className="w-60 h-64" />
          </div>
        </div>

        {/*Third Section */}
        <div className="flex flex-col justify-center items-center mt-12 md:mt-32 space-y-12 ml-4 mr-2 pb-5 md:pb-0">
          {/*Heading to be shown in smaller screens */}
          <div className="flex flex-col items-center justify-center font-handwritten block md:hidden">
            <h2 className="text-cream text-3xl font-bold">BUY SELL AND RENT</h2>
            <h2 className="text-cream text-4xl font-extrabold">ANYTHING</h2>
            <h2 className="text-cream text-3xl font-bold">
              FROM JUST ONE CLICK
            </h2>
          </div>
          {/*Main Button */}
          <div>
            <Button text={"Build Your Buisness With Us"} />
          </div>
          {/*Circle overlay ui section */}
          <div className="flex flex-col md:flex-row space-x-12">
            {/*Overlay 1*/}
            <div className="flex flex-col space-y-2 items-center justify-center">
              <CircleTextOverlay headingText={"BUY"} />
              <Button text={"Support"} className={"mr-[58px] md:mr-[22px]"} />
            </div>
            {/*Line */}
            <div className="w-[2px] h-32 bg-cream mx-6"></div>
            {/*Overlay 2*/}
            <div className="flex flex-col space-y-2 items-center justify-center">
              <CircleTextOverlay headingText={"SELL"} />
              <Button text={"Support"} className={"mr-[58px] md:mr-[22px]"} />
            </div>
            {/*Line */}
            <div className="w-[2px] h-32 bg-cream mx-6"></div>
            {/*Overlay 3 */}
            <div className="flex flex-col space-y-2 items-center justify-center">
              <CircleTextOverlay headingText={"RENT"} />
              <Button text={"Support"} className={"mr-[58px] md:mr-[22px]"} />
            </div>
          </div>
        </div>

        {/*Fourth Section*/}
        <div className="hidden md:block flex flex-col space-y-4">
          {/*Banner */}
          <div>
            <img src={ClothesBanner} className="h-64 w-64" />
          </div>
          {/*Clothes Img */}
          <div>
            <img src={ClothesImg} className="h-64 w-64" />
          </div>
        </div>

        {/*Fifth Section*/}
        <div className="hidden md:block flex flex-col">
          <div>
            <img src={HomeImg} className="h-48 w-48" />
          </div>
          <div>
            <img src={FoodLogo} className="h-48 w-48" />
          </div>
          <div>
            <img src={Clothes2Img} className="h-48 w-48" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
