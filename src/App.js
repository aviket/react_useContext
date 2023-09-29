// Context object
import {createContext , useContext , useState} from 'react';

const ThemeContext = createContext();

// Provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const contextValue = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

// Component 1
function Header() {
  const context = useContext(ThemeContext);
  const { theme } = context;

  return (
    <header className={theme}>
      <h1>My App</h1>
    </header>
  );
}

// Component 2
function Main() {
  const context = useContext(ThemeContext);
  const { theme } = context;

  return (
    <main className={theme}>
      <p>This is the main content of my app.</p>
    </main>
  );
}

// Component 3
function Footer() {
  const context = useContext(ThemeContext);
  const { theme } = context;

  return (
    <footer className={theme}>
      <p>Copyright &copy; 2023 My Company</p>
    </footer>
  );
}

// Component 4
function Button() {
  const context = useContext(ThemeContext);
  const { theme, setTheme } = context;

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme}>Toggle Theme</button>
  );
}


// Component 5
function Settings() {
  const context = useContext(ThemeContext);
  const { theme, setTheme } = context;

  const handleThemeChange = (event) => {
    const newTheme = event.target.value;
    setTheme(newTheme);
  };

  return (
    <div>
      <h2>Settings</h2>
      <select value={theme} onChange={handleThemeChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}

// App component
export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <Main />
      <Footer />
      <Button />
      <Settings />
    </ThemeProvider>
  );
}
