import { useCallback, useEffect, useState } from 'react';
import FetchTemplate from './fetchTemplate.js';
import Meme from './meme.js';
import TextInput from './textInput.js';

// initial useState for when loading the page
export default function App() {
  const [topText, setTopText] = useState(`meme`);
  const [bottomText, setBottomText] = useState(`omg`);
  const [template, setTemplate] = useState('doge');
  const [memeUrl, setMemeUrl] = useState('');
  // url edit when typing into the Input fields
  const generateMeme = useCallback(() => {
    const memeURL = `https://api.memegen.link/images/${template}/${topText || '_'}/${bottomText || '_'}.png`;
    setMemeUrl(memeURL);
  }, [topText, bottomText, template]);

  useEffect(() => {
    // generate meme when opening page
    generateMeme();
  }, [generateMeme]);

  return (
    <div>
      <h1>Custom Meme Generator</h1>
      {/* getting Components from other files*/}
      <div>
        <TextInput
          topText={topText}
          setTopText={setTopText}
          bottomText={bottomText}
          setBottomText={setBottomText}
          generateMeme={generateMeme}
        />
      </div>
      <div>
        <FetchTemplate template={template} setTemplate={setTemplate} />
      </div>
      <div>
        <Meme memeUrl={memeUrl} />
      </div>
    </div>
  );
}
