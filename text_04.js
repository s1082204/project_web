$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});
$(document).ready(function(){
    document.getElementById('上箭頭').style.display = 'none';
    document.getElementById('choose').style.display = 'none';
});

function next1(){
    document.getElementById('side_text1').style.display = 'block';
    document.getElementById('side_text2').style.display = 'block';
    document.getElementById('side_text3').style.display = 'block';
    document.getElementById('點點').style.display = 'block';
    document.getElementById('side_file').style.display = 'block';
    document.getElementById('submit').style.display = 'block';
    document.getElementById('上箭頭').style.display = 'none';
    document.getElementById('choose').style.display = 'none';
    document.getElementById('下箭頭').style.visibility = 'visible';
    
    $('[limit="true"]').keyup(function(){
        var _max = $(this).attr('maxlength');
        var _total = $(this).val().length;
        var _left = _max - _total ;
        var span_id = $(this).attr('id')+'_sp';
        $('#'+span_id).text('剩餘'+_left+'字');
        if( _left == 0 ){
            alert("不能再加了");
        }
    });
}
function next(){  
    document.getElementById('side_text1').style.display = 'none';
    document.getElementById('side_text2').style.display = 'none';
    document.getElementById('side_text3').style.display = 'none';
    document.getElementById('點點').style.display = 'none';
    document.getElementById('side_file').style.display = 'none';
    document.getElementById('submit').style.display = 'none';
    document.getElementById('上箭頭').style.display = 'block';
    document.getElementById('choose').style.display = 'block';
    document.getElementById('下箭頭').style.visibility = 'hidden';
}

