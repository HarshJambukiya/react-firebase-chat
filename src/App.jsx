import Chat from "./Components/chat/chat"
import Detail from "./Components/detail/detail"
import List from "./Components/list/list"

const App = () => {
  return (
    <div className='container'>
      <List/>
      <Chat/>
      <Detail/>
    </div>
  )
}

export default App