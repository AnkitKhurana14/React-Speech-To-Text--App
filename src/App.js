import './css/Sample.css';
import React, { useCallback } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const App = () => {
  const commands=[
    {
      command:'colour to *',
      callback: (color)=>
      {
        document.body.style.background=color;
      }
      
    },
    {
      command:'reset',
      callback:({resetTranscript})=>resetTranscript()
    },
    {
      command:'open *',
      callback:(site)=>
      {
        window.open('http://'+site);
      }
    }

  ]
  const {
    transcript,
    listening,
    resetTranscript,
  } = useSpeechRecognition({commands});


  return (
    <div className='btn'>
            <p>Microphone: {listening ? 'on' : 'off'}</p>

      
     <button className='btn1' onClick={SpeechRecognition.startListening}>Start</button>
      <button className='btn2' onClick={SpeechRecognition.stopListening}>Stop</button>
      <button className='btn3' onClick={resetTranscript}>Reset</button>
      <p className='transcript'>{transcript}</p>
    </div>
  );
};
export default App;