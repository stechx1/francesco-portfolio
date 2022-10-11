export const Heading = ({ text, dividerWidth }) => {
  return (
    <>
      <h2 className='text-4xl text-white'>{text}</h2>
      <div
        className={`h-1 ${
          dividerWidth ? `w-[${dividerWidth}px]` : 'w-[100px]'
        } rounded bg-primary`}
      ></div>
    </>
  );
};
