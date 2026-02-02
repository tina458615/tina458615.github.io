import img1 from "figma:asset/b889460ac904646b726b5edf4220cc843ff9f763.png";
import img2 from "figma:asset/645176653ad3bd492bdd30e7ee3fbaf1fc39d4bb.png";

function Frame() {
  return (
    <div className="h-[69px] relative shrink-0 w-[76px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[81px] left-1/2 top-[calc(50%+0.5px)] w-[52px]" data-name="左箭號 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[69px] relative shrink-0 w-[76px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[81px] left-[calc(50%+0.5px)] top-[calc(50%+0.5px)] w-[53px]" data-name="右箭號 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2} />
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="content-stretch flex items-center justify-between px-[30px] relative size-full" data-name="左右鍵">
      <Frame />
      <Frame1 />
    </div>
  );
}