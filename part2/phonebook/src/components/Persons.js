import Name from "./Name"

const Persons = (props) => {
    return (
        <div>
            {props.persons.map(person => {
                console.log(person.name)
                return (
                    <form key={person.name} onSubmit={() => props.remove(person)}>
                        <span style={{ display: 'inline-block' }}>
                            <Name key={person.name} info={person} />
                        </span>
                        <span style={{ display: 'inline-block' }}>
                            <button key={"delete" + person.name} type="submit">
                                delete
                            </button>
                        </span>
                    </form>

                )
            }
            )}
        </div>
    )
}
export default Persons
