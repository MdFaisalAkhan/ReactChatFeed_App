import React from "react";
import { ChatEngine } from "react-chat-engine";
import LoginForm from "./components/LoginForm";
import ChatFeed from "./components/ChatFeed";
import "./App.css";

function App() {
  if (localStorage.getItem("username")) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      projectID="3ae356fe-f3cc-4071-a0a4-182201dba67d"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppsProps) => <ChatFeed {...chatAppsProps} />}
    />
  );
}
export default App;
