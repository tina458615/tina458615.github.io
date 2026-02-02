import imgResearchBg from "figma:asset/df42a97beaddeb18cf625ee1c81dcb57fe9eac33.png";
import img1 from "figma:asset/4e0af7b81cedd3c547a041477d132546b5c8b933.png";
import imgTimebg from "figma:asset/72f5382063dd2e237783d309f7eb55246dba5e61.png";
import img from "figma:asset/8dd082b811121164c286fd1f393a563a8144fd80.png";
import img2 from "figma:asset/f07973affefecc817ee195e78173aca92c31d098.png";
import img3 from "figma:asset/3b3a05a5c0fbe901daee194038b6207fd478cdbf.png";
import img4 from "figma:asset/bca98e543d7d3a13b2b95a078506abd5ade12e29.png";
import img5 from "figma:asset/1b95179bf86c5a7bc0b4612760414c29a4622c21.png";
import img6 from "figma:asset/97d043fd91bde68585bd5e09826e07b9315f38ac.png";
import img7 from "figma:asset/c99b55341d318391a192b7aa0f9ef3e706c1d4d9.png";

function ResearchBg() {
  return (
    <div className="absolute h-[1080px] left-0 top-0 w-[1920px]" data-name="research_bg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgResearchBg} />
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute h-[569px] left-0 top-[224px] w-[538px]" data-name="爺爺">
      <div className="absolute h-[569px] left-0 top-0 w-[538px]" data-name="爺爺 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute h-[847px] left-[127px] top-[233px] w-[944px]" data-name="路人">
      <Component2 />
    </div>
  );
}

function Timebg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px]" data-name="timebg">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgTimebg} />
    </div>
  );
}

function Component4() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px]" data-name="預覽-動力系統" />;
}

function Component5() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px]" data-name="預覽-機翼">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={img} />
    </div>
  );
}

function Component6() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px]" data-name="預覽-機身">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={img2} />
    </div>
  );
}

function Component3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px]" data-name="飛機">
      <Component4 />
      <Component5 />
      <Component6 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['GenSenRounded_TW:B',sans-serif] justify-center leading-[0] left-[calc(50%-95px)] not-italic text-[48px] text-white top-[441px] tracking-[-0.528px] whitespace-nowrap">
        <p className="leading-[1.5]">點我建造</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-y-1/2 absolute h-[600px] left-[986px] top-[calc(50%+40px)] w-[800px]">
      <Timebg />
      <Component3 />
    </div>
  );
}

function Component8() {
  return (
    <div className="absolute bottom-0 h-[123px] left-0 w-[335px]" data-name="資金數值">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[123px] left-1/2 top-1/2 w-[335px]" data-name="資金 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3} />
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="h-[123px] relative shrink-0 w-[335px]" data-name="資金">
      <div className="-translate-y-1/2 absolute flex flex-col font-['GenSenRounded_TW:H',sans-serif] justify-center leading-[0] not-italic right-[98px] text-[#4282ca] text-[43px] top-1/2 translate-x-full whitespace-nowrap">
        <p className="leading-[normal]">500</p>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="資金">
      <Component8 />
      <Component9 />
    </div>
  );
}

function Component11() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[123px] left-1/2 top-1/2 w-[335px]" data-name="發光石頭">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img4} />
    </div>
  );
}

function Component12() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[123px] left-1/2 top-1/2 w-[335px]" data-name="資金">
      <div className="-translate-y-1/2 absolute flex flex-col font-['GenSenRounded_TW:H',sans-serif] justify-center leading-[0] not-italic right-[19px] text-[#4282ca] text-[43px] text-right top-1/2 whitespace-nowrap">
        <p className="leading-[normal]">25000噸</p>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="h-[123px] relative shrink-0 w-[335px]" data-name="能量石">
      <Component11 />
      <Component12 />
    </div>
  );
}

function Component14() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[123px] left-1/2 top-1/2 w-[335px]" data-name="普通石頭">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img5} />
    </div>
  );
}

function Component15() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[123px] left-1/2 top-1/2 w-[335px]" data-name="資金">
      <div className="-translate-y-1/2 absolute flex flex-col font-['GenSenRounded_TW:H',sans-serif] justify-center leading-[0] not-italic right-[19px] text-[#4282ca] text-[43px] text-right top-1/2 whitespace-nowrap">
        <p className="leading-[normal]">0噸</p>
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="h-[123px] relative shrink-0 w-[335px]" data-name="普通石頭">
      <Component14 />
      <Component15 />
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[50px] items-center px-[50px] relative w-full">
          <Component7 />
          <Component10 />
          <Component13 />
        </div>
      </div>
    </div>
  );
}

function Component16() {
  return (
    <div className="h-[100px] relative shrink-0 w-[339px]" data-name="市集">
      <div className="absolute h-[100px] left-[0.5px] top-0 w-[338px]" data-name="市集 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img6} />
      </div>
    </div>
  );
}

function Component17() {
  return (
    <div className="h-[100px] relative shrink-0 w-[339px]" data-name="建造完成">
      <div className="absolute h-[100px] left-[0.5px] top-0 w-[338px]" data-name="升空未解鎖 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img7} />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="relative shrink-0 w-full" data-name="footer">
      <div className="flex flex-row items-end justify-end size-full">
        <div className="content-stretch flex gap-[10px] items-end justify-end p-[5px] relative w-full">
          <Component16 />
          <Component17 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[811px] h-[1080px] items-center justify-center left-1/2 top-1/2 w-[1920px]">
      <Header />
      <Footer />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="飛機建造_備存">
      <ResearchBg />
      <Component1 />
      <Frame />
      <Frame1 />
    </div>
  );
}