import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SampleReportList from '../fakeService/SampleReportList';

const Reports = () => {
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
                <li>View Generated Reports</li>
              </ol>
            </div>
          </div>
        </section>

        <section className='inner-page'>
          <div className='container'>
            <h3 className='pb-5'>View Generated Reports</h3>

            <div className='row'>
              <div className='col-lg-10 px-5'>
                {SampleReportList.length === 0 ? (
                  'No generated reports available'
                ) : (
                  <table className='table table-hover' width='100%'>
                    <thead className='thead-dark'>
                      <tr>
                        <th>Report ID</th>
                        <th>Report Type</th>
                        <th>Report Generation Date</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {SampleReportList.map((item) => {
                        return (
                          <tr key={item['id']}>
                            <td>{item['id']}</td>
                            <td>{item['type']}</td>
                            <td>{item['generationDate']}</td>
                            <td>
                              <Link to={item['url']} className='btn btn-outline-primary btn-sm'>
                                Details
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default Reports;
