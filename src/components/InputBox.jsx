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
function InputBox(
    {
        label,
        amount = 0,
        onAmountChange,
        currencyOptions = [],
        currency = 'usd',
        onCurrencyChange,
        disabled
    }
) {
    return (
        <div>
            <div>
                <label htmlFor="amount">{label}</label>
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={amount}
                    placeholder={amount}
                    onChange={onAmountChange}
                    disabled={disabled}
                />


{/* onChange={ (e) => onCurrencyChange && onCurrencyChange(e.target.value)} --- Another way */}
                <select id="currency" name="currency" onChange={onCurrencyChange}>
                    <option value="usd">{currency}</option>
                    {currencyOptions.map((currency) => (
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