const Filter = (props) => {
    return (
        <div>
            filter show with <input value={props.filter} onChange={props.handleChange}/>
        </div>
    )
}

export default Filter