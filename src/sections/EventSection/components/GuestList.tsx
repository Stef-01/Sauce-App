export const GuestList = () => {
  return (
    <div className="box-border caret-transparent text-ellipsis text-nowrap w-full overflow-hidden mb-8">
      <div className="items-center box-border caret-transparent gap-x-2 flex gap-y-2 text-nowrap mb-2">
        <div className="items-start box-border caret-transparent flex flex-col grow text-nowrap">
          <h3 className="text-lg font-bold box-border caret-transparent leading-[25.2px] break-words text-ellipsis md:text-[22px] md:leading-[30.8px]">
            Guest List
          </h3>
          <span className="text-white/60 text-sm box-border caret-transparent block leading-[19.6px] text-nowrap md:text-base md:leading-[22.4px]">
            33 Went · 17 Maybe
          </span>
        </div>
        <div className="box-border caret-transparent gap-x-2 flex gap-y-2 text-nowrap">
          <button
            type="button"
            className="text-sm font-semibold items-center backdrop-blur-2xl bg-white/10 caret-transparent gap-x-1 flex justify-center leading-[19.6px] max-h-9 min-h-9 gap-y-1 text-nowrap border px-[15px] py-0 rounded-[800px] border-solid border-white/40 md:text-base md:leading-[22.4px] md:max-h-10 md:min-h-10"
          >
            <span className="text-sm box-border caret-transparent block leading-[19.6px] text-nowrap md:text-base md:leading-[22.4px]">
              View all
            </span>
          </button>
        </div>
      </div>
      <div className="box-border caret-transparent gap-x-1 flex gap-y-1 text-nowrap w-full overflow-x-auto">
        <div className="relative items-center box-border caret-transparent flex justify-center max-h-12 max-w-12 min-h-12 min-w-12 text-nowrap rounded-[800px] md:max-h-[52px] md:max-w-[52px] md:min-h-[52px] md:min-w-[52px]">
          <img
            src="https://c.animaapp.com/mhqpk9sal3ySkH/assets/11.jpg"
            className="box-border caret-transparent max-h-12 max-w-12 min-h-12 min-w-12 object-cover text-nowrap overflow-hidden rounded-[800px] md:max-h-[52px] md:max-w-[52px] md:min-h-[52px] md:min-w-[52px]"
          />
        </div>
        <div className="relative items-center box-border caret-transparent flex justify-center max-h-12 max-w-12 min-h-12 min-w-12 text-nowrap rounded-[800px] md:max-h-[52px] md:max-w-[52px] md:min-h-[52px] md:min-w-[52px]">
          <img
            src="https://c.animaapp.com/mhqpk9sal3ySkH/assets/16.jpg"
            className="box-border caret-transparent max-h-12 max-w-12 min-h-12 min-w-12 object-cover text-nowrap overflow-hidden rounded-[800px] md:max-h-[52px] md:max-w-[52px] md:min-h-[52px] md:min-w-[52px]"
          />
        </div>
        <div className="relative items-center box-border caret-transparent flex justify-center max-h-12 max-w-12 min-h-12 min-w-12 text-nowrap rounded-[800px] md:max-h-[52px] md:max-w-[52px] md:min-h-[52px] md:min-w-[52px]">
          <img
            src="https://c.animaapp.com/mhqpk9sal3ySkH/assets/10.jpg"
            className="box-border caret-transparent max-h-12 max-w-12 min-h-12 min-w-12 object-cover text-nowrap overflow-hidden rounded-[800px] md:max-h-[52px] md:max-w-[52px] md:min-h-[52px] md:min-w-[52px]"
          />
        </div>
        <div className="relative items-center box-border caret-transparent flex justify-center max-h-12 max-w-12 min-h-12 min-w-12 text-nowrap rounded-[800px] md:max-h-[52px] md:max-w-[52px] md:min-h-[52px] md:min-w-[52px]">
          <img
            src="https://c.animaapp.com/mhqpk9sal3ySkH/assets/15.jpg"
            className="box-border caret-transparent max-h-12 max-w-12 min-h-12 min-w-12 object-cover text-nowrap overflow-hidden rounded-[800px] md:max-h-[52px] md:max-w-[52px] md:min-h-[52px] md:min-w-[52px]"
          />
        </div>
        <div className="relative items-center box-border caret-transparent flex justify-center max-h-12 max-w-12 min-h-12 min-w-12 text-nowrap rounded-[800px] md:max-h-[52px] md:max-w-[52px] md:min-h-[52px] md:min-w-[52px]">
          <img
            src="https://c.animaapp.com/mhqpk9sal3ySkH/assets/20.jpg"
            className="box-border caret-transparent max-h-12 max-w-12 min-h-12 min-w-12 object-cover text-nowrap overflow-hidden rounded-[800px] md:max-h-[52px] md:max-w-[52px] md:min-h-[52px] md:min-w-[52px]"
          />
        </div>
        <div className="relative items-center box-border caret-transparent flex justify-center max-h-12 max-w-12 min-h-12 min-w-12 text-nowrap rounded-[800px] md:max-h-[52px] md:max-w-[52px] md:min-h-[52px] md:min-w-[52px]">
          <div className="absolute bg-white/30 box-border caret-transparent h-full text-nowrap w-full overflow-hidden rounded-[800px] inset-0"></div>
          <span className="relative text-white/80 text-base box-border caret-transparent block leading-[22.4px] text-nowrap md:text-lg md:leading-[25.2px]">
            +40
          </span>
        </div>
      </div>
    </div>
  );
};
