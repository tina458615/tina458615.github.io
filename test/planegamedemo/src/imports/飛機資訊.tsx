import imgClose1 from "figma:asset/9f4a944afeb66075bba4dc050617269a6795e78a.png";
import imgDatabg from "figma:asset/c3c07e01a9afad0e6c4a3d056d31caf2678cb9f2.png";

function Close({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex items-center justify-center pr-[20px] pt-[20px] relative"} data-name="close 1">
      <div className="h-[100px] relative shrink-0 w-[97px]" data-name="close 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgClose1} />
      </div>
    </div>
  );
}

function Databg({ className }: { className?: string }) {
  return (
    <div className={className || "h-[600px] relative w-[800px]"} data-name="databg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDatabg} />
    </div>
  );
}

export default function Component({ className }: { className?: string }) {
  return (
    <div className={className || "h-[600px] relative w-[800px]"} data-name="飛機資訊">
      <Databg className="absolute h-[600px] left-0 top-0 w-[800px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[600px] items-start left-1/2 top-[calc(50%+1px)] w-[800px]">
        <div className="content-stretch flex flex-col gap-[20px] h-[600px] items-center p-[50px] relative shrink-0 w-[800px]">
          <div className="content-stretch flex items-center justify-center px-[5px] py-[20px] relative rounded-[29px] shrink-0" data-name="名稱">
            <p className="font-['GenSenRounded_TW:H',sans-serif] leading-[normal] not-italic relative shrink-0 text-[50px] text-white">小明的飛機</p>
          </div>
          <div className="h-[60px] relative shrink-0 w-full">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 700 60">
              <g id="Frame 45">
                <line id="Line 1" stroke="var(--stroke-0, white)" strokeWidth="6" x2="700" y1="27" y2="27" />
              </g>
            </svg>
          </div>
          <div className="relative rounded-[29px] shrink-0 w-full" data-name="說明">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col font-['GenSenRounded_TW:M',sans-serif] gap-[30px] items-center justify-center leading-[normal] not-italic p-[20px] relative text-[35px] text-center text-white w-full whitespace-pre-wrap">
                <p className="relative shrink-0 w-full">剩餘資金：5000</p>
                <p className="relative shrink-0 w-full">能量石：30000</p>
                <p className="relative shrink-0 w-full">普通石頭：10000</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center pt-[20px] relative shrink-0 w-full" data-name="時間">
            <p className="font-['GenSenRounded_TW:B',sans-serif] leading-[normal] not-italic relative shrink-0 text-[42px] text-center text-white w-[660px] whitespace-pre-wrap">花費15分20秒完成飛機建造</p>
          </div>
        </div>
      </div>
      <Close className="absolute content-stretch flex items-center justify-center pr-[20px] pt-[20px] right-0 top-0" />
    </div>
  );
}