/** @jsx jsx */
import { jsx, css } from '@emotion/react'

const Section = ({ heading, content }) => {
    const style = {
        container: css`
            padding: 5em 0;
        `,
        heading: css`
            color: #1b1b1b;
            margin-bottom: 0;
            font-family: 'Roboto', sans-serif;
            font-weight: 900;
            font-size: 1.5em;
            text-transform: uppercase;
            letter-spacing: 0.01em;
        `,
        hr: css`
            margin: 0.5em 0 3em 0;
        `,
        paragraph: css`
            color: #1b1b1b;
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
        <div css={style.container} className="container">
            <div className="row d-flex justify-content-center">
                <h2 css={style.heading}>{ heading }</h2>
            </div>
            
            <hr css={style.hr} />
            
            <div  className="row d-flex justify-content-center">
                <div css={style.divparagraph}>
                    <p css={style.paragraph}>
                        { content }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Section
