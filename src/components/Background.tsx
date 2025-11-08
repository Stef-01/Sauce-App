export const Background = () => {
  return (
    <div
      role="backdrop"
      className="fixed bg-gray-900 bg-[url('https://c.animaapp.com/mhqpk9sal3ySkH/assets/mobile.jpg'),_linear-gradient(90deg,_rgb(97,_128,_174)_0%,_rgb(9,_21,_32)_30%,_rgb(0,_0,_0)_70%,_rgb(97,_128,_174)_100%)] bg-size-[100%,100%] box-border caret-transparent z-[-1] overflow-hidden bg-[position:0%,0%_0%,0%] inset-0 md:bg-[url('https://c.animaapp.com/mhqpk9sal3ySkH/assets/web.jpg'),_linear-gradient(90deg,_rgb(97,_128,_174)_0%,_rgb(9,_21,_32)_30%,_rgb(0,_0,_0)_70%,_rgb(97,_128,_174)_100%)]"
    >
      <img
        src="https://c.animaapp.com/mhqpk9sal3ySkH/assets/web.jpg"
        className="box-border caret-transparent max-w-full object-cover w-full"
      />
    </div>
  );
};
