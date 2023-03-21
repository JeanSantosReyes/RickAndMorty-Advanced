import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Info } from '../interfaces';

interface Props {
    info: Info;
    pageNumber: number;
    setPageNumber: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ info, pageNumber, setPageNumber }) => {

    const pageChange = ({ selected }: { selected: number }) => {
        setPageNumber(selected + 1)
    }

    const [width, setWidth] = useState<number>(window.innerWidth);

    const updateDimensions = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, [])

    return (
        <ReactPaginate
            className='pagination justify-content-center my-4 gap-4'
            pageClassName='page-item'
            nextLinkClassName='btn btn-primary next'
            pageLinkClassName='page-link rounded'
            previousLinkClassName='btn btn-primary prev'
            activeClassName='active'
            nextLabel='Next'
            previousLabel='Prev'
            pageCount={info.pages ? info.pages : 1}
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            onPageChange={pageChange}
            marginPagesDisplayed={width < 576 ? 1 : 2}
            pageRangeDisplayed={width < 576 ? 1 : 2}
        />
    )
}

export default Pagination