import Link from "next/link"
import logo from '../assets/logo.png'
import classes from './mainHeader.module.css'
import Image from "next/image"
import HeaderBackground from "./HeaderBackground"

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
                            <Link href='/meals'>Browse Meals</Link>
                        </li>
                        <li>
                            <Link href='/community'>Food Community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default MainHeader