function Submit(props) {
    return(
        <div>
            <button onClick={props.onClick} type="submit" className="bg-slate-300 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Show Universities</button>
        </div>
    )
}

export default Submit;