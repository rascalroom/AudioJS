// Global Classes

class COLLECTION {
  constructor(collection) {
    this.collection = collection;
    this.url = "http://" + window.location.host + "/";
  }

  // Create
  Create(obj) {
    var requestURL = this.url + this.collection + "/create?";
    Object.keys(obj).forEach(function(key) {
      requestURL = requestURL + key + "=" + obj[key] + "&";
    });
    requestURL = requestURL.slice(0, -1);

    io.socket.request({ method: 'get', url: requestURL });

    return;
  }

  // Read
  Read(key, value) {
    if(key && value) {
      var url = '/' + this.collection + '?' + key + '=' + value;
    } else {
      var url = '/' + this.collection;
    }

    return new Promise((result, reject) => {
      io.socket.get(url, {}, function(info) {
        result(info);
      });
    });
  }

  // Update
  Update(id, param, value) {
    var requestURL = this.url + this.collection + "/update/" + id + "?" + param + "=" + value;
    io.socket.request({ method: 'get', url: requestURL });

    return;
  }

  // Destroy
  Destory(id) {
    var requestURL = this.url + this.collection + "/destroy/" + id;
    io.socket.request({ method: 'get', url: requestURL });

    return;
  }
}

class URL {
  constructor(url) {
    this.url = url;
  }

  news(connect) {
    io.socket.request({ method: 'get', url: this.url + '/news?connect=' + connect });
  }

  getParam(param) {
    param = param.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + param + "(=([^&#]+)|&|#|$)"),
        results = regex.exec(this.url);
    if (!results) return null;
    if (!results[2]) return null;
    return decodeURIComponent(results[2].replace(/\+/g," "));
  }
}

// Local Classes

class QUESTION {
  constructor(question, feed) {
    this.question = question; // <- Promise
    this.feed = feed; // <- Number
  }

  get choiceOne() {
    function feedOver(feed){
      return function(info) {
        return info[feed];
      }
    }

    return this.question.then(feedOver(this.feed));

  }

  Score(choice) {
    function choiceOver(choice){
      return function(info) {
        if(info.answer==choice){
	  return [ true , info.answer ];
	} else {
	  return [ false , info.answer ];
	}
      }
    }

    return this.choiceOne.then(choiceOver(choice));
  }
}
