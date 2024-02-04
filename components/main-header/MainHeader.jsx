import Link from "next/link"
import logo from '../../assets/logo.png'
import classes from './mainHeader.module.css'
import Image from "next/image"
import HeaderBackground from "./HeaderBackground"
import NavLinks from "./NavLinks"

const MainHeader = () => {
    return (
        <>
            <HeaderBackground />
            <header className={classes.header}>
                <Link href='/' className={classes.logo} >
                    <Image src={logo} alt="logo" priority='true'
                    />
                    Next Food App
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLinks href='/meals'>
                                Browse Meals
                            </NavLinks>
                        </li>
                        <li>
                            <NavLinks href='/community'>
                                Food community
                            </NavLinks>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default MainHeader