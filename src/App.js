import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="cards">
        <Card title="card1" description="Card 1 Description"></Card>
        <Card title="card2" description="Card 2 Description"></Card>
        <Card title="card3" description="Card 3 Description"></Card>
        <Card title="card4" description="Card 4 Description"></Card>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
