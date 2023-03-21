import { Link, NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light mb-4'>
            <div className='container'>
                <Link to='/characters' className='navbar-brand fs-3 poppins'>
                    Rick & Morty <span className='text-primary'>JSR</span>
                </Link>
                <button
                    className='navbar-toggler border-0'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNavAltMarkup'
                    aria-expanded='false'
                >
                    <span className='fas fa-bars open text-dark'></span>
                    <span className='fas fa-times close text-dark'></span>
                </button>
                <div
                    className='collapse navbar-collapse justify-content-end poppins'
                    id='navbarNavAltMarkup'
                >
                    <div className='navbar-nav fs-5'>
                        <NavLink to='/characters' className='nav-link'>
                            Characters
                        </NavLink>
                        <NavLink to='/episodes' className='nav-link'>
                            Episode
                        </NavLink>
                        <NavLink
                            className='nav-link'
                            to='/locations'
                        >
                            Location
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar