import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor(props = {searchYouTube: searchYouTube}) {
    super(props);
    this.state = {
      videos: [{
        etag: '',
        id: {
          videoId: ''
        },
        snippet: {
          title: '',
          description: '',
          thumbnails: {
            default: {
              url: ''
            }
          }
        }
      }],
      currentVideoIndex: 0
    };
    this.onTitleClick = this.onTitleClick.bind(this);
    this.searchYouTube = searchYouTube;

  }

  onTitleClick(video) {
    this.setState({currentVideoIndex: this.state.videos.indexOf(video)});
  }

  componentDidMount() {
    this.props.searchYouTube({}, (data) => this.setState({videos: data}));
  }

  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.videos[this.state.currentVideoIndex]}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} onClick={this.onTitleClick}/>
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
