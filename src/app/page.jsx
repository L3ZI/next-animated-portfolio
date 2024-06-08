import Image from "next/image";

const Homepage = () => {
  return (<div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
    {/*IMG CONTAINER*/}
    <div className='h-1/2 lg:h-full lg:w-1/2 relative'>
      <Image src='/hero.png' fill className='object-contain'/>
    </div>
    {/*TEXT CONTAINER*/}
    <div className='h-1/2 lg:h-full lg:w-1/2  flex flex-col gap-8 items-center justify-center'>
      {/*TITLE*/}
      <h1 className='text-4xl md:text-xl font-bold'>Crafting digtial experiences, designing tomorrow</h1>
      {/*DESC*/}
      <p className='md:text-xl'>CAL is a leading Investment Bank in Sri Lanka that offers a comprehensive selection
        of integrated investment and capital market solutions to a diverse group
        of clients including financial institutions and corporations, family-run businesses,
        and high-net-worth individuals.
      </p>
      {/*BUTTONS*/}
      <div className='w-full flex gap-4'>
        <button className='p-4 rounded-lg ring-1 ring-black bg-black text-white'>View My Work</button>
        <button className='p-4 rounded-lg ring-1 ring-black '>Contact me</button>
      </div>
    </div>
  </div>
);
};

export default Homepage;
