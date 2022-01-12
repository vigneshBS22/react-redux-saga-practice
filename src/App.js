import { useState } from 'react';
import './App.css';
import Post from './components/Post';
import User from './components/User';

function App() {
  const [select, setSelect] = useState('user');
  return (
    <div className='App'>
      <button
        onClick={() => {
          setSelect('user');
        }}
      >
        Users
      </button>
      <button
        onClick={() => {
          setSelect('post');
        }}
      >
        Posts
      </button>
      {select === 'user' ? <User /> : <Post />}
    </div>
  );
}

export default App;
