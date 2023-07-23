import Name from "./Name"

const Persons = (props) => {
    return (
        <div>
            {props.persons.map(person => {
                console.log(person.name)
                return (
                    <Name key={person.name} info={person} />
                )
            }
            )}
        </div>
    )
}
export default Persons
