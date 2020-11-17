/** @jsx jsx */
import { jsx, css } from '@emotion/react'

const Navbar = (props) => {
    
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <a className="navbar-brand" href="#">Fixed navbar</a>
                    </div>
                    { props.isAuthenticated ? props.authLinks : props.guestLinks }
                </div>  
            </nav>
    )
}

export default Navbar
