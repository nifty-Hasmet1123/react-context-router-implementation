function App() {
  return (
    <header id="main-header" className="header">
      <Navbar navString="home traditional react-query"  />
    </header>
  );
}

function Navbar(props) {
  const navItems = props.navString.split(" ");

  const capitalizeFirstLetter = (arg) => {
    return arg.charAt(0).toUpperCase() + arg.slice(1);
  }

  return (
    <nav className="nav">
      {
        navItems.map((item, index) => {
          const capitalizeItem = capitalizeFirstLetter(item);

          return <a 
            key={ index } 
            href={ item.toLowerCase() }
            className="pt-2 nav_link"
            >
              { capitalizeItem }
            </a>
        })
      }
    </nav>
  );
}

export default App;
