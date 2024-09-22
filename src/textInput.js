import { useState } from 'react';

const TextInput = ({
  topText,
  setTopText,
  bottomText,
  setBottomText,
  generateMeme,
}) => {
  const [tempTopText, setTempTopText] = useState(topText);
  const [tempBottomText, setTempBottomText] = useState(bottomText);

  const handleGenerateMeme = (event) => {
    event.preventDefault();
    setTopText(tempTopText);
    setBottomText(tempBottomText);
    generateMeme();
  };

  return (
    <form onSubmit={handleGenerateMeme}>
      <label>
        Top text <br />
        <input
          placeholder="Enter Top Text"
          value={topText}
          onChange={(event) => setTopText(event.target.value)}
          onFocus={(event) => {
            event.target.value = ''; // Clears the input field on focus
            setTempTopText(''); // Clears the temporary state for top text
          }}
        />
      </label>
      <label>
        Bottom text
        <input
          placeholder="Enter Bottom Text"
          value={bottomText}
          onChange={(event) => setBottomText(event.target.value)}
          onFocus={(event) => {
            event.target.value = ''; // Clears the input field on focus
            setTempBottomText(''); // Clears the temporary state for top text
          }}
        />
      </label>
      <button>Generate Meme</button>
    </form>
  );
};

export default TextInput;
