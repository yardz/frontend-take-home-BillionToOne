// I was having an error with webpack's package. As I think resolving webpack problems is not the scope of the test, I decided not to spend time on it
// Because of that, i decide to move foward with the svg as component aproach

export const Ray: React.FC = () => (
  <svg
    width="48"
    height="49"
    viewBox="0 0 48 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0.5" y="1" width="47" height="47" rx="10.5" stroke="#E0E7FF" />
    <rect x="4.5" y="5" width="39" height="39" rx="8.5" stroke="#A5B4FC" />
    <rect
      x="8.5"
      y="9"
      width="31"
      height="31"
      rx="6.5"
      fill="#4F46E5"
      stroke="#4F46E5"
    />
    <path
      d="M25.8154 22.9211C25.7049 22.9211 25.6154 22.8316 25.6154 22.7211V15.1038C25.6154 14.9112 25.3699 14.8299 25.2549 14.9844L17.5941 25.2804C17.3487 25.6103 17.5841 26.0789 17.9953 26.0789H22.1846C22.2951 26.0789 22.3846 26.1684 22.3846 26.2789V33.8962C22.3846 34.0888 22.6301 34.1701 22.7451 34.0156L30.4059 23.7196C30.6513 23.3897 30.4159 22.9211 30.0047 22.9211H25.8154Z"
      fill="white"
      stroke="white"
      stroke-width="1.5"
    />
  </svg>
);
