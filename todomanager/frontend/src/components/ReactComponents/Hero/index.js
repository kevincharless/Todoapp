/** @jsx jsx */
import { jsx, css } from '@emotion/react'

const hero = () => {
    const style = {
        topPage: css`
            background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('../../../static/frontend/images/landingPage.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            height: 104vh;
        `,
        heading: css`
            padding-top: 50vh;
            color: #fcf9f9;
            opacity: 0.65;
            font-family: 'Roboto', sans-serif;
            font-weight: 900;
            font-size: 6vw;
            text-align: right;
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
                <div className="row d-flex align-items-end text-right h-100">
                    <div css={style.heading} className="col ml-auto mb-4">
                        <span className="d-block">Start Planning,</span>
                        <span className="d-block">Being Productive,</span>
                        <span className="d-block">Achieve Your Dream.</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default hero
