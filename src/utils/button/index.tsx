import React, { ReactNode } from 'react';
import loader from 'extras/images/loader/loader.svg';
import senti from 'extras/images/senti.png';
import './index.scss';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    loading?: boolean;
    bgColor?: string;
    Icon?: [ReactNode, 'start' | 'end'];
}

export const Button = (
    { 
        loading, 
        children, 
        bgColor, 
        Icon = [<img className='default_start_icon' src={senti} alt='start_icon' />, 'end'],
        ...rest
    }: CustomButtonProps) => {

    return(
        <div className="custom_button">
            <button 
                {...rest}
                style={{
                    backgroundColor: `${bgColor || '#FF407B'}`
                }}
            >
                <div className='button_content'>
                    {Icon[1] === 'start' && Icon[0]}
                    {children}
                    {loading ? <img src={loader} alt="loading" className="icon"/> : null}
                    {Icon[1] === 'end' && Icon[0]}
                </div> 
            </button> 
        </div>
    )
};
