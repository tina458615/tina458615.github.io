import imgDiarybg1 from "figma:asset/9303b005a8e8e14c4a15dffcbe505cebb264225e.png";
import img from "figma:asset/f8a185723dbf5f02f44330f0844fe59216ae6975.png";
import img1 from "figma:asset/e5bf116a6c51aa271883ee90eec7c68e310503bb.png";
import img2 from "figma:asset/bc50438fa84b27bf20aef81623a65a228f65282f.png";
import img3 from "figma:asset/ba89a4fccb97d2de39e1eeb95f06d9692b24b808.png";
import imgShipframe1 from "figma:asset/03a9e75adafce80b6d86b4e31625d94dbd1bd4eb.png";
import imgZoom from "figma:asset/d7584c7d9d74bcf94b6d579d45486967ecb495b1.png";
import img4 from "figma:asset/420cf268f66808f46d9d8c9836be61950d8f998e.png";
import img5 from "figma:asset/39c5f0a6005ea35de029ee4da561d94609a50ed5.png";
import img6 from "figma:asset/7452cdda0a82dfd81db6130e7c652abe3d7f4196.png";

function Gallerybg() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-4px] top-0 w-[1928px]" data-name="gallerybg">
      <div className="h-[1080px] relative shrink-0 w-full" data-name="diarybg 1">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgDiarybg1} />
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[219px] left-1/2 w-[390px]" data-name="結局圖">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={img} />
    </div>
  );
}

function Component3() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="引擎">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
    </div>
  );
}

function Component4() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="機翼">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2} />
    </div>
  );
}

function Component5() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="機身">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3} />
    </div>
  );
}

function Shipsmall() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[180px] left-[calc(50%+0.5px)] overflow-clip top-[calc(50%-13.5px)] w-[300px]" data-name="shipsmall">
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip top-0">
      <div className="h-[267px] relative shrink-0 w-[381px]" data-name="shipframe 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgShipframe1} />
      </div>
    </div>
  );
}

function Shipframe() {
  return (
    <div className="absolute h-[267px] left-0 top-0 w-[381px]" data-name="shipframe">
      <Frame3 />
    </div>
  );
}

function Shipdisplay() {
  return (
    <div className="absolute h-[267px] left-0 overflow-clip top-0 w-[381px]" data-name="shipdisplay">
      <Shipsmall />
      <Shipframe />
    </div>
  );
}

function Zoom() {
  return (
    <div className="absolute right-[55px] size-[33px] top-[34px]" data-name="Zoom">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgZoom} />
    </div>
  );
}

function Shipcontent() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[30px] content-stretch flex flex-col items-center left-[calc(50%+9.5px)] overflow-clip w-[350px]" data-name="shipcontent">
      <p className="font-['GenSenRounded_TW:H',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-black text-center w-[350px] whitespace-pre-wrap">飛機NO.1</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="col-[1] h-[267px] overflow-clip relative row-[1] shrink-0 w-[381px]" data-name="飛機照片">
      <Shipdisplay />
      <Zoom />
      <Shipcontent />
    </div>
  );
}

function Component7() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[219px] left-1/2 w-[390px]" data-name="結局圖">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={img} />
    </div>
  );
}

function Component8() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="引擎">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
    </div>
  );
}

function Component9() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="機翼">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2} />
    </div>
  );
}

function Component10() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="機身">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3} />
    </div>
  );
}

function Shipsmall1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[180px] left-[calc(50%+0.5px)] overflow-clip top-[calc(50%-13.5px)] w-[300px]" data-name="shipsmall">
      <Component7 />
      <Component8 />
      <Component9 />
      <Component10 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip top-0">
      <div className="h-[267px] relative shrink-0 w-[381px]" data-name="shipframe 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgShipframe1} />
      </div>
    </div>
  );
}

function Shipframe1() {
  return (
    <div className="absolute h-[267px] left-0 top-0 w-[381px]" data-name="shipframe">
      <Frame4 />
    </div>
  );
}

function Shipdisplay1() {
  return (
    <div className="absolute h-[267px] left-0 overflow-clip top-0 w-[381px]" data-name="shipdisplay">
      <Shipsmall1 />
      <Shipframe1 />
    </div>
  );
}

function Zoom1() {
  return (
    <div className="absolute right-[55px] size-[33px] top-[34px]" data-name="Zoom">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgZoom} />
    </div>
  );
}

