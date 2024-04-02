// I was having an error with webpack's package. As I think resolving webpack problems is not the scope of the test, I decided not to spend time on it
// Because of that, i decide to move foward with the svg as component aproach

export const Arrow: React.FC = () => (
  <svg
    width="22"
    height="23"
    viewBox="0 0 22 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.2275 5.93579L18.7916 11.5L13.2275 17.0641"
      stroke="white"
      stroke-width="1.4"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3.20831 11.5H18.6358"
      stroke="white"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
