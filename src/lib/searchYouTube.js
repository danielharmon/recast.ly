var searchYouTube = (options, callback) => {

  var optionsObject = {
    q: options.query,
    maxResults: options.max,
    key: options.key,
    isEmbeddable: true,
    part: 'snippet',
    type: 'video'
  };
  var modCallBack = function(data) {
    callback(data.items);
  };
  $.get('https://www.googleapis.com/youtube/v3/search', optionsObject, modCallBack);

};

export default searchYouTube;
