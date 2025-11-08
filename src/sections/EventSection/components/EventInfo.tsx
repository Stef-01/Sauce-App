export const EventInfo = () => {
  return (
    <div className="box-border caret-transparent gap-x-6 flex flex-col max-w-full gap-y-6 w-full mb-[30px]">
      <time className="box-border caret-transparent block">
        <div className="box-border caret-transparent flex">
          <div className="box-border caret-transparent">
            <div className="text-white/90 text-[28px] font-medium box-border caret-transparent leading-[39.2px] md:text-3xl md:leading-[42px]">
              Friday, Oct 31
            </div>
            <div className="text-white/60 text-xl box-border caret-transparent leading-7 md:text-[22px] md:leading-[30.8px]">
              7:00pm
              <div className="text-xl items-center box-border caret-transparent gap-x-2 flex leading-7 gap-y-2 overflow-auto my-6 md:text-[22px] md:leading-[30.8px] md:mb-2">
                <button
                  type="button"
                  className="relative text-xl items-center backdrop-blur-[45px] bg-white/20 caret-transparent gap-x-2 flex shrink-0 justify-center leading-7 max-h-9 min-h-9 gap-y-2 border px-[15px] py-0 rounded-[800px] border-solid border-white/60 md:text-[22px] md:leading-[30.8px] md:max-h-10 md:min-h-10"
                >
                  <span className="text-white text-sm font-semibold box-border caret-transparent block leading-[19.6px] text-ellipsis text-nowrap overflow-hidden md:text-base md:leading-[22.4px]">
                    PT
                  </span>
                </button>
                <button
                  type="button"
                  className="relative text-xl items-center backdrop-blur-[45px] bg-white/10 caret-transparent gap-x-2 flex shrink-0 justify-center leading-7 max-h-9 min-h-9 gap-y-2 border px-[15px] py-0 rounded-[800px] border-solid border-transparent md:text-[22px] md:leading-[30.8px] md:max-h-10 md:min-h-10"
                >
                  <span className="text-white text-sm font-semibold box-border caret-transparent block leading-[19.6px] text-ellipsis text-nowrap overflow-hidden md:text-base md:leading-[22.4px]">
                    GMT
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </time>
      <div className="box-border caret-transparent gap-x-3 flex gap-y-3">
        <button
          type="button"
          className="text-sm font-semibold items-center backdrop-blur-2xl bg-white/10 caret-transparent gap-x-1 flex justify-center leading-[19.6px] max-h-9 max-w-9 min-h-9 min-w-9 gap-y-1 text-nowrap border px-[15px] py-0 rounded-[800px] border-solid border-white/40 md:text-base md:leading-[22.4px] md:max-h-10 md:max-w-10 md:min-h-10 md:min-w-10"
        >
          <span className="text-sm self-center box-border caret-transparent block leading-[19.6px] text-nowrap align-middle md:text-base md:leading-[22.4px]">
            <img
              src="https://c.animaapp.com/mhqpk9sal3ySkH/assets/icon-5.svg"
              alt="Icon"
              className="relative text-sm box-border caret-transparent h-5 leading-[19.6px] text-nowrap w-5 md:text-base md:h-6 md:leading-[22.4px] md:w-6"
            />
          </span>
        </button>
      </div>
      <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 overflow-hidden">
        <div className="relative text-base items-center box-border caret-transparent flex leading-[22.4px] text-nowrap py-1 md:text-lg md:leading-[25.2px]">
          <span className="text-white/80 text-base self-center box-border caret-transparent block shrink-0 leading-[22.4px] text-nowrap align-middle mr-2 md:text-lg md:leading-[25.2px]">
            <img
              src="https://c.animaapp.com/mhqpk9sal3ySkH/assets/icon-6.svg"
              alt="Icon"
              className="relative text-base box-border caret-transparent h-5 leading-[22.4px] text-nowrap w-5 md:text-lg md:h-6 md:leading-[25.2px] md:w-6"
            />
          </span>
          <span className="text-white/80 text-base box-border caret-transparent block leading-[22.4px] text-nowrap md:text-lg md:leading-[25.2px]">
            Hosted by
          </span>
          <div className="text-base items-center box-border caret-transparent flex leading-[22.4px] text-nowrap ml-2 md:text-lg md:leading-[25.2px]">
            <div className="text-base box-border caret-transparent gap-x-1 flex leading-[22.4px] gap-y-1 text-nowrap w-full md:text-lg md:leading-[25.2px]">
              <button
                type="button"
                className="relative text-base items-center bg-transparent caret-transparent flex justify-center leading-[22.4px] max-h-12 max-w-12 min-h-12 min-w-12 text-nowrap p-0 rounded-[800px] md:text-lg md:leading-[25.2px] md:max-h-[52px] md:max-w-[52px] md:min-h-[52px] md:min-w-[52px] hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-[800px] hover:border-0 hover:border-none hover:border-white"
              >
                <img
                  src="https://c.animaapp.com/mhqpk9sal3ySkH/assets/12.jpg"
                  className="text-base box-content caret-black leading-[normal] max-h-none max-w-none min-h-0 min-w-0 object-fill text-wrap align-middle rounded-none md:text-lg md:aspect-auto md:box-border md:caret-transparent md:leading-[25.2px] md:max-h-[52px] md:max-w-[52px] md:min-h-[52px] md:min-w-[52px] md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-baseline md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[800px]"
                />
                <span className="static text-black text-base self-auto box-content caret-black inline leading-[normal] text-wrap align-baseline right-auto bottom-auto md:absolute md:text-sky-300 md:text-lg md:self-center md:aspect-auto md:bottom-[-4.38478px] md:box-border md:caret-transparent md:block md:leading-[25.2px] md:overscroll-x-auto md:overscroll-y-auto md:right-[-4.38478px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-middle md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <img
                    src="https://c.animaapp.com/mhqpk9sal3ySkH/assets/icon-7.svg"
                    alt="Icon"
                    className="static box-content caret-black h-auto text-wrap align-middle w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:h-6 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="relative text-base items-center box-border caret-transparent flex leading-[22.4px] py-1 md:text-lg md:leading-[25.2px]">
          <span className="text-white/80 text-base self-start box-border caret-transparent block shrink-0 leading-[22.4px] align-middle mr-2 mt-[1.2px] md:text-lg md:leading-[25.2px] md:mt-[0.6px]">
            <img
              src="https://c.animaapp.com/mhqpk9sal3ySkH/assets/icon-8.svg"
              alt="Icon"
              className="relative text-base box-border caret-transparent h-5 leading-[22.4px] w-5 md:text-lg md:h-6 md:leading-[25.2px] md:w-6"
            />
          </span>
          <div className="text-base items-start box-border caret-transparent flex flex-col leading-[22.4px] md:text-lg md:leading-[25.2px]">
            <span className="text-base font-semibold box-border caret-transparent block leading-[22.4px] md:text-lg md:leading-[25.2px]">
              Stanford, CA
            </span>
            <button
              type="button"
              className="text-base items-stretch bg-transparent caret-transparent block leading-[22.4px] p-0 md:text-lg md:leading-[25.2px]"
            >
              <span className="text-white/80 text-base box-border caret-transparent leading-[22.4px] md:text-lg md:leading-[25.2px]">
                Sign in to see full location
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent break-words">
        <span className="text-white/80 text-base box-border caret-transparent leading-[22.4px] break-words md:text-lg md:leading-[25.2px]">
          join us in costume for a festive pregame of pumpkin carving, consuming
          copious amounts of candy, and bumpin charlie brown/peanuts music this
          friday before we all mob over to the big rains halloween party! hope
          to see yall there!!
          <span className="text-black text-base box-border caret-transparent leading-[22.4px] break-words md:text-lg md:leading-[25.2px]">
            👻🎃
          </span>
        </span>
      </div>
    </div>
  );
};
