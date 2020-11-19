/** @jsx jsx */
import { jsx, css } from '@emotion/react'

const hero = () => {
    const style = {
        animate: css`
            position: relative;
            animation-name: div;
            animation-duration: 3s;
            animation-direction: alternate;

            @keyframes div {
                from { right: -50px; opacity: 0.3; }
                to   { right: 0 ; opacity: 1; }

            }
        `,
        topPage: css`
            background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('../../../static/frontend/images/landingPage.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            height: 100vh;
        `,
        heading: css`
            color: white;
            opacity: 0.65;
            font-family: 'Roboto', sans-serif;
            font-weight: 900;
            font-size: 6.5em;
            text-align: right;
            line-height: 1em;
            text-transform: uppercase;
            letter-spacing: 0.01em;
        `   
    }

    return (
        <div css={style.topPage} className="row">
            <div css={style.animate} className="container">
                <div className="col d-flex align-items-end text-right h-100">
                    <div css={style.heading} className="ml-auto mb-4">
                        <span className="d-block">Big Ideas,</span>
                        <span className="d-block">Creative People,</span>
                        <span className="d-block">New Technology.</span>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default hero
