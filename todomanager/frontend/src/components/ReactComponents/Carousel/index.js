/** @jsx jsx */
import { jsx, css } from '@emotion/react'

const Carousel = () => {
    const style = {
        bggreen: css`
            background-color: #89a617;
        `,
        bgcarousel: css`
            background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('../../../static/frontend/images/bgcarousel.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            height: 41em;
        `,
        img: css`
            width: 50%;
        `
    }
    return (
        <div css={style.bggreen}>
            <div className="container">
                <div className="row align-items-center">
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                        <div css={style.bgcarousel} className="carousel-inner">
                            <div className="carousel-item active d-flex justify-content-center">
                                <img css={style.img} src="../../../static/frontend/images/landingPage.jpg" className="d-block" alt="..." />
                            </div>
                            <div className="carousel-item d-flex justify-content-center">
                                <img css={style.img} src="../../../static/frontend/images/content1.png" className="d-block" alt="..." />
                            </div>
                            <div className="carousel-item d-flex justify-content-center">
                                <img css={style.img} src="../../../static/frontend/images/landingPage.jpg" className="d-block" alt="..." />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Carousel


