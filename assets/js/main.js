(function () {

  // Set URL Class
  var url = new URL(window.location.href);

  // mysetting collection
  var ls = url.getParam('ls');
  if(ls){
    var mysettings = new COLLECTION('mysetting');
    mysettings.Read('eMail', ls).then(function(info) {
      var mysetting = new Vue({
        el: '#mysetting',
        data: {
          mysettings: info[0],
          ls: ls
        }
      });
    });

  // utterance collection
    var utterance = new COLLECTION('mysetting');

    utterance.Read('eMail', ls).then(function(info) {
      // Define
      // <--

      /*
       * <div id="utteranceMeta">
       *
       *   <utterances number="1" v-bind:recordID="recordID"></utterances>
       *   <utterances number="2" v-bind:recordID="recordID"></utterances>
       *   <utterances number="3" v-bind:recordID="recordID"></utterances>
       *   <utterances number="4" v-bind:recordID="recordID"></utterances>
       *
       * </div>
       */

      // <utterances v-bind:recordID="recordID"></utterances>
      Vue.component('utterance', {
        render: function (createElement) {
          var number = this.$slots.default[0].children[0].text;
          var recordID = this.$slots.default[1].children[0].text;

          switch(number){
            case "1":
              var template = info[0].item1.recordName;
              break;
            case "2":
              var template = info[0].item2.recordName;
              break;
            case "3":
              var template = info[0].item3.recordName;
              break;
            case "4":
              var template = info[0].item4.recordName;
              break;
	  }

          return createElement(
            'span',
            template
          )
        }
      });
      Vue.component('utterances', {
        props: {
          number: {
            type: Number,
            require: true
          },
          recordID: {
            type: Number,
            require: true
          }
        },
        template: '<div class="col s12 m6 l6">' +
	          '<div class="card-panel center blue lighten-5">' +
                  '<utterance><span>{{ number }}</span><span>{{ recordID }}</span></utterance>' +
	          '</div>' +
	          '</div>'
      });
      // <--

      var data = {
        ls: ls
      };

      var utteranceMeta = new Vue({
        el: '#utterance',
        data: data,
      });

    });

  }

}) ();
