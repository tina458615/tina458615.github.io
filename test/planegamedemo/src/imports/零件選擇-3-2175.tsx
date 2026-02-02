import imgResearchBg from "figma:asset/0db298149e3f07500070a05a897f4e820a077e74.png";
import img from "figma:asset/77d39e554ce0fbffb72a919b841f76ac060369ad.png";
import img1 from "figma:asset/f07973affefecc817ee195e78173aca92c31d098.png";
import img2 from "figma:asset/1f8a132b288aa488afaab3c0fbaf6fbe7fdddc0d.png";
import img3 from "figma:asset/b889460ac904646b726b5edf4220cc843ff9f763.png";
import img4 from "figma:asset/645176653ad3bd492bdd30e7ee3fbaf1fc39d4bb.png";
import img5 from "figma:asset/9a8ae781e76182cd4f5341e99361ee002970fb53.png";
import img6 from "figma:asset/645c3fcbdab7ca72ad280427b5a9a759b3651b1a.png";
import img7 from "figma:asset/74af75ac8b2deccac31c2785b8dfeeba6d5fa3da.png";

function Buildbg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[1080px] left-1/2 top-1/2 w-[1920px]" data-name="buildbg">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[1080px] left-1/2 top-1/2 w-[1920px]" data-name="research_bg">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgResearchBg} />
      </div>
    </div>
  );
}

function Component2() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px]" data-name="預覽-動力系統" />;
}

function Component3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px]" data-name="預覽-機翼">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img} />
    </div>
  );
}

function Component4() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px]" data-name="預覽-機身">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={img1} />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute h-[600px] left-0 top-[135px] w-[800px]" data-name="飛機">
      <Component2 />
      <Component3 />
      <Component4 />
    </div>
  );
}

function Component5() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[155px] h-[100px] left-[calc(50%-0.5px)] w-[339px]" data-name="零件選擇">
      <div className="absolute h-[100px] left-[0.5px] top-0 w-[338px]" data-name="零件選擇 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2} />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[81px] relative shrink-0 w-[52px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[81px] left-1/2 top-1/2 w-[52px]" data-name="左箭號 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3} />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[81px] relative shrink-0 w-[53px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[81px] left-1/2 top-1/2 w-[53px]" data-name="右箭號 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img4} />
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="absolute content-stretch flex h-[870px] items-center justify-between left-0 px-[30px] top-0 w-[800px]" data-name="左右鍵">
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-full relative shrink-0 w-[800px]">
      <Component1 />
      <Component5 />
      <Component6 />
    </div>
  );
}

function Component7() {
  return (
    <div className="h-[90px] relative shrink-0 w-[195px]" data-name="機身">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[90px] left-1/2 top-1/2 w-[195px]" data-name="機身按鈕-正常 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img5} />
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="h-[90px] relative shrink-0 w-[195px]" data-name="機翼">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img6} />
    </div>
  );
}

function Component9() {
  return (
    <div className="h-[90px] relative shrink-0 w-[195px]" data-name="動力系統">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[90px] left-1/2 top-1/2 w-[195px]" data-name="動力系統按鈕-正常 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img7} />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Component7 />
      <Component8 />
      <Component9 />
    </div>
  );
}

function Component10() {
  return (
    <div className="content-stretch flex items-center py-[5px] relative shrink-0" data-name="名稱">
      <p className="font-['GenSenRounded_TW:H',sans-serif] leading-[normal] not-italic relative shrink-0 text-[50px] text-white">金屬長筒型機翼</p>
    </div>
  );
}

function Component11() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[29px] shrink-0 w-full" data-name="說明">
      <p className="flex-[1_0_0] font-['GenSenRounded_TW:R',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[35px] text-white whitespace-pre-wrap">厚重金屬結構延伸出的機翼，外型強悍，帶有濃厚工業風格。</p>
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

function Component12() {
  return (
    <div className="content-stretch flex flex-col font-['GenSenRounded_TW:B',sans-serif] gap-[20px] items-center justify-center leading-[normal] not-italic relative rounded-[29px] shrink-0 text-[40px] text-white w-full whitespace-pre-wrap" data-name="數值">
      <p className="relative shrink-0 w-full">所需資金：500</p>
      <p className="relative shrink-0 w-full">15000噸的能量石失去能量</p>
      <p className="relative shrink-0 w-full">建造時間：50秒</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start justify-center px-[50px] relative size-full">
          <Frame4 />
          <Component10 />
          <Component11 />
          <Frame7 />
          <Component12 />
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

export default function Component() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[160px] relative size-full" data-name="零件選擇">
      <Buildbg />
      <Frame />
    </div>
  );
}