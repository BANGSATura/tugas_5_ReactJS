import React, { Component } from 'react';

class FormMakanan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pesanan: "",
      jumlah: ""
    }
    this.handleEventInputText = this.handleEventInputText.bind(this);
    this.handleEventInputNumber = this.handleEventInputNumber.bind(this);
    this.handleEventInputSubmit = this.handleEventInputSubmit.bind(this);
    this.Focus = React.createRef();
  }

  handleEventInputText(e) {
    this.setState({
      pesanan: e.target.value
    });
  }
  handleEventInputNumber(e) {
    this.setState({
      jumlah: e.target.value
    });
  }

  handleEventInputSubmit(e) {
    e.preventDefault()
    alert(
      "Pesanan anda adalah: " + this.state.pesanan +  " | Jumlah pesanan: "  + this.state.jumlah
    );
    this.setState({
      pesanan: "",
      jumlah: ""
    });
    this.Focus.current.focus();
  }

  render() {
    return (
      <div>
        <center>
          <form onSubmit={this.handleEventInputSubmit}>
            <input type="text" onChange={this.handleEventInputText} value={this.state.pesanan} placeholder="Masukkan Pesanan Anda" ref={this.Focus}/>
            <br/>
            <br/>
            <input type="number" onChange={this.handleEventInputNumber} value={this.state.jumlah} placeholder="Masukkan Jumlah Pesanan"/>
            <br/>
            <br/>
            <input type="submit" value="Pesan"/>
          </form>
        </center>
      </div>
    );
  }
}
export default FormMakanan;
