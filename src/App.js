import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import './App.css';
import data from "./data"

function App() {
  const items = data.map((item) => {
    return <Card 
                img={item.coverImg} 
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}  
                key={item.id}             
            />
  
  })   

  return (
    <div className="container">
      <Navbar />
      <Hero />
      {items}
    </div>
  );
}

export default App;
