import headImg from './../../assets/ODKUf0.jpg';
import style from './Header.module.scss';
import { useRef } from 'react';


export const Header = () => {
    return (
        <>

        <figure className={style.header} >
            <img src={headImg} alt="" />
            <h1>Star Wars</h1>
            
        </figure>
        </>
    )
}