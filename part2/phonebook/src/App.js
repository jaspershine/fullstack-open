import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addInfo = (event) => {
    event.preventDefault()
    const nameObject = {
        name: newName,
        number: newNumber
    }

    const obj = persons.find(obj => obj.name === newName)
    console.log(obj)
    if (obj) {
        if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
          const updatedNameObject = {...nameObject, id: obj.id }
          personService
            .update(obj.id, updatedNameObject)
            .then(returnedPerson => {
              setPersons(persons.map(person => person.name === newName ? updatedNameObject : person))
            })
        }
    } else {
        if (nameObject.name !== '') {
          personService
            .create(nameObject)
            .then(returnedPerson => {
              setPersons(persons.concat(returnedPerson))
            })
        }
    }

    setNewName('')
    setNewNumber('')
  }

  const removeInfo = person => {
    console.log(person.id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .remove(person.id)
        .then(retunedValue => {
          console.log(retunedValue)
        })
        .catch(error => {
          alert(
            `unable to delete person`
          )
        })
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value.toLowerCase())
  }

  const filteredPersons = newFilter === ''
    ? persons
    : persons.filter(obj => obj.name.toLowerCase().includes(newFilter))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
            filter={newFilter}
            handleChange={handleFilterChange}
        />
      <h3>Add a new</h3>
      <PersonForm 
            submit={addInfo}
            name={newName}
            changeName={handleNameChange}
            number={newNumber}
            changeNumber={handleNumberChange}
        />
      <h3>Numbers</h3>
      <Persons persons={filteredPersons} remove={removeInfo} />
    </div>
  )
}

export default App