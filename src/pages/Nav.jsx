import { useRef } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Nav = ({ isSm }) => {
    let menu = useRef(null);

    const handleMenu = () => {
        menu.current.classList.toggle("hidden");
    };
    if (isSm){
        menu.current.classList.remove("hidden");
    }
    return (
        <header className="flex flex-col  bg-sky-400 p-2 py-4 xs:flex-row xs:justify-between">
            <div className="flex justify-between items-center border-b border-b-gray-400 xs:border-none">
                <h3 className="font-bold">QR Code Manger</h3>
                { !isSm && (
                    <i
                        onClick={handleMenu}
                        className="fa-solid fa-bars text-[32px] hover:text-cyan-600"
                    ></i>
                )}
            </div>
            <div
                ref={menu}
                className="flex flex-col w-[100dvw] transition-all delay-200 hidden xs:flex-row xs:w-[300px] xs:justify-around"
            >
                <Link className="hover:text-black py-2 pl-2" to="/">
                    Home
                </Link>
                <Link className="hover:text-black py-2 pl-2" to="/pages/Generate">
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
