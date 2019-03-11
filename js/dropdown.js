$(document).ready(function () {

  // Events: click, change
  $('.dropdown')
    .on('click', '.dropdown__button', function () {
      $(this).siblings('.dropdown__list').toggle();
      $(this).toggleClass('active');
    })
    .on('change', '[type="checkbox"]', function () {
      var container = $(this).closest('.dropdown');
      var numChecked = container.find('[type="checkbox"]:checked').length;
      container.find('.quantity').text(numChecked + ' active filters' || ' ');
      if (numChecked === 0) {
        container.find('.quantity').text(' ')
      }
    });

  // JSON of categories
  var categories = [
    { name: 'All', slug: 'all' },
    { name: 'Travel & Registration', slug: 'travel-registration' },
    { name: 'Breaks & Meals', slug: 'break-meals' },
    { name: 'PegaWORLD', slug: 'pegaworld' },
    { name: 'Mobile', slug: 'mobile' },
    { name: 'Customer Centricity', slug: 'customer-centercity' },
    { name: 'User Centered Design', slug: 'user-centered-design' },

  ];

  for (var j = 0; j < categories.length; j++) {
    let catSlug = categories[j].slug;
    $('.dropdown').find('.list').append($('<li class="dropdown__item"><input name="' + catSlug + '" type="checkbox" id="' + catSlug + '" data-category="' + catSlug + '" value="' + catSlug + '" ><label for="' + catSlug + '">' + categories[j].name + '</label></li>'))
  }
  $('.timeline').slick({
    adaptiveHeight: true,
    infinite: false,
    slide: ".day",
    arrows: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1190,
        settings: 'unslick'
      }
    ]

  });
  $('.days__list').slick({
    asNavFor: '.timeline',
    infinite: false,
    slide: ".days__item",
    adaptiveHeight: true,
    respondTo: 'window'
  });

})

$(window).scroll(function () {
  if ($(window).scrollTop() >= 134) {
    $('nav').addClass('is-fixed');
    $('.banner-mobile').addClass('is-fixed');
  }
  else {
    $('nav').removeClass('is-fixed');
    $('.banner-mobile').removeClass('is-fixed');
  }
});