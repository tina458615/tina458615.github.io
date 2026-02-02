import imgResearchBg from "figma:asset/df42a97beaddeb18cf625ee1c81dcb57fe9eac33.png";
import img1 from "figma:asset/4e0af7b81cedd3c547a041477d132546b5c8b933.png";
import imgBg from "figma:asset/b208d3fe9572a583893bedec22214242d928a90b.png";
import imgTimebg from "figma:asset/72f5382063dd2e237783d309f7eb55246dba5e61.png";
import img from "figma:asset/e5fe6d9d397e73d2677f0a291baabd9a9e717cc8.png";
import img2 from "figma:asset/8dd082b811121164c286fd1f393a563a8144fd80.png";
import img3 from "figma:asset/3259ff66b15922367efdbb3d3682673ff9f1ee5e.png";
import img4 from "figma:asset/3b3a05a5c0fbe901daee194038b6207fd478cdbf.png";
import img5 from "figma:asset/bca98e543d7d3a13b2b95a078506abd5ade12e29.png";
import img6 from "figma:asset/1b95179bf86c5a7bc0b4612760414c29a4622c21.png";
import img7 from "figma:asset/97d043fd91bde68585bd5e09826e07b9315f38ac.png";
import img8 from "figma:asset/c99b55341d318391a192b7aa0f9ef3e706c1d4d9.png";
import img9 from "figma:asset/ea30aceeaf9f7b7ca85256e9229c81c36e3b47a9.png";
import imgResearchBg1 from "figma:asset/0db298149e3f07500070a05a897f4e820a077e74.png";
import img10 from "figma:asset/b889460ac904646b726b5edf4220cc843ff9f763.png";
import img11 from "figma:asset/645176653ad3bd492bdd30e7ee3fbaf1fc39d4bb.png";
import img12 from "figma:asset/1f8a132b288aa488afaab3c0fbaf6fbe7fdddc0d.png";
import img13 from "figma:asset/7bc9fc436980d9a85babcf2fb7012aed4aab284e.png";
import img14 from "figma:asset/8b384a16bb9ac7519afeab099bacabeb7d02df93.png";
import img15 from "figma:asset/74af75ac8b2deccac31c2785b8dfeeba6d5fa3da.png";

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

function bg() {
  return (
    <div className="absolute h-[354px] left-[357px] top-[-85px] w-[430px]" data-name="對話框bg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
      <div className="absolute bottom-[25.42%] flex flex-col font-['GenSenRounded_TW:B',sans-serif] justify-center leading-[0] left-[calc(50%-184px)] not-italic overflow-hidden text-[35px] text-[rgba(0,0,0,0.8)] text-ellipsis top-[10.17%] tracking-[-0.385px] w-[368px]">
        <p className="leading-[1.5] whitespace-pre-wrap">錢不夠的時候，慢慢等一下也沒關係喔。</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute h-[847px] left-[127px] top-[233px] w-[944px]" data-name="路人">
      <Component2 />
      <bg />
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
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px]" data-name="預覽-動力系統">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={img} />
    </div>
  );
}

function Component5() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px]" data-name="預覽-機翼">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={img2} />
    </div>
  );
}

function Component6() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px]" data-name="預覽-機身">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3} />
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

function Frame8() {
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
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img4} />
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
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img5} />
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
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img6} />
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
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img7} />
      </div>
    </div>
  );
}

function Component17() {
  return (
    <div className="h-[100px] relative shrink-0 w-[339px]" data-name="建造完成">
      <div className="absolute h-[100px] left-[0.5px] top-0 w-[338px]" data-name="升空未解鎖 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img8} />
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

function Frame9() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[811px] h-[1080px] items-center justify-center left-1/2 top-1/2 w-[1920px]">
      <Header />
      <Footer />
    </div>
  );
}

function Component18() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[1080px] left-1/2 top-1/2 w-[1920px]" data-name="視窗">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img9} />
    </div>
  );
}

