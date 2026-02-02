import img from "figma:asset/f8a185723dbf5f02f44330f0844fe59216ae6975.png";
import img1 from "figma:asset/5c88559406cc7a2fdfc028e3605dfcf832ac1102.png";
import img2 from "figma:asset/7c20f8f7f42b2e8b1b7272b36e8a0167dfabf598.png";
import img3 from "figma:asset/03dc60d964b90dc72b895ad085e79124bdfaab07.png";
import img4 from "figma:asset/8fec1b04e8866a3b10072fdd3975fa8d34d04343.png";
import img5 from "figma:asset/77d39e554ce0fbffb72a919b841f76ac060369ad.png";
import img6 from "figma:asset/3259ff66b15922367efdbb3d3682673ff9f1ee5e.png";

function Component1() {
  return (
    <div className="absolute h-[1080px] left-0 top-0 w-[1920px]" data-name="結局圖">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={img} />
    </div>
  );
}

function Component2() {
  return (
    <div className="h-[102px] relative shrink-0 w-[338px]" data-name="分享飛機">
      <div className="absolute aspect-[338/102] left-0 right-0 top-0" data-name="分享飛機-觸發 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="h-[102px] relative shrink-0 w-[338px]" data-name="飛機展示">
      <div className="absolute aspect-[338/102] left-0 right-0 top-0" data-name="飛機展示-觸發 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2} />
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="h-[102px] relative shrink-0 w-[338px]" data-name="再次挑戰">
      <div className="absolute aspect-[338/102] left-0 right-0 top-0" data-name="再次挑戰-觸發 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3} />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute content-stretch flex gap-[50px] items-end justify-end left-0 p-[5px] top-[940.5px] w-[1920px]" data-name="footer">
      <Component2 />
      <Component3 />
      <Component4 />
    </div>
  );
}

function Component6() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px]" data-name="預覽-動力系統">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img4} />
    </div>
  );
}

function Component7() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px]" data-name="預覽-機翼">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img5} />
    </div>
  );
}

function Component8() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px]" data-name="預覽-機身">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img6} />
    </div>
  );
}

function Component5() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px]" data-name="飛機">
      <Component6 />
      <Component7 />
      <Component8 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="結局頁面-碳排過量">
      <Component1 />
      <Footer />
      <Component5 />
    </div>
  );
}