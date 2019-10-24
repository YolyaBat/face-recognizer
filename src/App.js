import React, { Component } from 'react';
import Navigation from './components/navigation/navigation'
import SignIn from './signIn/SignIn'
import Register from './register/Register'
import Logo from './components/logo/logo'
import LinkForm from './components/linkForm/linkForm'
import Rank from './components/rank/rank'
import FaceRecognition from'./components/faceRecognition/faceRecognition'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'
import './App.css';

const particlesOptions = {
  particles: {
    polygon: {
      draw: {
        enable: true,
        stroke: {
          width: 10
        }
      }
    },
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

const app = new Clarifai.App({
  apiKey: '2250286a95d84032978763441fc92215'
 });

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      imageURL: '',
      box: {},
      route: 'signIn'
    }
    this.onInputChange = this.onInputChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.setClarifai = this.setClarifai.bind(this)
    this.onRouteChange = this.onRouteChange.bind(this)
  }
  onRouteChange(route) {
    this.setState({
      route: route
    })
  }
  onInputChange(event) {
    this.setState({
      input: event.target.value
    })
  }
  onSubmit() {
    this.setState({
      imageURL: this.state.input
    }, () => this.setClarifai(this.state.imageURL))
  }
  calculateFaceLocation(obj) {
    const clarifaiObj = obj.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.querySelector('#inputImage')
    const width = Number(image.width)
    const height = Number(image.height)
    return {
      topRow: clarifaiObj.top_row * height,
      leftCol: clarifaiObj.left_col * width,
      bottomRow: height - (clarifaiObj.bottom_row * height),
      rightCol: width - (clarifaiObj.right_col * width)
    }
  }
  displayFaceBox = (box) => {
    this.setState({
      box
    })
    console.log(this.state.box)
  }

  setClarifai(url) {
    app.models.predict(Clarifai.FACE_DETECT_MODEL, url)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="App">
        <Particles className="particles"
          params={particlesOptions}
        />
        <Navigation onRouteChange={this.onRouteChange} />
        {this.state.route === 'home' ?
          <div>
            <Logo />
            <Rank />
            <LinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
            <FaceRecognition image={this.state.imageURL} box={this.state.box} />
          </div>
          : (
            this.state.route === 'signIn' ?
              <SignIn onRouteChange={this.onRouteChange} />
            :
            <Register onRouteChange={this.onRouteChange} />
          )
        }
      </div>
    );
  }
}

export default App;
