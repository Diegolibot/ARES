function start(){

    var sequence = 
    [
        ["boarspeech","blushingboararms","Wow, look at these beautiful images that the satellites sent us!"],
        ["imgtext", "collage1.jpg", "Beautiful!"],
        ["boarspeech","winkingboar","Every day, my satellite friends send pictures of the new things they find on Mars, to me and my Earth friends. Some of them check the radiation levels, others capture the landforms of the planet, and my best friend Sally monitors the atmosphere and studies the subsoil to find out about the history of Mars."],
        ["boarspeech","winkingboardown","All the satellites love going around the planet and they are always on time, meeting at the same spot every day."],
        ["boarspeech","questioningboar","Hmmm… How odd, it appears that Sally the satellite did not make it on time today,  I wonder what happened to her."],
        ["boarspeech","sweatingboardown","I think she might have gotten lost again. It is important to find Sally and return her to her orbit… If she strayed too far from home she could be lost forever. We have to act fast."],
        ["yesno","Should we save Sally?",8,7],
        ["boarspeechrepeat","worriedboardown1","But I can't leave her alone, she's my best friend and friends support each other.",6],
        ["boarspeechrepeat","winkingboar","Yes, you are right, we need to find Sally!",9],
        
        ["boarspeech", "worriedboardown1", "Sally! Sally? Where are you?"],
        ["imgtext", "sally.gif", "Sally, here you are, I was getting worried about you!"],
        ["boarspeech", "winkingboar", "Just like a car, Sally needs fuel to get home again."],
        ["imgtext", "sallyperdidafondo.png", "[Sad satellite noises]"],
        ["boarspeech", "questioningboar", "Now that we have found her, what should we do?"],

        ["options","Now that we have found her, what should we do?","Scold Sally and make her come back on her own.","Get to Sally and give her some fuel to get her back home.","Get to Sally and give her some water to get her back home.", "Pull Sally with a rope until we get home.","nv2",15,21],
        
        
        ["missionRes","win"],
        ["boarspeech", "blushingboararms", "Satellites like Sally are objects that move around a larger object. Artificial satellites are machines made by people. These machines are launched into space and orbit the Earth or another celestial body. Satellites have at least two parts in common: an antenna and a power supply. The antenna is used to send and receive information. The power source can be a solar panel or a battery."],
        ["imgtext", "MRO.jpg","Sally, whose name is actually the Mars Reconnaissance Orbiter, was launched to advance our understanding of Mars through detailed observation, to examine potential landing sites for future surface missions, and to provide a high-data-rate communications relay for those missions. Scientists will use the spacecraft to study the surface, monitor the atmosphere, and probe underground, all to gain a better understanding of the distribution and history of Mars' water, be it frozen, liquid, or vapor."],
        ["boarspeech","winkingboardown","The correct answer is “Get to Sally and give her some fuel to get her back home”. To maintain communication with the Earth, satellites like Sally travel at exactly the same speed and are always located at the same point in the sky. However, it is necessary to modify the orbit from time to time so that the satellite does not go out of orbit and, consequently, rendered useless as communication becomes impossible. A thruster is used for this correction operation, but it takes up a lot of the satellite’s fuel. That’s the reason for providing Sally with some fuel."],
        ["boarspeech","winkingboararms","In this story, Eros found Sally and gave her fuel so that she could return to her orbit, however, currently we have not yet developed technologies that allow us the same noble task as Eros, so there are many satellites at risk of being lost forever."],
        ["end"],

        ["missionRes","loose"],
        ["boarspeech", "worriedboararms1", "Nooo, that wasn't the right answer."],
        ["boarspeech", "blushingboararms", "Satellites like Sally are objects that move around a larger object. Artificial satellites are machines made by people. These machines are launched into space and orbit the Earth or another celestial body. Satellites have at least two parts in common: an antenna and a power supply. The antenna is used to send and receive information. The power source can be a solar panel or a battery."],
        ["imgtext", "MRO.jpg","Sally, whose name is actually the Mars Reconnaissance Orbiter, was launched to advance our understanding of Mars through detailed observation, to examine potential landing sites for future surface missions, and to provide a high-data-rate communications relay for those missions. Scientists will use the spacecraft to study the surface, monitor the atmosphere, and probe underground, all to gain a better understanding of the distribution and history of Mars' water, be it frozen, liquid, or vapor."],
        ["boarspeech","winkingboardown","The correct answer is “Get to Sally and give her some fuel to get her back home”. To maintain communication with the Earth, satellites like Sally travel at exactly the same speed and are always located at the same point in the sky. However, it is necessary to modify the orbit from time to time so that the satellite does not go out of orbit and, consequently, rendered useless as communication becomes impossible. A thruster is used for this correction operation, but it takes up a lot of the satellite’s fuel. That’s the reason for providing Sally with some fuel."],
        ["boarspeech","winkingboararms","In this story, Eros found Sally and gave her fuel so that she could return to her orbit, however, currently we have not yet developed technologies that allow us the same noble task as Eros, so there are many satellites at risk of being lost forever."],
        ["end"]
    ]

    goThroughStory(sequence);
}