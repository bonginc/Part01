import React from 'react'

const Header = (props) => {
  return (
  <div>
    <h1>{props.course}</h1>
  </div>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.part1}
      {props.part2}
      {props.part3}
      {props.exercises1}
      {props.exercises2}
      {props.exercises3}
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  const part1 = 'Fundamentals of React '
  const part2 = 'Using props to pass data '
  const part3 = 'State of component '

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} />
      <Content part2={part2} exercises2={exercises2} />
      <Content part3={part3} exercises3={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App;
