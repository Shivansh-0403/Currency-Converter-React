function InputBox(props) {
    return (
        <div 
            className="p-6 max-w mx-auto bg-emerald-600 rounded-2xl shadow-lg flex items-center space-x-4 font-serif text-2xl text-green-300 my-3"
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

export default InputBox;