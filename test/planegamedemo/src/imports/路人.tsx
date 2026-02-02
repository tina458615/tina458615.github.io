import img1 from "figma:asset/4e0af7b81cedd3c547a041477d132546b5c8b933.png";
import imgBg from "figma:asset/b208d3fe9572a583893bedec22214242d928a90b.png";

function Component1() {
  return (
    <div className="absolute h-[569px] left-0 top-[224px] w-[538px]" data-name="爺爺">
      <div className="absolute h-[569px] left-0 top-0 w-[538px]" data-name="爺爺 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
      </div>
    </div>
  );
}

function bg() {
  return (
    <div className="absolute h-[354px] left-[357px] top-[-85px] w-[430px]" data-name="對話框bg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
      <div className="absolute bottom-[25.42%] flex flex-col font-['GenSenRounded_TW:B',sans-serif] justify-center leading-[0] left-[calc(50%-184px)] not-italic overflow-hidden text-[35px] text-[rgba(0,0,0,0.8)] text-ellipsis top-[10.17%] tracking-[-0.385px] w-[368px]">
        <p className="leading-[1.5] whitespace-pre-wrap">錢不夠的時候，慢慢等一下也沒關係喔。</p>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="路人">
      <Component1 />
      <bg />
    </div>
  );
}