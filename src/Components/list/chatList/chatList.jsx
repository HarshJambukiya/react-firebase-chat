import { useState } from "react";
import "./chatList.css";

const ChatList = () => {
  const [addmode, setAddmode] = useState(false);
  return (
    <div className="chatlist">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          src={addmode ? "./minus.png" : "./plus.png"}
          alt=""
          className="add"
          onClick={() => setAddmode((prev) => !prev)}
        />
      </div>
      <div>
        <div className="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>John Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>John Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>John Doe</span>
            <p>Hello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
