import './index.scss';

interface CustomTextareaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    isTextField?: boolean;
    helperText?: string | undefined;
}


export const Textarea = ({ isTextField, helperText, ...rest }: CustomTextareaProps) => {

    return(
        <div className='textarea_container'>
            <textarea
                {...rest}
            >
            </textarea>
            <div className='helper_text_container'>
                <br/>
                <i>{helperText}</i>
            </div>
        </div>
    )
}