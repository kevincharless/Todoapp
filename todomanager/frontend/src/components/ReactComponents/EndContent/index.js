/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Link } from 'react-router-dom';

import Footer from '../Footer';

const Endcontent = () => {
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
            color: #fcf9f9;
            font-family: 'Roboto', sans-serif;
            font-weight: bold;
            font-size: 1.5em;
            line-height: 1em;
            text-transform: uppercase;
        `,
        button: css`
            color: #fcf9f9;
            margin: 1em 1.5em 0;
            background-color: transparent;
            border: 2px solid #b3d146;
            font-family: 'Roboto', sans-serif;
            font-weight: bold;

            &:hover {
                color: #fcf9f9;
                background: #b3d146;
            }
        `,
    }

    return (
        <div>
            <div css={style.div} className="d-flex justify-content-center align-items-center">
                <div className="text-center w-75" data-aos="zoom-in">
                    <span css={style.heading} className="d-block">
                        Start Planning Today
                    </span>
                    <div className="d-flex justify-content-center">
                        <span css={style.content} className="d-flex justify-content-center w-50">
                            Sign up and join over 1,000,000 teams worldwide who are using Todoapp to get more done.
                        </span>
                    </div>
                    <span css={style.content} className="d-block" data-aos="zoom-in-up">
                        <Link to="/login">
                            <button css={style.button} type="button" className="btn btn-lg">
                                Get Started - It`s Free !
                            </button>
                        </Link>
                    </span>
                    
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Endcontent;
