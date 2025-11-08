import { ActivityFeed } from "../ActivityFeed";
import { EventDetails } from "./components/EventDetails";

export const EventSection = () => {
  return (
    <section className="box-border caret-transparent flex flex-col w-full py-10 md:max-w-[calc(100%_-_508px)] md:shrink-0 md:py-[50px]">
      <EventDetails />
      <ActivityFeed />
    </section>
  );
};
