var React = require('React');

module.exports = React.createClass({
  render: function(){
    return <li role="" className="presentation">
      <a href={this.props.linkUrl}>{this.props.title}</a>
    </li>
  }
});
