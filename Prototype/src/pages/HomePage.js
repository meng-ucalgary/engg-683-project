import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <React.Fragment>
      <Header />

      <section id='hero' className='d-flex align-items-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1' data-aos='fade-up' data-aos-delay='200'>
              <h1>Ultimate solution to reform your online reputation</h1>
              <h2>Don't let Social Media blowback your future</h2>
            </div>
            <div className='col-lg-6 order-1 order-lg-2 hero-img' data-aos='zoom-in' data-aos-delay='200'>
              <img src='assets/img/hero-img.png' className='img-fluid animated' alt='' />
            </div>
          </div>
        </div>
      </section>

      <main id='main'>
        <section id='why-us' className='why-us section-bg'>
          <div className='container-fluid' data-aos='fade-up'>
            <div className='row'>
              <div className='col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-1 order-lg-2'>
                <div className='content'>
                  <h3>
                    Don't know how <strong>important</strong> is your online reputation?
                  </h3>
                  <p>It is not only how your friend sees you but may also cost you your dream job or the life that you want to have!</p>
                </div>

                <div className='accordion-list'>
                  <ul>
                    <li>
                      <a data-bs-toggle='collapse'>
                        <span>01</span> Employers do check on your social media past!
                        {/* <i className='bx bx-chevron-up icon-close'></i> */}
                      </a>
                      {/* <div id='accordion-list-1' className='collapse show' data-bs-parent='.accordion-list'>
                        <p>
                          Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus
                          non.
                        </p>
                      </div> */}
                    </li>

                    <li>
                      <a data-bs-toggle='collapse'>
                        <span>02</span> There may be some information online about you that may be lethal to your reputation
                        {/* <i className='bx bx-chevron-up icon-close'></i> */}
                      </a>
                      {/* <div id='accordion-list-2' className='collapse show' data-bs-parent='.accordion-list'>
                        <p>
                          Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec
                          pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                        </p>
                      </div> */}
                    </li>

                    <li>
                      <a data-bs-toggle='collapse'>
                        <span>03</span> Your career is dependent on it!
                        {/* <i className='bx bx-chevron-up icon-close'></i> */}
                      </a>
                      {/* <div id='accordion-list-3' className='collapse' data-bs-parent='.accordion-list'>
                        <p>
                          Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum
                          tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                        </p>
                      </div> */}
                    </li>
                  </ul>
                </div>
              </div>

              <div className='col-lg-5 align-items-stretch order-2 order-lg-1 img' style={{ backgroundImage: `url("assets/img/why-us.png")` }} data-aos='zoom-in' data-aos-delay='150'>
                &nbsp;
              </div>
            </div>
          </div>
        </section>

        <section id='skills' className='skills'>
          <div className='container' data-aos='fade-up'>
            <div className='row'>
              <div className='col-lg-6 pt-4 pt-lg-0 content' data-aos='fade-left' data-aos-delay='100'>
                <h3>Problematic posts can be on any social media!</h3>
                <p className='fst-italic'>As per research XXX, very high percentage of posts on each social media platform can be problematic</p>

                <div className='skills-content'>
                  <div className='progress'>
                    <span className='skill'>
                      Facebook <i className='val'>70%</i>
                    </span>
                    <div className='progress-bar-wrap'>
                      <div className='progress-bar' role='progressbar' aria-valuenow='70' aria-valuemin='0' aria-valuemax='100' style={{ width: '70%' }}></div>
                    </div>
                  </div>

                  <div className='progress'>
                    <span className='skill'>
                      Twitter <i className='val'>65%</i>
                    </span>
                    <div className='progress-bar-wrap'>
                      <div className='progress-bar' role='progressbar' aria-valuenow='65' aria-valuemin='0' aria-valuemax='100' style={{ width: '65%' }}></div>
                    </div>
                  </div>

                  <div className='progress'>
                    <span className='skill'>
                      Instagram <i className='val'>43%</i>
                    </span>
                    <div className='progress-bar-wrap'>
                      <div className='progress-bar' role='progressbar' aria-valuenow='43' aria-valuemin='0' aria-valuemax='100' style={{ width: '43%' }}></div>
                    </div>
                  </div>

                  <div className='progress'>
                    <span className='skill'>
                      Linkedin <i className='val'>29%</i>
                    </span>
                    <div className='progress-bar-wrap'>
                      <div className='progress-bar' role='progressbar' aria-valuenow='29' aria-valuemin='0' aria-valuemax='100' style={{ width: '29%' }}></div>
                    </div>
                  </div>

                  <div className='progress'>
                    <span className='skill'>
                      Reddit <i className='val'>54%</i>
                    </span>
                    <div className='progress-bar-wrap'>
                      <div className='progress-bar' role='progressbar' aria-valuenow='54' aria-valuemin='0' aria-valuemax='100' style={{ width: '54%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 d-flex align-items-center' data-aos='fade-right' data-aos-delay='100'>
                <img src='assets/img/skills.png' className='img-fluid' alt='' />
              </div>
            </div>
          </div>
        </section>

        <section id='services' className='services section-bg'>
          <div className='container' data-aos='fade-up'>
            <div className='section-title'>
              <h2>Services</h2>
              <p>We have a solution for you</p>
            </div>

            <div className='row'>
              <div className='col-xl-4 col-md-6 d-flex align-items-stretch' data-aos='zoom-in' data-aos-delay='100'>
                <div className='icon-box'>
                  <div className='icon'>
                    <i className='bx bx-layer'></i>
                  </div>
                  <h4>
                    <a href=''>Analyze</a>
                  </h4>
                  <p>We analyze your reputation using state-of-the-art machine learning models and data analytics algorithms</p>
                </div>
              </div>

              <div className='col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0' data-aos='zoom-in' data-aos-delay='200'>
                <div className='icon-box'>
                  <div className='icon'>
                    <i className='bx bx-file'></i>
                  </div>
                  <h4>
                    <a href=''>Compile</a>
                  </h4>
                  <p>We will give you a birds eye of your reputation in all of the major social media platforms</p>
                </div>
              </div>

              <div className='col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0' data-aos='zoom-in' data-aos-delay='300'>
                <div className='icon-box'>
                  <div className='icon'>
                    <i className='bx bx-tachometer'></i>
                  </div>
                  <h4>
                    <a href=''>Action</a>
                  </h4>
                  <p>We provide you with solutions to save your online reputation through our strategic partnerships.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='cta' className='cta'>
          <div className='container' data-aos='zoom-in'>
            <div className='row'>
              <div className='col-lg-9 text-center text-lg-start'>
                <h3>Take back control of your social media</h3>
                <p> Don't wait. Get started today.</p>
              </div>
              <div className='col-lg-3 cta-btn-container text-center'>
                <Link className='cta-btn align-middle' to='/register'>
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id='team' className='team section-bg'>
          <div className='container' data-aos='fade-up'>
            <div className='section-title'>
              <h2>Team</h2>
              <p>Our highly talented team of experts will help you with your social media reputation</p>
            </div>

            <div className='row'>
              <div className='col-lg-6'>
                <div className='member d-flex align-items-start' data-aos='zoom-in' data-aos-delay='100'>
                  <div className='pic text-center'>
                    <img src={`${process.env.PUBLIC_URL + '/team/lego_superman.jpg'}`} className='img-fluid' alt='' style={{ height: '150px' }} />
                  </div>
                  <div className='member-info'>
                    <h4>Michael Man Yin Lee</h4>
                    <span>Founder</span>
                    <p>Software Engineering graduate, expert in Data Analytics</p>
                    <div className='social'>
                      <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
                        <i className='ri-twitter-fill'></i>
                      </a>
                      <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                        <i className='ri-facebook-fill'></i>
                      </a>
                      <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                        <i className='ri-instagram-fill'></i>
                      </a>
                      <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
                        <i className='ri-linkedin-box-fill'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-6 mt-4 mt-lg-0'>
                <div className='member d-flex align-items-start' data-aos='zoom-in' data-aos-delay='200'>
                  <div className='pic text-center'>
                    <img src={`${process.env.PUBLIC_URL + '/team/lego_green_lantern.png'}`} className='img-fluid' alt='' style={{ height: '150px' }} />
                  </div>
                  <div className='member-info'>
                    <h4>Drew Burritt</h4>
                    <span>Chief Executive Officer</span>
                    <p>Software Engineering graduate, expert in Machine Learning models</p>
                    <div className='social'>
                      <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
                        <i className='ri-twitter-fill'></i>
                      </a>
                      <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                        <i className='ri-facebook-fill'></i>
                      </a>
                      <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                        <i className='ri-instagram-fill'></i>
                      </a>
                      <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
                        <i className='ri-linkedin-box-fill'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-6 mt-4'>
                <div className='member d-flex align-items-start' data-aos='zoom-in' data-aos-delay='400'>
                  <div className='pic text-center'>
                    <img src={`${process.env.PUBLIC_URL + '/team/lego_batman.jpg'}`} className='img-fluid' alt='' style={{ height: '150px' }} />
                  </div>
                  <div className='member-info'>
                    <h4>Bhavyai Gupta</h4>
                    <span>Product Manager</span>
                    <p>Software Engineering graduate, expert in Full Stack Development</p>
                    <div className='social'>
                      <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
                        <i className='ri-twitter-fill'></i>
                      </a>
                      <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                        <i className='ri-facebook-fill'></i>
                      </a>
                      <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                        <i className='ri-instagram-fill'></i>
                      </a>
                      <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
                        <i className='ri-linkedin-box-fill'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-6 mt-4'>
                <div className='member d-flex align-items-start' data-aos='zoom-in' data-aos-delay='300'>
                  <div className='pic text-center'>
                    <img src={`${process.env.PUBLIC_URL + '/team/lego_aquaman.jpg'}`} className='img-fluid' alt='' style={{ height: '150px' }} />
                  </div>
                  <div className='member-info'>
                    <h4>Thomas Scott</h4>
                    <span>Marketing Head</span>
                    <p>Software Engineering graduate, expert in Sales and Marketing</p>
                    <div className='social'>
                      <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
                        <i className='ri-twitter-fill'></i>
                      </a>
                      <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                        <i className='ri-facebook-fill'></i>
                      </a>
                      <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                        <i className='ri-instagram-fill'></i>
                      </a>
                      <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
                        <i className='ri-linkedin-box-fill'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-6 mt-4'>
                <div className='member d-flex align-items-start' data-aos='zoom-in' data-aos-delay='400'>
                  <div className='pic text-center'>
                    <img src={`${process.env.PUBLIC_URL + '/team/lego_cyborg.png'}`} className='img-fluid' alt='' style={{ height: '150px' }} />
                  </div>
                  <div className='member-info'>
                    <h4>Allen Ndonwi Shu</h4>
                    <span>Operations Head</span>
                    <p>Environmental Engineering graduate, expert in Operations and Support</p>
                    <div className='social'>
                      <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
                        <i className='ri-twitter-fill'></i>
                      </a>
                      <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                        <i className='ri-facebook-fill'></i>
                      </a>
                      <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                        <i className='ri-instagram-fill'></i>
                      </a>
                      <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
                        <i className='ri-linkedin-box-fill'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      {/* <NavBarStart />

        <h1 className='card-title'>Welcome to eyeSea Analytics</h1>
        <h2>Ultimate Solution to Reform Your Online Reputation!</h2>
        <img className='card-img-top' src={this.state.imageUrl} alt='Card cap' /> */}
    </React.Fragment>
  );
};

export default Home;
