import React from 'react';

export default class SearchHistory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const searchHistory = this.props.searchHistory;

    return (
      <div id='enclosing-tag' >

        <div className='card card-default' >
          <div className='card-header' >Search History</div>
          <div className='card-body view' >
            <table id='searchHistory' className='table table-striped table-hover' >
              <tbody >

                {
                  searchHistory.reverse().map(history => (
                    <tr className='searchHistory'>
                      <td className='historyCity' >{history.apiName}</td>
                      <td className='spacer' ></td>
                      <td className='searchTime' >{ history.dateMDY }<br />{ history.time }</td>
                    </tr>
                  ))

                }

              </tbody>
            </table>
          </div>
        </div>

      </div>
    );
  }
}
