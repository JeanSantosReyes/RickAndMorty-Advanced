import { Card, InputGroup, Loading, SEO } from '../components';
import { useServiceEpisode } from '../hooks';

const EpisodesPage = () => {

    const { episode, charactersEpisode, count, loading, setId } = useServiceEpisode();

    const { name, air_date } = episode;

    return (
        <div className='container'>
            <SEO title='Rick and Morty | Episodes' description='Episodes Page' />
            <div className='row mb-3'>
                <h1 className='text-center poppins mb-3'>
                    Episode name:{' '}
                    <span className='text-primary'>{name === '' ? 'Unknown' : name}</span>
                </h1>
                <h5 className='text-center'>
                    Air Date: {air_date === '' ? 'Unknown' : air_date}
                </h5>
            </div>
            <div className='row'>
                <div className='col-lg-3 col-12 mb-4'>
                    <h4 className='text-center mb-4'>Pick Episode</h4>
                    <InputGroup changeId={setId} name='Episode' total={count} />
                </div>
                <div className='col-lg-8 col-12'>
                    <div className='row'>
                        {
                            loading
                                ? <Loading />
                                : charactersEpisode.map((character) => (
                                    <Card key={character.id} character={character} />
                                ))
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default EpisodesPage