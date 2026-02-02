import img1 from "figma:asset/97d043fd91bde68585bd5e09826e07b9315f38ac.png";
import img2 from "figma:asset/c99b55341d318391a192b7aa0f9ef3e706c1d4d9.png";

function Component() {
  return (
    <div className="h-[100px] relative shrink-0 w-[339px]" data-name="市集">
      <div className="absolute h-[100px] left-[0.5px] top-0 w-[338px]" data-name="市集 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="h-[100px] relative shrink-0 w-[339px]" data-name="建造完成">
      <div className="absolute h-[100px] left-[0.5px] top-0 w-[338px]" data-name="升空未解鎖 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2} />
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="content-stretch flex gap-[10px] items-end justify-end p-[5px] relative size-full" data-name="footer">
      <Component />
      <Component1 />
    </div>
  );
}