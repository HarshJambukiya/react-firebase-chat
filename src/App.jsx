import Chat from "./Components/chat/chat";
import Detail from "./Components/detail/detail";
import List from "./Components/list/list";
import Login from "./Components/Login/login";
import Notification from "./Components/notification/notification";

const App = () => {
  const user = true;

  return (
    <div className="container">
      {user ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <Login />
      )}
      <Notification/>
    </div>
  );
};

export default App;
