import { FC } from "react";

type BtnProps = {
    text: string;
    OnClick: () => void
};

export const Btn: FC<BtnProps> = ({ text, OnClick }) => (
    <button className="waves-effect waves-light btn  purple darken-1" type="button" onClick={OnClick}>
        <i className="material-icons right">send</i>
        {text}
    </button>
);

export default () => Btn;


/*
import { PureComponent }  from 'react'

class LoggingButton extends PureComponent {
    handleClick() {
        console.log('значение this:', this);
    }

    render() {
        // Такой синтаксис гарантирует, что `this` привязан к handleClick.
        return (
            <button onClick={() => this.handleClick()}>
                Нажми на меня
            </button>
        );
    }
}
*/