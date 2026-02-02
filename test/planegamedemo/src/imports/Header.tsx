import img2 from "figma:asset/3b3a05a5c0fbe901daee194038b6207fd478cdbf.png";
import img from "figma:asset/bca98e543d7d3a13b2b95a078506abd5ade12e29.png";
import img1 from "figma:asset/1b95179bf86c5a7bc0b4612760414c29a4622c21.png";

function Component1() {
  return (
    <div className="absolute bottom-0 h-[123px] left-0 w-[335px]" data-name="資金數值">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[123px] left-1/2 top-1/2 w-[335px]" data-name="資金 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2} />
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="h-[123px] relative shrink-0 w-[335px]" data-name="資金">
      <div className="-translate-y-1/2 absolute flex flex-col font-['GenSenRounded_TW:H',sans-serif] justify-center leading-[0] not-italic right-[98px] text-[#4282ca] text-[43px] top-1/2 translate-x-full whitespace-nowrap">
        <p className="leading-[normal]">500</p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="資金">
      <Component1 />
      <Component2 />
    </div>
  );
}

function Component4() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[123px] left-1/2 top-1/2 w-[335px]" data-name="發光石頭">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img} />
    </div>
  );
}

function Component5() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[123px] left-1/2 top-1/2 w-[335px]" data-name="資金">
      <div className="-translate-y-1/2 absolute flex flex-col font-['GenSenRounded_TW:H',sans-serif] justify-center leading-[0] not-italic right-[19px] text-[#4282ca] text-[43px] text-right top-1/2 whitespace-nowrap">
        <p className="leading-[normal]">25000噸</p>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="h-[123px] relative shrink-0 w-[335px]" data-name="能量石">
      <Component4 />
      <Component5 />
    </div>
  );
}

function Component7() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[123px] left-1/2 top-1/2 w-[335px]" data-name="普通石頭">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
    </div>
  );
}

function Component8() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[123px] left-1/2 top-1/2 w-[335px]" data-name="資金">
      <div className="-translate-y-1/2 absolute flex flex-col font-['GenSenRounded_TW:H',sans-serif] justify-center leading-[0] not-italic right-[19px] text-[#4282ca] text-[43px] text-right top-1/2 whitespace-nowrap">
        <p className="leading-[normal]">0噸</p>
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="h-[123px] relative shrink-0 w-[335px]" data-name="普通石頭">
      <Component7 />
      <Component8 />
    </div>
  );
}

export default function Header() {
  return (
    <div className="content-stretch flex gap-[50px] items-center px-[50px] relative size-full" data-name="header">
      <Component />
      <Component3 />
      <Component6 />
    </div>
  );
}