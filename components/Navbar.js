import Image from "next/image";
import Link from "next/link";

import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">
                    <a >
                        <Image src="/pokeball.png" width={30} height={30} alt="Poknext" />
                    </a>
                </Link>
                <h1>Pokenext</h1>
            </div>
            <ul className={styles.link_items}>
                <li>
                    <Link href="/"><a >Home</a></Link>
                </li>
                <li>
                    <Link href="/about"><a >Sobre</a></Link>
                </li>
            </ul>
        </nav>
    );
}