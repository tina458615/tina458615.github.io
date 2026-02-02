import img from "figma:asset/f07973affefecc817ee195e78173aca92c31d098.png";

export default function Component() {
  return (
    <div className="relative size-full" data-name="預覽-機身">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={img} />
    </div>
  );
}