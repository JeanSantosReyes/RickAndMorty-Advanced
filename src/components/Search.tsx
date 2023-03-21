
/* 
onMouseEnter={handleMouseEnter}
onMouseLeave={handleMouseLeave}
------------------------------------------
onMouseOver={this.state.toggleHover} 
onMouseOut={this.state.toggleHover} 
onMouseUp={this.state.toggleActive} 
onMouseDown={this.state.toggleActive} 
onFocus={this.state.toggleFocus}
*/

import { FC, memo } from 'react';

interface Props {
    setSearch: (value: string) => void;
    setPageNumber: (value: number) => void;
}

const input = {
    width: '40%',
    border: '2px solid #0b5ed7',
    borderRadius: '8px',
    boxShadow: '1px 3px 9px rgba(0, 0, 0, 0.25)',
    padding: '10px 15px',
}

const Search: FC<Props> = ({ setSearch, setPageNumber }) => {

    const searchBtn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
    }

    return (
        <form
            className='d-flex align-items-center justify-content-center gap-4 mb-5'
        >
            <input
                type='text'
                placeholder='Search for characters'
                style={input}
                onChange={({ target }) => {
                    setPageNumber(1);
                    setSearch(target.value);
                }}
            />
            <button
                className='btn btn-primary fs-5'
                style={{ boxShadow: '1px 3px 9px rgba(0, 0, 0, 0.25)' }}
                onClick={searchBtn}
            >
                Search
            </button>
        </form>
    )
}

export default memo(Search)