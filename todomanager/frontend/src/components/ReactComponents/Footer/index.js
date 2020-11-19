/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { Link } from 'react-router-dom';
import EndContent from '../EndContent';

const style = {
    div: css`
        background: linear-gradient(#2f2f35, rgba(0,0,0,0.6)), url('../../../static/frontend/images/footer.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        height: 37em;
    `,
    heading: css`
            color: #b3d146;
            font-family: 'Roboto', sans-serif;
            font-weight: bold;
            font-size: 3em;
            line-height: 1.5em;
            text-transform: uppercase;
        `,
    content: css`
        color: white;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        font-size: 1.5em;
        line-height: 1em;
        text-transform: uppercase;
    `,
    button: css`
            color: white;
            margin: 1em 1.5em 0;
            background-color: transparent;
            border: 2px solid #b3d146;
            font-family: 'Roboto', sans-serif;
            font-weight: bold;

            &:hover {
                color: white;
                background: #b3d146;
            }
        `,
}

const Footer = () => {
    return (
        <div >
            <div css={style.div} className="d-flex justify-content-center align-items-center">
                <div className="text-center w-50">
                    <span css={style.heading} className="d-block">
                        Start Planning Today
                    </span>
                    <span css={style.content} className="d-block">
                        Sign up and join over 1,000,000 teams worldwide who are using Todoapp to get more done.
                    </span>
                    <span css={style.content} className="d-block">
                        <Link to="/login">
                            <button css={style.button} type="button" className="btn btn-lg">
                                Get Started - It`s Free !
                            </button>
                        </Link>
                    </span>
                    
                </div>
                
            </div>
            <EndContent />
        </div>
    )
}

export default Footer