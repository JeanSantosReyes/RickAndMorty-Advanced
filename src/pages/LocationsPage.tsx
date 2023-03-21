import { Card, InputGroup, Loading, SEO } from '../components'
import { useServiceLocation } from '../hooks'

const LocationsPage = () => {

    const { charactersLocation, loading, location, count, setId } = useServiceLocation();

    const { name, dimension, type } = location;

    // if (loading) return <Loading />

    return (
        <div className='container'>
            <SEO title='Rick and Morty | Locations' description='Locations Page' />
            <div className='row mb-3'>
                <h1 className='text-center poppins mb-3'>
                    Location :
                    <span className='text-primary'>
                        {' '}
                        {name === '' ? 'Unknown' : name}
                    </span>
                </h1>
                <h5 className='text-center'>
                    Dimension: {dimension === '' ? 'Unknown' : dimension}
                </h5>
                <h6 className='text-center'>Type: {type === '' ? 'Unknown' : type}</h6>
            </div>
            <div className='row'>
                <div className='col-lg-3 col-12 mb-4'>
                    <h4 className='text-center mb-4'>Pick Location</h4>
                    <InputGroup changeId={setId} name='Location' total={count} />
                </div>
                <div className='col-lg-8 col-12'>
                    <div className='row'>
                        {
                            loading
                                ? <Loading />
                                : charactersLocation.length === 0
                                    ? <span className='poppins text-danger'>Without Residents</span>
                                    : charactersLocation.map((character) => (
                                        <Card key={character.id} character={character} />
                                    ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationsPage