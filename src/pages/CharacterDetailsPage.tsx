import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Loading, SEO } from '../components';
import { getCharacter } from '../services';
import { CharacterInterface } from '../interfaces';

const CharacterDetailsPage = () => {

    const { id } = useParams();

    const [loading, setloading] = useState(false);
    const [character, setCharacter] = useState<CharacterInterface>({})

    const { name, image, status, species, gender, location, origin } = character;

    const colorText = status === 'Alive' ? 'green' : status === 'Dead' ? 'red' : 'orange'

    const getCurrentCharacter = (id: string) => {
        setloading(true);
        getCharacter(id)
            .then(({ data }) => {
                setCharacter(data)
            })
            .catch((e: Error) => console.log(e))
            .finally(() => setloading(false))
    }

    useEffect(() => {
        if (id) getCurrentCharacter(id)
    }, [id])

    return (
        <>
            <SEO title={`${name ? name : 'Loading...'} | Rick and Morty`} description={`Character ${name}`} />
            <div className='d-flex justify-content-center align-items-center my-5'>
                {
                    loading
                        ? <Loading />
                        : (
                            <div className='card' >
                                <div className='row g-0'>
                                    <div className='col-md-4 d-flex justify-content-center'>
                                        <img src={image} className='img-fluid rounded my-2 my-md-0' alt={name} />
                                    </div>
                                    <div className='col-md-8 d-flex align-items-center'>
                                        <div className='card-body'>
                                            <h5 className='card-title'>{name}</h5>

                                            <h6 className='card-text'>
                                                <i className='fa-solid fa-circle' style={{ color: colorText }}></i>
                                                <span style={{ color: colorText }}> {status} - {species}</span>
                                            </h6>

                                            <h6 className='card-text'>
                                                <span>Gender: {gender}</span>
                                            </h6>

                                            <h6 className='card-text'>
                                                <span>Last known location: {location?.name}</span>
                                            </h6>

                                            <h6 className='card-text'>
                                                <span>First seen in: {origin?.name}</span>
                                            </h6>

                                            <Link to='/characters' className='btn btn-primary'>Go to characters</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                }
            </div >
        </>
    )

}

export default CharacterDetailsPage;