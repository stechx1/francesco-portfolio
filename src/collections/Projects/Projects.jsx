import { Heading } from '../../components';
import { Project } from './Project/Project';

export const Projects = () => {
  return (
    <div className='flex text-white flex-col items-center py-[90px] last:py-0'>
      <Heading text='Projects' />
      <p className='my-4'>
        Here you will find some projects in which I have worked
      </p>
      <div className='py-[90px]'>
        <Project
          imageSrc={'/images/project-1.png'}
          title='Global Indicators'
          language={'Python'}
          desc='A dashboard with the analytics of the global population, infant mortality and life expectancy by region'
          buttonText={'Go to Dashboard'}
        />
        <Project
          imageSrc={'/images/project-3.png'}
          title='Stroke prediction'
          language={'Python'}
          desc='An ML model to predict patient strokes by applying feature selection and comparing several supervised learning models'
          buttonText={'Go to Project'}
          reverse
        />
        <Project
          imageSrc={'/images/project-2.png'}
          title='Human resources report'
          language={'Power BI'}
          desc='A dashboard with the analytics of the global population, infant mortality and life expectancy by region'
          buttonText={'Go to Dashboard'}
        />
      </div>
    </div>
  );
};
