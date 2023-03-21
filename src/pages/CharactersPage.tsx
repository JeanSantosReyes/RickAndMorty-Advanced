import { Card, Filter, Loading, Pagination, Search, SEO } from '../components';
import { useServiceCharacter } from '../hooks';

const CharactersPage = () => {

    const { characters, infoPage, loading, pageNumber, statusRequest, setPageNumber, setSearch, setStatus } = useServiceCharacter();

    return (
        <>
            <SEO title='Rick and Morty | Characters' description='Characters Page' />
            <h1 className='text-center poppins my-3'>Characters</h1>
            <Search setSearch={setSearch} setPageNumber={setPageNumber} />
            <div className='container'>
                <div className='row'>
                    <Filter setPageNumber={setPageNumber} setStatus={setStatus} />
                    <div className='col-lg-8 col-12'>
                        <div className='row'>
                            {
                                loading
                                    ? <Loading />
                                    : statusRequest === 404
                                        ? <h1 className='poppins'>No Characters Found :/</h1>
                                        : characters.map((character) => (
                                            <Card key={character.id} character={character} />
                                        ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            {
                !loading && <Pagination
                    info={infoPage}
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                />
            }
        </>
    )
}

export default CharactersPage