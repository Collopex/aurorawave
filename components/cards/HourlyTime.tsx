'use client';

type Props = {
  logo: React.ReactNode;
  result: string;
  time: string;
};

const HourlyTime = ({ logo, result, time }: Props) => {
  return (
    <div
      className={`flex flex-col  xl:w-[115.5px] xl:h-[180px] w-[125px] h-[180px] rounded-[20px] 
        bg-[#c1c1c1c1]/5 justify-center items-center`}
    >
      <div>{logo}</div>
      <div>
        <div className='text-xl font-bold text-[#ffffff]'>{result}</div>
        <div
          className={`text-lg font-medium text-[#DEDDDD]
          `}
        >
          {time}
        </div>
      </div>
    </div>
  );
};

export default HourlyTime;
