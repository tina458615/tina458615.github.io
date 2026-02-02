import imgImage1 from "figma:asset/1925c08a46f24f368b89ad86a26bba8515bd1bdb.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute left-0 size-[80px] top-0" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}