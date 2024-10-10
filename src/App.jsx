import { useState } from "react";
import InputBox from "./components/InputBox";
import CurrencyData from "./hooks/CurrenctData";
import Button from "./components/Button";

function App() {
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [amount, setAmount] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(0);

    let currencyOptions = Object.keys(CurrencyData(from));

    let currencyInfo = CurrencyData(from);

    function convertCurrency() {
        console.log(currencyInfo[to]);
        setConvertedAmount(currencyInfo[to] * amount);
        console.log(convertedAmount);
    }

    // When you set a state using setFrom, setTo, setAmount, or setConvertedAmount, the update is not immediately reflected in the state. Instead, React batches state updates for performance reasons. This means that the state values are not updated synchronously in the same render cycle.
    function swapValues() {
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount);
        setConvertedAmount(amount);
    }

    return (
        <div className="h-screen w-screen bg-teal-800 flex flex-col justify-center m-auto text-center items-center">
            <h1 className="text-emerald-200 font-serif text-4xl my-2 hover:text-white">Currency Converter</h1>
            <p className="text-teal-200 font-serif text-xl my-2 hover:text-white">Made with React</p>
            <div className="">
                <InputBox
                    label="From"
                    amount={amount}
                    currency={from}
                    onCurrencyChange={(e) => setFrom(e.target.value)}
                    onAmountChange={(e) => setAmount(Number(e.target.value))}
                    currencyOptions={currencyOptions}
                    diabled="true"
                />

                <Button
                    text="Swap"
                    functionCall={swapValues}
                />

                <InputBox
                    label="To"
                    amount={convertedAmount}
                    currency={to}
                    onCurrencyChange={(e) => setTo(e.target.value)}
                    currencyOptions={currencyOptions}
                    diabled="true"
                />

                <Button
                    text="Convert"
                    functionCall={convertCurrency}
                />
            </div>
        </div>
    );
}

export default App;
