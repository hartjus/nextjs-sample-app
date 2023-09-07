import Link from 'next/link';

import NavBar from '../../components/NavBar';
import styles from './list.module.scss';

export default function ListPage() {

    const cities = ['Portland', 'Salem', 'Corvallis', 'Pendelton', 'Bend', 'Ashland', 'Seaside', 'Newport', 'Grants Pass', 'Boring'].sort();

    const cityEls = cities.map((c, index) => (
        <li key={index}>
            <Link href={`/details/${c}`}>{c}</Link>
        </li>
    ));

    return (
        <div className={styles.page}>
            <NavBar />
            <h1>List Page</h1>
            <ol>
                {cityEls}
            </ol>
        </div>
    );
}