import { useState } from "react";
import reactLogo from "./assets/react.svg";
import TodoContextProvider from "./context/TodoContextProvider";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <TodoContextProvider>
      <TodoPage />
    </TodoContextProvider>
  );
}

export default App;
