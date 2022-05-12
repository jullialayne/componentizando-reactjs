import React from "react";
import { Link } from 'react-router-dom';


class Cadastro extends React.Component {

constructor(props) {
  super(props);
  this.state = {value: ''};

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  alert('Um nome foi enviado: ' + this.state.value);
  event.preventDefault();
}

render() {
  return (
    <>
    <form className="modal-content animate" action="/action_page.php" method="post">
   
    <div className="container">
      <label  ><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required></input>

      <label   ><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required></input>
      <center>  
      <button type="submit">Login</button></center>
      
    </div>

    <div class="container"  >
      <button type="button" onclick=" display='none'" className="cancelbtn">Cancel</button>
      <span class="psw">Forgot <a href="#">password?</a></span>
    </div>
    <Link to="/login">login</Link>
  </form>
    <form onSubmit={this.handleSubmit}>
      <label>
        Nome:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Enviar" />
    </form>
    </>
  );
}
}
export default Cadastro;