function Shipcontent1() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[30px] content-stretch flex flex-col items-center left-[calc(50%+9.5px)] overflow-clip w-[350px]" data-name="shipcontent">
      <p className="font-['GenSenRounded_TW:H',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-black text-center w-[350px] whitespace-pre-wrap">飛機NO.1</p>
    </div>
  );
}

function Component6() {
  return (
    <div className="col-[2] h-[267px] overflow-clip relative row-[1] shrink-0 w-[381px]" data-name="飛機照片">
      <Shipdisplay1 />
      <Zoom1 />
      <Shipcontent1 />
    </div>
  );
}

function Component12() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[219px] left-1/2 w-[390px]" data-name="結局圖">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={img} />
    </div>
  );
}

function Component13() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="引擎">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
    </div>
  );
}

function Component14() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="機翼">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2} />
    </div>
  );
}

function Component15() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="機身">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3} />
    </div>
  );
}

function Shipsmall2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[180px] left-[calc(50%+0.5px)] overflow-clip top-[calc(50%-13.5px)] w-[300px]" data-name="shipsmall">
      <Component12 />
      <Component13 />
      <Component14 />
      <Component15 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip top-0">
      <div className="h-[267px] relative shrink-0 w-[381px]" data-name="shipframe 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgShipframe1} />
      </div>
    </div>
  );
}

function Shipframe2() {
  return (
    <div className="absolute h-[267px] left-0 top-0 w-[381px]" data-name="shipframe">
      <Frame5 />
    </div>
  );
}

function Shipdisplay2() {
  return (
    <div className="absolute h-[267px] left-0 overflow-clip top-0 w-[381px]" data-name="shipdisplay">
      <Shipsmall2 />
      <Shipframe2 />
    </div>
  );
}

function Zoom2() {
  return (
    <div className="absolute right-[55px] size-[33px] top-[34px]" data-name="Zoom">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgZoom} />
    </div>
  );
}

function Shipcontent2() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[30px] content-stretch flex flex-col items-center left-[calc(50%+9.5px)] overflow-clip w-[350px]" data-name="shipcontent">
      <p className="font-['GenSenRounded_TW:H',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-black text-center w-[350px] whitespace-pre-wrap">飛機NO.1</p>
    </div>
  );
}

function Component11() {
  return (
    <div className="col-[3] h-[267px] overflow-clip relative row-[1] shrink-0 w-[381px]" data-name="飛機照片">
      <Shipdisplay2 />
      <Zoom2 />
      <Shipcontent2 />
    </div>
  );
}

function Component17() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[219px] left-1/2 w-[390px]" data-name="結局圖">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={img} />
    </div>
  );
}

function Component18() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="引擎">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
    </div>
  );
}

function Component19() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="機翼">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2} />
    </div>
  );
}

function Component20() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="機身">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3} />
    </div>
  );
}

function Shipsmall3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[180px] left-[calc(50%+0.5px)] overflow-clip top-[calc(50%-13.5px)] w-[300px]" data-name="shipsmall">
      <Component17 />
      <Component18 />
      <Component19 />
      <Component20 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip top-0">
      <div className="h-[267px] relative shrink-0 w-[381px]" data-name="shipframe 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgShipframe1} />
      </div>
    </div>
  );
}

function Shipframe3() {
  return (
    <div className="absolute h-[267px] left-0 top-0 w-[381px]" data-name="shipframe">
      <Frame6 />
    </div>
  );
}

function Shipdisplay3() {
  return (
    <div className="absolute h-[267px] left-0 overflow-clip top-0 w-[381px]" data-name="shipdisplay">
      <Shipsmall3 />
      <Shipframe3 />
    </div>
  );
}

function Zoom3() {
  return (
    <div className="absolute right-[55px] size-[33px] top-[34px]" data-name="Zoom">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgZoom} />
    </div>
  );
}

function Shipcontent3() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[30px] content-stretch flex flex-col items-center left-[calc(50%+9.5px)] overflow-clip w-[350px]" data-name="shipcontent">
      <p className="font-['GenSenRounded_TW:H',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-black text-center w-[350px] whitespace-pre-wrap">飛機NO.1</p>
    </div>
  );
}

function Component16() {
  return (
    <div className="col-[4] h-[267px] overflow-clip relative row-[1] shrink-0 w-[381px]" data-name="飛機照片">
      <Shipdisplay3 />
      <Zoom3 />
      <Shipcontent3 />
    </div>
  );
}

