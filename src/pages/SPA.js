import '../App.css';

const SPA = () => {
    return (
        <div className="homeContainer ps-4 pe-4">
            <nav style={{
                position: 'fixed',
                zIndex: '999',
                top: 70
            }} className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a href="#general" className="nav-link">General</a></li>
                            <li className="nav-item"><a href="#business" className="nav-link">Business</a></li>
                            <li className="nav-item"><a href="#apple" className="nav-link">Apple</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <h4 id="general" style={{paddingTop: 150}} className="mb-4">General</h4>

            <div className="" style={{ paddingTop: 10 }}>
                <div className="row">
                    <div className="col-sm">
                        <div className="card">
                            <img src="https://www.fool.com.au/wp-content/uploads/2022/02/etf-16-16.9-1200x675.jpg" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">5 excellent ASX ETFs to grow your wealth</h5>
                                <p className="card-text">If you're looking for an easy way to invest your hard-earned money, then exchange traded funds (ETFs) could be the way to do it.\r\nThat's because ETFs allow investors to avoid stock picking.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                            <img src="https://c.ndtvimg.com/2023-11/jc2nlbvg_elon-musk_625x300_06_November_23.jpeg" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Elon Musk On New Baby With Neuralink Director Shivon Zilis</h5>
                                <p className="card-text">Elon Musk and Neuralink executive Shivon Zilis welcomed a new baby earlier this year. While the public is only now learning about their child through media reports, the Tesla CEO clarified to Page Six that it was never a secret.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                            <img src="https://cdn.mos.cms.futurecdn.net/eeofNSWWiB4o6DRMj3KGQ6-1200-80.jpg" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">The surgeon general wants a warning label on social media for teens — but why stop there?</h5>
                                <p className="card-text">Vivek Murthy wants the government to stub out social media use by kids. In a New York Times op-ed, the surgeon general this week details the growing body of evidence linking TikTok, Instagram, and oters.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h4 id="business" style={{paddingTop: 150}}  className="mt-4 mb-4">Business</h4>

            <div className="" style={{ paddingTop: 10 }}>
                <div className="row">
                    <div className="col-sm">
                        <div className="card">
                            <img src="https://cdn.vox-cdn.com/thumbor/33yR7O9Rj6MB1-iqif3RqkLldc8=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/16447558/acastro_190621_1777_prime_day_0003.0.jpg" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Amazon Prime Day 2024 will take place on July 16th and 17th - The Verge</h5>
                                <p className="card-text">Amazon Prime Day 2024 will take place on July 16th and 17th, bringing steep discounts on popular products across dozens of categories, from home goods to tech.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                            <img src="https://c.ndtvimg.com/2024-06/hjtn9ug_jonathan-kaye-_625x300_10_June_24.jpeg" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Millionaire Banker Quits Job After Video Showed Him Punching Woman At New York Pride Event - NDTV</h5>
                                <p className="card-text">A video showed him hitting a woman's face, causing her to collapse on the ground in front of a crowd at a Brooklyn Pride event in Park Slope.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                            <img src="https://s.yimg.com/ny/api/res/1.2/RybL3YWKP4VH89wVLTPyWQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/ap_finance_articles_694/e44af18d616829d3882c032de839ecfd" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Stock market today: Asian stocks follow Wall Street rise, but Nvidia tumbles again as AI mania cools - Yahoo Finance</h5>
                                <p className="card-text">Asian stocks rose Tuesday after another slide for Wall Street heavyweight Nvidia kept U.S. indexes mixed Monday, even as the majority of stocks rallied.  U.S...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h4 id="apple" style={{paddingTop: 150}}  className="mt-4 mb-4">Apple</h4>

            <div className="" style={{ paddingTop: 10 }}>
                <div className="row">
                    <div className="col-sm">
                        <div className="card">
                            <img src="https://images.macrumors.com/t/y0294VsXOtotQm4swBXuoSzyBq8=/1600x/article-new/2023/06/apple-vision-pro-mac.jpg" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Cheaper Apple Vision Headset Might Require a Tethered iPhone or Mac</h5>
                                <p className="card-text">Apple could offer a cheaper version of its Apple Vision Pro headset by making the device reliant on a tethered iPhone or Mac, according to Bloomberg's Mark Gurman.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                            <img src="https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/2669d54ec91677dd8b47d5ecb88ee3a3.jpg" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">How To Get All of the Best iOS 18 and macOS Sequoia Features Right Now</h5>
                                <p className="card-text">During WWDC 2024, Apple showed off a bunch of shiny new features heading to iOS 18 and macOS Sequoia (and its other software platforms) later this year—but if you don’t want to wait around for these features to arrive, you can get a lot of them right now.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                            <img src="https://cdn.arstechnica.net/wp-content/uploads/2024/06/iPad-Pro-M4-back-scaled-1-760x380.jpeg" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">iOS and iPadOS 18 add the option to format external drives</h5>
                                <p className="card-text">Enlarge/ The 2024 iPad Pro.\r\n1\r\nApple has added the ability to format external drives in iOS 18 and iPadOS 18, the major software updates for iPhones and iPads due later this year.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SPA;