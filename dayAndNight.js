var tag = {
  setColor: function(color) {
    var a_list = document.querySelectorAll('a');
    var li_list = document.querySelectorAll('li');

    for (let i = 0; i < a_list.length; i++) {
      a_list[i].style.color = color;
    }
    for (let i = 0; i < li_list.length; i++) {
      li_list[i].style.color = color;
    }
  }
}

var bodyChange = {
  setColor: function(color) {
    var bodyStyle = document.querySelector('body').style;
    bodyStyle.color = color;
  },
  setBackColor: function(color) {
    var bodyStyle = document.querySelector('body').style;
    bodyStyle.backgroundColor = color;
  }
}

function mouse(self) {
  var li_list = document.querySelectorAll('li');

  if (self.value == 'turn off') {
    bodyChange.setColor('white');
    bodyChange.setBackColor('black')
    tag.setColor('rgb(27, 232, 49)');
    self.value = 'turn on';
  } else {
    bodyChange.setColor('black');
    bodyChange.setBackColor('white')
    tag.setColor('rgb(39, 104, 213)');
    self.value = 'turn off';
  }
}
