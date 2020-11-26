/** @jsx jsx */
import { jsx, css } from '@emotion/react'

const Heroabout = () => {
    const style = {
        topPage: css`
            background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('../../../static/frontend/images/about.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            height: 40vh;
        `,
        heading: css`
            padding-top: 16vh;
            color: #fcf9f9;
            opacity: 0.65;
            font-family: 'Roboto', sans-serif;
            font-weight: 900;
            font-size: 5vw;
            text-align: center;
            line-height: 1em;
            text-transform: uppercase;
            letter-spacing: 0.01em;

            animation-name: div;
            animation-duration: 1s;
            animation-direction: alternate;

            @keyframes div {
                from { right: -50px; opacity: 0.3; }
                to   { right: 0 ; opacity: 0.65; }

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
                        <span className="d-block">About Us</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Heroabout
