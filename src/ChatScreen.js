import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";

function ChatScreen() {
  const [input,setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image: "https://i0.wp.com/oquartonerd.com.br/wp-content/uploads/2020/07/ellen-degeneres-em-foto-da-entertainment-weekly-conteudo-categoria-nerd-78387810.jpg?w=1280&ssl=1",
      message: "Yo whats up",
    },
    {
      name: "Ellen",
      image: "https://i0.wp.com/oquartonerd.com.br/wp-content/uploads/2020/07/ellen-degeneres-em-foto-da-entertainment-weekly-conteudo-categoria-nerd-78387810.jpg?w=1280&ssl=1",
      message: "Yo whats up!",
    },
    { message: "Whats up" },
  ]);
  {/*preventDefaut -  this prevent to refresh the page once we press the enter button to submit a new message*/ }
const handleSend = (e) => {
  e.preventDefault();
   
  setMessages([...messages, {message:input}]);
  setInput("");
};



  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH  ELLEN ON 10/08/2020
      </p>
      {/* to check if there is a name on the object, meaning that the message was sent by the user and not you, we will display the chat as gray and will have an Avatar (foto ), if there are no message.name, the message chart will be blue as if I was typing it*/}
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeholder="Type a message"
          type="text"
        />
        <button onClick={handleSend} type="submit" className="chatScreen__Button">Send</button>
      </form>
    </div>
  );
}

export default ChatScreen;
