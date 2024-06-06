import { useState } from "react";
import { useFetch } from "./useFetch";
const Generate = () => {
    const [url, setUrl] = useState("");
    const [show, setShow] = useState(false);
    const { data, error, loading, isEmpty } = useFetch(encodeURI(url), 200);

    // when click the button ===> generate the Show the generated QR code
    // the problem when i click the button the url setted to empy and the empty message is visible with the QR code
    const handleShow = () => {
        setShow(true);
        setUrl("");
    };
    console.log(isEmpty);
    return (
        <div className="p-4 flex gap-2 flex-col">
            <div className="w-[100%] grid gap-1 grid-cols-3">
                <input
                    onChange={(event) => {
                        // when the user type do not generate any QR code
                        setShow(false);
                        setUrl(event.target.value);
                    }}
                    type="text"
                    placeholder="Type the url here"
                    className="border py-2 pl-2 col-start-1 col-end-3"
                />
                <button
                    className="border bg-orange-500 p-2"
                    onClick={handleShow}
                >
                    Generate
                </button>
            </div>
            <div className="border p-4 h-[300px] flex justify-center items-center">
                {show && loading && (
                    <p className="text-center text-xl">Loading...</p>
                )}
                {show && data && (
                    <img src={data} className="w-[200px] h-[200px]" />
                )}
                {show && error && <p className="text-red-600">{error}</p>}
                {show && isEmpty && (
                    <p className="text-red-600">please type the URL !</p>
                )}
            </div>
        </div>
    );
};

export default Generate;
