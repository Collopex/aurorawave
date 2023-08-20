type Props = {
  width: string;
  height: string;
};
const CloudyIcon = ({ width, height }: Props) => {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox='0 0 160 160'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M129.979 71.7325C129.993 71.3154 130 70.8966 130 70.4762C130 49.9628 113.435 33.3333 93.0001 33.3333C76.7899 33.3333 63.0145 43.7979 58.0118 58.3645C54.4189 56.4824 50.3332 55.4183 46 55.4183C31.6406 55.4183 20 67.1038 20 81.5186C20 95.9335 31.6406 107.619 46 107.619L93.0498 107.619H121C131.493 107.619 140 99.0796 140 88.5457C140 81.2721 135.944 74.9496 129.979 71.7325Z'
          fill='white'
        />
      </svg>
    </div>
  );
};

export default CloudyIcon;
