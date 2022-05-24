import './App.css';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

function App() {

  const cardElements = data.map(value => {
    return <Card 
      key={value.id}
      {...value}
  /> }
)

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CardContainer>
      {cardElements}
      </CardContainer>
    </div>
  );
}

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 50px 0 100px 0;
`

export default App;
