import React from "react";

const Home = () => {
  return (
    <>
      <div className="h-[calc(100%-(5rem+1.25rem))] lg:h-[calc(100%-(6rem+1.25rem))] xl:h-[calc(100%-(7rem+1.25rem))] flex flex-col justify-center items-center">
        <div className="flex justify-between w-full">
          <img src="/images/svg-background.jpeg" className="h-[207px] xl:h-[255px] w-full absolute -z-10 back-and-forth mt-px"/>
          <svg className="absolute h-52 xl:h-64 w-full -z-10">
            <defs>
              <mask id="mask-bg" transform="translate(0 0)">
                <rect
                  width="100%"
                  height="100%"
                  fill="white"
                  mask="url(#mask-bg)"
                />
                <rect className="w-[23.5rem] xl:w-[29rem]" x="10.25%" height="100%" fill="black" />
              </mask>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="white"
              mask="url(#mask-bg)"
            />
          </svg>
          <div className="flex justify-start w-1/2">
            <img src="/images/berkly-to-animate.svg" className="h-52 xl:h-64 -z-10 pl-[20%]" />
          </div>
          <div className="flex flex-col w-1/2 justify-center pr-[10%] text-justify">
            <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold font-title">
              AN IMMUTABLE VOICE IN POLLS
            </h1>
            <p className="text-gray-500 text-md lg:text-lg xl:text-xl">
              Berkly is a system of checks and balances to create and distribute
              verifiable, tamper-proof polls on the blockchain.
            </p>
          </div>
        </div>
      </div>

      {/* <div className='flex mt-40 justify-between'>
        <div className='max-w-[50%]'>
          <img className='w-[16.5rem] lg:w-[29.5rem] h-36 lg:h-64 absolute -z-10 ml-7 lg:ml-10 back-and-forth' src="/images/svg-background.jpeg" />
          <img className='w-[20rem] lg:w-[35rem] xl:w-[40rem] h-36 lg:h-64 absolute -z-10' src="/images/berkly-to-animate.svg" />
        </div>
        <div className='max-w-[50%]'>
          <h1 className='text-3xl font-bold font-title'>AN IMMUTABLE VOICE IN POLLS</h1>
          <p className='text-gray-500'>Berkly is a system of checks and balances to create and distribute verifiable, 
            tamper-proof polls on the blockchain.</p>
        </div>
      </div> */}
    </>
  );
};

export default Home;
