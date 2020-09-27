import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <header style={headerStyle}>
                <h1>Todo List</h1>
                <Link style={linkStyle} to="/">Home</Link> |  
                <Link style={linkStyle} to="/about">About</Link>
            </header>
        </div>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header
