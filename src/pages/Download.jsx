

// eslint-disable-next-line react/prop-types
const Download = ({ imageUrl }) => {
    const handleDownload = () => {
        if (imageUrl) {
            const link = document.createElement('a');
            link.href = imageUrl;
            link.download = 'qr-code.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

  return (
    <div className='text-center'>
        <button onClick={handleDownload}
            disabled={!imageUrl} className='border-2 w-[200px] lg:w-[300px] lg:py-4 py-2 bg-cyan-700 text-white hover:bg-cyan-800'>Download</button>
    </div>
  )
}

export default Download