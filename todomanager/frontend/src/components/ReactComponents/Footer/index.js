/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { Link } from 'react-router-dom';

const Footer = () => {
    const style = {
        footer: css`
            background-color: #020205;
            margin: 0;
            padding: 0.5em;
            font-family: 'Roboto', sans-serif;
        `,
        contactUs: css`
            color: #b3d146;
            font-family: 'Roboto', sans-serif;
            font-size: 1em;
        `,
        contactUsButton: css`
            color: #b3d146;
            font-family: 'Roboto', sans-serif;
            font-size: 1em;

            &:hover {
                color: #fcf9f9;
                text-decoration: none;
            }
        `,
        p: css`
            color: #fcf9f9;
            font-family: 'Roboto', sans-serif;
            font-size: 1em;
        `,
        pButton: css`
            color: #fcf9f9;
            font-family: 'Roboto', sans-serif;
            font-size: 1em;

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
                            @ 2020  Todoapp
                        </span>

                        <span css={style.p} className="mx-2 p-0">
                            © All Rights Reserved
                        </span>

                        <span css={style.p} className="mx-2 p-0">
                            |
                        </span>

                        <span css={style.p} className="mx-2 p-0">
                            <Link to="/faq">
                                <button css={style.pButton} className="btn btn-link ml-1 px-0">FAQ</button>
                            </Link>
                        </span>

                        <span css={style.p} className="mx-2 p-0">
                            |
                        </span>

                        <span css={style.p} className="mx-2 p-0">
                            <Link to="/about">
                                <button css={style.pButton} className="btn btn-link ml-1 px-0">About Us</button>
                            </Link>
                        </span>
                    </div>
                    
                </div>
            </div>
    )
}

export default Footer;
