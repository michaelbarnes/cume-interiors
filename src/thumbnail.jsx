var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <div className="col-sm-6 col-md-4">
      <div className="thumbnail">
        <img src={this.props.assetUrl} alt="..."/>
        <div className="caption">
          <h3>{this.props.thumbnailTitle}</h3>
          <p>{this.props.thumbnailText}</p>
        </div>
      </div>
    </div>
  }
});
