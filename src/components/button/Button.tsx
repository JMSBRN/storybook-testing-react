
export interface ButtonProps {
    text: string;
    size: 'small' | 'medium' | 'large';
    handleClick: () => void;
    backgroundColor?: 'blue' | 'green' | 'red';
}
function Button({text, handleClick, size, backgroundColor}:ButtonProps) {
    const style: React.CSSProperties = {
        width: size === 'small' ? '100px' : size === 'medium' ? '150px' : '200px',
        height: 'auto',
        fontSize: size === 'small' ? '14px' : size === 'medium' ? '16px' : '18px',
        color: 'white',
        backgroundColor: backgroundColor ? backgroundColor : 'blue',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    }

  return (
    <button style={style} onClick={handleClick}>{text}</button>
  )
}

export default Button;