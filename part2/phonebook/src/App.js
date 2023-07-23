import { useState } from 'react'
import Name from './components/Name'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '000-0000' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addInfo = (event) => {
    event.preventDefault()
    const nameObject = {
        name: newName,
        number: newNumber
    }
    console.log('new person', nameObject)
    console.log(persons)

    if (persons.find(obj => obj.name === newName)) {
        window.alert(`${newName} is already added to phonebook`)
    } else{
        setPersons(persons.concat(nameObject))
    }

    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addInfo}>
        <div>
            name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
            number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => {
            console.log(person.name)
            return (
                <Name key={person.name} info={person} />
            )
        }
        )}
      </div>
    </div>
  )
}

export default App