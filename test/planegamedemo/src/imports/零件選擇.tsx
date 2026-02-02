import img1 from "figma:asset/74af75ac8b2deccac31c2785b8dfeeba6d5fa3da.png";
import img2 from "figma:asset/61e9244a0cc381f2394a08297eb284233be5c51b.png";
import img3 from "figma:asset/8b384a16bb9ac7519afeab099bacabeb7d02df93.png";
import img4 from "figma:asset/645c3fcbdab7ca72ad280427b5a9a759b3651b1a.png";
import img5 from "figma:asset/9a8ae781e76182cd4f5341e99361ee002970fb53.png";
import img6 from "figma:asset/7bc9fc436980d9a85babcf2fb7012aed4aab284e.png";
import img7 from "figma:asset/1f8a132b288aa488afaab3c0fbaf6fbe7fdddc0d.png";
import img8 from "figma:asset/9e374cedc9afe9fb73ccdc893c85f547854305de.png";
import img from "figma:asset/0db298149e3f07500070a05a897f4e820a077e74.png";
import img9 from "figma:asset/b889460ac904646b726b5edf4220cc843ff9f763.png";
import img10 from "figma:asset/645176653ad3bd492bdd30e7ee3fbaf1fc39d4bb.png";
import img11 from "figma:asset/8dd082b811121164c286fd1f393a563a8144fd80.png";
import img12 from "figma:asset/3259ff66b15922367efdbb3d3682673ff9f1ee5e.png";
type ComponentProps = {
  className?: string;
  property1?: "動力系統-正常" | "動力系統-觸發";
};

function Component({ className, property1 = "動力系統-正常" }: ComponentProps) {
  const is = property1 === "動力系統-觸發";
  const is1 = property1 === "動力系統-正常";
  return (
    <div className={className || "h-[90px] relative w-[195px]"}>
      {is1 && (
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[90px] left-1/2 top-1/2 w-[195px]" data-name="動力系統按鈕-正常 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
        </div>
      )}
      {is && <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2} />}
    </div>
  );
}
type Component1Props = {
  className?: string;
  property1?: "機翼-正常" | "機翼-觸發";
};

function Component1({ className, property1 = "機翼-正常" }: Component1Props) {
  const is = property1 === "機翼-觸發";
  const is1 = property1 === "機翼-正常";
  return (
    <div className={className || "h-[90px] relative w-[195px]"}>
      {is1 && (
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[90px] left-1/2 top-1/2 w-[195px]" data-name="機翼按鈕-正常 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3} />
        </div>
      )}
      {is && <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img4} />}
    </div>
  );
}
type Component2Props = {
  className?: string;
  property1?: "機身-正常" | "機身-觸發";
};

function Component2({ className, property1 = "機身-正常" }: Component2Props) {
  const is = property1 === "機身-觸發";
  const is1 = property1 === "機身-正常";
  return (
    <div className={className || "h-[90px] relative w-[195px]"}>
      {is1 && (
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[90px] left-1/2 top-1/2 w-[195px]" data-name="機身按鈕-正常 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img5} />
        </div>
      )}
      {is && <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img6} />}
    </div>
  );
}
type Component3Props = {
  className?: string;
  property1?: "零件選擇-正常" | "零件選擇-觸發";
};

function Component3({ className, property1 = "零件選擇-正常" }: Component3Props) {
  const is = property1 === "零件選擇-觸發";
  const is1 = property1 === "零件選擇-正常";
  return (
    <div className={className || `relative ${is ? "h-[102px] w-[338px]" : "h-[100px] w-[339px]"}`}>
      {is1 && (
        <div className="absolute h-[100px] left-[0.5px] top-0 w-[338px]" data-name="零件選擇 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img7} />
        </div>
      )}
      {is && <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img8} />}
    </div>
  );
}

export default function Component4({ className }: { className?: string }) {
  return (
    <div className={className || "-translate-x-1/2 -translate-y-1/2 content-stretch flex flex-col h-[1080px] items-center justify-center px-[160px] relative w-[1920px]"} data-name="零件選擇">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[1080px] left-1/2 top-1/2 w-[1920px]" data-name="buildbg">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[1080px] left-1/2 top-1/2 w-[1920px]" data-name="research_bg">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img} />
        </div>
      </div>
      <div className="content-stretch flex h-[980px] items-center justify-center relative shrink-0 w-[1600px]">
        <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative">
          <div className="h-full relative shrink-0 w-[800px]">
            <div className="absolute content-stretch flex h-[870px] items-center justify-between left-0 px-[30px] top-0 w-[800px]" data-name="左右鍵">
              <div className="h-[69px] relative shrink-0 w-[76px]">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[81px] left-1/2 top-[calc(50%+0.5px)] w-[52px]" data-name="左箭號 1">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img9} />
                </div>
              </div>
              <div className="h-[69px] relative shrink-0 w-[76px]">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[81px] left-[calc(50%+0.5px)] top-[calc(50%+0.5px)] w-[53px]" data-name="右箭號 1">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img10} />
                </div>
              </div>
            </div>
            <div className="absolute h-[600px] left-0 top-[135px] w-[800px]" data-name="飛機">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px]" data-name="預覽-動力系統" />
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px]" data-name="預覽-機翼">
                <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={img11} />
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px]" data-name="預覽-機身">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img12} />
              </div>
            </div>
            <Component3 className="-translate-x-1/2 absolute bottom-[155px] h-[100px] left-[calc(50%-0.5px)] w-[339px]" />
          </div>
          <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col gap-[20px] items-start justify-center px-[50px] relative size-full">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <Component2 className="h-[90px] relative shrink-0 w-[195px]" property1="機身-觸發" />
                  <Component1 className="h-[90px] relative shrink-0 w-[195px]" />
                  <Component className="h-[90px] relative shrink-0 w-[195px]" />
                </div>
                <div className="content-stretch flex items-center py-[5px] relative shrink-0" data-name="名稱">
                  <p className="font-['GenSenRounded_TW:H',sans-serif] leading-[normal] not-italic relative shrink-0 text-[50px] text-white">硬木材料機身</p>
                </div>
                <div className="content-stretch flex items-center justify-center relative rounded-[29px] shrink-0 w-full" data-name="說明">
                  <p className="flex-[1_0_0] font-['GenSenRounded_TW:R',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[35px] text-white whitespace-pre-wrap">自然動力，天然以原木打造的厚實機身，結構單純而穩定，帶有自然工藝感，飛行時給人踏實安心的印象。的尚好～</p>
                </div>
                <div className="h-[60px] relative shrink-0 w-full">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 700 60">
                    <g id="Frame 45">
                      <line id="Line 1" stroke="var(--stroke-0, white)" strokeWidth="6" x2="700" y1="27" y2="27" />
                    </g>
                  </svg>
                </div>
                <div className="content-stretch flex flex-col font-['GenSenRounded_TW:B',sans-serif] gap-[20px] items-center justify-center leading-[normal] not-italic relative rounded-[29px] shrink-0 text-[40px] text-white w-full whitespace-pre-wrap" data-name="數值">
                  <p className="relative shrink-0 w-full">所需資金：200</p>
                  <p className="relative shrink-0 w-full">消耗能量石：5000</p>
                  <p className="relative shrink-0 w-full">建造時間：120秒</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}