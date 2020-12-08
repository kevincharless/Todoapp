/** @jsx jsx */
import { jsx, css } from '@emotion/react'

const Content = ({ heading, content, image, imageStart, bgGreen }) => {
    const style = {
        bgblack: css`
            background-color: #020205;
            height: 90vh;
        `,
        bggreen: css`
            background-color: #89a617;
            height: 90vh;
        `,
        container: css`
            color: #fcf9f9;
            padding: 5em 0;
        `,
        img: css`
            width: 100%;
        `,
        heading: css`
            color: #fcf9f9;
            margin-bottom: 0;
            font-family: 'Roboto', sans-serif;
            font-weight: 900;
            font-size: 2.4em;
            text-transform: uppercase;
            letter-spacing: 0.01em;
            padding: 1em 0;
        `,
        paragraph: css`
            color: #fcf9f9;
            font-family: 'Roboto', sans-serif;
            font-size: 1.4em;
            letter-spacing: 0.01em;
        `,
    }
    return (
        <div css={bgGreen ? style.bggreen : style.bgblack} className="container-fluid d-flex align-items-center">
            <div css={style.container} className="container">
                <div className="row align-items-center">
                    <div data-aos={imageStart ? "flip-left" : "flip-right" } className={`col-md-7 ${ imageStart ? "order-2": "order-1" }`}>
                        <h2  css={style.heading}>{ heading }</h2>
                        <p  css={style.paragraph}>
                        { content }
                        </p>
                    </div>
                    <div className={`col-md-5 ${ imageStart ? "order-1": "order-2" }`}>
                        <img css={style.img} src={ image } alt="Illustration" />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Content
