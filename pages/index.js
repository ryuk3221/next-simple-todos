import { useState } from "react";
import styles from '../styles/Home.module.css';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, {text: newTodo, completed: false}]);
      setNewTodo('');
    }
  };

  const toggleTodo = (index) => {
    todos[index].completed = !todos[index].completed;
    setTodos([...todos]);
  };

  return (
    <div className={styles.container} style={{ padding: '20px' }}>
      <h1>Todo List</h1>
      <input
        className={styles.input}
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <button
       onClick={handleAddTodo}
       className={styles.button}
      >
        Add
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li
            id={index}
            key={index}
            onClick={() => toggleTodo(index)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer',
              userSelect: 'none'
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}