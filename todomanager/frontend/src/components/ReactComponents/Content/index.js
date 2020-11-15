/** @jsx jsx */
import { jsx, css } from '@emotion/react'

const Content = ({ heading, content, image, imageStart }) => {
    const style = {
        container: css`
            padding-top: 6em;
        `,
        img: css`
            width: 100%;
        `
    }
    return (
        <div  css={style.container} className="container">
            <div className="row align-items-center">
                <div className={`col-md-7 ${ imageStart ? "order-2": "order-1" }`}>
                    <h2>{ heading }</h2>
                    <p>
                    { content }
                    </p>
                </div>
                <div className={`col-md-5 ${ imageStart ? "order-1": "order-2" }`}>
                    <img css={style.img} src={ image } alt="ini foto" />
                </div>
            </div>
        </div>
    )
}

export default Content
