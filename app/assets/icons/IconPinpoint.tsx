type IconPinpointProps = {
  width?: string | number;
  height?: string | number;
  fill?: string;
};

const IconPinpoint = ({
  width = 16,
  height = 19,
  fill = "white",
}: IconPinpointProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.49176 3.80844C4.61698 2.68321 6.14312 2.05107 7.73443 2.05107C9.32574 2.05107 10.8519 2.68321 11.9771 3.80844C13.1023 4.93367 13.7345 6.4598 13.7345 8.05111C13.7345 10.3747 12.2227 12.6293 10.565 14.3791C9.75149 15.2378 8.93544 15.9408 8.32193 16.4293C8.0936 16.6111 7.89416 16.7626 7.73443 16.8806C7.5747 16.7626 7.37526 16.6111 7.14693 16.4293C6.53342 15.9408 5.71737 15.2378 4.90387 14.3791C3.2462 12.6293 1.73439 10.3747 1.73439 8.05111C1.73439 6.4598 2.36653 4.93367 3.49176 3.80844ZM7.318 18.425C7.31821 18.4251 7.3184 18.4252 7.73443 17.8012L8.15046 18.4252C7.89853 18.5932 7.56992 18.5929 7.318 18.425ZM7.318 18.425L7.73443 17.8012C8.15046 18.4252 8.15121 18.4247 8.15143 18.4246L8.15301 18.4235L8.15801 18.4202L8.1752 18.4085C8.1898 18.3986 8.21063 18.3844 8.23727 18.3659C8.29054 18.329 8.36709 18.2753 8.46359 18.2056C8.65653 18.0662 8.92967 17.8629 9.25632 17.6027C9.90845 17.0835 10.7799 16.3333 11.6539 15.4107C13.3713 13.598 15.2345 10.9776 15.2345 8.05111C15.2345 6.06197 14.4443 4.1543 13.0378 2.74777C11.6312 1.34124 9.72357 0.551056 7.73443 0.551056C5.74529 0.551056 3.83762 1.34124 2.43109 2.74777C1.02456 4.1543 0.234375 6.06197 0.234375 8.05111C0.234375 10.9776 2.09759 13.598 3.81494 15.4107C4.68895 16.3333 5.56041 17.0835 6.21254 17.6027C6.53919 17.8629 6.81233 18.0662 7.00527 18.2056C7.10177 18.2753 7.17832 18.329 7.2316 18.3659C7.25823 18.3844 7.27906 18.3986 7.29367 18.4085L7.31085 18.4202L7.31585 18.4235L7.318 18.425ZM6.23442 8.05114C6.23442 7.2227 6.90599 6.55113 7.73443 6.55113C8.56286 6.55113 9.23444 7.2227 9.23444 8.05114C9.23444 8.87957 8.56286 9.55115 7.73443 9.55115C6.90599 9.55115 6.23442 8.87957 6.23442 8.05114ZM7.73443 5.05111C6.07756 5.05111 4.7344 6.39427 4.7344 8.05114C4.7344 9.708 6.07756 11.0512 7.73443 11.0512C9.39129 11.0512 10.7344 9.708 10.7344 8.05114C10.7344 6.39427 9.39129 5.05111 7.73443 5.05111Z"
      fill={fill}
    />
  </svg>
);

export default IconPinpoint;
