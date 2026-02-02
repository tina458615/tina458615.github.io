import imgStartbg from "figma:asset/bc7785ef26cc79a2d493f7a46de74cc48c803c98.png";
import img1 from "figma:asset/98c62848cc1130c2191b04e0464e659e95ac2e12.png";
import img2 from "figma:asset/bcb77d914c4068e3dbf24b1e5db72ddfca97fb2b.png";

function Startbg() {
  return (
    <div className="absolute h-[1080px] left-0 top-0 w-[1920px]" data-name="startbg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStartbg} />
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgStartbg} />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgStartbg} />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgStartbg} />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[1080px] left-1/2 top-1/2 w-[1920px]" data-name="開始頁面-標題 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[1080px] left-1/2 top-1/2 w-[1920px]" data-name="開始頁面-開始建造 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2} />
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="開始畫面">
      <Startbg />
    </div>
  );
}