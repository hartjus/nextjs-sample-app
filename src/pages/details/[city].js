import Link from 'next/link';
import { useEffect, useState } from "react";

import NavBar from '../../components/NavBar';

const SLOGANS = [
    'Be Honest with Yourself: Leave the Lying to Others',
    'Some cause happiness wherever they go; others, whenever they go',
    'Life is a pretty cheesy game, but at least it has good graphics',
    'Whatever hits the fan will not be distributed evenly',
    'It is not Cheating, it\'s a team work',
    '3 out of 2 people have trouble with fractions',
    'Life is too short to remove USB safely',
    'Save water & drink champagne',
    'An onion a day keeps everyone away',
    'After Tuesday even the calendar say W T F',
    'People say you can\'t live without love, I think oxygen is more important'
]

export default function DetailsPage() {

    const [state, setState] = useState({});

    useEffect(() => {
        const city = (window) 
            ? window.location.pathname.replace('/details/', '').replace('%20', ' ')
            : 0;
        const population = Math.floor(Math.random() * 100000);
        const zip = Math.floor(Math.random() * 10000) + 10000;
        const areaCode = Math.floor(Math.random() * 899) + 100;
        const slogan = Math.floor(Math.random() * SLOGANS.length);

        const _state = {
            city,
            population,
            zip,
            areaCode,
            slogan
        };

        setState(_state);
    }, []);

    return (
        <>
            <NavBar />
            <h1>Details Page for {state.city}</h1>

            <ul>
                <li>Population: {state.population}</li>
                <li>Zip: {state.zip}</li>
                <li>Area Code: {state.areaCode}</li>
                <li>Slogan: {SLOGANS[state.slogan]}</li>
            </ul>

            <div>
                <Link href="/list">Back to List</Link>
            </div>
        </>
    );
}