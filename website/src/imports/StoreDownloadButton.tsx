import svgPaths from "./svg-kxmq4c5qpl";

export default function StoreDownloadButton() {
  return (
    <div className="flex items-center justify-center gap-3 bg-neutral-800 text-white px-4 py-2.5 rounded-xl border border-neutral-700 w-full h-full min-h-[52px]" data-name="Store download button">
      {/* Icon */}
      <div className="w-6 h-7 flex-shrink-0 relative" data-name="Playstore">
        <svg className="block size-full" fill="none" viewBox="0 0 21 24">
          <g id="Playstore">
            <path d={svgPaths.p3e6f9e80} fill="#EA4335" />
            <path d={svgPaths.p8018300} fill="#FBBC04" />
            <path d={svgPaths.p17386100} fill="#4285F4" />
            <path d={svgPaths.p25fa7f00} fill="#34A853" />
          </g>
        </svg>
      </div>
      
      {/* Text Content */}
      <div className="flex flex-col items-start justify-center" data-name="Content">
        <p className="font-sans text-[10px] uppercase font-medium text-neutral-300 leading-none mb-1">
          GET IT ON
        </p>
        <div className="h-[15px] w-[74px] relative scale-y-[-1]" data-name="Google Play Text">
           <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 74 15">
             <path d={svgPaths.p3d8e9c00} fill="white" />
           </svg>
        </div>
      </div>
    </div>
  );
}
