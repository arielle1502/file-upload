import './App.css';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FileUpload from './components/FileUpload';

function App() {
  return (
    <div className="App">
     <Header branding='Contact Manager'/>
          <div className="container">
          <div className="row">
    <div className="col py-5">
      <h2>Select if Interia or Universal</h2>
      <div className="form-check" role="group" data-toggle="buttons">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
Universal  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label className="form-check-label" htmlFor="flexRadioDefault2">
Inertia  </label>
</div>
  </div>
  </div>
  <div className="row">
    <div className="col py-5">
      <h2>Select if 0 stock should be backorder or out of stock</h2>
      <div className="form-check" role="group" >
  <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault3"/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
Backorder </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault4"/>
  <label className="form-check-label" htmlFor="flexRadioDefault2">
Out of Stock </label>
</div>
  </div>
  </div>
  <div className="row">
    <div className="col py-5">
      <h2>Do you want to do a price update?</h2>
      <div className="form-check" role="group" data-toggle="buttons">
  <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault1"/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
Yes </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault2"/>
  <label className="form-check-label" htmlFor="flexRadioDefault2">
No </label>
</div>
  </div>
  </div>

 <FileUpload/>
<div className="row">
<div className="col-6 mx-auto my-3">
  <button className="btn btn-info" type="button">Submit</button>
  </div>
</div>
          
          </div>
          <Footer />
    </div>
  );
}

export default App;
