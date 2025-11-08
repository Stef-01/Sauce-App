import { EventHeader } from "./EventHeader";
import { EventInfo } from "./EventInfo";
import { GuestList } from "./GuestList";
import { RestrictedAccess } from "./RestrictedAccess";

export const EventDetails = () => {
  return (
    <>
      <EventHeader />
      <EventInfo />
      <GuestList />
      <RestrictedAccess />
    </>
  );
};
