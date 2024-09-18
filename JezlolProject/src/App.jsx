import Contact from './assets/Contact.jsx';
import Counter from './assets/Counter.jsx';
import Hello from './assets/Hello.jsx';

function App() {
  const helloData = [
    { name: 'Anirach', message: 'Hi there!' },
    { name: 'Jezlol', message: 'Hello!' },
  ];

  return (
    <div className="App">
      {helloData.map((data) => (
        <Hello name={data.name} message={data.message} />
      ))}

      <Contact email="jezlol@gmail.com" phone="123-456-7890" />

      {/* Add the Counter component */}
      <Counter />
    </div>
  );
}

export default App;
