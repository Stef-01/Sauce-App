export const RestrictedAccess = () => {
  return (
    <div className="relative box-border caret-transparent z-[3]">
      <div className="text-black text-xl items-center bg-white box-border caret-transparent gap-x-2 flex justify-center leading-7 max-h-[52px] min-h-[52px] gap-y-2 text-nowrap mt-4 px-6 rounded-[800px] md:text-[22px] md:leading-[30.8px]">
        <span className="text-black text-xl box-border caret-transparent block leading-7 text-nowrap md:text-[22px] md:leading-[30.8px]">
          <span className="text-black text-xl font-bold box-border caret-transparent leading-7 text-nowrap md:text-[22px] md:leading-[30.8px]">
            Log in
          </span>
          <span className="text-xl box-border caret-transparent leading-7 text-nowrap md:text-[22px] md:leading-[30.8px]">
            &nbsp;or&nbsp;
          </span>
          <span className="text-black text-xl font-bold box-border caret-transparent leading-7 text-nowrap md:text-[22px] md:leading-[30.8px]">
            RSVP
          </span>
          <span className="text-xl box-border caret-transparent leading-7 text-nowrap md:text-[22px] md:leading-[30.8px]">
            &nbsp;to see all details
          </span>
        </span>
      </div>
    </div>
  );
};
