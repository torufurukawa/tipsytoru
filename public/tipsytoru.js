var tipsytoru = {
  intent: function(text) {
    var encodedText = encodeURIComponent(text);
    var url = 'https://twitter.com/intent/tweet?text=' + encodedText;
    return url;
  }
};
