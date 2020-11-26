/** @jsx jsx */
import { jsx, css } from '@emotion/react'

const Profileabout = ({ img, heading, paragraph }) => {
    const style = {
        container: css`
            background-color: #fcf9f9;
        `,
        heading: css`
            margin: 0;
            color: #020205;
            font-family: 'Roboto', sans-serif;
            font-weight: bold;
        `,
        img: css`
            max-height: 180px;
            max-width: 100%;
            display: block;
            margin-left: auto;
            margin-right: auto;
        `,
        paragraph: css`
            color: #b3d146;
            font-family: 'Roboto', sans-serif;
            font-size: 1em;
            font-weight: bold;
            letter-spacing: 0.01em;
        `,
    }
    return (
        <div className="col d-flex justify-content-center text-center p-0 m-0">
            <div css={style.container} >
                <img css={style.img} src={img} alt="teamprofile" className="rounded-circle" />
            
                <h5 css={style.heading}>
                    { heading }
                </h5>
                <hr className="p-0 m-0 mb-1" />
                <p css={style.paragraph} >
                    { paragraph }
                </p>
            </div>
        </div>
    )
}

export default Profileabout
