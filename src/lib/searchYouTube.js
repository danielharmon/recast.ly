import YOUTUBE_API_KEY from '../config/youtube.js';
var searchYouTube = (options, callback, errorCB) => {

  var optionsObject = {
    q: options.query || '',
    maxResults: options.max || 5,
    key: options.key || YOUTUBE_API_KEY,
    isEmbeddable: true,
    part: 'snippet',
    type: 'video'
  };
  var modCallBack = function(data) {
    callback(data.items);
  };
  $.get('https://www.googleapis.com/youtube/v3/search', optionsObject, modCallBack)
    .fail(()=> console.log('failed'));

};

export default searchYouTube;
