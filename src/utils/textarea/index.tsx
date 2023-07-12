import './index.scss';

interface CustomTextareaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    isTextField?: boolean;
    helperText?: string | undefined;
}


export const Textarea = ({ isTextField, helperText, ...rest }: CustomTextareaProps) => {

    return(
        <div>
            <textarea
                {...rest}
            >
            </textarea>
            {helperText && 
                <>
                    <br/>
                    <i style={{ fontSize: '12px', color: '#adabab' }} >{helperText}</i>
                </>
            }
        </div>
    )
}