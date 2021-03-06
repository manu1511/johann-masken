import Link from "next/link";
import { useEffect } from "react";
import tw from "twin.macro";

const Logo = ({ ...rest }) => {
  useEffect(() => {
    document.querySelector("#path").setAttribute("stroke-dashoffset", 480);

    document.querySelector("#johann").style.opacity = 1;
    document.querySelector("#johann").style.transform = "none";

    document.querySelector("#masken").style.opacity = 1;
    document.querySelector("#masken").style.transform = "none";
  });

  return (
    <div className="logo" {...rest}>
      <Link href="/" passHref>
        <a
          tw="block relative w-24 sm:w-32 m-auto"
          href="/"
          rel="home"
          title="JOHANN MASKEN"
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 124.693 182.908"
            enableBackground="new 0 0 124.693 182.908"
            id="jo"
            xmlSpace="preserve"
          >
            <defs>
              <path
                id="path"
                d="M 14.749,0 C 10.65067,19.822939 -3.8311517,49.339605 35,61.408005 l 52.853553,19.62132 C 145.76873,116.38018 83.682575,179.10709 61.62132,168.92577 38.977188,178.87081 -30.355304,120.29069 57.87868,69.408005 79.156241,66.442864 100.93101,61.729633 114.06066,44.279325 119.06784,32.74225 117.93668,18.136004 109.746,0"
                strokeDasharray="1000"
                strokeDashoffset="1000"
                strokeWidth="36"
                stroke="#E01B1B"
                fill="none"
                tw="transition-all duration-1000 ease-in-out"
              ></path>
              <clipPath id="clip">
                <path
                  id="o"
                  d="M79.894,60.604l-15.199-5.151l-0.125-0.035c-1.322-0.419-2.645-0.837-3.995-1.255l-0.324-0.097
                c-7.567-2.446-14.906-5.155-21.027-7.437c-0.9-0.322-1.739-0.646-2.574-0.966c-2.608-0.938-5.285-1.931-7.763-3.317
                l-0.065-0.032c-4.798-2.576-8.505-6.148-10.723-10.37c-1.03-1.995-1.87-4.283-2.417-6.89c-0.256-1.128-0.45-2.288-0.58-3.413
                c-0.13-1-0.194-2.094-0.255-3.318c-0.033-0.483-0.066-0.934-0.066-1.42L14.749,0l-8.82,14.328
                c-0.682,1.191-1.355,2.447-1.972,3.733c-1.476,3.225-2.604,6.608-3.248,9.921c-0.324,1.674-0.515,3.413-0.643,5.219
                C0.032,34.004,0,34.877,0,35.776c0,4.732,0.741,9.53,2.222,14.3c2.06,6.498,5.958,12.396,10.95,16.549
                c2.026,1.708,4.348,3.285,6.921,4.639l0.711,0.355c0.319,0.191,0.645,0.352,0.933,0.48c0.222,0.129,0.45,0.229,0.711,0.357
                c0.092,0.027,0.189,0.096,0.287,0.127c1.484,0.709,2.996,1.287,4.477,1.835l0.223,0.065c0.228,0.125,0.488,0.223,0.71,0.32
                c0.195,0.098,0.357,0.162,0.553,0.254c0.19,0.072,0.352,0.135,0.542,0.229c0.227,0.097,0.449,0.161,0.678,0.258
                c0.13,0.067,0.292,0.126,0.423,0.163c0.287,0.127,0.574,0.223,0.867,0.353c0.157,0.065,0.319,0.132,0.515,0.192
                c0.26,0.096,0.548,0.193,0.835,0.291l34.625,11.621c4.955,1.516,9.011,2.9,13.624,5.545
                c9.686,6.5,14.067,15.682,14.067,26.789c0,17.971-14.627,32.59-32.594,32.59c-17.971,0-32.622-14.619-32.622-32.59
                c0-11.107,5.604-20.93,14.138-26.822c3.321-2.291,7.052-3.961,11.078-4.893l-23.568-8.023
                c-1.968-0.709-3.74-1.383-5.345-2.125l-0.065-0.031c-1.582-0.547-3.159-1.222-4.77-1.936
                c-0.704-0.352-1.415-0.705-2.092-1.057c-0.223,0.223-0.483,0.448-0.737,0.671C6.151,88.427,0,104.461,0,123.881
                c0,0.322,0.032,0.613,0.032,0.934c2.06,30.4,25.889,54.809,56.001,57.775c2.059,0.223,4.151,0.318,6.245,0.318
                c1.999,0,3.929-0.096,5.895-0.289c30.27-2.834,54.265-27.309,56.356-57.805c0.101-1.414,0.164-2.867,0.164-4.314
                C124.693,92.133,105.783,68.201,79.894,60.604z"
                ></path>
                <path
                  id="j"
                  d="M106.109,70.328c1.901-1.129,3.673-2.381,5.279-3.735c4.964-4.12,8.862-10.018,10.923-16.517
                c1.482-4.77,2.253-9.568,2.253-14.3c0-0.899-0.035-1.772-0.102-2.575c-0.094-1.806-0.289-3.572-0.613-5.219
                c-0.669-3.347-1.733-6.696-3.285-9.948c-0.575-1.29-1.252-2.549-1.956-3.737L109.746,0l0.036,16.902
                c-0.036,0.486-0.036,0.937-0.065,1.42c-0.063,1.225-0.13,2.318-0.259,3.318c-0.13,1.125-0.325,2.285-0.575,3.413
                c-0.586,2.606-1.393,4.895-2.451,6.857c-2.226,4.254-5.891,7.826-10.725,10.368l-0.066,0.066
                c-2.439,1.352-5.113,2.348-7.729,3.317c-0.836,0.32-1.672,0.643-2.572,0.966c-4.77,1.771-10.271,3.799-16.033,5.762
                l15.84,5.379C92.747,60.506,99.76,64.727,106.109,70.328z"
                ></path>
              </clipPath>
            </defs>
            <use xlinkHref="#path" clipPath="url(#clip)"></use>
          </svg>
        </a>
      </Link>

      <Link href="/" passHref>
        <a rel="home" title="JOHANN MASKEN" tw="block w-48 py-8 sm:w-64 m-auto">
          <svg
            tw="opacity-0 transform translate-y-full transition-all duration-500 delay-700 mb-4"
            viewBox="0 0 75.44 12.33"
            id="johann"
          >
            <g transform="translate(-61.556507,-36.706392)">
              <g aria-label="JOHANN">
                <path d="m 65.722098,48.999968 c 1.354664,0 2.472262,-0.423333 3.251194,-1.202265 0.795865,-0.795865 1.168398,-1.845729 1.168398,-3.33586 v -7.518385 h -3.268127 v 7.501452 c 0,1.100665 -0.524933,1.659463 -1.354664,1.659463 -0.728132,0 -1.269998,-0.406399 -1.84573,-1.100664 l -2.116662,1.998129 c 0.829731,1.134531 2.099729,1.99813 4.165591,1.99813 z" />
                <path d="m 78.049527,49.033834 c 3.657593,0 6.400787,-2.760128 6.400787,-6.163721 v -0.03387 c 0,-3.403594 -2.709328,-6.129855 -6.36692,-6.129855 -3.657593,0 -6.400788,2.760128 -6.400788,6.163721 v 0.03387 c 0,3.403593 2.709328,6.129854 6.366921,6.129854 z m 0.03387,-2.963327 c -1.79493,0 -3.031061,-1.490131 -3.031061,-3.200394 v -0.03387 c 0,-1.710264 1.202264,-3.166528 2.997194,-3.166528 1.811863,0 3.047994,1.490131 3.047994,3.200394 v 0.03387 c 0,1.710263 -1.202264,3.166527 -3.014127,3.166527 z" />
                <path d="m 86.160567,48.796768 h 3.28506 V 44.29251 h 4.216392 v 4.504258 h 3.28506 v -11.85331 h -3.28506 v 4.436525 h -4.216392 v -4.436525 h -3.28506 z" />
                <path d="m 98.098537,48.796768 h 3.454393 l 0.84666,-2.116662 h 4.572 l 0.86359,2.116662 h 3.52213 l -5.04612,-11.937976 h -3.16653 z m 5.266253,-4.673591 1.33773,-3.369726 1.3208,3.369726 z" />
                <path d="m 112.50875,48.796768 h 3.25119 v -6.502387 l 5.06306,6.502387 h 2.87866 v -11.85331 h -3.2512 v 6.265321 l -4.87679,-6.265321 h -3.06492 z" />
                <path d="m 125.80138,48.796768 h 3.2512 v -6.502387 l 5.06305,6.502387 h 2.87866 v -11.85331 h -3.25119 v 6.265321 l -4.87679,-6.265321 h -3.06493 z" />
              </g>
            </g>
          </svg>

          <svg
            tw="opacity-0 transform translate-y-full transition-all duration-500 delay-1000"
            viewBox="0 0 73.88 12.26"
            id="masken"
          >
            <g transform="translate(-110.47078,-213.09634)">
              <g aria-label="MASKEN">
                <path d="m 110.47078,225.15285 h 3.21733 v -6.77332 l 3.01412,4.60585 h 0.0677 l 3.03106,-4.63972 v 6.80719 h 3.26812 v -11.85331 h -3.47132 l -2.82786,4.58892 -2.82787,-4.58892 h -3.47132 z" />
                <path d="m 124.22059,225.15285 h 3.45439 l 0.84666,-2.11667 h 4.572 l 0.86359,2.11667 h 3.52213 l -5.04612,-11.93798 h -3.16653 z m 5.26625,-4.67359 1.33773,-3.36973 1.3208,3.36973 z" />
                <path d="m 143.11811,225.35605 c 2.87866,0 4.79213,-1.43933 4.79213,-3.8608 v -0.0339 c 0,-2.21826 -1.69333,-3.0988 -4.41959,-3.69146 -1.64253,-0.37253 -2.04893,-0.6096 -2.04893,-1.15147 v -0.0339 c 0,-0.42334 0.38946,-0.762 1.18533,-0.762 1.04986,0 2.23519,0.4064 3.31892,1.1684 l 1.64253,-2.31987 c -1.28693,-1.03293 -2.86172,-1.57479 -4.87679,-1.57479 -2.84479,0 -4.58892,1.59173 -4.58892,3.79306 v 0.0339 c 0,2.4384 1.94733,3.1496 4.47039,3.72533 1.60866,0.37253 1.99813,0.64346 1.99813,1.13453 v 0.0339 c 0,0.508 -0.47413,0.8128 -1.35466,0.8128 -1.3716,0 -2.67547,-0.49107 -3.84386,-1.4224 l -1.8288,2.18439 c 1.45626,1.30387 3.45439,1.96427 5.55412,1.96427 z" />
                <path d="m 149.50194,225.15285 h 3.28506 v -3.06493 l 1.20227,-1.33773 2.98026,4.40266 h 3.94546 l -4.63973,-6.75639 4.48733,-5.09692 h -3.89466 l -4.08093,4.80905 v -4.80905 h -3.28506 z" />
                <path d="m 161.86324,225.15285 h 9.61812 v -2.794 h -6.36692 v -1.87959 h 5.68958 v -2.5908 h -5.68958 v -1.79493 h 6.28225 v -2.79399 h -9.53345 z" />
                <path d="m 173.15775,225.15285 h 3.2512 v -6.50239 l 5.06305,6.50239 h 2.87866 v -11.85331 h -3.25119 v 6.26532 l -4.87679,-6.26532 h -3.06493 z" />
              </g>
            </g>
          </svg>
        </a>
      </Link>
    </div>
  );
};

export default Logo;
