import { useState } from 'react'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//      <h1>{count}</h1>
//      <button onClick={() => setCount(count + 1)}>suma</button>
//      <button onClick={() => setCount(count - 1)}>resta</button>
//     </>
//   )
// }

// export default App


function App() {
  const [name, setName] = useState(" ")
  const [aaa, setAaa] = useState(" ")
function sds(e) {
  setAaa(e.target.value)
}
  return (
    <>
     <h1>{name}</h1>
     <input type="text" onChange={sds} />
     <button onClick={() => setName(aaa)}>añadir</button>
    </>
  )
}

export default App