import { useState } from "react";
import { useFetch } from "./useFetch";
const Read = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [scan, setScan] = useState(false);
    // 
    const { data, loading, error } = useFetch(imagePreview, scan , "scan");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

    return (
        <div className="min-h-[70dvh] flex flex-col items-center m-3 shadow-xl gap-5 md:px-4">
            <div className="flex gap-8 w-full h-full flex-col justify-around md:flex-row md:justify-around items-center py-4 ">
                {/* select */}
                <div className="w-[80%] max-w-[90%] bg-white text-white p-2 rounded shadow-lg border border-t-[6px] border-t-amber-500">
                    {/* the input file */}
                    <div className="file-input relative inline-block w-full h-full">
                        <input
                            type="file"
                            id="file"
                            className="absolute left-0 top-0 opacity-0 w-full h-full cursor-pointer"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                        <label
                            htmlFor="file"
                            className="inline-flex bg-[#43a9ec]  rounded cursor-pointer text-center w-full h-full gap-4 items-center justify-center py-2"
                        >
                            <i className="fa-solid fa-plus"></i>
                            <span>Select an image</span>
                        </label>
                    </div>
                    {/* the selected image */}
                    <div className="mt-2 rounded bg-[#e6e6e6] text-slate-900 flex justify-center items-center h-[200px]  border-dashed border-gray-700 border">
                        {!imagePreview && (
                            <i className="fa-solid fa-upload"></i>
                        )}
                        {imagePreview && (
                            <img
                                src={imagePreview}
                                alt=""
                                className="rounded w-[100px] h-[100px]"
                            />
                        )}
                    </div>
                    {/* the scan button */}
                    <div className="w-full mt-2">
                        <button className="py-2 rounded w-full border bg-red-600 hover:bg-red-500 "
                        onClick={()=>{setScan(true)}}>
                            scan
                        </button>
                    </div>
                </div>
                {/* scanned data */}
                <div className="flex flex-col items-center gap-2 w-[80%] max-w-[90%] bg-white p-2 rounded shadow-lg border border-t-[6px] border-t-green-600">
                    <span className="text-lg md:text-xl">Scanned data</span>
                    <textarea
                        className="border border-gray-300 w-full"
                        name=""
                        id=""
                        rows={8}
                        value={data}
                    ></textarea>
                    <button className="py-2 rounded w-full border bg-indigo-600 hover:bg-indigo-500 text-white">
                        Coppy result
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Read;
