import React from 'react'
import Avatar from 'react-avatar';
import '../styles/ClientComp.css'

function ClientComp(props) {
  return (
    <div className='client'>
      <Avatar name={props.username} size="40" round={true} />
      <span className="username">{props.username}</span>
    </div>
  )
}

export default ClientComp