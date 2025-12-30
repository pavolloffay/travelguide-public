import React from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
}

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="relative mx-auto border-gray-800 bg-gray-900 border-[14px] rounded-[2.5rem] h-[852px] w-[393px] shadow-xl overflow-hidden ring-1 ring-gray-900/5">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-[1rem] z-20"></div>
      <div className="w-full h-full overflow-hidden bg-black relative">
          {children}
      </div>
    </div>
  );
}
