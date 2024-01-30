// import {useId} from 'react'

// function InputBox({
//     label,
//     amount,
//     onAmountChange,
//     onCurrencyChange,
//     currencyOptions = [],
//     selectCurrency = "usd",
//     amountDisable = false,
//     currencyDisable = false,
//     className = "",
// }) {

//     const amountInputId = useId()

//     return (
//         <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
//             <div className="w-1/2">
//                 <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
//                     {label}
//                 </label>
//                 <input
//                     id={amountInputId}
//                     className="outline-none w-full bg-transparent py-1.5"
//                     type="number"
//                     placeholder="Amount"
//                     disabled={amountDisable}
//                     value={amount}
//                     onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
//                 />
//             </div>
//             <div className="w-1/2 flex flex-wrap justify-end text-right">
//                 <p className="text-black/40 mb-2 w-full">Currency Type</p>
//                 <select
//                     className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
//                     value={selectCurrency}
//                     onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
//                     disabled={currencyDisable}
//                 >

//                         {currencyOptions.map((currency) => (
//                             <option key={currency} value={currency}>
//                             {currency}
//                             </option>
//                         ))}

//                 </select>
//             </div>
//         </div>
//     );
// }

// export default InputBox;




// Either add this rule to your eslintrc file.

// import React from "react";
// import PropTypes from 'prop-types';
// { "rules": { "react/prop-types" : "off" } }

// eslint-disable React/prop-types
// InputBox Component
function InputBox(props
    // {
    //     label,
    //     amount = 0,
    //     onAmountChange,
    //     currencyOptions = [],
    //     currency = 'usd',
    //     onCurrencyChange,
    //     disabled
    // }
) {
    return (
        <div 
            className="p-6 max-w mx-auto bg-emerald-600 rounded-2xl shadow-lg flex 
                        items-center space-x-4 font-serif text-2xl text-green-300 my-3"
        >
            <div className="flex flex-col">
                <label htmlFor="amount">Amount</label>
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={props.amount}
                    placeholder={props.amount}
                    onChange={props.onAmountChange}
                    disabled={props.disabled}
                    className="bg-lime-300 rounded-md text-emerald-800 font-mono font-normal"
                />
            </div>


            {/* onChange={ (e) => onCurrencyChange && onCurrencyChange(e.target.value)} --- Another way */}
            <div className="flex flex-col">
                <label htmlFor="currency">{props.label}</label>
                <select id="currency" name="currency" onChange={props.onCurrencyChange} 
                    className="bg-lime-200 rounded-md text-emerald-800 font-serif font-normal text-xl">
                    <option value="usd">{props.currency}</option>
                    {props.currencyOptions.map((currency) => (
                        <option value={currency} key={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}



// InputBox.propTypes = {
    //     label: PropTypes.string.isRequired,
    //     amount: PropTypes.number.isRequired,
    //     onAmountChange: PropTypes.func.isRequired,
    //     // Add other propTypes as needed
    //   };
export default InputBox


// function InputBox(props) {
    // // amount, onAmtChange, currency, onCurrencyChange, label, CurrencyData
    //     return (
    //         <div>
    //             <div>
    //                 <label htmlFor="">{props.label}</label>
    //                 <input type="number" name="" id="" value={props.amount} placeholder='Hii' onChange={props.onAmountChange} />
    
    //                 <select name="" id="">
    //                     <option value=""></option>
    //                 </select>
    //             </div>
    //         </div>
    //     )
    // }