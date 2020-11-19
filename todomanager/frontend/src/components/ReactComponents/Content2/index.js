/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { Link } from 'react-router-dom';

const Content2 = ({ img, heading, paragraph, button }) => {
    const style = {
        col: css`
            padding: 0 0.5em;
            margin: 5em 0 1em 0;
        `,
        container: css`
            background-color: white;
            height: 38em;
            padding: 2em 0;
        `,
        heading: css`
            margin: 1em 1.5em 0;
            color: #1b1b1b;
            font-family: 'Roboto', sans-serif;
            font-weight: bold;
        `,
        img: css`
            padding-bottom: 1em;
            max-height: 210px;
            max-width: 100%;
            display: block;
            margin-left: auto;
            margin-right: auto;
        `,
        paragraph: css`
            margin: 2em;
            color: #1b1b1b;
            font-family: 'Roboto', sans-serif;
            font-size: 1.1em;
            letter-spacing: 0.01em;
        `,
        button: css`
            color: white;
            margin: 1em 1.5em 0;
            background-color: #b3d146;
            font-family: 'Roboto', sans-serif;
            font-weight: bold;

            &:hover {
                color: white;
                background: #1b1b1b;
            }
        `,
    }
    return (
        <div css={style.col} className="col-md-4">
            <div data-aos="flip-left" data-aos-delay="100" css={style.container} >
            <img css={style.img} src={img} alt="ilustrasi" />
            
            <h4 css={style.heading}>
                { heading }
            </h4>

            
            <p css={style.paragraph} >
                { paragraph }
            </p>
            
            <div>
                <Link to="/login">
                    <button css={style.button} type="button" className="btn btn-lg">
                        { button }
                    </button>
                </Link>
            </div>
        </div>
        </div>
        
    )
}

export default Content2
