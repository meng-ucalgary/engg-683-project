import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
  const loginStatus = localStorage.getItem('Authenticated');

  return (
    <React.Fragment>
      <Header />

      <section id='hero' className='d-flex align-items-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1'>
              <h1>Ultimate solution to reform your online reputation</h1>
              <h2>Don't let Social Media blowback your future</h2>
            </div>
            <div className='col-lg-6 order-1 order-lg-2 hero-img' data-aos='zoom-in'>
              <img src={`${process.env.PUBLIC_URL + '/assets/img/hero-img.png'}`} className='img-fluid animated' alt='' />
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
                      <div data-bs-toggle='collapse'>
                        <span>01</span> Employers do check on your social media past!
                      </div>
                    </li>

                    <li>
                      <div data-bs-toggle='collapse'>
                        <span>02</span> There may be some information online about you that may be lethal to your reputation
                      </div>
                    </li>

                    <li>
                      <div data-bs-toggle='collapse'>
                        <span>03</span> Your career is dependent on it!
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='col-lg-5 align-items-stretch order-2 order-lg-1 img' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/img/why-us.png'})` }} data-aos='zoom-in'>
                &nbsp;
              </div>
            </div>
          </div>
        </section>

        <section id='skills' className='skills'>
          <div className='container' data-aos='fade-up'>
            <div className='row'>
              <div className='col-lg-6 pt-4 pt-lg-0 content' data-aos='fade-left'>
                <h3>Problematic posts can be on any social media!</h3>
                <p className='fst-italic'>As per some research, very high percentage of posts on each social media platform can be problematic</p>

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
              <div className='col-lg-6 d-flex align-items-center' data-aos='fade-right'>
                <img src={`${process.env.PUBLIC_URL + '/assets/img/skills.png'}`} className='img-fluid' alt='' />
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
              <div className='col-xl-4 col-md-6 d-flex align-items-stretch' data-aos='zoom-in'>
                <div className='icon-box'>
                  <div className='icon'>
                    <i className='bx bx-layer'></i>
                  </div>
                  <h4>Analyze</h4>
                  <p>We analyze your reputation using state-of-the-art machine learning models and data analytics algorithms</p>
                </div>
              </div>

              <div className='col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0' data-aos='zoom-in'>
                <div className='icon-box'>
                  <div className='icon'>
                    <i className='bx bx-file'></i>
                  </div>
                  <h4>Compile</h4>
                  <p>We will give you a birds eye of your reputation in all of the major social media platforms</p>
                </div>
              </div>

              <div className='col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0' data-aos='zoom-in'>
                <div className='icon-box'>
                  <div className='icon'>
                    <i className='bx bx-tachometer'></i>
                  </div>
                  <h4>Action</h4>
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
                {loginStatus === '1' ? <p> Don't wait. Buy more reports now.</p> : <p> Don't wait. Login to get started.</p>}
              </div>
              <div className='col-lg-3 cta-btn-container text-center'>
                {loginStatus === '1' ? (
                  <Link className='cta-btn align-middle' to='/buy-more'>
                    Buy more reports
                  </Link>
                ) : (
                  <Link className='cta-btn align-middle' to='/pricing'>
                    Sign up
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id='team' className='team section-bg'>
          <div className='container'>
            <div className='section-title'>
              <h2>Team</h2>
              <p>Our highly talented team of experts will help you with your social media reputation</p>
            </div>

            <div className='row'>
              <div className='col-lg-6'>
                <div className='member d-flex align-items-start'>
                  <div className='pic text-center'>
                    <img src={`${process.env.PUBLIC_URL + '/team/lego_superman.jpg'}`} className='img-fluid' alt='' style={{ height: '150px' }} />
                  </div>
                  <div className='member-info'>
                    <h4>Michael Man Yin Lee</h4>
                    <span>Founder</span>
                    <p>MEng in Software Engineering, expert in Data Analytics</p>
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
                <div className='member d-flex align-items-start'>
                  <div className='pic text-center'>
                    <img src={`${process.env.PUBLIC_URL + '/team/lego_green_lantern.png'}`} className='img-fluid' alt='' style={{ height: '150px' }} />
                  </div>
                  <div className='member-info'>
                    <h4>Drew Burritt</h4>
                    <span>Chief Executive Officer</span>
                    <p>MEng in Software Engineering, expert in Machine Learning models</p>
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
                <div className='member d-flex align-items-start'>
                  <div className='pic text-center'>
                    <img src={`${process.env.PUBLIC_URL + '/team/lego_batman.jpg'}`} className='img-fluid' alt='' style={{ height: '150px' }} />
                  </div>
                  <div className='member-info'>
                    <h4>Bhavyai Gupta</h4>
                    <span>Product Manager</span>
                    <p>MEng in Software Engineering, expert in Full Stack Development</p>
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
                <div className='member d-flex align-items-start'>
                  <div className='pic text-center'>
                    <img src={`${process.env.PUBLIC_URL + '/team/lego_aquaman.jpg'}`} className='img-fluid' alt='' style={{ height: '150px' }} />
                  </div>
                  <div className='member-info'>
                    <h4>Thomas Scott</h4>
                    <span>Marketing Head</span>
                    <p>MEng in Software Engineering, expert in Sales and Marketing</p>
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
                <div className='member d-flex align-items-start'>
                  <div className='pic text-center'>
                    <img src={`${process.env.PUBLIC_URL + '/team/lego_cyborg.png'}`} className='img-fluid' alt='' style={{ height: '150px' }} />
                  </div>
                  <div className='member-info'>
                    <h4>Allen Ndonwi Shu</h4>
                    <span>Operations Head</span>
                    <p>MEng in Environmental Engineering, expert in Operations and Support</p>
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
    </React.Fragment>
  );
};

export default Home;
