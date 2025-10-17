import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setconvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setconvertedAmount(amount);
    setAmount(convertedAmount);
  };
  const convert = () => {
    setconvertedAmount(amount * currencyInfo[to]);
  };
  return (
    <>
      <div
        className="w-full min-h-screen flex flex-wrap justify-center items-center bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://t4.ftcdn.net/jpg/05/12/43/55/360_F_512435502_AtoI7IaRsM1JVwA8xvyfQWiZPMVlZwX4.jpg')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOption={options}
                  onCurrencyChange={(Currency) => setFrom(Currency)}
                  selectedCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-400 text-white px-2 py-0.5 cursor-pointer"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOption={options}
                  onCurrencyChange={(Currency) => setTo(Currency)}
                  selectedCurrency={to}
                  amountDisabled={true}
                  onAmountChange={(amount) => setconvertedAmount(amount)}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-400 text-white px-4 py-3 rounded-lg cursor-pointer"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
