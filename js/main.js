$(document).ready(function(){
    $("#login_btn").click(function(){
        $("#login").css("display","none");
        $("#start").css("display","none");
    })
    $("#introduction").click(function(){
        $.ajax({
            type:"GET",
            url:"../data/pai.txt",
            dataType:"txt",
            success:function(data){
                if(data.success){
                    $("#flower h1").text(data);
                }
                else{
                    $("#flower h1").text("无法连接该书书目");
                }
            }
        })
    })
})
