import { Heading } from '../../components';

export const AboutSection = () => {
  return (
    <div className='flex flex-col justify-center items-center mb-[90px]'>
      <Heading text='About me' />
      <div className='mt-10'>
        <div className='space-y-5 max-w-[650px] text-white mt-4 rounded bg-white bg-opacity-10 p-4'>
          <p>
            Hello! My name is Francesco, since I was young I have always been
            passionate about the world of technology and the information that
            data can give us.
          </p>
          <p>
            I work with all the processes{' '}
            <span className='text-primary'>
              from queries, data processing, visualizations, interactive reports
            </span>
            . In <span className='text-primary'> Data science </span>I work with
            <span className='text-primary'> Python </span> to create <span className='text-primary'>machine learning</span> models
            to identify patterns and make predictions.
          </p>
        </div>
      </div>
    </div>
  );
};
