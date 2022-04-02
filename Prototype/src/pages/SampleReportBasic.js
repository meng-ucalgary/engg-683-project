import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostsAuthored from '../fakeService/PostsAuthored';
import PostsTagged from '../fakeService/PostsTagged';
import IdentificationLeak from '../fakeService/IdentificationLeak';

const SampleBasicReport = () => {
  function handleContentRemoval() {
    window.alert('You will be redirected to reputation management firms for removal of troubled content.');
  }

  return (
    <React.Fragment>
      <Header />

      <main id='main'>
        <section id='breadcrumbs' className='breadcrumbs'>
          <div className='container'>
            <div className='d-flex justify-content-between align-items-center'>
              <h4 style={{ visibility: 'hidden' }}>heading not to be displayed</h4>
              <ol>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/reports'>View Generated Reports</Link>
                </li>
                <li>Report 25968</li>
              </ol>
            </div>
          </div>
        </section>

        <section className='inner-page'>
          <div className='container'>
            <h3 className='pb-5'>Report 25968 - Details</h3>
            <div className='px-4'>
              <div className='card shadow mb-4 px-3 text-dark'>
                <div className='card-body'>
                  <div className='px-3 py-5'>
                    <h5>
                      <u>Problematic Posts You Authored</u>
                    </h5>
                    <div className='row pt-3 px-3'>
                      <div className='col-lg-5'>
                        <img src={`${process.env.PUBLIC_URL + '/images/PostsAuthored.png'}`} alt='' className='img-fluid img-thumbnail' style={{ height: '100%', objectFit: 'scale-down' }} />
                      </div>
                      <div className='col-lg-7'>
                        <div className='card' style={{ border: '0' }}>
                          <div className='card-body'>
                            {PostsAuthored.length === 0 ? (
                              'No potentially problematic posts from you found'
                            ) : (
                              <table className='table table-hover' width='100%'>
                                <thead className='thead-dark'>
                                  <tr>
                                    <th>Social Media</th>
                                    <th>Link</th>
                                    <th>Post Date</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {PostsAuthored.map((item) => {
                                    return (
                                      <tr key={item['id']}>
                                        <td>{item['socialMedia']}</td>
                                        <td>
                                          <a href={item['url']}>{item['urlText']}</a>
                                        </td>
                                        <td>{item['postDate']}</td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr />

                  <div className='px-3 py-5'>
                    <h5>
                      <u>Problematic Posts You are Tagged On</u>
                    </h5>
                    <div className='row pt-3 px-3'>
                      <div className='col-lg-7'>
                        <div className='card' style={{ border: '0' }}>
                          <div className='card-body'>
                            {PostsTagged.length === 0 ? (
                              'No potentially problematic tagged posts found'
                            ) : (
                              <table className='table table-hover' width='100%'>
                                <thead className='thead-dark'>
                                  <tr>
                                    <th>Social Media</th>
                                    <th>Link</th>
                                    <th>Author</th>
                                    <th>Post Date</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {PostsTagged.map((item) => {
                                    return (
                                      <tr key={item['id']}>
                                        <td>{item['socialMedia']}</td>
                                        <td>
                                          <a href={item['url']}>{item['urlText']}</a>
                                        </td>
                                        <td>{item['author']}</td>
                                        <td>{item['postDate']}</td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-5'>
                        <img src={`${process.env.PUBLIC_URL + '/images/PostsTagged.png'}`} alt='' className='img-fluid img-thumbnail' style={{ height: '100%', objectFit: 'scale-down' }} />
                      </div>
                    </div>
                  </div>

                  <hr />

                  <div className='px-3 py-5'>
                    <h5>
                      <u>Potential Identification Leaks</u>
                    </h5>
                    <div className='row pt-3 px-3'>
                      <div className='col-lg-12'>
                        <div className='card' style={{ border: '0' }}>
                          <div className='card-body'>
                            {IdentificationLeak.length === 0 ? (
                              'No potential identification leaks found'
                            ) : (
                              <table className='table table-hover' width='100%'>
                                <thead className='thead-dark'>
                                  <tr>
                                    <th>Identification Type</th>
                                    <th>Link</th>
                                    <th>Leak Date</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {IdentificationLeak.map((item) => {
                                    return (
                                      <tr key={item['id']}>
                                        <td>{item['identityType']}</td>
                                        <td>
                                          <a href={item['url']}>{item['urlText']}</a>
                                        </td>
                                        <td>{item['postDate']}</td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button type='button' className='btn btn-primary mt-4' onClick={handleContentRemoval}>
                Get troubled content removed
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default SampleBasicReport;
