var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <form>
      <div className="form-group">
        <label>First Name</label>
        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Name"/>
      </div>
      <div className="form-group">
        <label>Surname</label>
        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Surname"/>
      </div>
      <div className="form-group">
        <label>Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
      </div>
      <div className="form-group">
        <label>Information</label>
        <textarea className="form-control" rows="3" placeholder="..."></textarea>
      </div>
      <button type="submit" className="btn btn-default">Submit</button>
    </form>
  }
});
