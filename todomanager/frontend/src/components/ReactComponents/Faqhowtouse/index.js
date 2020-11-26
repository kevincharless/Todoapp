/** @jsx jsx */
import { jsx, css } from '@emotion/react'

const Faqhowtouse = ({ img, heading, paragraph }) => {
    const style = {
        container: css`
            background-color: #fcf9f9;
        `,
        heading: css`
            margin: 0;
            color:  #b3d146;
            font-family: 'Roboto', sans-serif;
            font-weight: bold;
        `,
        img: css`
            max-height: 300px;
            max-width: 100%;
            display: block;
            margin-left: auto;
            margin-right: auto;
        `,
        paragraph: css`
            color:#020205;
            font-family: 'Roboto', sans-serif;
            font-size: 1.1em;
            text-align: center;
            letter-spacing: 0.01em;
        `,
    }
    return (
        <div className="col d-flex justify-content-center p-0 m-0">
            <div css={style.container} >
                <h4 css={style.heading}>
                    { heading }
                </h4>
                <img css={style.img} src={img} alt="teamprofile" />
                <p css={style.paragraph} >
                    { paragraph }
                </p>
                <hr />
            </div>
        </div>
    )
}

export default Faqhowtouse
