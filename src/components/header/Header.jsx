import headImg from './../../assets/star-wars-plzcoaffexgf4h81.jpg';
import style from './Header.module.scss';
export const Header = () => {
    return (
        <>
        <figure className={style.header}>
            <img src={headImg} alt="" />
            <h1>Star Wars</h1>
        </figure>
        </>
    )
}