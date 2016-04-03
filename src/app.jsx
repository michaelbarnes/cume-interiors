
var React = require('react');
var ReactDOM = require('react-dom');

var NavBar = require('./nav-bar');
var Thumbnail = require('./thumbnail');
var Form = require('./form')

var App = React.createClass({
  render: function() {
    return <div>
      <NavBar/>
      <div className="container">
        <div className="row panel-default" id="home">
          <h2>
            HOME
          </h2>
        </div>
        <div className="row panel-default" id="about">
          <h2>
            ABOUT
          </h2>
        </div>
        <div className="row panel-default" id="services">
          <h2>
            SERVICES
          </h2>
          <p>All our services include</p>
          <div className="row panel-default">
            <Thumbnail assetUrl="./assets/chair.png" thumbnailText="Upholstry"/>
            <Thumbnail assetUrl="./assets/colors.png" thumbnailText="Upholstry"/>
            <Thumbnail assetUrl="./assets/couch.png" thumbnailText="Upholstry"/>
          </div>
          <div className="row">
            <Thumbnail assetUrl="./assets/curtains.png" thumbnailText="Curtains"/>
            <Thumbnail assetUrl="./assets/space.png" thumbnailText="Space Planning"/>
            <Thumbnail assetUrl="./assets/toy.png" thumbnailText="Kid's Rooms"/>
          </div>
        </div>
        <div className="row panel-default" id="contact">
          <h2>
            CONTACT
          </h2>
          <div className="col-md-6 col-md-offset-3">
            <Form />
          </div>
        </div>
      </div>
    </div>
  }
});

var Main = React.createElement(App, {});

ReactDOM.render(Main, document.querySelector('.main'));
