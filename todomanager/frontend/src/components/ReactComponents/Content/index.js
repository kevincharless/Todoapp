/** @jsx jsx */
import { jsx, css } from '@emotion/react'

const Content = ({ heading, content, image, imageStart, bgGreen }) => {
    const style = {
        bgblack: css`
            background-color: #1b1b1b;
        `,
        bggreen: css`
            background-color: #89a617;
        `,
        container: css`
            color: white;
            padding: 5.6em 0;
        `,
        img: css`
            width: 100%;
        `,
        heading: css`
            color: white;
            margin-bottom: 0;
            font-family: 'Roboto', sans-serif;
            font-weight: 900;
            font-size: 2.4em;
            text-transform: uppercase;
            letter-spacing: 0.01em;
            padding: 1em 0;
        `,
        paragraph: css`
            font-family: 'Roboto', sans-serif;
            font-size: 1.4em;
            letter-spacing: 0.01em;
        `,
    }
    return (
        <div css={bgGreen ? style.bggreen : style.bgblack} >
            <div css={style.container} className="container">
                <div className="row align-items-center">
                    <div data-aos={imageStart ? "fade-left" : "fade-right"} className={`col-md-7 ${ imageStart ? "order-2": "order-1" }`}>
                        <h2 css={style.heading}>{ heading }</h2>
                        <p css={style.paragraph}>
                        { content }
                        </p>
                    </div>
                    <div className={`col-md-5 ${ imageStart ? "order-1": "order-2" }`}>
                        <img css={style.img} src={ image } alt="ini foto" />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Content
