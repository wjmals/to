import { useState } from "react";
import './Todolist.css';
import TodoItem from "./TodoItem";

const Todolist = ({ todo, onUpdate, onDelete }) => {
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getSearchResult = () => {
        return search === ""
            ? todo
            : todo.filter((it) => 
                it.content.toLowerCase().includes(search.toLowerCase())
            );
    };

    return (
        <div className='TodoList'>
            <h4>Todo List 📑</h4>
            <input 
                onChange={onChangeSearch}
                value={search}
                className='searchbar' 
                placeholder='검색어를 입력하세요' 
            />
            <div className='list_wrapper'>
                {getSearchResult().map((it) => (
                    <TodoItem
                        key={it.id}
                        {...it}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </div>
    );
}

export default Todolist;
