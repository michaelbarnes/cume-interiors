var React = require('react');
var ListItem = require('./list-item');

module.exports = React.createClass({
  render: function(){
    return <ul className="nav nav-pills">
      <ListItem title="HOME" linkUrl="#home"/>
      <ListItem title="ABOUT" linkUrl="#about"/>
      <ListItem title="SERVICES" linkUrl="#services"/>
      <ListItem title="CONTACT" linkUrl="#contact"/>
    </ul>
  }
});
