import { useState } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="flex w-full h-screen">
      {/* Left column with the image */}
      <div
        className="w-1/2 h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/7470851/pexels-photo-7470851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
        }}
      ></div>

      {/* Right column with the converter */}
      <div className="w-1/2 relative flex justify-center items-center">
        {/* Background image with pattern */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/4814070/pexels-photo-4814070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
          }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div> {/* Optional overlay for contrast */}
        </div>
        
        {/* Container for the converter */}
        <div className="relative z-10 w-full max-w-md border border-gray-200 rounded-lg p-5 backdrop-blur-sm bg-white/90">
          <h1 className='text-center text-gray-800 text-4xl underline mb-6'>Currency Converter</h1>
          <form onSubmit={(e) => {
              e.preventDefault();
              convert();
          }}>
              <div className='w-full mb-1'>
                  <InputBox
                      label='From'
                      amount={amount}
                      currencyOptions={options}
                      onCurrencyChange={(currency) => setFrom(currency)}
                      onAmountChange={(amount) => setAmount(amount)}
                      selectCurrency={from}
                  />
              </div>

              <div className="relative w-full h-0.5">
                  <button
                      type="button"
                      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-cyan-600 text-white px-2 py-0.5 hover:bg-lime-600"
                      onClick={swap}
                  >
                      Swap
                  </button>
              </div>

              <div className="w-full mt-1 mb-4">
                  <InputBox
                      label="To"
                      amount={convertedAmount}
                      currencyOptions={options}
                      onCurrencyChange={(currency) => setTo(currency)}
                      selectCurrency={to}
                      amountDisable
                  />
              </div>
              <button type="submit" className="w-full bg-cyan-600 text-white px-4 py-3 rounded-lg hover:bg-lime-600">
                  Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
