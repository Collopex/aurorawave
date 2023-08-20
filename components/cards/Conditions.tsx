'use client';

type Props = {
  label: string;
  logo: React.ReactNode;
  result: string;
};

const Conditions = ({ label, logo, result }: Props) => {
  return (
    <div
      className={`xl:w-[240px] xl:h-[200px] md:h-[228px] md:w-[136px] w-[125px] h-[210px]  bg-[#c1c1c1c1]/5 rounded-[20px]`}
    >
      <div>
        <h3 className={`font-medium text-lg text-[#DEDDDD] mx-6 my-3`}>
          {label}
        </h3>

        <div className='flex flex-col gap-4  items-center'>
          <div>{logo}</div>
          <span className='xl:text-4xl text-3xl font-semibold text-[#ffffff] overflow-y-hidden'>
            {result}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Conditions;
