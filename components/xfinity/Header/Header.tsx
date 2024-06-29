import Img from '../../utils/image/Img'
import style from './Header.module.css'
function Header({number}: any) {
    console.log(number)
    return (
        <nav className={style.main_nav}>
            <div className={style.container}>
                <Img 
                    src={`/xfinity/logo.webp`}
                    alt="Logo"
                    sizes={{
                        default: [12,5],
                        mobile: [39,15],
                    }}
                />
                <div className={style.nav_btn}><a href={`tel:${number}`}>{number}</a></div>
            </div>
        </nav>
    )
}

export default Header