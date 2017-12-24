$(document).ready(()=>{
  $(".button-collapse").sideNav()
  const articleId = localStorage.getItem("articleId")
  $.ajax({
    url: `/articles/${articleId}`,
    type: 'GET',
    success:function(response){
      $('#articlebody').append(
        `<h1>${response.title}</h1>
        <p>${response.content}</p>
        <img src='${response.media}'/>
        <p>${response.created_at}</p>`
      )
    },
    error:function (response){
      Materialize.toast('Something went wrong, please refresh the page and try again', 6000)
    }
  })
})
