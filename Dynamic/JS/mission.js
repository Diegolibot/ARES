function boar_speech(boarimg, text){
    hideall();
    $(".boarspeech").show();
    $(".romulo").attr("src","../Resources/Images/boar/"+boarimg+".png");
    $(".infotxt").text(text);
}

function imgtext(img, text){
    hideall();
    $(".imagetext").show();
    $(".imgtxt").text(text);
    $(".imgtxti").attr("src","../Resources/Images/"+img);
}

function options(question, op1, op2, op3, op4){
    hideall();
    $(".options").show();
    $(".optiontit").text(question);
    $("#nv1").text(op1);
    $("#nv2").text(op2);
    $("#nv3").text(op3);
    $("#nv4").text(op4);
    $(".controls").hide();
}

function missionRes(wl){
    hideall();
    console.log(wl);
    $(".missionRes").show();
    if(wl=="win"){
        $(".boar").attr("src","../Resources/Images/boar/winkingboararms.png");
        $(".missionresimg").attr("src","../Resources/Images/MissionA.png");
    }
    else{
        $(".boar").attr("src","../Resources/Images/boar/worriedboardown1.png");
        $(".missionresimg").attr("src","../Resources/Images/MissionF.png");
    }
}

function hideall(){
    $(".boarspeech").hide();
    $(".imagetext").hide();
    $(".options").hide();
    $(".MissionRes").hide();
    $(".controls").show();
}

function goThroughStory(sequence){

    async function next(j, sequence){
        var curr = sequence[j];

        if(curr[0]=="boarspeech"){
            boar_speech(curr[1],curr[2]);
            j++;
            await $(".nextb").click(function(){
                next(j,sequence);
            });
        }
        else if(curr[0]=="imgtext"){
            imgtext(curr[1],curr[2]);
            j++;
            await $(".nextb").click(function(){
                next(j,sequence);
            });
        }
        else if(curr[0]=="options"){
            options(curr[1],curr[2],curr[3],curr[4],curr[5],curr[6]);
            await $(".optionb").click(function(event){
                if(curr[6]==event.target.id){
                    next(curr[7],sequence);
                }
                else{
                    next(curr[8],sequence);
                }
            })
        }
        else if(curr[0]=="missionRes"){
            missionRes(curr[1]);
            console.log(curr);
            console.log("aqui");
            await $(".nextb").click(function(){
                j++;
                next(j,sequence);
            });
        }

        
    }

    next(0,sequence);


}