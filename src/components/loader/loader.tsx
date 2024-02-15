import "./loader.css";

export const Loader = () => {
  return (
    <div className="w-full h-full min-h-[50vh] flex flex-col justify-center items-center flex-1">
      <div className="preloader-1">
        <svg>
          <g>
            <path d="M 50,100 A 1,1 0 0 1 50,0" />
          </g>
          <g>
            <path d="M 50,75 A 1,1 0 0 0 50,-25" />
          </g>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "#BFE2FF", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#337AB7", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};
