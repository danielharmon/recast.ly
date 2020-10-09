import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
      currentVideoIndex: 0
    };
    this.onTitleClick = this.onTitleClick.bind(this);
  }

  onTitleClick() {
    this.setState({currentVideoIndex: index});
  }

  render() {
    console.log('from app '+ JSON.stringify(this.state));
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.props[0]}/>
          </div>
          <div className="col-md-5">
            <VideoList video={this.state} onClick={this.onTitleClick}/>
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
