import { useRouter } from 'next/router';
import { Button } from '../../../components';
import { RightDesc, LeftDesc } from './Desc';

/* eslint-disable @next/next/no-img-element */
export const Project = ({
  imageSrc,
  title,
  language,
  desc,
  projectLink,
  buttonText,
  reverse,
}) => {
  const router = useRouter();
  return (
    <div
      className={`mb-[120px] flex justify-between items-center space-x-10 ${
        reverse ? 'flex-row-reverse' : ''
      }`}
    >
      <img src={imageSrc} alt={`${title} image`} width='750px' />
      <div
        className={`flex flex-col ${
          reverse ? 'items-start' : 'items-end'
        } relative mt-[-50px]`}
      >
        <p className='text-primary'>{language}</p>
        <h3 className='text-2xl'>{title}</h3>
        {reverse ? <RightDesc desc={desc} /> : <LeftDesc desc={desc} />}
        <div className='absolute bottom-[-200px]'>
          <Button onClick={() => router.push(`/${projectLink}`)}>
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};
