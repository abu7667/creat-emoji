import { useState } from 'react'
import './App.css'
import EmojiGenerator from './emojicreater/EmojiGenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <EmojiGenerator />
    </>
  )
}

export default App
