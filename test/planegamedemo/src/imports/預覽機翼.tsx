import img from "figma:asset/8dd082b811121164c286fd1f393a563a8144fd80.png";

export default function Component() {
  return (
    <div className="relative size-full" data-name="預覽-機翼">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={img} />
    </div>
  );
}