import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Task({ task, onDelete }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        margin: '10px 0',
        backgroundColor: '#e0f7fa',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      }}
    >
      <span>{task}</span>
      <button onClick={onDelete} style={{ marginLeft: '10px' }}>Usuń</button>
    </div>
  );
}

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <>
      <h1>Planer: Lista rzeczy do zrobienia</h1>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Dodaj nowe zadanie"
          style={{
            padding: '8px',
            borderRadius: '4px',
            marginRight: '10px',
            width: '250px',
          }}
        />
        <button onClick={addTask}>Dodaj</button>
      </div>

      <div>
        {tasks.length === 0 && <p>Brak zadań.</p>}
        {tasks.map((task, index) => (
          <Task key={index} task={task} onDelete={() => deleteTask(index)} />
        ))}
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TodoApp />);

reportWebVitals();
