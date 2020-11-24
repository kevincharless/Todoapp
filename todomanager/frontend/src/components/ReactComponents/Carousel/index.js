/** @jsx jsx */
import { jsx, css } from '@emotion/react'

const Carousel = () => {
    const style = {
        div: css`
            color: #fcf9f9;
            height: 65vh;
        `,
        bgcarousel: css`
            background: linear-gradient(#2f2f35, rgba(0,0,0,0.6)), url('../../../static/frontend/images/bgcarousel.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            max-height: 28.5em;
        `,
        img: css`
            width: 50%;
            display: block;
            margin-left: auto;
            margin-right: auto;
        `,
        arrow: css`
            top: 50%;
            position: fixed;
            opacity: 1;
            width: 2vw;
            height: 2vw;
        
            &:hover {
                opacity: 0.5;
            }
        `,
        text: css`
            position: relative;
            text-align: left;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
        `,
        heading: css`
            color: #b3d146;
            font-family: 'Roboto', sans-serif;
            font-weight: bold;
            font-size: 3vw;
            line-height: 1em;
            text-transform: uppercase;
        `,
        content: css`
            color: #fcf9f9;
            font-family: 'Roboto', sans-serif;
            font-weight: bold;
            font-size: 1.5vw;
            line-height: 1em;
            text-transform: uppercase;
        `,
    }
    return (
        <div css={style.div}>
            <div id="carouselExampleFade" className="container-fluid carousel slide carousel-fade" data-ride="carousel">
                <div className="container">
                    <div data-aos="zoom-in-up" data-aos-delay="100" css={style.bgcarousel} className="row align-items-center carousel-inner mx-0">
                        <div className="col-1">
                            <a css={style.arrow} className="carousel-control-prev ml-3" href="#carouselExampleFade" role="button" data-slide="prev">
                                <span css={style.arrow} className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                        </div>
                        <div className="col-10 d-flex align-items-center">
                            <div className="carousel-item active d-flex align-items-center">
                                <div css={style.text} className="carousel-caption align-items-center w-50">
                                    <span css={style.heading} className="d-block">
                                        Making Task 
                                    </span>
                                    <span css={style.content} className="d-block">
                                        amet consectetur
                                    </span>
                                </div>
                                <img css={style.img} src="../../../static/frontend/images/landingPage.jpg" className="d-block mr-0" alt="..." />
                            </div>
                            <div className="carousel-item d-flex align-items-center">
                                <div css={style.text} className="carousel-caption align-items-center w-50">
                                    <span css={style.heading} className="d-block">
                                        Completing Task 
                                    </span>
                                    <span css={style.content} className="d-block">
                                        amet consectetur adipisicing elit. Tenetur, ea.
                                    </span>
                                </div>
                                <img css={style.img} src="../../../static/frontend/images/content2-3.jpg" className="d-block mr-0" alt="..." />
                            </div>
                            <div className="carousel-item d-flex align-items-center">
                                <div css={style.text} className="carousel-caption align-items-center w-50">
                                    <span css={style.heading} className="d-block">
                                        Edit Task 
                                    </span>
                                    <span css={style.content} className="d-block">
                                        amet consectetur adipisicing elit. Tenetur, ea.
                                    </span>
                                </div>
                                <img css={style.img} src="../../../static/frontend/images/content2-1.jpg" className="d-block mr-0" alt="..." />
                            </div>
                        </div>
                        <div className="col-1">
                            <a css={style.arrow} className="carousel-control-next mr-3" href="#carouselExampleFade" role="button" data-slide="next">
                                <span css={style.arrow} className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                                
                            
                            
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Carousel


