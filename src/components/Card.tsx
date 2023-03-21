import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { CharacterInterface } from '../interfaces';

interface Props {
    character: CharacterInterface;
}

const Card: FC<Props> = ({ character }) => {

    const { id, name, image, status } = character;

    const colorText = status === 'Alive' ? 'green' : status === 'Dead' ? 'red' : 'orange';

    let navigate = useNavigate();

    const navigateTo = () => {
        navigate(`/character/${id}`);
    }

    return (
        <article className='my-2 col-6 col-md-4 col-xl-3'>
            <div className='card' onClick={navigateTo} role='button'>
                <img
                    src={image}
                    className='card-img-top'
                    alt={name}
                />
                <div className='card-body'>
                    <h6 className='poppins text-center'>{name}</h6>
                    <h6>
                        <b>Status: </b>
                        <i className='fa-solid fa-circle' style={{ color: colorText }}></i>
                        <span style={{ color: colorText }}> {status}</span>
                    </h6>
                </div>
            </div>
        </article>
    )
}

export default memo(Card)