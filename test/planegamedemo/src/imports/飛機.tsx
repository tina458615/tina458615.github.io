import img from "figma:asset/8dd082b811121164c286fd1f393a563a8144fd80.png";
import img1 from "figma:asset/3259ff66b15922367efdbb3d3682673ff9f1ee5e.png";

function Component1() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px]" data-name="預覽-動力系統" />;
}

function Component2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px]" data-name="預覽-機翼">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={img} />
    </div>
  );
}

function Component3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px]" data-name="預覽-機身">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="飛機">
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
  );
}