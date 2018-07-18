import React from 'react';

export default class CityInfo extends React.Component {
  constructor(props) {
    super(props);

    // this.getWeather = this.getWeather.bind(this);
  }

  // getWeather(e) {
  //   const { dispatch } = this.props;
  //   const { value } = e.target;
  //   dispatch(getWeather(value));
  // }

  render() {
    const { apiName } = this.props;
    // console.log(this.props);
    return (
      <div id='enclosing-tag' >

        <div className='card card-default' >
          <div className='card-header' >City Information</div>
          <div className='card-body cityInfo' ><br />
            <h2 className='cityName' >{ this.props.apiName }</h2>
            <h7 className='latLong'>Lat/Long: 32.71, 117.16</h7>
            <br /><hr className='style13' /><br />
            {/* ------------------------------------------------------------- begin row 1 ------------------------------------------------------------- */}
            <div className='infoDisplay' >
              <div id='row1' className='form-group row' >
                <div id='temp' className='card card-default col-4 infoCard' >
                  <div className='card-body' >
                    <h6 className='infoLabel' >Temperature (F)</h6><br />
                    <h5 className='infoDisplay' >77F</h5>
                  </div>
                </div>

                <div id='pressure' className='card card-default col-4 infoCard' >
                  <div className='card-body' >
                    <h6 className='infoLabel' >Pressure</h6><br />
                    <h5 className='infoDisplay' >978</h5>
                  </div>
                </div>

                <div id='humidity' className='card card-default col-4 infoCard' >
                  <div className='card-body' >
                    <h6 className='infoLabel' >Humidity</h6><br />
                    <h5 className='infoDisplay' >48%</h5>
                  </div>
                </div>
              </div>
              {/* ------------------------------------------------------------- begin row 2 ------------------------------------------------------------- */}
              <div id='row2' className='form-group row' >
                <div id='lowTemp' className='card card-default col-4 infoCard' >
                  <div className='card-body' >
                    <h6 className='infoLabel' >Lowest Temp (F)</h6><br />
                    <h5 className='infoDisplay' >69F</h5>
                  </div>
                </div>

                <div id='highTemp' className='card card-default col-4 infoCard' >
                  <div className='card-body' >
                    <h6 className='infoLabel' >Highest Temp (F)</h6><br />
                    <h5 className='infoDisplay' >82</h5>
                  </div>
                </div>

                <div id='windSpeed' className='card card-default col-4 infoCard' >
                  <div className='card-body' >
                    <h6 className='infoLabel' >Wind Speed</h6><br />
                    <h5 className='infoDisplay' >24.12mph</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}
