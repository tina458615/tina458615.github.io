import img from "figma:asset/e5bf116a6c51aa271883ee90eec7c68e310503bb.png";
import img1 from "figma:asset/bc50438fa84b27bf20aef81623a65a228f65282f.png";
import img2 from "figma:asset/ba89a4fccb97d2de39e1eeb95f06d9692b24b808.png";
import imgSharebg from "figma:asset/c3c07e01a9afad0e6c4a3d056d31caf2678cb9f2.png";
import img3 from "figma:asset/f42ba2e64cbb968cc4ff9eb915249f1e5cfe14a1.png";
import img4 from "figma:asset/d671e3e52fda77a73f61ccb3d683017a2540d166.png";
import img5 from "figma:asset/ea30aceeaf9f7b7ca85256e9229c81c36e3b47a9.png";

function Component() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[750px] left-1/2 top-1/2 w-[1000px]" data-name="引擎">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img} />
    </div>
  );
}

function Component1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[750px] left-1/2 top-1/2 w-[1000px]" data-name="機翼">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
    </div>
  );
}

function Component2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[750px] left-1/2 top-1/2 w-[1000px]" data-name="機身">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2} />
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[750px] left-1/2 overflow-clip top-1/2 w-[1000px]">
      <Component />
      <Component1 />
      <Component2 />
    </div>
  );
}

function Sharebg() {
  return (
    <div className="absolute h-[600px] left-0 top-0 w-[800px]" data-name="sharebg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSharebg} />
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[5px] py-[20px] relative rounded-[29px] shrink-0" data-name="名稱">
      <p className="font-['GenSenRounded_TW:H',sans-serif] leading-[normal] not-italic relative shrink-0 text-[50px] text-white">是否紀錄你的飛機到相簿？</p>
    </div>
  );
}

function Component6() {
  return (
    <div className="relative rounded-[29px] shrink-0 w-full" data-name="說明">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[20px] relative w-full">
          <p className="flex-[1_0_0] font-['GenSenRounded_TW:M',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[35px] text-white whitespace-pre-wrap">你的飛機與相關數據將會上傳至線上資料庫。</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[rgba(3,48,98,0.85)] min-w-[120px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex font-['GenSenRounded_TW:L',sans-serif] items-center justify-between leading-[1.2] min-w-[inherit] not-italic px-[16px] py-[12px] relative text-[40px] text-white w-full">
          <p className="relative shrink-0">輸入飛機名稱</p>
          <p className="relative shrink-0">0/6</p>
        </div>
      </div>
    </div>
  );
}

function InputField() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Input Field">
      <Input />
    </div>
  );
}

function Component7() {
  return (
    <div className="h-[89px] relative shrink-0 w-[193px]" data-name="確認短">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[89px] left-1/2 top-1/2 w-[193px]" data-name="確認-正常 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3} />
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="h-[89px] relative shrink-0 w-[192px]" data-name="返回">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[89px] left-1/2 top-1/2 w-[192px]" data-name="返回-正常 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img4} />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-end justify-center min-h-px min-w-px pt-[20px] relative w-full">
      <Component7 />
      <Component8 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[600px] items-center px-[100px] py-[50px] relative shrink-0 w-[800px]">
      <Component5 />
      <Component6 />
      <InputField />
      <Frame3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[600px] items-start left-1/2 top-[calc(50%+1px)] w-[800px]">
      <Frame2 />
    </div>
  );
}

function Component4() {
  return (
    <div className="h-[600px] overflow-clip relative shrink-0 w-[800px]" data-name="分享飛船">
      <Sharebg />
      <Frame1 />
    </div>
  );
}

function Component3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[1080px] items-center justify-center left-1/2 top-1/2 w-[1920px]" data-name="視窗">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img5} />
      <Component4 />
    </div>
  );
}

export default function Frame4() {
  return (
    <div className="relative size-full">
      <Frame />
      <Component3 />
    </div>
  );
}