function Buildbg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[1080px] left-1/2 top-1/2 w-[1920px]" data-name="buildbg">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[1080px] left-1/2 top-1/2 w-[1920px]" data-name="research_bg">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgResearchBg1} />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[69px] relative shrink-0 w-[76px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[81px] left-1/2 top-[calc(50%+0.5px)] w-[52px]" data-name="左箭號 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img10} />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[69px] relative shrink-0 w-[76px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[81px] left-[calc(50%+0.5px)] top-[calc(50%+0.5px)] w-[53px]" data-name="右箭號 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img11} />
      </div>
    </div>
  );
}

function Component20() {
  return (
    <div className="absolute content-stretch flex h-[870px] items-center justify-between left-0 px-[30px] top-0 w-[800px]" data-name="左右鍵">
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Component22() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px]" data-name="預覽-動力系統" />;
}

function Component23() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px]" data-name="預覽-機翼">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={img2} />
    </div>
  );
}

function Component24() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px]" data-name="預覽-機身">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3} />
    </div>
  );
}

function Component21() {
  return (
    <div className="absolute h-[600px] left-0 top-[135px] w-[800px]" data-name="飛機">
      <Component22 />
      <Component23 />
      <Component24 />
    </div>
  );
}

function Component25() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[155px] h-[100px] left-[calc(50%-0.5px)] w-[339px]" data-name="零件選擇">
      <div className="absolute h-[100px] left-[0.5px] top-0 w-[338px]" data-name="零件選擇 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img12} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-full relative shrink-0 w-[800px]">
      <Component20 />
      <Component21 />
      <Component25 />
    </div>
  );
}

function Component26() {
  return (
    <div className="h-[90px] relative shrink-0 w-[195px]" data-name="機身">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img13} />
    </div>
  );
}

function Component27() {
  return (
    <div className="h-[90px] relative shrink-0 w-[195px]" data-name="機翼">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[90px] left-1/2 top-1/2 w-[195px]" data-name="機翼按鈕-正常 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img14} />
      </div>
    </div>
  );
}

function Component28() {
  return (
    <div className="h-[90px] relative shrink-0 w-[195px]" data-name="動力系統">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[90px] left-1/2 top-1/2 w-[195px]" data-name="動力系統按鈕-正常 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img15} />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Component26 />
      <Component27 />
      <Component28 />
    </div>
  );
}

function Component29() {
  return (
    <div className="content-stretch flex items-center py-[5px] relative shrink-0" data-name="名稱">
      <p className="font-['GenSenRounded_TW:H',sans-serif] leading-[normal] not-italic relative shrink-0 text-[50px] text-white">硬木材料機身</p>
    </div>
  );
}

function Component30() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[29px] shrink-0 w-full" data-name="說明">
      <p className="flex-[1_0_0] font-['GenSenRounded_TW:R',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[35px] text-white whitespace-pre-wrap">自然動力，天然以原木打造的厚實機身，結構單純而穩定，帶有自然工藝感，飛行時給人踏實安心的印象。的尚好～</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[60px] relative shrink-0 w-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 700 60">
        <g id="Frame 45">
          <line id="Line 1" stroke="var(--stroke-0, white)" strokeWidth="6" x2="700" y1="27" y2="27" />
        </g>
      </svg>
    </div>
  );
}

function Component31() {
  return (
    <div className="content-stretch flex flex-col font-['GenSenRounded_TW:B',sans-serif] gap-[20px] items-center justify-center leading-[normal] not-italic relative rounded-[29px] shrink-0 text-[40px] text-white w-full whitespace-pre-wrap" data-name="數值">
      <p className="relative shrink-0 w-full">所需資金：200</p>
      <p className="relative shrink-0 w-full">消耗能量石：5000</p>
      <p className="relative shrink-0 w-full">建造時間：120秒</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start justify-center px-[50px] relative size-full">
          <Frame4 />
          <Component29 />
          <Component30 />
          <Frame7 />
          <Component31 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex h-[980px] items-center justify-center relative shrink-0 w-[1600px]">
      <Frame3 />
    </div>
  );
}

function Component19() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[1080px] items-center justify-center left-1/2 px-[160px] top-1/2 w-[1920px]" data-name="零件選擇">
      <Buildbg />
      <Frame />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="飛機建造_備存">
      <ResearchBg />
      <Component1 />
      <Frame8 />
      <Frame9 />
      <Component18 />
      <Component19 />
    </div>
  );
}