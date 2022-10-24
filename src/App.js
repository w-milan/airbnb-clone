import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import './App.css';
import data from "./data"

function App() {
  const cards = data.map((item) => {
    return <Card 
              key={item.id} 
              item={item}         
            />
  
  })   

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
