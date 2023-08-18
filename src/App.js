import Header from './components/Header/Header';
import Concept from './components/Concept/Concept';
import Wrapper from './components/UI/Wrapper';
import concepts from './constants';

function App() {
  return (
    <>
      <Header />
      <Wrapper>
        {concepts.map((concept, index) => {
          return (
            <Concept concept={concept} key={index} />
          );
        })}       
      </Wrapper>
    </>
  );
}

export default App;
