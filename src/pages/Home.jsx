import Qrcode from "../images/Qr.png";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen p-4">
            <h2 className="text-xl text-center xs:text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
                QR code scanner and generator
            </h2>
            <p className="text-center text-lg  md:text-xl mb-6 px-6 text-[#7b7b7b]">
                The QR code scanner allows you to scan QR codes without any
                apps. And the generator make it easy to generate QR codes .
            </p>
            <div className="flex justify-center">
                <img
                    src={Qrcode}
                    alt="QR Code"
                    className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                />
            </div>
        </div>
    );
};

export default Home;
