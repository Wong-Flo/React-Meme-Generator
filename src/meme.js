import axios from 'axios';

const Meme = ({ memeUrl }) => {
  const downloadMeme = async () => {
    try {
      const response = await axios.get(memeUrl, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'meme.png');
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading meme:', error);
    }
  };

  return (
    <div>
      {memeUrl ? (
        <>
          <img
            src={memeUrl}
            alt="Generated Meme"
            data-test-id="meme-image"
            style={{ width: '400px', height: '400px' }}
          />
          <br />
          <button className="downloadBtn" onClick={downloadMeme}>
            Download
          </button>
        </>
      ) : null}
    </div>
  );
};

export default Meme;
