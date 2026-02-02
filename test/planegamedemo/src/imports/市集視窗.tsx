import imgMarketbg from "figma:asset/cce5a6f8dd80ccb4903827a72b191dcdf0c110a8.png";
import img1 from "figma:asset/23c8eefb1abd486565ee2cf191a6c0ea0803239e.png";
import img2 from "figma:asset/e2f891d4eda1eaae3267639493d082d73b3e1ead.png";
import img3 from "figma:asset/f7f4432a167a81325caaff7a044df41dc8dadeec.png";
import img4 from "figma:asset/d671e3e52fda77a73f61ccb3d683017a2540d166.png";
import img5 from "figma:asset/3f356239bafc25bc6385c57a09e7cec5585f94c2.png";
import img6 from "figma:asset/3b3a05a5c0fbe901daee194038b6207fd478cdbf.png";
import img from "figma:asset/bca98e543d7d3a13b2b95a078506abd5ade12e29.png";
import img7 from "figma:asset/1b95179bf86c5a7bc0b4612760414c29a4622c21.png";
import imgBuybg from "figma:asset/c3c07e01a9afad0e6c4a3d056d31caf2678cb9f2.png";
import img8 from "figma:asset/58896357bbce36690d01aabb49320d10fb2c0c6f.png";
import img9 from "figma:asset/9e4cd59b5c7e3f1a0f3992eeac3ee0b7eff3227c.png";
import imgClose1 from "figma:asset/9f4a944afeb66075bba4dc050617269a6795e78a.png";
import img10 from "figma:asset/ea30aceeaf9f7b7ca85256e9229c81c36e3b47a9.png";

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

function Component2() {
  return (
    <div className="absolute h-[573px] left-[1666px] top-[495px] w-[254px]" data-name="樹">
      <div className="absolute h-[573px] left-0 top-0 w-[254px]" data-name="樹 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img5} />
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute bottom-0 h-[123px] left-0 w-[335px]" data-name="資金數值">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[123px] left-1/2 top-1/2 w-[335px]" data-name="資金 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img6} />
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="h-[123px] relative shrink-0 w-[335px]" data-name="資金">
      <div className="-translate-y-1/2 absolute flex flex-col font-['GenSenRounded_TW:H',sans-serif] justify-center leading-[0] not-italic right-[98px] text-[#4282ca] text-[43px] top-1/2 translate-x-full whitespace-nowrap">
        <p className="leading-[normal]">500</p>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="資金">
      <Component4 />
      <Component5 />
    </div>
  );
}

function Component7() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[123px] left-1/2 top-1/2 w-[335px]" data-name="發光石頭">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img} />
    </div>
  );
}

function Component8() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[123px] left-1/2 top-1/2 w-[335px]" data-name="資金">
      <div className="-translate-y-1/2 absolute flex flex-col font-['GenSenRounded_TW:H',sans-serif] justify-center leading-[0] not-italic right-[19px] text-[#4282ca] text-[43px] text-right top-1/2 whitespace-nowrap">
        <p className="leading-[normal]">25000噸</p>
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="h-[123px] relative shrink-0 w-[335px]" data-name="能量石">
      <Component7 />
      <Component8 />
    </div>
  );
}

function Component10() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[123px] left-1/2 top-1/2 w-[335px]" data-name="普通石頭">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img7} />
    </div>
  );
}

function Component11() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[123px] left-1/2 top-1/2 w-[335px]" data-name="資金">
      <div className="-translate-y-1/2 absolute flex flex-col font-['GenSenRounded_TW:H',sans-serif] justify-center leading-[0] not-italic right-[19px] text-[#4282ca] text-[43px] text-right top-1/2 whitespace-nowrap">
        <p className="leading-[normal]">0噸</p>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="h-[123px] relative shrink-0 w-[335px]" data-name="普通石頭">
      <Component10 />
      <Component11 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex gap-[50px] items-center left-0 px-[50px] top-0 w-[1920px]" data-name="header">
      <Component3 />
      <Component6 />
      <Component9 />
    </div>
  );
}

function Buybg() {
  return (
    <div className="absolute h-[600px] left-0 top-0 w-[800px]" data-name="buybg">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgBuybg} />
    </div>
  );
}

function Component14() {
  return (
    <div className="content-stretch flex items-center justify-center p-[5px] relative rounded-[29px] shrink-0 w-[300px]" data-name="名稱">
      <p className="font-['GenSenRounded_TW:H',sans-serif] leading-[normal] not-italic relative shrink-0 text-[50px] text-white">商店</p>
    </div>
  );
}

function Component15() {
  return (
    <div className="relative rounded-[29px] shrink-0 w-full" data-name="說明">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[20px] relative w-full">
          <div className="flex-[1_0_0] font-['GenSenRounded_TW:R',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[35px] text-white whitespace-pre-wrap">
            <p className="mb-0">{`能量石不夠了？還是錢不夠了呢？ `}</p>
            <p>和別人買能量石，或者把你的能量石賣出換錢吧！</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component16() {
  return (
    <div className="bg-[rgba(3,48,98,0.85)] content-stretch flex flex-col font-['GenSenRounded_TW:B',sans-serif] gap-[20px] items-center justify-center leading-[normal] not-italic p-[30px] relative rounded-[20px] shrink-0 text-[#ffad57] text-center whitespace-pre-wrap" data-name="數值">
      <p className="relative shrink-0 text-[40px] w-full">當前市價：3000元／千噸</p>
      <p className="relative shrink-0 text-[32px] w-full">(每次可購買或販售1000噸的能量石)</p>
    </div>
  );
}

function Component17() {
  return (
    <div className="h-[103px] relative shrink-0 w-[338px]" data-name="售出">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img8} />
    </div>
  );
}

function Component18() {
  return (
    <div className="h-[100px] relative shrink-0 w-[338px]" data-name="購買">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img9} />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-center pt-[20px] relative shrink-0">
      <Component17 />
      <Component18 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px p-[50px] relative w-[800px]">
      <Component14 />
      <Component15 />
      <Component16 />
      <Frame3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[600px] items-center left-1/2 top-1/2 w-[800px]">
      <Frame2 />
    </div>
  );
}

function Close() {
  return (
    <div className="absolute content-stretch flex items-center justify-center pr-[20px] pt-[20px] right-0 top-0" data-name="close 1">
      <div className="h-[100px] relative shrink-0 w-[97px]" data-name="close 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgClose1} />
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="h-[600px] overflow-clip relative shrink-0 w-[800px]" data-name="設施頁面">
      <Buybg />
      <Frame1 />
      <Close />
    </div>
  );
}

function Component12() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[1080px] items-center justify-center left-1/2 top-1/2 w-[1920px]" data-name="視窗">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img10} />
      <Component13 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="市集-視窗">
      <Marketbg />
      <Frame />
      <Footer />
      <Component2 />
      <Header />
      <Component12 />
    </div>
  );
}