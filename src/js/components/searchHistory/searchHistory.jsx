import React from 'react';

export default class SearchHistory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='enclosing-tag' >

        <div className='card card-default' >
          <div className='card-header' >Search History</div>
          <div className='card-body' >
            <table id='searchHistory' className='table table-striped table-hover' >
              <tbody >

                <tr className=''>
                  <td className='historyCity' >San Diego</td>
                  <td className='spacer' ></td>
                  <td className='searchTime' >07/16/2018<br />11:54:12</td>
                </tr>

                <tr className=''>
                  <td className='historyCity' >Hong Kong</td>
                  <td className='spacer' ></td>
                  <td className='searchTime' >07/12/2018<br />13:21:46</td>
                </tr>

                <tr className=''>
                  <td className='historyCity' >Ubud</td>
                  <td className='spacer' ></td>
                  <td className='searchTime' >07/08/2018<br />04:52:29</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

      </div>
    );
  }
}
