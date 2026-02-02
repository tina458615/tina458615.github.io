import { useGame } from '@/app/context/GameContext';
import img5 from "figma:asset/3b3a05a5c0fbe901daee194038b6207fd478cdbf.png";
import img from "figma:asset/bca98e543d7d3a13b2b95a078506abd5ade12e29.png";
import img6 from "figma:asset/1b95179bf86c5a7bc0b4612760414c29a4622c21.png";

export default function ResourceHeader() {
  const { funds, energyStones, commonStones } = useGame();

  return (
    <div className="absolute content-stretch flex gap-[50px] items-center left-0 px-[50px] top-0 w-[1920px] z-20">
      {/* Funds */}
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
        <div className="absolute bottom-0 h-[123px] left-0 w-[335px]">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[123px] left-1/2 top-1/2 w-[335px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img5} />
          </div>
        </div>
        <div className="h-[123px] relative shrink-0 w-[335px]">
          <div className="-translate-y-1/2 absolute flex flex-col font-['GenSenRounded_TW:H',sans-serif] justify-center leading-[0] not-italic right-[60px] text-[#4282ca] text-[43px] top-1/2 whitespace-nowrap">
            <p className="leading-[normal]">{funds}</p>
          </div>
        </div>
      </div>

      {/* Energy Stones */}
      <div className="h-[123px] relative shrink-0 w-[335px]">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[123px] left-1/2 top-1/2 w-[335px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[123px] left-1/2 top-1/2 w-[335px]">
          <div className="-translate-y-1/2 absolute flex flex-col font-['GenSenRounded_TW:H',sans-serif] justify-center leading-[0] not-italic right-[19px] text-[#4282ca] text-[43px] text-right top-1/2 whitespace-nowrap">
            <p className="leading-[normal]">{energyStones}噸</p>
          </div>
        </div>
      </div>

      {/* Common Stones */}
      <div className="h-[123px] relative shrink-0 w-[335px]">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[123px] left-1/2 top-1/2 w-[335px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img6} />
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[123px] left-1/2 top-1/2 w-[335px]">
          <div className="-translate-y-1/2 absolute flex flex-col font-['GenSenRounded_TW:H',sans-serif] justify-center leading-[0] not-italic right-[19px] text-[#4282ca] text-[43px] text-right top-1/2 whitespace-nowrap">
            <p className="leading-[normal]">{commonStones}噸</p>
          </div>
        </div>
      </div>
    </div>
  );
}