function Component22() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[219px] left-1/2 w-[390px]" data-name="結局圖">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={img} />
    </div>
  );
}

function Component23() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="引擎">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
    </div>
  );
}

function Component24() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="機翼">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2} />
    </div>
  );
}

function Component25() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="機身">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3} />
    </div>
  );
}

function Shipsmall4() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[180px] left-[calc(50%+0.5px)] overflow-clip top-[calc(50%-13.5px)] w-[300px]" data-name="shipsmall">
      <Component22 />
      <Component23 />
      <Component24 />
      <Component25 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip top-0">
      <div className="h-[267px] relative shrink-0 w-[381px]" data-name="shipframe 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgShipframe1} />
      </div>
    </div>
  );
}

function Shipframe4() {
  return (
    <div className="absolute h-[267px] left-0 top-0 w-[381px]" data-name="shipframe">
      <Frame7 />
    </div>
  );
}

function Shipdisplay4() {
  return (
    <div className="absolute h-[267px] left-0 overflow-clip top-0 w-[381px]" data-name="shipdisplay">
      <Shipsmall4 />
      <Shipframe4 />
    </div>
  );
}

function Zoom4() {
  return (
    <div className="absolute right-[55px] size-[33px] top-[34px]" data-name="Zoom">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgZoom} />
    </div>
  );
}

function Shipcontent4() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[30px] content-stretch flex flex-col items-center left-[calc(50%+9.5px)] overflow-clip w-[350px]" data-name="shipcontent">
      <p className="font-['GenSenRounded_TW:H',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-black text-center w-[350px] whitespace-pre-wrap">飛機NO.1</p>
    </div>
  );
}

function Component21() {
  return (
    <div className="col-[1] h-[267px] overflow-clip relative row-[2] shrink-0 w-[381px]" data-name="飛機照片">
      <Shipdisplay4 />
      <Zoom4 />
      <Shipcontent4 />
    </div>
  );
}

function Component27() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[219px] left-1/2 w-[390px]" data-name="結局圖">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={img} />
    </div>
  );
}

function Component28() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="引擎">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
    </div>
  );
}

function Component29() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="機翼">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2} />
    </div>
  );
}

function Component30() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="機身">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3} />
    </div>
  );
}

function Shipsmall5() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[180px] left-[calc(50%+0.5px)] overflow-clip top-[calc(50%-13.5px)] w-[300px]" data-name="shipsmall">
      <Component27 />
      <Component28 />
      <Component29 />
      <Component30 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip top-0">
      <div className="h-[267px] relative shrink-0 w-[381px]" data-name="shipframe 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgShipframe1} />
      </div>
    </div>
  );
}

function Shipframe5() {
  return (
    <div className="absolute h-[267px] left-0 top-0 w-[381px]" data-name="shipframe">
      <Frame8 />
    </div>
  );
}

function Shipdisplay5() {
  return (
    <div className="absolute h-[267px] left-0 overflow-clip top-0 w-[381px]" data-name="shipdisplay">
      <Shipsmall5 />
      <Shipframe5 />
    </div>
  );
}

function Zoom5() {
  return (
    <div className="absolute right-[55px] size-[33px] top-[34px]" data-name="Zoom">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgZoom} />
    </div>
  );
}

function Shipcontent5() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[30px] content-stretch flex flex-col items-center left-[calc(50%+9.5px)] overflow-clip w-[350px]" data-name="shipcontent">
      <p className="font-['GenSenRounded_TW:H',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-black text-center w-[350px] whitespace-pre-wrap">飛機NO.1</p>
    </div>
  );
}

function Component26() {
  return (
    <div className="col-[2] h-[267px] overflow-clip relative row-[2] shrink-0 w-[381px]" data-name="飛機照片">
      <Shipdisplay5 />
      <Zoom5 />
      <Shipcontent5 />
    </div>
  );
}

function Component32() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[219px] left-1/2 w-[390px]" data-name="結局圖">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={img} />
    </div>
  );
}

function Component33() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="引擎">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
    </div>
  );
}

function Component34() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="機翼">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2} />
    </div>
  );
}

function Component35() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="機身">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3} />
    </div>
  );
}

