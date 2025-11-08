export const ActivityFeed = () => {
  return (
    <section className="self-stretch box-border caret-transparent blur-md pointer-events-none">
      <div className="items-center box-border caret-transparent gap-x-2 flex gap-y-2 mb-5 md:mb-[30px]">
        <div className="items-start box-border caret-transparent flex flex-col grow">
          <div className="items-center box-border caret-transparent gap-x-2 flex gap-y-2">
            <h3 className="text-lg font-bold box-border caret-transparent leading-[25.2px] break-words text-ellipsis md:text-[22px] md:leading-[30.8px]">
              Activity
            </h3>
          </div>
          <span className="text-white/60 text-sm box-border caret-transparent block leading-[19.6px] md:text-base md:leading-[22.4px]">
            49 updates
          </span>
        </div>
      </div>
      <div className="box-border caret-transparent gap-x-6 flex flex-col gap-y-6">
        <div className="relative box-border caret-transparent gap-x-4 grid grid-cols-[auto_1fr_auto]">
          <div className="box-border caret-transparent row-end-[span_2] row-start-1">
            <button
              type="button"
              className="relative items-center bg-transparent caret-transparent flex justify-center max-h-12 max-w-12 min-h-12 min-w-12 p-0 rounded-[800px] md:max-h-[52px] md:max-w-[52px] md:min-h-[52px] md:min-w-[52px]"
            >
              <img
                src="https://c.animaapp.com/mhqpk9sal3ySkH/assets/12.jpg"
                className="box-border caret-transparent max-h-12 max-w-12 min-h-12 min-w-12 object-cover overflow-hidden rounded-[800px] md:max-h-[52px] md:max-w-[52px] md:min-h-[52px] md:min-w-[52px]"
              />
            </button>
          </div>
          <div className="box-border caret-transparent col-end-[span_1] col-start-2 row-end-[span_1] row-start-1">
            <span className="text-white/80 text-base box-border caret-transparent leading-[22.4px] md:text-lg md:leading-[25.2px]">
              <a className="text-white text-base font-semibold items-stretch box-border caret-transparent leading-[22.4px] md:text-lg md:leading-[25.2px]">
                Xxxxx Xxxx
              </a>
              &nbsp;sent a Message Blast&nbsp;
              <span className="text-black text-base box-border caret-transparent leading-[22.4px] md:text-lg md:leading-[25.2px]">
                📣
              </span>
            </span>
            <span className="text-white/40 text-base box-border caret-transparent leading-[22.4px] md:text-lg md:leading-[25.2px]">
              &nbsp;8d
            </span>
          </div>
          <div className="box-border caret-transparent flex flex-col col-end-[span_2] col-start-2 row-end-[span_1] row-start-2 overflow-auto">
            <span className="text-white/80 text-base box-border caret-transparent block leading-[22.4px] break-words md:text-lg md:leading-[25.2px]">
              [Message hidden] - RSVP to view
            </span>
            <div className="items-center box-border caret-transparent gap-x-2 flex shrink-0 flex-wrap gap-y-2 mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
