import svgPaths from "./svg-5w8d2gs2td";

function Plus() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Plus">
          <path clipRule="evenodd" d={svgPaths.p1404d740} fill="var(--fill-0, #2C313A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white content-stretch flex items-center p-[4px] relative rounded-[12px] size-full">
      <Plus />
    </div>
  );
}