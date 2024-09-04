import './App.css';
import { useState, useRef } from 'react';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import Todolist from './component/Todolist';

const mockTodo = [
  {
    id: 0,
    content: '리액트 공부하기',
    createDate: new Date().getTime(),
    isDone: false,
  },
  {
    id: 1,
    content: '스프링 공부하기',
    createDate: new Date().getTime(),
    isDone: false,
  },
  {
    id: 2,
    content: 'jsp 공부하기',
    createDate: new Date().getTime(),
    isDone: false,
  },
];

function App() {
  const [todo, setTodo] = useState(mockTodo);

  const idRef = useRef(3);

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      content,
      createDate: new Date().getTime(),
      isDone: false,
    }
    setTodo([newItem, ...todo])
    idRef.current += 1
  };

  const onUpdate = (targetId) => {
    setTodo(
      todo.map((it) => 
      it.id ===targetId ? { ...it, isDone: ! it.isDone } : it
      )
    );
  };

  const onDelete = (targetId) => {
    setTodo(todo.filter((it) => it.id !== targetId));
  }

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate = {onCreate}/>
      <Todolist todo={todo} onUpdate ={onUpdate} onDelete= {onDelete}></Todolist>
    </div>
  );
}

export default App;