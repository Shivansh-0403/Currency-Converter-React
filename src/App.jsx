import { useState } from 'react'
import InputBox from './components/InputBox'
import CurrencyData from './hooks/CurrenctData'

function App() {
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState("inr")
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)

  let currencyOptions = Object.keys(CurrencyData(from));

  let currencyInfo = CurrencyData(from)

  function convertCurrency(){
    console.log(currencyInfo[to])
    setConvertedAmount((currencyInfo[to]) * amount)
    console.log(convertedAmount)
  }


  // When you set a state using setFrom, setTo, setAmount, or setConvertedAmount, the update is not immediately reflected in the state. Instead, React batches state updates for performance reasons. This means that the state values are not updated synchronously in the same render cycle.
function swapValues() {
  setFrom(to)
  setTo(from)
  setAmount(convertedAmount)
  setConvertedAmount(amount)
}

  return (
    <div>
      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          convertCurrency()
        }}
      > */}
      <InputBox 
        label="From"
        amount={amount}
        currency={from}
        // onCurrencyChange={ (currency) => setFrom(currency)}
        onCurrencyChange={ (e) => setFrom(e.target.value)}

        onAmountChange={ (e) => setAmount(Number(e.target.value))}
        currencyOptions={currencyOptions}
        diabled='true'
      />
      <button onClick={swapValues}>Swap</button>
      <InputBox 
        label="To"
        amount={convertedAmount}
        currency={to}
        // onCurrencyChange={ (currency) => setTo(currency)}
        onCurrencyChange={ (e) => setTo(e.target.value)}
        currencyOptions={currencyOptions}
        diabled='true'
      />
      <button type="submit" onClick={convertCurrency}>Convert</button>
    {/* </form> */}
    </div>
  )
}

export default App



// import { useState } from 'react'
// import InputBox from './components/InputBox'
// import CurrencyData from './hooks/CurrenctData'

// function App() {

//   const [amount, setAmount] = useState(0)
//   const [from, setFrom] = useState("usd")
//   const [to, setTo] = useState("inr")
//   const [convertedAmount, setConvertedAmount] = useState(0)

//   const currencyInfo = CurrencyData(from)

//   const options = Object.keys(currencyInfo)

//   const swap = () => {
//     setFrom(to)
//     setTo(from)
//     setConvertedAmount(amount)
//     setAmount(convertedAmount)
//   }
  
//   const convert = () => {
//     setConvertedAmount(amount * currencyInfo[to])
//   }

//   return (
//     <div
//         className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
//         style={{
//             backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
//         }}
//     >
//         <div className="w-full">
//             <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//                 <form
//                     onSubmit={(e) => {
//                         e.preventDefault();
//                         convert()

//                     }}
//                 >
//                     <div className="w-full mb-1">
//                         <InputBox
//                             label="From"
//                             amount={amount}
//                             currencyOptions={options}
//                             onCurrencyChange={(currency) => setAmount(amount)}
//                             selectCurrency={from}
//                             onAmountChange={(amount) => setAmount(amount)}
//                         />
//                     </div>
//                     <div className="relative w-full h-0.5">
//                         <button
//                             type="button"
//                             className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
//                             onClick={swap}
//                         >
//                             swap
//                         </button>
//                     </div>
//                     <div className="w-full mt-1 mb-4">
//                         <InputBox
//                             label="To"
//                             amount={convertedAmount}
//                             currencyOptions={options}
//                             onCurrencyChange={(currency) => setTo(currency)}
//                             selectCurrency={from}
//                             amountDisable
//                         />
//                     </div>
//                     <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
//                         Convert {from.toUpperCase()} to {to.toUpperCase()}
//                     </button>
//                 </form>
//             </div>
//         </div>
//     </div>
// );
// }

// export default App