function Shipsmall6() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[180px] left-[calc(50%+0.5px)] overflow-clip top-[calc(50%-13.5px)] w-[300px]" data-name="shipsmall">
      <Component32 />
      <Component33 />
      <Component34 />
      <Component35 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip top-0">
      <div className="h-[267px] relative shrink-0 w-[381px]" data-name="shipframe 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgShipframe1} />
      </div>
    </div>
  );
}

function Shipframe6() {
  return (
    <div className="absolute h-[267px] left-0 top-0 w-[381px]" data-name="shipframe">
      <Frame9 />
    </div>
  );
}

function Shipdisplay6() {
  return (
    <div className="absolute h-[267px] left-0 overflow-clip top-0 w-[381px]" data-name="shipdisplay">
      <Shipsmall6 />
      <Shipframe6 />
    </div>
  );
}

function Zoom6() {
  return (
    <div className="absolute right-[55px] size-[33px] top-[34px]" data-name="Zoom">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgZoom} />
    </div>
  );
}

function Shipcontent6() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[30px] content-stretch flex flex-col items-center left-[calc(50%+9.5px)] overflow-clip w-[350px]" data-name="shipcontent">
      <p className="font-['GenSenRounded_TW:H',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-black text-center w-[350px] whitespace-pre-wrap">飛機NO.1</p>
    </div>
  );
}

function Component31() {
  return (
    <div className="col-[3] h-[267px] overflow-clip relative row-[2] shrink-0 w-[381px]" data-name="飛機照片">
      <Shipdisplay6 />
      <Zoom6 />
      <Shipcontent6 />
    </div>
  );
}

function Component37() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[219px] left-1/2 w-[390px]" data-name="結局圖">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={img} />
    </div>
  );
}

function Component38() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="引擎">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
    </div>
  );
}

function Component39() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="機翼">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2} />
    </div>
  );
}

function Component40() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="機身">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3} />
    </div>
  );
}

function Shipsmall7() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[180px] left-[calc(50%+0.5px)] overflow-clip top-[calc(50%-13.5px)] w-[300px]" data-name="shipsmall">
      <Component37 />
      <Component38 />
      <Component39 />
      <Component40 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip top-0">
      <div className="h-[267px] relative shrink-0 w-[381px]" data-name="shipframe 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgShipframe1} />
      </div>
    </div>
  );
}

function Shipframe7() {
  return (
    <div className="absolute h-[267px] left-0 top-0 w-[381px]" data-name="shipframe">
      <Frame10 />
    </div>
  );
}

function Shipdisplay7() {
  return (
    <div className="absolute h-[267px] left-0 overflow-clip top-0 w-[381px]" data-name="shipdisplay">
      <Shipsmall7 />
      <Shipframe7 />
    </div>
  );
}

function Zoom7() {
  return (
    <div className="absolute right-[55px] size-[33px] top-[34px]" data-name="Zoom">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgZoom} />
    </div>
  );
}

function Shipcontent7() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[30px] content-stretch flex flex-col items-center left-[calc(50%+9.5px)] overflow-clip w-[350px]" data-name="shipcontent">
      <p className="font-['GenSenRounded_TW:H',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-black text-center w-[350px] whitespace-pre-wrap">飛機NO.1</p>
    </div>
  );
}

function Component36() {
  return (
    <div className="col-[4] h-[267px] overflow-clip relative row-[2] shrink-0 w-[381px]" data-name="飛機照片">
      <Shipdisplay7 />
      <Zoom7 />
      <Shipcontent7 />
    </div>
  );
}

function Component42() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[219px] left-1/2 w-[390px]" data-name="結局圖">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={img} />
    </div>
  );
}

function Component43() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="引擎">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
    </div>
  );
}

function Component44() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="機翼">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2} />
    </div>
  );
}

function Component45() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="機身">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3} />
    </div>
  );
}

function Shipsmall8() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[180px] left-[calc(50%+0.5px)] overflow-clip top-[calc(50%-13.5px)] w-[300px]" data-name="shipsmall">
      <Component42 />
      <Component43 />
      <Component44 />
      <Component45 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip top-0">
      <div className="h-[267px] relative shrink-0 w-[381px]" data-name="shipframe 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgShipframe1} />
      </div>
    </div>
  );
}

function Shipframe8() {
  return (
    <div className="absolute h-[267px] left-0 top-0 w-[381px]" data-name="shipframe">
      <Frame11 />
    </div>
  );
}

function Shipdisplay8() {
  return (
    <div className="absolute h-[267px] left-0 overflow-clip top-0 w-[381px]" data-name="shipdisplay">
      <Shipsmall8 />
      <Shipframe8 />
    </div>
  );
}

