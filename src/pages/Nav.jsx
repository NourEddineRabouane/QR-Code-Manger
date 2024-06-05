import { useRef } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    let menu = useRef(null);
    console.log(menu);
    const handleMenu = () => {
        menu.current.classList.toggle("hidden");
    };
    return (
        <header className="flex flex-col bg-gray-300 p-2">
            <div className="flex justify-between items-center border-b border-b-gray-400">
                <h3 className="font-bold">QR Code</h3>
                <i
                    onClick={handleMenu}
                    className="fa-solid fa-bars text-[32px] hover:text-cyan-600"
                ></i>
            </div>
            <div
                ref={menu}
                className="flex flex-col w-[100dvw] transition-all delay-200"
            >
                <Link className="hover:text-cyan-600" to="/">
                    Home
                </Link>
                <Link className="hover:text-cyan-600" to="/pages/Generate">
                    Generate
                </Link>
                <Link className="hover:text-cyan-600" to="/pages/Read">
                    Read
                </Link>
            </div>
        </header>
    );
};

export default Nav;
