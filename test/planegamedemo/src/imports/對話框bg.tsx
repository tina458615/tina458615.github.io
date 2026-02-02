import imgBg from "figma:asset/b208d3fe9572a583893bedec22214242d928a90b.png";

export default function bg() {
  return (
    <div className="relative size-full" data-name="對話框bg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
      <div className="absolute bottom-[25.42%] flex flex-col font-['GenSenRounded_TW:B',sans-serif] justify-center leading-[0] left-[calc(50%-184px)] not-italic overflow-hidden text-[35px] text-[rgba(0,0,0,0.8)] text-ellipsis top-[10.17%] tracking-[-0.385px] w-[368px]">
        <p className="leading-[1.5] whitespace-pre-wrap">如果想試試新方向，可以看看投資計畫。</p>
      </div>
    </div>
  );
}