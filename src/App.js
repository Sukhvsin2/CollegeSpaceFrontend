import Login from './views/Login/Login';
import Navbar from './views/Navbar/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main style={{margin: "20px 0"}}>
        <Login/>
      </main>
    </div>
  );
}

export default App;
