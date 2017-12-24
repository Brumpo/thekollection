$(document).ready(()=>{
  $(".button-collapse").sideNav()
  $('#login').on('submit',event=>{
    event.preventDefault()
    var username = $('#user').val()
    var password = $('#pass').val()
    $.ajax({
      url:'/author',
      type:'POST',
      data:{
        username,
        password
      },
      success: response=>{
        console.log(response)
        window.location.href = "index.html"
      },
      error: err=>{
        Materialize.toast('Please check your user name and / or password and try again', 6000)
      }
    })
  })

})
