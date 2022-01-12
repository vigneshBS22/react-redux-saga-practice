import React from 'react';
import './styles.css';
export default function Card(props) {
  return <div className='Card'>{props.user.name}</div>;
}
