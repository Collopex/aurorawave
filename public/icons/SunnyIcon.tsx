type Props = {
  width: string;
  height: string;
};

const SunnyIcon = ({ width, height }: Props) => {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox='0 0 160 160'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_531_332)'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M80 138C112.033 138 138 112.033 138 80C138 47.9675 112.033 22 80 22C47.9675 22 22 47.9675 22 80C22 112.033 47.9675 138 80 138ZM140 80C140 113.137 113.137 140 80 140C46.8629 140 20 113.137 20 80C20 46.8629 46.8629 20 80 20C113.137 20 140 46.8629 140 80Z'
            fill='#FFF308'
            fillOpacity='0.2'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M79.6665 130C107.465 130 130 107.465 130 79.6667C130 51.8683 107.465 29.3333 79.6665 29.3333C51.8682 29.3333 29.3332 51.8683 29.3332 79.6667C29.3332 107.465 51.8682 130 79.6665 130ZM132.667 79.6667C132.667 108.938 108.938 132.667 79.6665 132.667C50.3954 132.667 26.6665 108.938 26.6665 79.6667C26.6665 50.3956 50.3954 26.6667 79.6665 26.6667C108.938 26.6667 132.667 50.3956 132.667 79.6667Z'
            fill='#FFF308'
            fillOpacity='0.6'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M79.6665 124.667C104.519 124.667 124.667 104.519 124.667 79.6667C124.667 54.8139 104.519 34.6667 79.6665 34.6667C54.8137 34.6667 34.6665 54.8139 34.6665 79.6667C34.6665 104.519 54.8137 124.667 79.6665 124.667Z'
            fill='#FFEC65'
          />
        </g>
        <defs>
          <clipPath id='clip0_531_332'>
            <rect
              width='120'
              height='120'
              fill='white'
              transform='translate(20 20)'
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default SunnyIcon;
