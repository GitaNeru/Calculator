$(document).ready();
var f = [];

function captureVal(val) {
  f.push(val);
}
$('button').on('click', function() {
  var n = $(this).val();
  var e = $('input').attr('value', $('input').val() + n);
  
  $('input').append(e);
  
});

$('#equal').click(function() {
    var g = f.join('');
    var b = eval(g);
    $('input').attr('value', b);
});

$('#AC').click(function() {
    var blank = "";
    $('input').attr('value', blank);
    f = [];
});

$('#CE').click(function() {
    var z = $('input').attr('value');
    var y = z.slice(0, -1);
    var x = $('input').attr('value', y);
    $('input').append(x);
    f.pop();
});