import FilterStatus from './FilterStatus';
import { FC, memo } from 'react';

interface Props {
    setPageNumber: (page: number) => void;
    setStatus: (status: string) => void;
}

const Filter: FC<Props> = ({ setPageNumber, setStatus }) => {

    const clear = () => {
        setStatus('');
        setPageNumber(1);
        window.location.reload();
    }

    return (
        <div className='col-lg-3 col-12 mb-5'>
            <div className='text-center fw-bold fs-4 mb-2'>Filters</div>
            <div
                className='d-flex justify-content-center mb-3'
                onClick={clear}
            >
                <span className='btn btn-primary'>Clear Filters</span>
            </div>
            <div className='accordion'>
                <FilterStatus setPageNumber={setPageNumber} setStatus={setStatus} />
            </div>
        </div>
    )
}

export default memo(Filter);