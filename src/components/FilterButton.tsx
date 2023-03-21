
interface Props {
    task: (task: string) => void;
    setPageNumber: (page: number) => void;
    input: string;
    name: string;
}

const FilterButton: React.FC<Props> = ({ task, setPageNumber, input, name }) => {
    return (
        <>
            <div className='form-check'>
                <input
                    className='form-check-input x'
                    type='radio'
                    name={name}
                    id={`${name}-${input}`}
                />
                <label
                    onClick={() => {
                        task(input);
                        setPageNumber(1);
                    }}
                    className='btn btn-outline-primary'
                    htmlFor={`${name}-${input}`}
                >
                    {input}
                </label>
            </div>
        </>
    )
}

export default FilterButton