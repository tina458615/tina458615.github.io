import imgMarketbg from "figma:asset/cce5a6f8dd80ccb4903827a72b191dcdf0c110a8.png";
import img1 from "figma:asset/23c8eefb1abd486565ee2cf191a6c0ea0803239e.png";
import img2 from "figma:asset/e2f891d4eda1eaae3267639493d082d73b3e1ead.png";
import img3 from "figma:asset/f7f4432a167a81325caaff7a044df41dc8dadeec.png";
import img4 from "figma:asset/d671e3e52fda77a73f61ccb3d683017a2540d166.png";
import img5 from "figma:asset/3b3a05a5c0fbe901daee194038b6207fd478cdbf.png";
import img from "figma:asset/bca98e543d7d3a13b2b95a078506abd5ade12e29.png";
import img6 from "figma:asset/1b95179bf86c5a7bc0b4612760414c29a4622c21.png";

function Marketbg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[1080px] left-1/2 top-1/2 w-[1920px]" data-name="marketbg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMarketbg} />
      <div className="absolute aspect-[530/514] left-[8.65%] right-[63.75%] top-[226px]" data-name="樹屋 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
      </div>
      <div className="absolute h-[417px] left-[804px] top-[307px] w-[374px]" data-name="寶石商店 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2} />
      </div>
      <div className="absolute h-[453px] left-[1313px] top-[295px] w-[431px]" data-name="工廠 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3} />
      </div>
    </div>
  );
}

function Frame() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[900px] left-1/2 top-1/2 w-[1600px]" />;
}

function Component1() {
  return (
    <div className="h-[89px] relative shrink-0 w-[192px]" data-name="返回">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[89px] left-1/2 top-1/2 w-[192px]" data-name="返回-正常 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img4} />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute content-stretch flex items-end left-0 px-[100px] py-[5px] top-[940.5px] w-[1920px]" data-name="footer">
      <Component1 />
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute bottom-0 h-[123px] left-0 w-[335px]" data-name="資金數值">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[123px] left-1/2 top-1/2 w-[335px]" data-name="資金 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img5} />
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="h-[123px] relative shrink-0 w-[335px]" data-name="資金">
      <div className="-translate-y-1/2 absolute flex flex-col font-['GenSenRounded_TW:H',sans-serif] justify-center leading-[0] not-italic right-[98px] text-[#4282ca] text-[43px] top-1/2 translate-x-full whitespace-nowrap">
        <p className="leading-[normal]">500</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="資金">
      <Component3 />
      <Component4 />
    </div>
  );
}

function Component6() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[123px] left-1/2 top-1/2 w-[335px]" data-name="發光石頭">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img} />
    </div>
  );
}

function Component7() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[123px] left-1/2 top-1/2 w-[335px]" data-name="資金">
      <div className="-translate-y-1/2 absolute flex flex-col font-['GenSenRounded_TW:H',sans-serif] justify-center leading-[0] not-italic right-[19px] text-[#4282ca] text-[43px] text-right top-1/2 whitespace-nowrap">
        <p className="leading-[normal]">25000噸</p>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="h-[123px] relative shrink-0 w-[335px]" data-name="能量石">
      <Component6 />
      <Component7 />
    </div>
  );
}

function Component9() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[123px] left-1/2 top-1/2 w-[335px]" data-name="普通石頭">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img6} />
    </div>
  );
}

function Component10() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[123px] left-1/2 top-1/2 w-[335px]" data-name="資金">
      <div className="-translate-y-1/2 absolute flex flex-col font-['GenSenRounded_TW:H',sans-serif] justify-center leading-[0] not-italic right-[19px] text-[#4282ca] text-[43px] text-right top-1/2 whitespace-nowrap">
        <p className="leading-[normal]">0噸</p>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="h-[123px] relative shrink-0 w-[335px]" data-name="普通石頭">
      <Component9 />
      <Component10 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex gap-[50px] items-center left-0 px-[50px] top-0 w-[1920px]" data-name="header">
      <Component2 />
      <Component5 />
      <Component8 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="市集">
      <Marketbg />
      <Frame />
      <Footer />
      <Header />
    </div>
  );
}