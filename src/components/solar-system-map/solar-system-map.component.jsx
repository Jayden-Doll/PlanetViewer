import { Link } from "react-router-dom";

import { SolarSystemOverlay } from "./solar-system-map.styles";

import "./solar-system-map.styles";

const SolarSystemMap = () => {
  return (
    <SolarSystemOverlay
      width="436"
      height="434"
      viewBox="0 0 436 434"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame 1" clipPath="url(#clip0_13_3)">
        <g id="solar-system">
          <g id="ring-pluto">
            <circle
              className="orbit-map"
              id="pluto-orbit"
              cx="218.569"
              cy="217.188"
              r="207.623"
              transform="rotate(5.60684 218.569 217.188)"
              stroke="#545454"
              strokeWidth="0.5"
            />
            <Link to="/planet/pluto">
              <circle
                className="planet"
                id="pluto"
                cx="98.5"
                cy="386.5"
                r="5"
                stroke="white"
              />
            </Link>
          </g>
          <g id="ring-neptune">
            <circle
              className="orbit-map"
              id="neptune-orbit"
              cx="218.105"
              cy="217.506"
              r="173.67"
              transform="rotate(-2.07577 218.105 217.506)"
              stroke="#545454"
              strokeWidth="0.5"
            />
            <Link to="/planet/neptune">
              <path
                className="planet"
                id="neptune"
                d="M368.5 319C368.5 324.821 364.001 329.5 358.5 329.5C352.999 329.5 348.5 324.821 348.5 319C348.5 313.179 352.999 308.5 358.5 308.5C364.001 308.5 368.5 313.179 368.5 319Z"
                stroke="white"
              />
            </Link>
          </g>
          <g id="ring-uranus">
            <circle
              className="orbit-map"
              id="uranus-orbit"
              cx="217.858"
              cy="216.379"
              r="144.722"
              transform="rotate(7.83426 217.858 216.379)"
              stroke="#545454"
              strokeWidth="0.5"
            />
            <Link to="/planet/uranus">
              <circle
                className="planet"
                id="uranus"
                cx="77.5"
                cy="253.5"
                r="11"
                stroke="white"
              />
            </Link>
          </g>
          <g id="ring-saturn">
            <circle
              className="orbit-map"
              id="saturn-orbit"
              cx="218.501"
              cy="217.163"
              r="115.009"
              transform="rotate(15 218.501 217.163)"
              stroke="#545454"
              strokeWidth="0.5"
            />
            <Link to="/planet/saturn">
              <path
                className="planet"
                id="saturn"
                d="M225.5 101.5C225.5 106.496 221.669 110.5 217 110.5C212.331 110.5 208.5 106.496 208.5 101.5C208.5 96.5036 212.331 92.5 217 92.5C221.669 92.5 225.5 96.5036 225.5 101.5Z"
                stroke="white"
              />
            </Link>
          </g>
          <g id="ring-jupiter">
            <circle
              className="orbit-map"
              id="jupiter-orbit"
              cx="218.143"
              cy="216.786"
              r="85.1081"
              transform="rotate(28.5702 218.143 216.786)"
              stroke="#545454"
              strokeWidth="0.5"
            />
            <Link to="/planet/jupiter">
              <circle
                className="planet"
                id="jupiter"
                cx="295.5"
                cy="178.5"
                r="12"
                stroke="white"
              />
            </Link>
          </g>
          <g id="ring-mars">
            <circle
              className="orbit-map"
              id="mars-orbit"
              cx="217.865"
              cy="217.277"
              r="61.9406"
              transform="rotate(37.904 217.865 217.277)"
              stroke="#545454"
              strokeWidth="0.5"
            />
            <Link to="/planet/mars">
              <path
                className="planet"
                id="mars"
                d="M163.5 211.5C163.5 214.779 160.625 217.5 157 217.5C153.375 217.5 150.5 214.779 150.5 211.5C150.5 208.221 153.375 205.5 157 205.5C160.625 205.5 163.5 208.221 163.5 211.5Z"
                stroke="white"
              />
            </Link>
          </g>
          <g id="ring-earth">
            <g id="ring-moon">
              <Link to="/planet/moon">
                <circle
                  className="planet"
                  id="moon"
                  cx="227"
                  cy="261"
                  r="3.5"
                  stroke="white"
                />
              </Link>
            </g>
            <circle
              className="orbit-map"
              id="earth-orbit"
              cx="217"
              cy="216.455"
              r="39.6696"
              transform="rotate(45 217 216.455)"
              stroke="#545454"
              strokeWidth="0.5"
            />
            <Link to="/planet/earth">
              <circle
                className="planet"
                id="earth"
                cx="216"
                cy="254"
                r="6.5"
                stroke="white"
              />
            </Link>
          </g>
          <g id="ring-venus">
            <circle
              className="orbit-map"
              id="venus-orbit"
              cx="217.164"
              cy="216.452"
              r="26.272"
              transform="rotate(58.6264 217.164 216.452)"
              stroke="#545454"
              strokeWidth="0.5"
            />
            <Link to="/planet/venus">
              <circle
                className="planet"
                id="venus"
                cx="241"
                cy="228"
                r="4.5"
                stroke="white"
              />
            </Link>
          </g>
          <g id="ring-mercury">
            <circle
              className="orbit-map"
              id="mercury-orbit"
              cx="217.487"
              cy="216.894"
              r="16.4427"
              transform="rotate(140.119 217.487 216.894)"
              stroke="#545454"
              strokeWidth="0.5"
            />
            <Link to="/planet/mercury">
              <circle
                className="planet"
                id="mercury"
                cx="219"
                cy="201"
                r="3.5"
                stroke="white"
              />
            </Link>
          </g>
          <Link to="/planet/sun">
            <path
              className="planet"
              id="sun"
              d="M226.5 217C226.5 221.669 222.496 225.5 217.5 225.5C212.504 225.5 208.5 221.669 208.5 217C208.5 212.331 212.504 208.5 217.5 208.5C222.496 208.5 226.5 212.331 226.5 217Z"
              stroke="white"
            />
          </Link>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_13_3">
          <rect width="436" height="434" fill="white" />
        </clipPath>
      </defs>
    </SolarSystemOverlay>
  );
};

export default SolarSystemMap;
