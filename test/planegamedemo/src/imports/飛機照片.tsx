import imgZoom1 from "figma:asset/d7584c7d9d74bcf94b6d579d45486967ecb495b1.png";
import imgShipframe1 from "figma:asset/03a9e75adafce80b6d86b4e31625d94dbd1bd4eb.png";
import img from "figma:asset/f8a185723dbf5f02f44330f0844fe59216ae6975.png";
import img1 from "figma:asset/e5bf116a6c51aa271883ee90eec7c68e310503bb.png";
import img2 from "figma:asset/bc50438fa84b27bf20aef81623a65a228f65282f.png";
import img3 from "figma:asset/ba89a4fccb97d2de39e1eeb95f06d9692b24b808.png";

function Zoom({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[33px]"} data-name="Zoom 1">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgZoom1} />
    </div>
  );
}

function Shipframe({ className }: { className?: string }) {
  return (
    <div className={className || "h-[267px] relative w-[381px]"} data-name="shipframe">
      <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip top-0">
        <div className="h-[267px] relative shrink-0 w-[381px]" data-name="shipframe 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgShipframe1} />
        </div>
      </div>
    </div>
  );
}

function Shipsmall({ className }: { className?: string }) {
  return (
    <div className={className || "-translate-x-1/2 -translate-y-1/2 h-[180px] relative w-[300px]"} data-name="shipsmall">
      <div className="-translate-x-1/2 absolute bottom-0 h-[219px] left-1/2 w-[390px]" data-name="結局圖">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={img} />
      </div>
      <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="引擎">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
      </div>
      <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="機翼">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2} />
      </div>
      <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="機身">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3} />
      </div>
    </div>
  );
}

function Shipdisplay({ className }: { className?: string }) {
  return (
    <div className={className || "h-[267px] relative w-[381px]"} data-name="shipdisplay">
      <Shipsmall className="-translate-x-1/2 -translate-y-1/2 absolute h-[180px] left-[calc(50%+0.5px)] overflow-clip top-[calc(50%-13.5px)] w-[300px]" />
      <Shipframe className="absolute h-[267px] left-0 top-0 w-[381px]" />
    </div>
  );
}

export default function Component({ className }: { className?: string }) {
  return (
    <div className={className || "h-[267px] relative w-[381px]"} data-name="飛機照片">
      <Shipdisplay className="absolute h-[267px] left-0 overflow-clip top-0 w-[381px]" />
      <Zoom className="absolute right-[55px] size-[33px] top-[34px]" />
      <div className="-translate-x-1/2 absolute bottom-[30px] content-stretch flex flex-col items-center left-[calc(50%+9.5px)] overflow-clip w-[350px]" data-name="shipcontent">
        <p className="font-['GenSenRounded_TW:H',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-black text-center w-[350px] whitespace-pre-wrap">飛機NO.1</p>
      </div>
    </div>
  );
}