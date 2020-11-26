/** @jsx jsx */
import { jsx, css } from '@emotion/react'

const Heroafaq = () => {
    const style = {
        topPage: css`
            background-color: #020205;
            background-size: cover;
            background-position: center center;
            height: 40vh;
        `,
        heading: css`
            padding-top: 16vh;
            color: #b3d146;
            font-family: 'Roboto', sans-serif;
            font-weight: 900;
            font-size: 3.5vw;
            text-align: center;
            line-height: 1em;
            text-transform: uppercase;
            letter-spacing: 0.01em;

            animation-name: div;
            animation-duration: 1s;
            animation-direction: alternate;

            @keyframes div {
                from { right: -50px; opacity: 0; }
                to   { right: 0 ; opacity: 1; }

            }
        `,
        hr: css`
            border-top: 19px solid #b3d146;
        `   
    }

    return (
        <div className="container-fluid" css={style.topPage}>
            <div className="container">
                <div className="row d-flex align-items-center text-center h-100">
                    <div css={style.heading} className="col">
                        <span className="d-block">Frequently Asked Questions</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Heroafaq
