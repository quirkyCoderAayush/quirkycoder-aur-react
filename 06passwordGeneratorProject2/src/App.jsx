import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [passwordLength, setPasswordLength] = useState(6);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState('');
  const inputRef = useRef(null); // Add ref for the input element

  const passwordGenerator = useCallback(() => {
    let pwd = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) str += '0123456789';
    if (includeSymbols) str += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    for (let i = 0; i < passwordLength; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pwd += str.charAt(charIndex);
    }
    setPassword(pwd);
  }, [passwordLength, includeNumbers, includeSymbols]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordLength, includeNumbers, includeSymbols, passwordGenerator]);

  const copyPassword = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      if (inputRef.current) {
        inputRef.current.select(); // Highlight text on button click
      }
    }
  };

  return (
    <div className='w-full max-w-lg mx-auto p-6 bg-gradient-to-l from-gray-800 to-gray-900 text-white rounded-lg shadow-lg my-10'>
      <h1 className='text-3xl font-semibold text-center mb-6 underline'>Password Generator</h1>

      <div className='flex items-center mb-6 bg-gray-700 rounded-lg'>
        <input
          ref={inputRef} // Attach ref to input
          type="text"
          value={password}
          className='outline-none w-full p-3 bg-gray-800 rounded-l-lg text-white text-lg'
          placeholder='Generated Password...'
          readOnly
        />
        <button
          onClick={copyPassword}
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white 
              outline-none p-3.5 w-1/5 rounded-r-lg shadow-md hover:from-green-500 
               hover:to-blue-600 active:bg-blue-700 transition 
               duration-150 transform hover:scale-105 focus:outline-none'>
          Copy
        </button>
      </div>

      <div className='mb-6'>
        <label className='text-lg mr-4'>Password Length: {passwordLength}</label>
        <input
          type='range'
          min='6'
          max='16'
          value={passwordLength}
          onChange={(e) => setPasswordLength(parseInt(e.target.value))}
          className='w-full cursor-pointer accent-cyan-500'
        />
      </div>

      <div className='flex justify-between text-lg'>
        <label className='flex items-center'>
          <input
            type='checkbox'
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
            className='accent-cyan-500 mr-2'
          />
          Include Numbers
        </label>

        <label className='flex items-center'>
          <input
            type='checkbox'
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
            className='accent-cyan-500 mr-2'
          />
          Include Symbols
        </label>
      </div>
    </div>
  );
}

export default App
