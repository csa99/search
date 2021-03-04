var size=10;
getList();

$("#list").on("click", "a", function(){
    var image=$(this).find("img").attr("src");
    var title=$(this).attr("title");
    var authors=$(this).attr("authors");
    var price=$(this).attr("price");
    var contents=$(this).attr("contents");
    $("#image").attr("src", image); //속성을 가져오는 것-attr
    $("#title").html(title+" / "+authors); //값을 가져오는 것-html
    $("#price").html(price+"원");
    $("#contents").html(contents);
});

$("#list").on("click", "a", function(){
});

/*
$("#txtQuery").on("keydown", function(e){
    if(e.keyCode==13){
        size=10;
        getList();}
});
*/

$("#txtQuery").on("keydown", function(){
    page=1;
    getList();
});

$("#btnMore").on("click", function(){
    size+=10;
    getList();
});

function getList(){
    var query=$("#txtQuery").val();
    $.ajax({
        type:"get",
        url:url,
        headers:{"Authorization": "KakaoAK ab040c667e439b68caec9c552babc7a1"},
        data:{"query":query, "size":size},
        dataType:"json",
        success:function(data){
            var temp=Handlebars.compile($("#temp").html());
            $("#list").html(temp(data)).listview("refresh");
        }
    });
}