function Zoom8() {
  return (
    <div className="absolute right-[55px] size-[33px] top-[34px]" data-name="Zoom">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgZoom} />
    </div>
  );
}

function Shipcontent8() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[30px] content-stretch flex flex-col items-center left-[calc(50%+9.5px)] overflow-clip w-[350px]" data-name="shipcontent">
      <p className="font-['GenSenRounded_TW:H',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-black text-center w-[350px] whitespace-pre-wrap">飛機NO.1</p>
    </div>
  );
}

function Component41() {
  return (
    <div className="col-[1] h-[267px] overflow-clip relative row-[3] shrink-0 w-[381px]" data-name="飛機照片">
      <Shipdisplay8 />
      <Zoom8 />
      <Shipcontent8 />
    </div>
  );
}

function Component47() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[219px] left-1/2 w-[390px]" data-name="結局圖">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={img} />
    </div>
  );
}

function Component48() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="引擎">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
    </div>
  );
}

function Component49() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="機翼">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2} />
    </div>
  );
}

function Component50() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="機身">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3} />
    </div>
  );
}

function Shipsmall9() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[180px] left-[calc(50%+0.5px)] overflow-clip top-[calc(50%-13.5px)] w-[300px]" data-name="shipsmall">
      <Component47 />
      <Component48 />
      <Component49 />
      <Component50 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip top-0">
      <div className="h-[267px] relative shrink-0 w-[381px]" data-name="shipframe 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgShipframe1} />
      </div>
    </div>
  );
}

function Shipframe9() {
  return (
    <div className="absolute h-[267px] left-0 top-0 w-[381px]" data-name="shipframe">
      <Frame12 />
    </div>
  );
}

function Shipdisplay9() {
  return (
    <div className="absolute h-[267px] left-0 overflow-clip top-0 w-[381px]" data-name="shipdisplay">
      <Shipsmall9 />
      <Shipframe9 />
    </div>
  );
}

function Zoom9() {
  return (
    <div className="absolute right-[55px] size-[33px] top-[34px]" data-name="Zoom">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgZoom} />
    </div>
  );
}

function Shipcontent9() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[30px] content-stretch flex flex-col items-center left-[calc(50%+9.5px)] overflow-clip w-[350px]" data-name="shipcontent">
      <p className="font-['GenSenRounded_TW:H',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-black text-center w-[350px] whitespace-pre-wrap">飛機NO.1</p>
    </div>
  );
}

function Component46() {
  return (
    <div className="col-[2] h-[267px] overflow-clip relative row-[3] shrink-0 w-[381px]" data-name="飛機照片">
      <Shipdisplay9 />
      <Zoom9 />
      <Shipcontent9 />
    </div>
  );
}

function Component52() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[219px] left-1/2 w-[390px]" data-name="結局圖">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={img} />
    </div>
  );
}

function Component53() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="引擎">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
    </div>
  );
}

function Component54() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="機翼">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2} />
    </div>
  );
}

function Component55() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="機身">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3} />
    </div>
  );
}

function Shipsmall10() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[180px] left-[calc(50%+0.5px)] overflow-clip top-[calc(50%-13.5px)] w-[300px]" data-name="shipsmall">
      <Component52 />
      <Component53 />
      <Component54 />
      <Component55 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip top-0">
      <div className="h-[267px] relative shrink-0 w-[381px]" data-name="shipframe 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgShipframe1} />
      </div>
    </div>
  );
}

function Shipframe10() {
  return (
    <div className="absolute h-[267px] left-0 top-0 w-[381px]" data-name="shipframe">
      <Frame13 />
    </div>
  );
}

function Shipdisplay10() {
  return (
    <div className="absolute h-[267px] left-0 overflow-clip top-0 w-[381px]" data-name="shipdisplay">
      <Shipsmall10 />
      <Shipframe10 />
    </div>
  );
}

function Zoom10() {
  return (
    <div className="absolute right-[55px] size-[33px] top-[34px]" data-name="Zoom">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgZoom} />
    </div>
  );
}

function Shipcontent10() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[30px] content-stretch flex flex-col items-center left-[calc(50%+9.5px)] overflow-clip w-[350px]" data-name="shipcontent">
      <p className="font-['GenSenRounded_TW:H',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-black text-center w-[350px] whitespace-pre-wrap">飛機NO.1</p>
    </div>
  );
}

