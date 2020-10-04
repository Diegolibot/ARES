function start(){

    var sequence = 
    [
        ["boarspeech","worriedboar2","Our friend rover is having problems due to all the storms on mars, oh nooooo, pls help himm. Im afraid that sth bad will happen to him"],
        ["imgtext","rover.jpg","Uh Ohh"],
        ["imgtext", "rover.jpg", ["My battery is low and it's getting fark."]],
        ["boarspeech", "worriedboararms1", "Noooo friend roverrrr!!! What are we going to doo :'C"],
        ["options","What should we do?","Cry lots","Go save himmm","idc", "cry more","nv1",5,7],
        ["missionRes","win"],
        ["boarspeech", "blushingboararms", "Muy bien, esa era la respuesta correcta porque..."],
        ["missionRes","loose"],
        ["boarspeech", "worriedboararms1", "Noooooo, esa no era la respuesta corrcta"],
    ]

    goThroughStory(sequence);
}

//Después de elegir respuesta ir a imagen de failed con next que te lleve a otra misión donde boar te explica el tema a detalle .