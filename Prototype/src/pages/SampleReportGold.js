import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostsAuthored from '../fakeService/PostsAuthored';
import PostsTagged from '../fakeService/PostsTagged';
import ImagesAuthored from '../fakeService/ImagesAuthored';
import ImagesTagged from '../fakeService/ImagesTagged';
import IdentificationLeak from '../fakeService/IdentificationLeak';

const SampleGoldReport = () => {
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
                <li>Report 27563</li>
              </ol>
            </div>
          </div>
        </section>

        <section className='inner-page'>
          <div className='container'>
            <h3 className='pb-5'>Report 27563 - Details</h3>

            <div className='px-3'>
              <h5>Problematic Posts You Authored</h5>
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

            <div className='pt-5 px-3'>
              <h5>Problematic Posts You are Tagged On</h5>
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

            <div className='px-3'>
              <h5>Problematic Images You Uploaded</h5>
              <div className='row pt-3 px-3'>
                <div className='col-lg-5'>
                  <img src={`${process.env.PUBLIC_URL + '/images/ImagesAuthored.png'}`} alt='' className='img-fluid img-thumbnail' style={{ height: '100%', objectFit: 'scale-down' }} />
                </div>
                <div className='col-lg-7'>
                  <div className='card' style={{ border: '0' }}>
                    <div className='card-body'>
                      {ImagesAuthored.length === 0 ? (
                        'No potentially problematic images from you found'
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
                            {ImagesAuthored.map((item) => {
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

            <div className='pt-5 px-3'>
              <h5>Problematic Images You are Tagged On</h5>
              <div className='row pt-3 px-3'>
                <div className='col-lg-7'>
                  <div className='card' style={{ border: '0' }}>
                    <div className='card-body'>
                      {ImagesTagged.length === 0 ? (
                        'No potentially problematic tagged images found'
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
                            {ImagesTagged.map((item) => {
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
                  <img src={`${process.env.PUBLIC_URL + '/images/ImagesTagged.png'}`} alt='' className='img-fluid img-thumbnail' style={{ height: '100%', objectFit: 'scale-down' }} />
                </div>
              </div>
            </div>

            <div className='pt-5 px-3'>
              <h5>Potential Identification Leaks</h5>
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
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default SampleGoldReport;