function Component51() {
  return (
    <div className="col-[3] h-[267px] overflow-clip relative row-[3] shrink-0 w-[381px]" data-name="飛機照片">
      <Shipdisplay10 />
      <Zoom10 />
      <Shipcontent10 />
    </div>
  );
}

function Component57() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[219px] left-1/2 w-[390px]" data-name="結局圖">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={img} />
    </div>
  );
}

function Component58() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="引擎">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
    </div>
  );
}

function Component59() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="機翼">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2} />
    </div>
  );
}

function Component60() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[225px] left-1/2 w-[300px]" data-name="機身">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3} />
    </div>
  );
}

function Shipsmall11() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[180px] left-[calc(50%+0.5px)] overflow-clip top-[calc(50%-13.5px)] w-[300px]" data-name="shipsmall">
      <Component57 />
      <Component58 />
      <Component59 />
      <Component60 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip top-0">
      <div className="h-[267px] relative shrink-0 w-[381px]" data-name="shipframe 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgShipframe1} />
      </div>
    </div>
  );
}

function Shipframe11() {
  return (
    <div className="absolute h-[267px] left-0 top-0 w-[381px]" data-name="shipframe">
      <Frame14 />
    </div>
  );
}

function Shipdisplay11() {
  return (
    <div className="absolute h-[267px] left-0 overflow-clip top-0 w-[381px]" data-name="shipdisplay">
      <Shipsmall11 />
      <Shipframe11 />
    </div>
  );
}

function Zoom11() {
  return (
    <div className="absolute right-[55px] size-[33px] top-[34px]" data-name="Zoom">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgZoom} />
    </div>
  );
}

function Shipcontent11() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[30px] content-stretch flex flex-col items-center left-[calc(50%+9.5px)] overflow-clip w-[350px]" data-name="shipcontent">
      <p className="font-['GenSenRounded_TW:H',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-black text-center w-[350px] whitespace-pre-wrap">飛機NO.1</p>
    </div>
  );
}

function Component56() {
  return (
    <div className="col-[4] h-[267px] overflow-clip relative row-[3] shrink-0 w-[381px]" data-name="飛機照片">
      <Shipdisplay11 />
      <Zoom11 />
      <Shipcontent11 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex-[1_0_0] gap-[20px] grid-cols-[repeat(4,_fit-content(100%))] grid-rows-[repeat(3,_fit-content(100%))] inline-grid min-h-px min-w-px px-[150px] relative">
      <Component1 />
      <Component6 />
      <Component11 />
      <Component16 />
      <Component21 />
      <Component26 />
      <Component31 />
      <Component36 />
      <Component41 />
      <Component46 />
      <Component51 />
      <Component56 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1080px] items-center left-0 py-[80px] top-0 w-[1920px]">
      <Frame2 />
    </div>
  );
}

function Component61() {
  return (
    <div className="h-[101px] relative w-[150px]" data-name="上一頁">
      <div className="absolute flex h-[101px] items-center justify-center left-0 top-0 w-[150px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[101px] relative w-[150px]" data-name="上一頁 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img4} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Component62() {
  return (
    <div className="h-[102px] relative shrink-0 w-[338px]" data-name="再次挑戰">
      <div className="absolute aspect-[338/102] left-0 right-0 top-0" data-name="再次挑戰-正常 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img5} />
      </div>
    </div>
  );
}

function Component63() {
  return (
    <div className="h-[101px] relative shrink-0 w-[150px]" data-name="下一頁">
      <div className="absolute h-[101px] left-0 top-0 w-[150px]" data-name="下一頁 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img6} />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-end justify-between left-0 px-[100px] py-[25px] w-[1920px]" data-name="footer">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Component61 />
        </div>
      </div>
      <Component62 />
      <Component63 />
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[3px] left-1/2 top-[3px] w-[6px]" data-name="Frame">
      <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.15)] bottom-1/2 left-1/2 rounded-[1000px] top-0 w-[6px]" data-name="Thumb" />
    </div>
  );
}

function ScrollbarVertical() {
  return (
    <div className="absolute h-[502px] left-[1878px] overflow-clip top-[27px] w-[28px]" data-name="Scrollbar - Vertical">
      <Frame />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="展示庫">
      <Gallerybg />
      <Frame1 />
      <Footer />
      <ScrollbarVertical />
    </div>
  );
}