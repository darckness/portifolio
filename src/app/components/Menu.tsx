import { Fragment } from "react";

export default function Menu() {
    return (
        <Fragment>
            <div 
                className="rounded-full h-10 md:h-2/4 w-10 max-md:hover:w-56 bg-gray-800 absolute top-3/4 md:top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 duration-500 border hover:scale-125 hover:bg-gray-400 flex flex-row md:flex-col justify-evenly items-center">

                <div 
                    className="h-5 w-5 md:w-7 md:h-7 rounded-full bg-center bg-no-repeat cursor-pointer" 
                    style={{
                        backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%271em%27 height=%271em%27 viewBox=%270 0 24 24%27%3E%3Cg fill=%27none%27 stroke=%27%23ffffff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27%3E%3Cpath stroke-dasharray=%2721%27 stroke-dashoffset=%2721%27 d=%27M5 21H19%27%3E%3Canimate fill=%27freeze%27 attributeName=%27stroke-dashoffset%27 dur=%270.4s%27 values=%2721;0%27/%3E%3C/path%3E%3Cpath stroke-dasharray=%2715%27 stroke-dashoffset=%2715%27 d=%27M5 21V8M19 21V8%27%3E%3Canimate fill=%27freeze%27 attributeName=%27stroke-dashoffset%27 begin=%270.4s%27 dur=%270.4s%27 values=%2715;0%27/%3E%3C/path%3E%3Cpath stroke-dasharray=%2726%27 stroke-dashoffset=%2726%27 d=%27M2 10L12 2L22 10%27%3E%3Canimate fill=%27freeze%27 attributeName=%27stroke-dashoffset%27 begin=%271s%27 dur=%270.8s%27 values=%2726;0%27/%3E%3C/path%3E%3C/g%3E%3C/svg%3E')",
                        backgroundSize: "100% 100%"
                    }}
                />

                <div
                    className="h-5 w-5 md:w-7 md:h-7 rounded-full bg-center bg-no-repeat cursor-pointer"
                    style={{
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath stroke-dasharray='20' stroke-dashoffset='20' d='M12 5C13.66 5 15 6.34 15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5z'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' dur='1.2s' values='20;0'/%3E%3C/path%3E%3Cpath stroke-dasharray='36' stroke-dashoffset='36' d='M12 14C16 14 19 16 19 17V19H5V17C5 16 8 14 12 14z' opacity='0'%3E%3Cset attributeName='opacity' begin='1.5s' to='1'/%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='1.5s' dur='1.2s' values='36;0'/%3E%3C/path%3E%3C/g%3E%3C/svg%3E\")",
                        backgroundSize: "100% 100%"
                    }}
                />

                <div
                    className="h-5 w-5 md:w-7 md:h-7 rounded-full bg-center bg-no-repeat cursor-pointer"
                    style={{
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23ffffff' stroke-linecap='round' stroke-width='2'%3E%3Cpath stroke-dasharray='16' stroke-dashoffset='16' d='M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7' opacity='0'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='2.1s' dur='0.6s' values='16;32'/%3E%3Cset attributeName='opacity' begin='2.1s' to='1'/%3E%3C/path%3E%3Cpath stroke-dasharray='64' stroke-dashoffset='64' d='M9 7H20C20.5523 7 21 7.44772 21 8V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V8C3 7.44772 3.44772 7 4 7z'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' dur='1.8s' values='64;0'/%3E%3C/path%3E%3C/g%3E%3C/svg%3E\")",
                        backgroundSize: "100% 100%"
                    }}
                />

                <div
                    className="h-5 w-5 md:w-7 md:h-7 rounded-full bg-center bg-no-repeat cursor-pointer"
                    style={{
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath stroke-dasharray='6' stroke-dashoffset='6' d='M12 21H17M12 21H7'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' dur='0.9s' values='6;0'/%3E%3C/path%3E%3Cpath stroke-dasharray='6' stroke-dashoffset='6' d='M12 21V17'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' dur='0.6s' values='6;0'/%3E%3C/path%3E%3Cpath stroke-dasharray='64' stroke-dashoffset='64' d='M12 17H3V5H21V17Z'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='0.9s' dur='1.8s' values='64;0'/%3E%3C/path%3E%3C/g%3E%3C/svg%3E\")",
                        backgroundSize: "100% 100%"
                    }}
                />
            </div>
        </Fragment>
    );
}