import Qrcode from "../images/Qr.png";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-400 text-white p-4">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                Welcome there
            </h2>
            <p className="text-lg md:text-xl mb-6">
                Generate and read QR codes easier
            </p>
            <div className="flex justify-center">
                <img
                    src={Qrcode}
                    alt="QR Code"
                    className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                />
            </div>
        </div>
    );
};

export default Home;
