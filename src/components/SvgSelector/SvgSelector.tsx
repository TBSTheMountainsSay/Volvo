import React from 'react';

type TSvgSelectorProps = {
  id: string;
  className?: string;
  style?: Record<string, string>;
};

const SvgSelector: React.FC<TSvgSelectorProps> = ({ id, className, style }) => {
  const svgMap: Record<string, JSX.Element> = {
    preloader: (
      <svg
        className={className}
        style={style}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          strokeWidth="10"
          r="35"
          strokeDasharray="164.93361431346415 56.97787143782138"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          />
        </circle>
      </svg>
    ),
    'preloader-small': (
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        className={className}
        style={style}
      >
        <circle cx="84" cy="50" r="10" fill="#ccd5de">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="0.3623188405797101s"
            calcMode="spline"
            keyTimes="0;1"
            values="10;0"
            keySplines="0 0.5 0.5 1"
            begin="0s"
          />
          <animate
            attributeName="fill"
            repeatCount="indefinite"
            dur="1.4492753623188404s"
            calcMode="discrete"
            keyTimes="0;0.25;0.5;0.75;1"
            values="#ccd5de;#e5eaef;#e1e6ec;#d9e0e6;#ccd5de"
            begin="0s"
          />
        </circle>
        <circle cx="16" cy="50" r="10" fill="#ccd5de">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1.4492753623188404s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="0s"
          />
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.4492753623188404s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="0s"
          />
        </circle>
        <circle cx="50" cy="50" r="10" fill="#d9e0e6">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1.4492753623188404s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.3623188405797101s"
          />
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.4492753623188404s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.3623188405797101s"
          />
        </circle>
        <circle cx="84" cy="50" r="10" fill="#e1e6ec">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1.4492753623188404s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.7246376811594202s"
          />
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.4492753623188404s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.7246376811594202s"
          />
        </circle>
        <circle cx="16" cy="50" r="10" fill="#e5eaef">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1.4492753623188404s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-1.0869565217391304s"
          />
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.4492753623188404s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-1.0869565217391304s"
          />
        </circle>
      </svg>
    ),

    burger: (
      <svg viewBox="0 0 50 50" className={className} style={style}>
        <path d="M 2 9 L 2 11 L 48 11 L 48 9 L 2 9 z M 2 24 L 2 26 L 48 26 L 48 24 L 2 24 z M 2 39 L 2 41 L 48 41 L 48 39 L 2 39 z" />
      </svg>
    ),

    close: (
      <svg
        className={className}
        style={style}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="cross-15"
        width="25px"
        height="25px"
        viewBox="0 0 15 15"
      >
        <path
          d="M2.64,1.27L7.5,6.13l4.84-4.84C12.5114,1.1076,12.7497,1.0029,13,1c0.5523,0,1,0.4477,1,1&#10;&#9;c0.0047,0.2478-0.093,0.4866-0.27,0.66L8.84,7.5l4.89,4.89c0.1648,0.1612,0.2615,0.3796,0.27,0.61c0,0.5523-0.4477,1-1,1&#10;&#9;c-0.2577,0.0107-0.508-0.0873-0.69-0.27L7.5,8.87l-4.85,4.85C2.4793,13.8963,2.2453,13.9971,2,14c-0.5523,0-1-0.4477-1-1&#10;&#9;c-0.0047-0.2478,0.093-0.4866,0.27-0.66L6.16,7.5L1.27,2.61C1.1052,2.4488,1.0085,2.2304,1,2c0-0.5523,0.4477-1,1-1&#10;&#9;C2.2404,1.0029,2.4701,1.0998,2.64,1.27z"
        />
      </svg>
    ),

    'checkbox-checked': (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path d="M9 19.4L3.3 13.7 4.7 12.3 9 16.6 20.3 5.3 21.7 6.7z"></path>
      </svg>
    ),
  };

  if (!svgMap.hasOwnProperty(id)) {
    console.warn(`Svg with id "${id}" doesn't exist`);
    return svgMap.placeholder;
  }

  return svgMap[id];
};

export default React.memo(SvgSelector);
