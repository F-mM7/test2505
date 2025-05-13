import './App.css'
import * as dlxPkg from 'dancing-links'

const dlx = (dlxPkg as any).default ?? dlxPkg

function App() {

  const constraints = [
    { data: 'A', row: [1, 0, 1] },
    { data: 'B', row: [1, 1, 0] },
    { data: 'C', row: [0, 0, 1] },
  ]
  console.log(constraints)
  console.log(dlx.findOne(constraints))


  return (
    < >hello</>
  )
}

export default App
