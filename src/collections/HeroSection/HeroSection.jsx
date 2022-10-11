/* eslint-disable @next/next/no-img-element */
export const HeroSection = () => {
  return (
    <div className='h-[70vh] flex justify-between items-center'>
      <div className='flex flex-col space-y-2'>
        <h1 className='text-5xl text-white'>Francesco Aliatis</h1>
        <h1 className='text-primary text-5xl'>Data Analytics</h1>
        <p className="text-white max-w-sm">
          I am a data analyst specializing in processing, cleaning, analyzing
          and build dashboard from data to interpret and identify key insights
          for use in decision-making.
        </p>
        <div className="flex pt-2 space-x-4">
          <img src="/icons/linkedin.png" alt="Linkedin icon" width="48px"/>
          <img src="/icons/Kaggle.png" alt="Kaggle icon" width="48px" />
        </div>
      </div>
      <img src='/images/hero-img.png' width={380} alt='hero image' />
    </div>
  );
};
