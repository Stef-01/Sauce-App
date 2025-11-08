import { EventMedia } from "./EventMedia";
import { EventSection } from "./EventSection/EventSection";

export const MainContent = () => {
  return (
    <main className="relative box-border caret-transparent z-[2] px-4 md:px-10">
      <div className="box-border caret-transparent max-w-[1200px] mx-auto">
        <div className="box-border caret-transparent gap-x-0 flex flex-col md:gap-x-12 md:flex-row md:gap-y-12">
          <EventMedia />
          <EventSection />
        </div>
      </div>
    </main>
  );
};
