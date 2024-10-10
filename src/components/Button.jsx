function Button(props) {
    return (
        <button 
            type="submit" 
            onClick={props.functionCall}
            className="bg-teal-500 hover:bg-emerald-700 rounded-xl px-3 py-2 my-2 text-2xl font-serif text-white font-md"
        >
            {props.text}
        </button>
    )
}

export default Button