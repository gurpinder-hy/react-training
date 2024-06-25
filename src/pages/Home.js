const Home = () => {
    return (
        <div className="homeContainer ps-4 pe-4">
            <h2 className="mt-4 mb-4">Scrollable Home Page with Carousel and Cards</h2>
            <div className="ps-10 pe-10 carousel slide" style={{ height: '500px' }} data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" style={{ height: '500px' }} >
                    <div className="carousel-item active">
                        <img src="https://gurpinder-hy.github.io/react-training/landscape-1.avif" className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://gurpinder-hy.github.io/react-training/landscape-2.avif" className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://gurpinder-hy.github.io/react-training/landscape-1.avif" className="d-block w-100" alt="" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="" style={{ paddingTop: 10 }}>
                <div className="row">
                    <div className="col-sm">
                        <div className="card">
                            <img src="https://gurpinder-hy.github.io/react-training/sample.avif" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                            <img src="https://gurpinder-hy.github.io/react-training/sample.avif" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                            <img src="https://gurpinder-hy.github.io/react-training/sample.avif" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;