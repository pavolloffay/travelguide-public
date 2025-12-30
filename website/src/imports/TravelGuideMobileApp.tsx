import svgPaths from "./svg-ppptxpxj06";
import clsx from "clsx";

function Button({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[47.985px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.995px] items-center justify-center relative size-full">{children}</div>
    </div>
  );
}
type TextProps = {
  additionalClassNames?: string;
};

function Text({ children, additionalClassNames = "" }: React.PropsWithChildren<TextProps>) {
  return (
    <div className={clsx("h-[15px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[19.995px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9952 19.9952">
        {children}
      </svg>
    </div>
  );
}

function Icon({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <g id="Icon">{children}</g>
    </Wrapper>
  );
}

export default function TravelGuideMobileApp() {
  return (
    <div className="bg-black relative size-full" data-name="Travel Guide Mobile App">
      <div className="absolute bg-[#09090b] h-[852.458px] left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[393.056px]" data-name="Container">
        <div className="absolute h-[852.458px] left-0 overflow-clip top-0 w-[393.056px]" data-name="Container">
          <div className="absolute bg-[#0a0a0a] content-stretch flex flex-col h-[852.458px] items-start left-0 overflow-clip top-0 w-[393.056px]" data-name="App">
            <div className="bg-black h-[852.458px] overflow-clip relative shrink-0 w-full" data-name="LandmarksView">
              <div className="absolute content-stretch flex flex-col gap-[7.995px] h-[59.97px] items-start left-[15.99px] top-[47.99px] w-[361.076px]" data-name="Container">
                <div className="h-[31.995px] relative shrink-0 w-full" data-name="Heading 1">
                  <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[32px] left-0 text-[24px] text-nowrap text-white top-[-0.99px]">Landmarks</p>
                </div>
                <div className="h-[19.979px] relative shrink-0 w-full" data-name="Paragraph">
                  <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#99a1af] text-[14px] text-nowrap top-[-0.99px]">Your visited spots</p>
                </div>
              </div>
              <div className="absolute h-[279.949px] left-[15.99px] top-[193.92px] w-[361.076px]" data-name="Container">
                <div className="absolute left-[156.54px] size-[47.985px] top-[80px]" data-name="Icon">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47.9853 47.9853">
                    <g id="Icon">
                      <path d={svgPaths.p2be2b800} id="Vector" stroke="var(--stroke-0, #3F3F46)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.99878" />
                    </g>
                  </svg>
                </div>
                <div className="absolute h-[27.99px] left-0 top-[143.97px] w-[361.076px]" data-name="Heading 3">
                  <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-[180.67px] text-[18px] text-center text-nowrap text-white top-[0.02px] translate-x-[-50%]">No landmarks visited yet</p>
                </div>
                <div className="absolute h-[24.001px] left-0 top-[175.95px] w-[361.076px]" data-name="Paragraph">
                  <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[180.29px] text-[#99a1af] text-[16px] text-center text-nowrap top-[-0.99px] translate-x-[-50%]">Visit spots to see them here.</p>
                </div>
              </div>
              <div className="absolute h-[37.996px] left-[15.99px] top-[131.94px] w-[361.076px]" data-name="Container">
                <div className="absolute bg-[#18181b] content-stretch flex flex-col items-start left-[323.08px] pb-[1.005px] pt-[9px] px-[9px] rounded-[10px] size-[37.996px] top-0" data-name="Button">
                  <div aria-hidden="true" className="absolute border-[#27272a] border-[1.005px] border-solid inset-0 pointer-events-none rounded-[10px]" />
                  <div className="h-[19.995px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                    <div className="absolute inset-[16.6%_8.33%_12.5%_8.33%]" data-name="Vector">
                      <div className="absolute inset-[-5.88%_-5%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.329 15.8427">
                          <path d={svgPaths.p62711a0} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[37.996px] left-0 top-0 w-[315.085px]" data-name="Container">
                  <div className="absolute bg-[#18181b] h-[37.996px] left-0 rounded-[10px] top-0 w-[315.085px]" data-name="Text Input">
                    <div className="content-stretch flex items-center overflow-clip pl-[40px] pr-[12px] py-[8px] relative rounded-[inherit] size-full">
                      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6a7282] text-[16px] text-nowrap">Search visited landmarks...</p>
                    </div>
                    <div aria-hidden="true" className="absolute border-[#27272a] border-[1.005px] border-solid inset-0 pointer-events-none rounded-[10px]" />
                  </div>
                  <div className="absolute content-stretch flex h-[37.996px] items-center left-0 pl-[11.985px] pr-0 py-0 top-0 w-[27.974px]" data-name="Container">
                    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9899 15.9899">
                        <g id="Icon">
                          <path d={svgPaths.p19e53700} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33249" />
                          <path d={svgPaths.p384e9c00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33249" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#09090b] content-stretch flex h-[63.991px] items-center justify-between left-0 pb-0 pl-[52.163px] pr-[52.211px] pt-[1.005px] top-[788.47px] w-[393.056px]" data-name="BottomNav">
          <div aria-hidden="true" className="absolute border-[#27272a] border-[1.005px_0px_0px] border-solid inset-0 pointer-events-none" />
          <Button>
            <Wrapper>
              <g clipPath="url(#clip0_4_75)" id="Icon">
                <path d={svgPaths.p28d89900} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
                <path d="M16.6627 1.66629V4.99962" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
                <path d="M18.3297 3.33251H14.9964" id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
                <path d={svgPaths.p1375a300} id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
              </g>
              <defs>
                <clipPath id="clip0_4_75">
                  <rect fill="white" height="19.9952" width="19.9952" />
                </clipPath>
              </defs>
            </Wrapper>
            <Text additionalClassNames="w-[40.509px]">
              <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[15px] left-[20.5px] text-[#4a5565] text-[10px] text-center text-nowrap top-[-0.99px] translate-x-[-50%]">AI Guide</p>
            </Text>
          </Button>
          <Button>
            <Icon>
              <path d={svgPaths.pfdfb180} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
              <path d="M12.497 4.80219V17.2992" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
              <path d="M7.4982 2.69601V15.193" id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
            </Icon>
            <Text additionalClassNames="w-[20.969px]">
              <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[15px] left-[10px] text-[#4a5565] text-[10px] text-center text-nowrap top-[-0.99px] translate-x-[-50%]">Map</p>
            </Text>
          </Button>
          <Button>
            <Icon>
              <path d={svgPaths.p1eb16800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66627" />
            </Icon>
            <Text additionalClassNames="w-[53.043px]">
              <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[15px] left-[27px] text-[10px] text-center text-nowrap text-white top-[-0.99px] translate-x-[-50%]">Landmarks</p>
            </Text>
          </Button>
        </div>
      </div>
    </div>
  );
}