import img from "figma:asset/a61c33768bd81ec6eb508b4d0377da170d5add8e.png";

export default function Component() {
  return (
    <div className="relative size-full" data-name="結局圖">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img} />
    </div>
  );
}