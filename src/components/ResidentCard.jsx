import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from './styles/residentCard.css'

const ResidentCard = ({ url }) => {
const [resident, setresident] = useState()

    useEffect(() => {
        axios.get(url)
            .then(res => setresident(res.data))
    }, [])


    return (
        <article className='card'>
            <header className='card_header'>
                <img className='card_avatar' src={resident?.image} alt="" />
                <div className='card_circle_container'>
                    <div className={`circle ${resident?.status}`}></div>
                    <span className='card_circle_label'>{resident?.status}</span>
                </div>
            </header>
            <section className='card_body'>
                <h3 className='card_name'>{resident?.name}</h3>
                <ul className='card_list'>
                    <li className='card_item'><span className='card_item_label'>Species
                    </span> <span className='card_item_value'>{resident?.species}</span></li>
                    <li className='card_item'><span className='card_item_label'>Origin
                    </span> <span className='card_item_value'>{resident?.origin.name}</span></li>
                    <li className='card_item'><span className='card_item_label'>Episodes
                    </span><span className='card_item_value'>{resident?.episode.length}</span></li>
                </ul>
            </section>
        </article>
    )
}

export default ResidentCard