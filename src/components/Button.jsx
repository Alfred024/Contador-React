import './Button.css'

function Button({buttonType, setFunction}) {
    return(
        <button 
        className={`Button ${buttonType === 'increment' ? 'Button-Increment' : 'Button-Restart'}`} 
        onClick={setFunction}>
            {buttonType === 'increment' ? '⏫' : '🌀'}
        </button>
    );
}

export default Button;