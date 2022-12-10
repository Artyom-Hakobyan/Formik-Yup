import './App.css';
import SignUp from './components/SignUp';
import signUpImage from './images/signup-transparent-cropped.png'

function App() {
  return (
    <div className="container mt-3">
      <div className='row'>
        <div className='col-md-5'>
          <SignUp />
        </div>
        <div className='col-md-7'>
          <img className='img-fluid w-100' src={signUpImage} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default App;
