import React from 'react'

const Elements = () => {
    return (
        <div>
            <header className="header" id="home">
                <div className="header-top">
                    <div className="container">
                        <div className="row justify-content-end">
                            <div className="col-lg-6 col-sm-4 col-8 header-top-right no-padding">
                                <ul>
                                    <li>
                                        Mon-Fri: 8am to 2pm
                                    </li>
                                    <li>
                                        Sat-Sun: 11am to 4pm
                                    </li>
                                    <li>
                                        <a href="tel:(012) 6985 236 7512">(012) 6985 236 7512</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-center justify-content-between d-flex">
                        <div id="logo">
                            <a href="index.html"><img src="assets/img/logo.png" alt="" title="" /></a>
                        </div>
                        <nav id="nav-menu-container">
                            <ul className="nav-menu">
                                <li className="menu-active"><a href="index.html#home">Home</a></li>
                                <li><a href="index.html#about">About</a></li>
                                <li><a href="index.html#coffee">Coffee</a></li>
                                <li><a href="index.html#review">Review</a></li>
                                <li><a href="index.html#blog">Blog</a></li>
                                <li className="menu-has-children"><a href="">Pages</a>
                                    <ul>
                                        <li><a href="generic.html">Generic</a></li>
                                        <li><a href="elements.html">Elements</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        {/* <!-- #nav-menu-container -->		    		 */}
                    </div>
                </div>
            </header>
            {/* <!-- #header -->

			<!-- Start banner Area --> */}
            <section className="generic-banner">
                <div className="container">
                    <div className="row height align-items-center justify-content-center">
                        <div className="col-lg-10">
                            <div className="generic-banner-content">
                                <h2 className="text-white">The Elements Page</h2>
                                <p className="text-white">It won’t be a bigger problem to find one video game lover in your <br /> neighbor. Since the introduction of Virtual Game.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End banner Area -->
			<!-- Start Sample Area --> */}
            <section className="sample-text-area">
                <div className="container">
                    <h3 className="text-heading">Text Sample</h3>
                    <p className="sample-text">
                        Every avid independent filmmaker has <b>Bold</b> about making that <i>Italic</i> interest documentary, or short film to show off their creative prowess. Many have great ideas and want to “wow” the<sup>Superscript</sup> scene, or video renters with their big project.  But once you have the<sub>Subscript</sub> “in the can” (no easy feat), how do you move from a <del>Strike</del> through of master DVDs with the <u>“Underline”</u> marked hand-written title inside a secondhand CD case, to a pile of cardboard boxes full of shiny new, retail-ready DVDs, with UPC barcodes and polywrap sitting on your doorstep?  You need to create eye-popping artwork and have your project replicated. Using a reputable full service DVD Replication company like PacificDisc, Inc. to partner with is certainly a helpful option to ensure a professional end result, but to help with your DVD replication project, here are 4 easy steps to follow for good DVD replication results:

                    </p>
                </div>
            </section>
            {/* <!-- End Sample Area -->
			<!-- Start Button --> */}
            <section className="button-area">
                <div className="container border-top-generic">
                    <h3 className="text-heading">Sample Buttons</h3>
                    <div className="button-group-area">
                        <a href="#" className="genric-btn default">Default</a>
                        <a href="#" className="genric-btn primary">Primary</a>
                        <a href="#" className="genric-btn success">Success</a>
                        <a href="#" className="genric-btn info">Info</a>
                        <a href="#" className="genric-btn warning">Warning</a>
                        <a href="#" className="genric-btn danger">Danger</a>
                        <a href="#" className="genric-btn link">Link</a>
                        <a href="#" className="genric-btn disable">Disable</a>
                    </div>
                    <div className="button-group-area mt-10">
                        <a href="#" className="genric-btn default-border">Default</a>
                        <a href="#" className="genric-btn primary-border">Primary</a>
                        <a href="#" className="genric-btn success-border">Success</a>
                        <a href="#" className="genric-btn info-border">Info</a>
                        <a href="#" className="genric-btn warning-border">Warning</a>
                        <a href="#" className="genric-btn danger-border">Danger</a>
                        <a href="#" className="genric-btn link-border">Link</a>
                        <a href="#" className="genric-btn disable">Disable</a>
                    </div>
                    <div className="button-group-area mt-40">
                        <a href="#" className="genric-btn default radius">Default</a>
                        <a href="#" className="genric-btn primary radius">Primary</a>
                        <a href="#" className="genric-btn success radius">Success</a>
                        <a href="#" className="genric-btn info radius">Info</a>
                        <a href="#" className="genric-btn warning radius">Warning</a>
                        <a href="#" className="genric-btn danger radius">Danger</a>
                        <a href="#" className="genric-btn link radius">Link</a>
                        <a href="#" className="genric-btn disable radius">Disable</a>
                    </div>
                    <div className="button-group-area mt-10">
                        <a href="#" className="genric-btn default-border radius">Default</a>
                        <a href="#" className="genric-btn primary-border radius">Primary</a>
                        <a href="#" className="genric-btn success-border radius">Success</a>
                        <a href="#" className="genric-btn info-border radius">Info</a>
                        <a href="#" className="genric-btn warning-border radius">Warning</a>
                        <a href="#" className="genric-btn danger-border radius">Danger</a>
                        <a href="#" className="genric-btn link-border radius">Link</a>
                        <a href="#" className="genric-btn disable radius">Disable</a>
                    </div>
                    <div className="button-group-area mt-40">
                        <a href="#" className="genric-btn default circle">Default</a>
                        <a href="#" className="genric-btn primary circle">Primary</a>
                        <a href="#" className="genric-btn success circle">Success</a>
                        <a href="#" className="genric-btn info circle">Info</a>
                        <a href="#" className="genric-btn warning circle">Warning</a>
                        <a href="#" className="genric-btn danger circle">Danger</a>
                        <a href="#" className="genric-btn link circle">Link</a>
                        <a href="#" className="genric-btn disable circle">Disable</a>
                    </div>
                    <div className="button-group-area mt-10">
                        <a href="#" className="genric-btn default-border circle">Default</a>
                        <a href="#" className="genric-btn primary-border circle">Primary</a>
                        <a href="#" className="genric-btn success-border circle">Success</a>
                        <a href="#" className="genric-btn info-border circle">Info</a>
                        <a href="#" className="genric-btn warning-border circle">Warning</a>
                        <a href="#" className="genric-btn danger-border circle">Danger</a>
                        <a href="#" className="genric-btn link-border circle">Link</a>
                        <a href="#" className="genric-btn disable circle">Disable</a>
                    </div>
                    <div className="button-group-area mt-40">
                        <a href="#" className="genric-btn default circle arrow">Default<span className="lnr lnr-arrow-right"></span></a>
                        <a href="#" className="genric-btn primary circle arrow">Primary<span className="lnr lnr-arrow-right"></span></a>
                        <a href="#" className="genric-btn success circle arrow">Success<span className="lnr lnr-arrow-right"></span></a>
                        <a href="#" className="genric-btn info circle arrow">Info<span className="lnr lnr-arrow-right"></span></a>
                        <a href="#" className="genric-btn warning circle arrow">Warning<span className="lnr lnr-arrow-right"></span></a>
                        <a href="#" className="genric-btn danger circle arrow">Danger<span className="lnr lnr-arrow-right"></span></a>
                    </div>
                    <div className="button-group-area mt-10">
                        <a href="#" className="genric-btn default-border circle arrow">Default<span className="lnr lnr-arrow-right"></span></a>
                        <a href="#" className="genric-btn primary-border circle arrow">Primary<span className="lnr lnr-arrow-right"></span></a>
                        <a href="#" className="genric-btn success-border circle arrow">Success<span className="lnr lnr-arrow-right"></span></a>
                        <a href="#" className="genric-btn info-border circle arrow">Info<span className="lnr lnr-arrow-right"></span></a>
                        <a href="#" className="genric-btn warning-border circle arrow">Warning<span className="lnr lnr-arrow-right"></span></a>
                        <a href="#" className="genric-btn danger-border circle arrow">Danger<span className="lnr lnr-arrow-right"></span></a>
                    </div>
                    <div className="button-group-area mt-40">
                        <a href="#" className="genric-btn primary e-large">Extra Large</a>
                        <a href="#" className="genric-btn success large">Large</a>
                        <a href="#" className="genric-btn primary">Default</a>
                        <a href="#" className="genric-btn success medium">Medium</a>
                        <a href="#" className="genric-btn primary small">Small</a>
                    </div>
                    <div className="button-group-area mt-10">
                        <a href="#" className="genric-btn primary-border e-large">Extra Large</a>
                        <a href="#" className="genric-btn success-border large">Large</a>
                        <a href="#" className="genric-btn primary-border">Default</a>
                        <a href="#" className="genric-btn success-border medium">Medium</a>
                        <a href="#" className="genric-btn primary-border small">Small</a>
                    </div>
                </div>
            </section>
            {/* <!-- End Button -->
			<!-- Start Align Area --> */}
            <div className="whole-wrap">
                <div className="container">
                    <div className="section-top-border">
                        <h3 className="mb-30">Left Aligned</h3>
                        <div className="row">
                            <div className="col-md-3">
                                <img src="assets/img/elements/d.jpg" alt="" className="img-fluid" />
                            </div>
                            <div className="col-md-9 mt-sm-20">
                                <p>Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino players found themselves being chased by the Federal government. But, after a fortnight, the online casino industry came up with a solution and new online casinos started taking root. These began to operate under a different business umbrella, and by doing that, rendered the transfer of money to and from them legal. A major part of this was enlisting electronic banking systems that would accept this new clarification and start doing business with me. Listed in this article are the electronic banking systems that accept players from the United States that wish to play in online casinos.</p>
                            </div>
                        </div>
                    </div>
                    <div className="section-top-border text-right">
                        <h3 className="mb-30">Right Aligned</h3>
                        <div className="row">
                            <div className="col-md-9">
                                <p className="text-right">Over time, even the most sophisticated, memory packed computer can begin to run slow if we don’t do something to prevent it. The reason why has less to do with how computers are made and how they age and more to do with the way we use them. You see, all of the daily tasks that we do on our PC from running programs to downloading and deleting software can make our computer sluggish. To keep this from happening, you need to understand the reasons why your PC is getting slower and do something to keep your PC running at its best. You can do this through regular maintenance and PC performance optimization programs</p>
                                <p className="text-right">Before we discuss all of the things that could be affecting your PC’s performance, let’s talk a little about what symptoms</p>
                            </div>
                            <div className="col-md-3">
                                <img src="assets/img/elements/d.jpg" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="section-top-border">
                        <h3 className="mb-30">Definition</h3>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="single-defination">
                                    <h4 className="mb-20">Definition 01</h4>
                                    <p>Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="single-defination">
                                    <h4 className="mb-20">Definition 02</h4>
                                    <p>Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="single-defination">
                                    <h4 className="mb-20">Definition 03</h4>
                                    <p>Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-top-border">
                        <h3 className="mb-30">Block Quotes</h3>
                        <div className="row">
                            <div className="col-lg-12">
                                <blockquote className="generic-blockquote">
                                    “Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino players found themselves being chased by the Federal government. But, after a fortnight, the online casino industry came up with a solution and new online casinos started taking root. These began to operate under a different business umbrella, and by doing that, rendered the transfer of money to and from them legal. A major part of this was enlisting electronic banking systems that would accept this new clarification and start doing business with me. Listed in this article are the electronic banking”
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="section-top-border">
                        <h3 className="mb-30">Table</h3>
                        <div className="progress-table-wrap">
                            <div className="progress-table">
                                <div className="table-head">
                                    <div className="serial">#</div>
                                    <div className="country">Countries</div>
                                    <div className="visit">Visits</div>
                                    <div className="percentage">Percentages</div>
                                </div>
                                <div className="table-row">
                                    <div className="serial">01</div>
                                    <div className="country"> <img src="assets/img/elements/f1.jpg" alt="flag" />Canada</div>
                                    <div className="visit">645032</div>
                                    <div className="percentage">
                                        <div className="progress">
                                            <div className="progress-bar color-1" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-row">
                                    <div className="serial">02</div>
                                    <div className="country"> <img src="assets/img/elements/f2.jpg" alt="flag" />Canada</div>
                                    <div className="visit">645032</div>
                                    <div className="percentage">
                                        <div className="progress">
                                            <div className="progress-bar color-2" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-row">
                                    <div className="serial">03</div>
                                    <div className="country"> <img src="assets/img/elements/f3.jpg" alt="flag" />Canada</div>
                                    <div className="visit">645032</div>
                                    <div className="percentage">
                                        <div className="progress">
                                            <div className="progress-bar color-3" role="progressbar" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-row">
                                    <div className="serial">04</div>
                                    <div className="country"> <img src="assets/img/elements/f4.jpg" alt="flag" />Canada</div>
                                    <div className="visit">645032</div>
                                    <div className="percentage">
                                        <div className="progress">
                                            <div className="progress-bar color-4" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-row">
                                    <div className="serial">05</div>
                                    <div className="country"> <img src="assets/img/elements/f5.jpg" alt="flag" />Canada</div>
                                    <div className="visit">645032</div>
                                    <div className="percentage">
                                        <div className="progress">
                                            <div className="progress-bar color-5" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-row">
                                    <div className="serial">06</div>
                                    <div className="country"> <img src="assets/img/elements/f6.jpg" alt="flag" />Canada</div>
                                    <div className="visit">645032</div>
                                    <div className="percentage">
                                        <div className="progress">
                                            <div className="progress-bar color-6" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-row">
                                    <div className="serial">07</div>
                                    <div className="country"> <img src="assets/img/elements/f7.jpg" alt="flag" />Canada</div>
                                    <div className="visit">645032</div>
                                    <div className="percentage">
                                        <div className="progress">
                                            <div className="progress-bar color-7" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-row">
                                    <div className="serial">08</div>
                                    <div className="country"> <img src="assets/img/elements/f8.jpg" alt="flag" />Canada</div>
                                    <div className="visit">645032</div>
                                    <div className="percentage">
                                        <div className="progress">
                                            <div className="progress-bar color-8" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-top-border">
                        <h3>Image Gallery</h3>
                        <div className="row gallery-item">
                            <div className="col-md-4">
                                <a href="assets/img/elements/g1.jpg" className="img-pop-up"><div className="single-gallery-image" style="background: url(img/elements/g1.jpg);"></div></a>
                            </div>
                            <div className="col-md-4">
                                <a href="assets/img/elements/g2.jpg" className="img-pop-up"><div className="single-gallery-image" style="background: url(img/elements/g2.jpg);"></div></a>
                            </div>
                            <div className="col-md-4">
                                <a href="assets/img/elements/g3.jpg" className="img-pop-up"><div className="single-gallery-image" style="background: url(img/elements/g3.jpg);"></div></a>
                            </div>
                            <div className="col-md-6">
                                <a href="assets/img/elements/g4.jpg" className="img-pop-up"><div className="single-gallery-image" style="background: url(img/elements/g4.jpg);"></div></a>
                            </div>
                            <div className="col-md-6">
                                <a href="assets/img/elements/g5.jpg" className="img-pop-up"><div className="single-gallery-image" style="background: url(img/elements/g5.jpg);"></div></a>
                            </div>
                            <div className="col-md-4">
                                <a href="assets/img/elements/g6.jpg" className="img-pop-up"><div className="single-gallery-image" style="background: url(img/elements/g6.jpg);"></div></a>
                            </div>
                            <div className="col-md-4">
                                <a href="assets/img/elements/g7.jpg" className="img-pop-up"><div className="single-gallery-image" style="background: url(img/elements/g7.jpg);"></div></a>
                            </div>
                            <div className="col-md-4">
                                <a href="assets/img/elements/g8.jpg" className="img-pop-up"><div className="single-gallery-image" style="background: url(img/elements/g8.jpg);"></div></a>
                            </div>
                        </div>
                    </div>
                    <div className="section-top-border">
                        <div className="row">
                            <div className="col-md-4">
                                <h3 className="mb-20">Image Gallery</h3>
                                <div className="typography">
                                    <h1>This is header 01</h1>
                                    <h2>This is header 02</h2>
                                    <h3>This is header 03</h3>
                                    <h4>This is header 04</h4>
                                    <h5>This is header 01</h5>
                                    <h6>This is header 01</h6>
                                </div>
                            </div>
                            <div className="col-md-4 mt-sm-30">
                                <h3 className="mb-20">Unordered List</h3>
                                <div className="">
                                    <ul className="unordered-list">
                                        <li>Fta Keys</li>
                                        <li>For Women Only Your Computer Usage</li>
                                        <li>Facts Why Inkjet Printing Is Very Appealing
                                            <ul>
                                                <li>Addiction When Gambling Becomes
                                                    <ul>
                                                        <li>Protective Preventative Maintenance</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>Dealing With Technical Support 10 Useful Tips</li>
                                        <li>Make Myspace Your Best Designed Space</li>
                                        <li>Cleaning And Organizing Your Computer</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 mt-sm-30">
                                <h3 className="mb-20">Ordered List</h3>
                                <div className="">
                                    <ol className="ordered-list">
                                        <li><span>Fta Keys</span></li>
                                        <li><span>For Women Only Your Computer Usage</span></li>
                                        <li><span>Facts Why Inkjet Printing Is Very Appealing</span>
                                            <ol className="ordered-list-alpha">
                                                <li><span>Addiction When Gambling Becomes</span>
                                                    <ol className="ordered-list-roman">
                                                        <li><span>Protective Preventative Maintenance</span></li>
                                                    </ol>
                                                </li>
                                            </ol>
                                        </li>
                                        <li><span>Dealing With Technical Support 10 Useful Tips</span></li>
                                        <li><span>Make Myspace Your Best Designed Space</span></li>
                                        <li><span>Cleaning And Organizing Your Computer</span></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-top-border">
                        <div className="row">
                            <div className="col-lg-8 col-md-8">
                                <h3 className="mb-30">Form Element</h3>
                                <form action="#">
                                    <div className="mt-10">
                                        <input type="text" name="first_name" placeholder="First Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'First Name'" required className="single-input" />
                                    </div>
                                    <div className="mt-10">
                                        <input type="text" name="last_name" placeholder="Last Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Last Name'" required className="single-input" />
                                    </div>
                                    <div className="mt-10">
                                        <input type="text" name="last_name" placeholder="Last Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Last Name'" required className="single-input" />
                                    </div>
                                    <div className="mt-10">
                                        <input type="email" name="EMAIL" placeholder="Email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email address'" required className="single-input" />
                                    </div>
                                    <div className="input-group-icon mt-10">
                                        <div className="icon"><i className="fa fa-thumb-tack" aria-hidden="true"></i></div>
                                        <input type="text" name="address" placeholder="Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Address'" required className="single-input" />
                                    </div>
                                    <div className="input-group-icon mt-10">
                                        <div className="icon"><i className="fa fa-plane" aria-hidden="true"></i></div>
                                        <div className="form-select" id="default-select">
                                            <select>
                                                <option value="1">City</option>
                                                <option value="1">Dhaka</option>
                                                <option value="1">Dilli</option>
                                                <option value="1">Newyork</option>
                                                <option value="1">Islamabad</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="input-group-icon mt-10">
                                        <div className="icon"><i className="fa fa-globe" aria-hidden="true"></i></div>
                                        <div className="form-select" id="default-select">
                                            <select>
                                                <option value="1">Country</option>
                                                <option value="1">Bangladesh</option>
                                                <option value="1">India</option>
                                                <option value="1">England</option>
                                                <option value="1">Srilanka</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="mt-10">
                                        <textarea className="single-textarea" placeholder="Message" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Message'" required></textarea>
                                    </div>
                                    {/* <!-- For Gradient Border Use --> */}

                                    <div className="mt-10">
                                        <div className="primary-input">
                                            <input id="primary-input" type="text" name="first_name" placeholder="Primary color" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Primary color'" />
                                            <label for="primary-input"></label>
                                        </div>
                                    </div>
                                    <div className="mt-10">
                                        <input type="text" name="first_name" placeholder="Primary color" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Primary color'" required className="single-input-primary" />
                                    </div>
                                    <div className="mt-10">
                                        <input type="text" name="first_name" placeholder="Accent color" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Accent color'" required className="single-input-accent" />
                                    </div>
                                    <div className="mt-10">
                                        <input type="text" name="first_name" placeholder="Secondary color" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Secondary color'" required className="single-input-secondary" />
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-sm-30">
                                <div className="single-element-widget">
                                    <h3 className="mb-30">Switches</h3>
                                    <div className="switch-wrap d-flex justify-content-between">
                                        <p>01. Sample Switch</p>
                                        <div className="primary-switch">
                                            <input type="checkbox" id="default-switch" />
                                            <label for="default-switch"></label>
                                        </div>
                                    </div>
                                    <div className="switch-wrap d-flex justify-content-between">
                                        <p>02. Primary Color Switch</p>
                                        <div className="primary-switch">
                                            <input type="checkbox" id="primary-switch" checked />
                                            <label for="primary-switch"></label>
                                        </div>
                                    </div>
                                    <div className="switch-wrap d-flex justify-content-between">
                                        <p>03. Confirm Color Switch</p>
                                        <div className="confirm-switch">
                                            <input type="checkbox" id="confirm-switch" checked />
                                            <label for="confirm-switch"></label>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-element-widget mt-30">
                                    <h3 className="mb-30">Selectboxes</h3>
                                    <div className="default-select" id="default-select">
                                        <select>
                                            <option value="1">English</option>
                                            <option value="1">Spanish</option>
                                            <option value="1">Arabic</option>
                                            <option value="1">Portuguise</option>
                                            <option value="1">Bengali</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="single-element-widget mt-30">
                                    <h3 className="mb-30">Checkboxes</h3>
                                    <div className="switch-wrap d-flex justify-content-between">
                                        <p>01. Sample Checkbox</p>
                                        <div className="primary-checkbox">
                                            <input type="checkbox" id="default-checkbox" />
                                            <label for="default-checkbox"></label>
                                        </div>
                                    </div>
                                    <div className="switch-wrap d-flex justify-content-between">
                                        <p>02. Primary Color Checkbox</p>
                                        <div className="primary-checkbox">
                                            <input type="checkbox" id="primary-checkbox" checked />
                                            <label for="primary-checkbox"></label>
                                        </div>
                                    </div>
                                    <div className="switch-wrap d-flex justify-content-between">
                                        <p>03. Confirm Color Checkbox</p>
                                        <div className="confirm-checkbox">
                                            <input type="checkbox" id="confirm-checkbox" />
                                            <label for="confirm-checkbox"></label>
                                        </div>
                                    </div>
                                    <div className="switch-wrap d-flex justify-content-between">
                                        <p>04. Disabled Checkbox</p>
                                        <div className="disabled-checkbox">
                                            <input type="checkbox" id="disabled-checkbox" disabled />
                                            <label for="disabled-checkbox"></label>
                                        </div>
                                    </div>
                                    <div className="switch-wrap d-flex justify-content-between">
                                        <p>05. Disabled Checkbox active</p>
                                        <div className="disabled-checkbox">
                                            <input type="checkbox" id="disabled-checkbox-active" checked disabled />
                                            <label for="disabled-checkbox-active"></label>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-element-widget mt-30">
                                    <h3 className="mb-30">Radios</h3>
                                    <div className="switch-wrap d-flex justify-content-between">
                                        <p>01. Sample radio</p>
                                        <div className="primary-radio">
                                            <input type="checkbox" id="default-radio" />
                                            <label for="default-radio"></label>
                                        </div>
                                    </div>
                                    <div className="switch-wrap d-flex justify-content-between">
                                        <p>02. Primary Color radio</p>
                                        <div className="primary-radio">
                                            <input type="checkbox" id="primary-radio" checked />
                                            <label for="primary-radio"></label>
                                        </div>
                                    </div>
                                    <div className="switch-wrap d-flex justify-content-between">
                                        <p>03. Confirm Color radio</p>
                                        <div className="confirm-radio">
                                            <input type="checkbox" id="confirm-radio" checked />
                                            <label for="confirm-radio"></label>
                                        </div>
                                    </div>
                                    <div className="switch-wrap d-flex justify-content-between">
                                        <p>04. Disabled radio</p>
                                        <div className="disabled-radio">
                                            <input type="checkbox" id="disabled-radio" disabled />
                                            <label for="disabled-radio"></label>
                                        </div>
                                    </div>
                                    <div className="switch-wrap d-flex justify-content-between">
                                        <p>05. Disabled radio active</p>
                                        <div className="disabled-radio">
                                            <input type="checkbox" id="disabled-radio-active" checked disabled />
                                            <label for="disabled-radio-active"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/* <!-- End Align Area -->

			<!-- start footer Area -->		 */}
            < footer className="footer-area section-gap" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h6>About Us</h6>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.
                                </p>
                                <p className="footer-text">
                                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5  col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h6>Newsletter</h6>
                                <p>Stay update with our latest</p>
                                <div className="" id="mc_embed_signup">
                                    <form target="_blank" novalidate="true" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="form-inline">
                                        <input className="form-control" name="EMAIL" placeholder="Enter Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Email '" required="" type="email" />
                                        <button className="click-btn btn btn-default"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                                        <div style="position: absolute; left: -5000px;">
                                            <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text" />
                                        </div>

                                        <div className="info pt-20"></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
                            <div className="single-footer-widget">
                                <h6>Follow Us</h6>
                                <p>Let us be social</p>
                                <div className="footer-social d-flex align-items-center">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-dribbble"></i></a>
                                    <a href="#"><i className="fa fa-behance"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer >
        </div >
    )
}

export default Elements;
