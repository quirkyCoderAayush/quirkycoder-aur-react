import { useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(8)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(false)

  const generatePassword = () => {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+{}:"<>?|[];,./`~';

    let characters = letters;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setPassword(newPassword);
  };

  // Copy password to clipboard
  const copyPassword = () => {
    navigator.clipboard.writeText(password);
  };

  return (
      <div className="flex flex-col items-center p-4 bg-gray-100 rounded-xl shadow-xl">
        <h2 className="text-4xl font-semibold mb-4 underline">Password Generator</h2>

        {/* Password Display */}
        <div className="flex items-center bg-white p-2 rounded-lg w-full mb-4">
          <input
            type="text"
            value={password}
            readOnly
            className="flex-grow p-2 border-none outline-none"
            placeholder="Your generated password..."
          />
          <button onClick={copyPassword} className="bg-cyan-500 text-white px-4 py-2 rounded-md">
            Copy
          </button>
        </div>

        {/* Slider for Length */}
        <div className="flex items-center justify-between w-full mb-4">
          <label>Password Length: {length}</label>
          <input
            type="range"
            min="5"
            max="40"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-2/3"
          />
        </div>

        {/* Checkboxes */}
        <div className="flex space-x-4 mb-4">
          <label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
            <span className="ml-2">Include Numbers</span>
          </label>
          <label>
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            />
            <span className="ml-2">Include Symbols</span>
          </label>
        </div>

        {/* Generate Button */}
        <button onClick={generatePassword} className="bg-cyan-500 text-white px-6 py-2 rounded-lg">
          Generate Password
        </button>
      </div>
  )
}

export default App
