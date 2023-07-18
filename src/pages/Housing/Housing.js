import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import datas from '../../utils/data/housing.json';
import styles from './Housing.module.css';
import Carousel from '../../components/Carousel/Carousel';
import Tag from '../../components/Tag/Tag';
import RatingStars from '../../components/RatingStars/RatingStars';
import Host from '../../components/Host/Host';
import Dropdown from '../../components/Dropdown/Dropdown';

export default function Housing() {
    
    const { id } = useParams();
    const  house  = datas.find(data => data.id === id);
    console.log(house);

    if (!house) { // if there is no match
        return (
            // redirect to Not found page
            <Navigate replace to="/notfound" />
        )
    }

    // useEffect(() => {
    //     if(!house) {
    //          navigate('/', {replace:true}); 

            
    //     }
    // },[house])

    
        return (
        
            <main>
    
                <Carousel pictures={house.pictures}/>
    
                <div className={styles.infos}>
                    <div className={styles.titlesAndTags}>
                        <div>
                            <h1>{house.title}</h1>
                            <h2>{house.location}</h2>
                        </div>
                        <div>
                            {
                                house.tags.map(tag => <Tag key={`${house.id}-${tag}`} tag={tag} />)
                            }
                        </div>
                    </div>
    
                    <div className={styles.starsAndProfile}>                    
                        <RatingStars rating={house.rating} />
                        <Host name={house.host.name} picture={house.host.picture}/>
                    </div>
                </div>
    
                <div className={styles.dropdowns}>
                    <Dropdown summary={`Description`} content={house.description}/>
                    <Dropdown summary={`Équipements`} content={house.equipments}/>
                </div>
    
            </main>
        )
    
    
}
