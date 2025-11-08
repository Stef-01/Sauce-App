export const ContextMenu = () => {
  return (
    <span
      role="popover"
      className="absolute bg-black box-border caret-transparent hidden z-[3] left-0 top-0"
    >
      <ul
        role="menu"
        className="box-border caret-transparent flex flex-col list-none pl-0"
      >
        <li
          role="menuitem"
          className="text-white/80 items-center box-border caret-transparent flex p-4"
        >
          <span className="self-center box-border caret-transparent block align-middle mr-4">
            <img
              src="https://c.animaapp.com/mhqpk9sal3ySkH/assets/icon-10.svg"
              alt="Icon"
              className="relative box-border caret-transparent h-5 w-5"
            />
          </span>
          Copy link
        </li>
        <a
          href="https://help.partiful.com/hc/en-us/requests/new?ticket_form_id=35538993843355&tf_subject=%5BREPORT%5D%20rains%20229%20pregame%3A%20https%3A%2F%2Fpartiful.com%2Fe%2FsTXNay71T7RuTIvQvjip&tf_27665729964443=https%3A%2F%2Fpartiful.com%2Fe%2FsTXNay71T7RuTIvQvjip"
          type="button"
          className="box-border caret-transparent block"
        >
          <li
            role="menuitem"
            className="text-red-500 items-center box-border caret-transparent flex p-4"
          >
            <span className="self-center box-border caret-transparent block align-middle mr-4">
              <img
                src="https://c.animaapp.com/mhqpk9sal3ySkH/assets/icon-11.svg"
                alt="Icon"
                className="relative box-border caret-transparent h-5 w-5"
              />
            </span>
            Report event
          </li>
        </a>
      </ul>
      <div className="absolute bg-black box-border caret-transparent h-[12.69px] top-[-12.69px] w-[12.69px] z-[-1] left-0"></div>
    </span>
  );
};
