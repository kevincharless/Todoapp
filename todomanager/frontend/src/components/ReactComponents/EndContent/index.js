/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { Link } from 'react-router-dom';

const EndContent = () => {
    const style = {
        footer: css`
        background-color: #1b1b1b;
        margin: 0;
        padding: 0.5em;
        font-family: 'Roboto', sans-serif;
    `,
    contactUs: css`
        color: #b3d146;
        font-family: 'Roboto', sans-serif;
        text-size: 1.5em;
    `,
    contactUsButton: css`
        color: #b3d146;
        font-family: 'Roboto', sans-serif;
        text-size: 1.5em;

        &:hover {
            color: white;
            text-decoration: none;
        }
    `,
    p: css`
        color: white;
        font-family: 'Roboto', sans-serif;
        text-size: 1.5em;
    `,
    pButton: css`
        color: white;
        font-family: 'Roboto', sans-serif;
        text-size: 1.5em;

        &:hover {
            color: #b3d146;
            text-decoration: none;
        }
    `,
    }

    return (
        <div css={style.footer}>
                <div className="container">
                    <div className="ml-auto">
                        <span css={style.contactUs} className="mr-2 p-0">
                            @ 2020  
                            <Link to="/landingpage">
                                <button css={style.contactUsButton} className="btn btn-link ml-1 px-0">Todoapp</button>
                            </Link>
                        </span>

                        <span css={style.p} className="mx-2 p-0">
                            © All Rights Reserved
                        </span>

                        <span css={style.p} className="mx-2 p-0">
                            |
                        </span>

                        <span css={style.p} className="mx-2 p-0">
                            <Link to="/landingpage">
                                <button css={style.pButton} className="btn btn-link ml-1 px-0">FAQ</button>
                            </Link>
                        </span>
                    </div>
                    
                </div>
            </div>
    )
}

export default EndContent
