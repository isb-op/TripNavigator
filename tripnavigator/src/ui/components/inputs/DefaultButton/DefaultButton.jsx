import style from './DefaultButton.module.css'

export function DefaultButton({handleClick, text}){
    return(
        <>
            <button className={style.button} onClick={handleClick}>
                {text}
            </button>
        </>
    );
}