$(".buttonans").click(function(){
    console.log($(".inputans").val());
    answers.push($(".inputans").val());
    refresh();
});


function refresh(){
    
    $(".anscontainer").html("");
    answers.forEach(ans => {
        $(".anscontainer").prepend(`
        <div class="row">
        <div class="col ansblock text-center">${ans}</div>
        </div>`);
    });

}