type Props = {
  size: 'large' | 'small';
};

const Logo = ({ size }: Props) => {
  const getSize = () => {
    if (size === 'large') {
      return '70';
    } else if (size === 'small') {
      return '40';
    } else {
      return '55';
    }
  };
  const logoSize = getSize();

  return (
    <div>
      <svg
        width={logoSize}
        height={logoSize}
        viewBox='0 0 429 324'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g filter='url(#filter0_b_597_283)'>
          <path d='M15.6 324H0L9.5 47L15.6 324Z' fill='#009587' />
          <path
            d='M37.44 318.655L21.84 322.664L29.64 59.4159L37.44 318.655Z'
            fill='#009587'
          />
          <path
            d='M43.68 317.319L51.48 102.177L59.28 310.637L43.68 317.319Z'
            fill='#009587'
          />
          <path
            d='M81.12 299.947L67.08 307.965L73.32 127.566L81.12 299.947Z'
            fill='#009587'
          />
          <path
            d='M102.96 285.248L88.92 294.602L95.16 102.177L102.96 285.248Z'
            fill='#009587'
          />
          <path
            d='M123.24 269.212L110.76 279.903L117 43.3805L123.24 269.212Z'
            fill='#009587'
          />
          <path
            d='M145.08 250.504L132.6 261.195L137.5 6L145.08 250.504Z'
            fill='#009587'
          />
          <path
            d='M165.36 233.133L156 241.15L160.68 111.531L165.36 233.133Z'
            fill='#009587'
          />
          <path
            d='M187.2 215.761L177.84 222.442L182.52 71.4425L187.2 215.761Z'
            fill='#009587'
          />
          <path
            d='M209.04 199.726L201.24 205.071V0L209.04 199.726Z'
            fill='#009587'
          />
          <path
            d='M229.32 186.363L224.64 189.035L226.2 120.885L229.32 186.363Z'
            fill='#009587'
          />
          <path
            d='M251.16 175.673L246.48 178.345L249.6 98.1681L251.16 175.673Z'
            fill='#009587'
          />
          <path
            d='M274.56 167.655L266.76 170.327L271.44 50.062L274.56 167.655Z'
            fill='#009587'
          />
          <path
            d='M296.4 162.31L288.6 163.646L293.28 22L296.4 162.31Z'
            fill='#009587'
          />
          <path
            d='M318.24 160.973H310.44L315.12 50.062L318.24 160.973Z'
            fill='#009587'
          />
          <path
            d='M340.08 162.31L332.28 160.973L336.96 50.062L340.08 162.31Z'
            fill='#009587'
          />
          <path
            d='M361.92 168.991L354.12 166.319L358.8 42.0443L361.92 168.991Z'
            fill='#009587'
          />
          <path
            d='M385.32 182.354L375.96 175.673L380.64 38.0354L385.32 182.354Z'
            fill='#009587'
          />
          <path
            d='M405.6 203.735L399.36 195.717L402.48 111.531L405.6 203.735Z'
            fill='#009587'
          />
          <path
            d='M429 273.221C426.42 253.423 425.056 242.11 419.64 230.46L424.32 131.575L429 273.221Z'
            fill='#009587'
          />
        </g>
        <defs>
          <filter
            id='filter0_b_597_283'
            x='-4'
            y='-4'
            width='437'
            height='332'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feGaussianBlur in='BackgroundImageFix' stdDeviation='2' />
            <feComposite
              in2='SourceAlpha'
              operator='in'
              result='effect1_backgroundBlur_597_283'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_backgroundBlur_597_283'
              result='shape'
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;
