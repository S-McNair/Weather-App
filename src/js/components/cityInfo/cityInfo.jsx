import React from 'react';

export default class CityInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      apiName,
      tempF,
      latLong,
      pressure,
      humidity,
      lowTempF,
      highTempF,
      windSpeed,
      weatherReport,
      weatherDetails } = this.props;
    //  console.log(this.props);
    return (
      <div id='enclosing-tag' >

        <div className='card card-default' >
          <div className='card-header' >City Information</div>
          <div className='card-body cityInfo' ><br />
            <h1 className='cityName' >{ apiName } </h1>
            <h7 className='latLong'>{ latLong }</h7><br />
            <p id='weatherDetails' >{ weatherDetails }</p>
            <br /><hr className='style13' /><br />
            {/* ------------------------------------------------------------- begin row 1 ------------------------------------------------------------- */}
            <div className='infoDisplay' >
              <div id='row1' className='form-group row' >
                <div id='temp' className='card card-default col-4 infoCard' >
                  <div className='card-body' >
                    <h6 className='infoLabel' >Temperature (F)</h6><br />
                    <h5 className='infoDisplay' >{ tempF }</h5>
                  </div>
                </div>

                <div id='pressure' className='card card-default col-4 infoCard' >
                  <div className='card-body' >
                    <h6 className='infoLabel' >Pressure</h6><br />
                    <h5 className='infoDisplay' >{ pressure }</h5>
                  </div>
                </div>

                <div id='humidity' className='card card-default col-4 infoCard' >
                  <div className='card-body' >
                    <h6 className='infoLabel' >Humidity</h6><br />
                    <h5 className='infoDisplay' >{ humidity }</h5>
                  </div>
                </div>
              </div>
              {/* ------------------------------------------------------------- begin row 2 ------------------------------------------------------------- */}
              <div id='row2' className='form-group row' >
                <div id='lowTemp' className='card card-default col-4 infoCard' >
                  <div className='card-body' >
                    <h6 className='infoLabel' >Lowest Temp (F)</h6><br />
                    <h5 className='infoDisplay' >{ lowTempF }</h5>
                  </div>
                </div>

                <div id='highTemp' className='card card-default col-4 infoCard' >
                  <div className='card-body' >
                    <h6 className='infoLabel' >Highest Temp (F)</h6><br />
                    <h5 className='infoDisplay' >{ highTempF }</h5>
                  </div>
                </div>

                <div id='windSpeed' className='card card-default col-4 infoCard' >
                  <div className='card-body' >
                    <h6 className='infoLabel' >Wind Speed</h6><br />
                    <h5 className='infoDisplay' >{ windSpeed }</h5>
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
