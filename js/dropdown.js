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
    { name: 'ALL', icon: '' },
    { name: 'Travel & Registration', icon: '&#xf072' },
    { name: 'Breaks & Meals', icon: '&#xf7b6' },
    { name: 'PegaWORLD', icon: '&#xf004' },
    { name: 'Mobile', icon: '&#xf3cd' },
    { name: 'Customer Centricity', icon: '&#xf0c0' },
    { name: 'User Centered Design', icon: '&#xf303' },

  ];

  for (var j = 0; j < categories.length; j++) {
    $('.dropdown').find('.list').append($('<li class="dropdown__item"><input name="' + categories[j].name + '" type="checkbox" id="' + categories[j].name + '"><span class="fas">' + categories[j].icon + '</span><label for="' + categories[j].name + '">' + categories[j].name + '</label></li>'))
  }

})