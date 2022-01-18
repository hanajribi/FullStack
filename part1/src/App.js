
import React from 'react'

const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}
const Total = (props) => {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  const tab = [];
  props.parts.map(part => tab.push(part.exercises))
  const s = tab.reduce(reducer);
  console.log(tab)
  return (
    <div>
      <p>Number of exercises {s}</p>
    </div>
  )
}
const Content = (props) => {

  return (
    <div>
      {props.parts.map(value => <h5> {value.name} {value.exercises}</h5>)}

    </div>
  )
}

const App = () => {

  return (

    <div>
      
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} /> 

    </div>
  )
}

export default App





