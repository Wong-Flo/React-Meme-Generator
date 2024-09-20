import './styles.css';
import { useEffect, useState } from 'react';
import FetchTemplate from './fetchTemplate.js';
import styles from './index.css';
import Meme from './meme.js';
import TextInput from './textInput.js';

// initial useState for when loading the page
export default function App() {
  const [topText, setTopText] = useState('nice');
  const [bottomText, setBottomText] = useState('Double Nice');
  const [template, setTemplate] = useState('awesome');
  const [memeUrl, setMemeUrl] = useState('');
  // url edit when typing into the Input fields
  const generateMeme = () => {
    const memeURL = `https://api.memegen.link/images/${template}/${topText || '_'}/${bottomText || '_'}.png`;
    setMemeUrl(memeURL);
    setTemplate(template);
  };

  useEffect(() => {
    // generate meme when opening page
    generateMeme();
  }, []);

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
