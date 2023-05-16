const ChoosenElement = (props) => {
    return(
        <div key={props.value} className="bg-blue-500 text-white font-bold py-1 px-2 rounded-full w-16 mr-2">
            <span>{props.value}</span>
            <button>Delete</button>
        </div>
    )
}

export default ChoosenElement;