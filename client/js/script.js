var app = new Vue({
  el: '#root',
  data: {
    tweets : '',
    status : ''
  },
  methods: {
    loadTwitt: function() {
      $.ajax({
        url: "http://localhost:3000/twatt",
        type: "GET",
        success:function (data) {
          app.tweets = data;
        },
      })
    },
    addTwitt: function () {
      $.ajax({
        url: "http://localhost:3000/newtwatt",
        type: "POST",
        data: {
          status: app.status,
        },
        success:function (data) {
          app.status = ""
          app.loadTwitt();
        },
      })
    }
  }
})
app.loadTwitt();
