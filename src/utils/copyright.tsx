import React from 'react';
import { Link } from 'react-router-dom';

export const Copyright = () => {
    return (
        <p style={{color: '#fff'}}>
            {'Copyright © '}
            <Link 
                style={{ color: "#ffffff", cursor: 'pointer' }} 
                to="https://www.kcl.ac.uk/"
                target="_blank" rel="noopener noreferrer"
            >
                Kings College London
			</Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </p>
    );
}