import { useRef, useState } from "react";
import { useFetch } from "./useFetch";
import Image from "../images/Qr.png";
import Download from "./Download";

const Generate = () => {
    const [url, setUrl] = useState("");
    const [generate, setgenerate] = useState(false);
    const { data, error, loading, isEmpty } = useFetch(encodeURI(url), generate , "generate");
    const inp = useRef();

    // when click the button ===> show the generate the generated QR code ||
    const handlegenerate = () => {
        setgenerate(true);
        inp.current.value = "";
        if (data) setUrl("");
    };

    return (
        <div className="p-4 flex gap-2 flex-col">
            <div className="w-[100%] grid gap-1 grid-cols-3">
                <input
                    ref={inp}
                    onChange={(event) => {
                        // when the user type do not generate any QR code
                        setgenerate(false);
                        setUrl(event.target.value);
                    }}
                    type="text"
                    placeholder="Type the url here"
                    className="border py-2 pl-2 col-start-1 col-end-3"
                />
                <button
                    className="border bg-orange-500 p-2 text-white hover:bg-orange-600"
                    onClick={handlegenerate}
                >
                    Generate
                </button>
            </div>
            <div className="shadow-xl border py-6 h-[300px] flex justify-center items-center flex-col gap-4 lg:h-[350px] ">

                {/* set the loading  */}
                {generate && loading && (
                    <p className="text-center text-xl">Loading...</p>
                )}

                {/* set the initial image if not loading and no data or no click on generate button*/}
                {(!generate || !data) &&
                    (loading ? (
                        ""
                    ) : (
                        <img
                            src={Image}
                            className="opacity-20 w-[200px] h-[200px] lg:w-[250px] lg:h-[250px]"
                        ></img>
                    ))}
                {/* generate the generated QR code */}

                {generate && data && (
                    <img
                        src={data}
                        className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px]"
                    />
                )}

                {/* if there is an error */}
                {generate && error && <p className="text-red-600">{error}</p>}

                {/* if the input is empty */}
                {generate && isEmpty && (
                    <p className="text-red-600">please type the URL !</p>
                )}

            </div>
            {/* the download button */}
            <Download imageUrl={data}/>
        </div>
    );
};

export default Generate;
