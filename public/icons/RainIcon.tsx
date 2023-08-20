type Props = {
  width: string;
  height: string;
};

const RainIcon = ({ width, height }: Props) => {
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
          d='M129.979 65.4222C129.993 65.0011 130 64.5783 130 64.1538C130 43.4431 113.435 26.6538 93.0001 26.6538C76.7899 26.6538 63.0145 37.219 58.0118 51.9257C54.4189 50.0255 50.3332 48.9511 46 48.9511C31.6406 48.9511 20 60.749 20 75.3024C20 89.8559 31.6406 101.654 46 101.654L93.0001 101.654C93.0166 101.654 93.0332 101.654 93.0498 101.654H121C131.493 101.654 140 93.0322 140 82.397C140 75.0536 135.944 68.6702 129.979 65.4222Z'
          fill='white'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M76.9345 111.14C77.5034 109.389 79.3839 108.431 81.1347 109C82.8856 109.569 83.8438 111.449 83.2749 113.2L71.9171 148.155C71.3483 149.906 69.4677 150.864 67.7169 150.296C65.966 149.727 65.0079 147.846 65.5768 146.095L76.9345 111.14ZM90.356 111.14C90.9249 109.389 92.8054 108.431 94.5563 109C96.3071 109.569 97.2653 111.449 96.6964 113.2L88.0832 139.709C87.5144 141.459 85.6338 142.418 83.883 141.849C82.1321 141.28 81.174 139.399 81.7429 137.648L90.356 111.14ZM67.7134 109C65.9625 108.431 64.082 109.389 63.5131 111.14L57.6445 129.202C57.0756 130.952 58.0338 132.833 59.7846 133.402C61.5355 133.971 63.416 133.012 63.9849 131.262L69.8535 113.2C70.4224 111.449 69.4642 109.569 67.7134 109Z'
          fill='#B4F5F2'
        />
      </svg>
    </div>
  );
};

export default RainIcon;
