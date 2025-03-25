import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [passwordLength, setPasswordLength] = useState(6)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [password, setPassword] = useState('')
  const inputRef = useRef(null)

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
  }, [passwordLength, includeNumbers, includeSymbols, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordLength, includeNumbers, includeSymbols, passwordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    inputRef.current?.select();
      navigator.clipboard.writeText(password);
  },[password])

  return (
    <div className='w-full max-w-lg mx-auto p-6 bg-gradient-to-l from-gray-800 to-gray-900 text-white rounded-lg shadow-lg my-10'>
      <h1 className='text-4xl font-semibold text-center mb-8 underline'>Password Generator</h1>

      <div className='flex items-center mb-6 bg-gray-700 rounded-lg'>
        <input
          ref={inputRef}
          type="text"
          value={password}
          className='outline-none w-full p-3 bg-gray-800 rounded-l-lg text-white text-lg'
          placeholder='Generated Password...'
          readOnly
        />
        <button
          onClick={copyPasswordToClipboard}
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white 
              outline-none p-3.5 w-1/5 rounded-r-lg shadow-md shrink-0 hover:from-green-500 
               hover:to-blue-600 active:bg-blue-700 transition 
               duration-150 transform hover:scale-105 focus:outline-none'>
          Copy
        </button>
      </div>

      <div className='flex flex-col gap-4'>
        <div className='flex items-center gap-3 mb-4'>
          <label
            style={{ width: '120px', fontSize: '14px', whiteSpace: 'nowrap' }}
            className='text-right'
          >
            Password length: {passwordLength.toString().padStart(2, '0')}
          </label>
          <input
            type="range"
            min={4}
            max={40}
            value={passwordLength}
            className='cursor-pointer accent-cyan-500 w-2/3'
            onChange={(e) => setPasswordLength(parseInt(e.target.value))}
          />
        </div>
      </div>

      <div className='flex justify-between text-lg'>
        <label className='flex items-center'>
          <input
            type='checkbox'
            checked={includeNumbers}
            onChange={() => setIncludeNumbers((prev) => !prev)}
            className='accent-cyan-500 mr-2'
          />
          Include Numbers
        </label>

        <label className='flex items-center'>
          <input
            type='checkbox'
            checked={includeSymbols}
            onChange={() => setIncludeSymbols((prev) => !prev)}
            className='accent-cyan-500 mr-2'
          />
          Include Symbols
        </label>
      </div>
    </div>
  );
}

export default App
