import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, ...props }) => {
    return (
        <div>
            {label && <label>{label}</label>}
            <textarea {...props} />
        </div>
    );
};

export default Textarea;