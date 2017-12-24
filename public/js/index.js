$(document).ready(()=>{
  $(".button-collapse").sideNav()
  $.ajax({
    url: `/articles/`,
    type: 'GET',
    success: function(response) {
      const limit = 25
      for(let i = 0;i<response.length && i<limit;i++){
        $('#cards').append(
        `<div class='col s12 m6 l4'>
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">${response[i].title}</span>
              <h5>${response[i].category}</h5>
              <p>${response[i].description}</p>
              <h4 style='display: none;' class='articleId'>${response[i].id}</h4>
            </div>
            <div class="card-action">
              <span href="#" class='art'>Read on</span>
            </div>
          </div>
        </div>`
      )}
    },
    error: function (response) {
      Materialize.toast('Something went wrong, please refresh the page and try again', 6000)
    },
  })
  $(document).on('click','.art',(event)=>{
    event.preventDefault()
    let articleId = $(event.target).closest('.card').find('.articleId').text()
    console.log(articleId)
    localStorage.clear()
    localStorage.setItem("articleId", articleId)
    window.location.href = "article.html"
  })
})
