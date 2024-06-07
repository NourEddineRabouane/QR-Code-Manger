import { useRef } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Nav = ({ isSm }) => {
    let menu = useRef(null);

    const handleMenu = () => {
        menu.current.classList.toggle("hidden");
    };
    // if the screen is sm do not hide the menu
    if (isSm){
        menu.current.classList.remove("hidden");
    }
    return (
        <header className="flex flex-col  bg-white xs:mx-4 p-2 py-4 xs:flex-row xs:justify-between border-b border-b-gray-300">
            <div className="flex justify-between items-center">
                <h3 className="font-bold">QR Code Manger</h3>
                {!isSm && (
                    <i
                        onClick={handleMenu}
                        className="fa-solid  fa-bars text-[30px] hover:text-cyan-600"
                    ></i>
                )}
            </div>
            <div
                ref={menu}
                className="hidden flex-col w-[100dvw] transition-all delay-200 flex xs:flex-row xs:w-[270px] xs:justify-around text-[#7a7a7a] text-sm"
            >
                <Link className="hover:text-black py-2 pl-2" to="/">
                    Home
                </Link>
                <Link
                    className="hover:text-black py-2 pl-2"
                    to="/pages/Generate"
                >
                    Generate
                </Link>
                <Link className="hover:text-black py-2 pl-2" to="/pages/Read">
                    Read
                </Link>
            </div>
        </header>
    );
};

export default Nav;
