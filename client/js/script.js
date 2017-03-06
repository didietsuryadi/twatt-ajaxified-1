$(document).ready(
  loadTwitt()
)

function loadTwitt(){
  $.ajax({
    url:"http://localhost:3000/twatt",
    type: "GET",
    success:function (data) {
      if(!data){
        console.log('error');
      }else{
        data.forEach(function (twitt) {
          var row = `<li>
            <div class="timeline-badge">
              <a><i class="fa fa-circle" id=""></i></a>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4>${twitt.user.name}</h4>
              </div>
              <div class="timeline-body">
                <p>${twitt.text}</p>
              </div>
              <div class="timeline-footer">
                <p class="text-right">${twitt.created_at}</p>
              </div>
            </div>
          </li>`

        $('#timeline').append(row)
        })
      }
    },
    fail:function (err) {
      if(err) throw err
    }
  })
}

function addTwitt(){
  $.ajax({
    url: "http://localhost:3000/twatt",
    type: "POST",
    data: {
      status : $('#status').val()
    },
    success: function (data) {
      loadTwitt()
    },
    fail: function (err) {
      if(err) throw err
    }
  })
}
