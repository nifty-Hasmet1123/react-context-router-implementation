import Content from "./components/Content";
import Button from "./components/Button";
import { UserProvider } from "./utils/context/UserProvider";

function App() {
  return (
    // wrapped all the code that needs the state variable
    <UserProvider>
      <Content>
        <Button />
      </Content>
    </UserProvider>
  )
}

export default App;
