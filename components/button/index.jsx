import Styles from "./button.module.scss"

/*
Props

title: String
kind: "primary" | "secundary"
*/

const Button = ({title, kind}) => {
    const generationClassByKind = () => {
        if (kind === "secondary") return Styles.secondary;
        
        return Styles.primary;
    };

    return (
     <button className={`${Styles.button} ${generationClassByKind()}`}>
        {title}
        </button>
    );
};

export default Button;
