const Header = (props) => {
    return (
      <h2>
        {props.name}
      </h2>
    )
  }
  
  const Content = ({ parts }) => {
    const elements = parts.map(part =>
      <Part name={part.name} exercises={part.exercises} key={part.id} />
  
      )
    return (
      <div>
        {elements}
      </div>
    )
  }
  
  const Part = ({ name, exercises, id }) => {
    return (
      <p>
        {name} {exercises}
      </p>
    )
  }
  
  const Total = ({ parts }) => {
    const numExercises = parts.map(part => part.exercises)
    const total = numExercises.reduce((a, b) => {
      return a + b
    })
    return (
      <b>
        total of {total} exercises
      </b>
    )
  }
  
  
  const Course = ({ course }) => {
    return (
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    ) 
  }

  export default Course