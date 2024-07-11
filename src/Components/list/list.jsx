import ChatList from "./chatList/chatList";
import "./list.css";
import Userinfo from "./userinfo/userinfo";



const List = () => {
  return <div className="list">
    <ChatList/>
    <Userinfo/>
    
  </div>;
};

export default List;
