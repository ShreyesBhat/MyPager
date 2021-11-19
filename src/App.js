import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import "./App.css";

function App() {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (

    <ChatEngine
      height="100vh"
      userName="shreyes"
      userSecret="root"
      projectID="9ac4ba9f-fade-4e2f-866e-200bc7686ae2"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
  );
}

export default App;
