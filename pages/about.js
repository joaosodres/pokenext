import Image from 'next/image';
import styles from '../styles/About.module.css';

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre</h1>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <Image src="/charizard.png" width={300} height={300} alt="Charizard" />
        </div>
    );
}