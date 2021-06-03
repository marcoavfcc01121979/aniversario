import { useState } from 'react';
import './App.css';
import { data } from './data';
import { List } from './List';

function App() {
  const [pessoas, setPessoas] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{pessoas.length} Aniversario hoje</h3>
        <List pessoas={pessoas} />
        <button onClick={() => setPessoas([])}>Limpar Todos</button>
      </section>
    </main>
  );
}

export default App;
