/* eslint-disable @next/next/no-img-element */
import { Heading } from '../../components';

export const ContactSection = () => {
  return (
    <div className='flex flex-col items-center'>
      <Heading text='Get In Touch' />
      <p className='text-white max-w-sm text-center my-6'>
        Feel free to contact me in one of my networks where I will respond as
        soon as possible.
      </p>
      <div className='flex pt-2 space-x-4'>
        <img src='/icons/linkedin.png' alt='Linkedin icon' width='48px' />
        <img src='/icons/Kaggle.png' alt='Kaggle icon' width='48px' />
      </div>
    </div>
  );
};
