import FilterButton from './FilterButton';

interface Props {
    setPageNumber: (page: number) => void;
    setStatus: (status: string) => void;
}

const FilterStatus: React.FC<Props> = ({ setPageNumber, setStatus }) => {

    const status = ['Alive', 'Dead', 'Unknown'];

    return (
        <div className='accordion-item'>
            <h2 className='accordion-header' id='headingOne'>
                <button
                    className='accordion-button'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseOne'
                    aria-expanded='true'
                >
                    Status
                </button>
            </h2>
            <div
                id='collapseOne'
                className='accordion-collapse collapse show'
            >
                <div className='accordion-body d-flex flex-wrap gap-0 gap-md-3'>
                    {
                        status.map((item) => (
                            <FilterButton
                                key={item}
                                task={setStatus}
                                setPageNumber={setPageNumber}
                                input={item}
                                name='status'
                            />
                        ))
                    }
                </div>
            </div>
        </div >
    )
}

export default FilterStatus