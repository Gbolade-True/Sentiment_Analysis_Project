import React, { ReactNode } from 'react';
import loader from 'extras/images/loader/loader.svg';
import './index.scss';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    loading?: boolean;
    bgColor?: string;
}

export const Button = ({ loading, children, bgColor, ...rest}: CustomButtonProps) => {

    return(
        <div className="custom_button">
            <button 
                {...rest}
                style={{
                    backgroundColor: `${bgColor || '#FF407B'}`
                }}
            >
                { loading ? <img src={loader} alt="loading" className="icon"/> : children }
            </button> 
        </div>
    )
};
