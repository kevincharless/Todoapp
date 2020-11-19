/** @jsx jsx */
import { jsx, css } from '@emotion/react'

const Section = ({ bgGreen, heading, content }) => {
    const style = {
        bgWhite: css`
            background-color: white;
        `,
        bgGreen: css`
            background-color: #89a617;
        `,
        container: css`
            padding: 2.5em 0 0 0;
        `,
        headingBlack: css`
            color: #1b1b1b;
            margin-bottom: 0;
            font-family: 'Roboto', sans-serif;
            font-weight: 900;
            font-size: 1.5em;
            text-transform: uppercase;
            letter-spacing: 0.01em;
        `,
        headingWhte: css`
            color: white;
            margin-bottom: 0;
            font-family: 'Roboto', sans-serif;
            font-weight: 900;
            font-size: 1.5em;
            text-transform: uppercase;
            letter-spacing: 0.01em;
        `,
        hr: css`
            margin: 0.5em 0 1em 0;
        `,
        paragraphBlack: css`
            color: #1b1b1b;
            font-family: 'Roboto', sans-serif;
            font-size: 1.1em;
            letter-spacing: 0.01em;
        `,
        paragraphWhite: css`
            color: white;
            font-family: 'Roboto', sans-serif;
            font-size: 1.1em;
            letter-spacing: 0.01em;
        `,
        divparagraph: css`
            max-width: 500px;
            text-align: center;
        `
    }
    return (
        <div css={bgGreen ? style.bgGreen : style.bgWhite}>
            <div data-aos="zoom-in" css={style.container} className="container">
                <div className="row d-flex justify-content-center">
                    <h2 css={bgGreen ? style.headingWhte : style.headingBlack}>{ heading }</h2>
                </div>
                
                <hr css={style.hr} />
                
                <div  className="row d-flex justify-content-center">
                    <div css={style.divparagraph}>
                        <p css={bgGreen ? style.paragraphWhite : style.paragraphBlack}>
                            { content }
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Section
