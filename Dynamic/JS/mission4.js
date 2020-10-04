function start(){

    var sequence = 
    [
        ["imgtext", "jackconfondo.png", "*Ring, ring*"],
        ["boarspeech","blushingboar","Hello?"],
        ["imgtext", "jackconfondo.png", " Hello, Eros *cough, cough*, I don’t feel so good. I think I might have a fever."],
        ["boarspeech","sweatingboararms","Oh no! Do not fret, Jack, I am on my way."],
        
        ["imgtext","jackandboar.png","Sorry for the delay, you were a bit farther away than I thought. How are you feeling, Jack?"],
        ["imgtext","jackconfondo.png","I feel very bad, but I have a lot of work to do. All week I have been analyzing the surface of Mars to determine the mineralogy, as well as the radiation to see if it is harmful to humans."],
        ["imgtext","jackandboar.png","Jack, you need to rest for a while, remember that overworking makes you come down with a fever. Let me give you a quick check-up."],

        ["boarspeech","blushingboar","Oh... I see the problem now. You have grown a bit and your radiator no longer fits due to your current size."],
        ["boarspeech","questioningboar","Hmm… What can we do?"],
        
        ["options","What can we do?","Take Jack to the doctor to get a prescription for fever medicine.","Bathe him in ice water so that he gets better quickly and can work again.","Take care of him and hope he gets better soon.", "Change Jack's radiator for one his size and ask him not to get so overworked","nv4",10,16],
        
        ["missionRes","win"],
        ["boarspeech", "winkingboardown", "Satellites like Jack are objects that move around a larger object. Artificial satellites are machines made by people. These machines are launched into space and orbit the Earth or another celestial body. Satellites have at least two parts in common: an antenna and a power supply. The antenna is used to send and receive information. The power source can be a solar panel or a battery."],
        ["imgtext", "odyseey.jpg", "Jack, whose actual name is the Mars Odyssey spacecraft, was designed to find out what Mars is made of, detect water and shallow buried ice, and study the radiation environment."],
        ["boarspeech", "blushingboardown", "Communication satellites that always operate at full capacity have an overheating problem. Because there is no air in orbital space, the fans that are used to cool the computer on the ground are useless. In space, the temperature is lower than on the surface of the Earth, but in fact, heat dissipation is a more difficult problem than on the ground. Spaceships and satellites use large radiators to prevent overheating."],
        ["boarspeech", "blushingboararms", "It is important to know that in real life, satellites do not grow in size but, when they are built, scientists and engineers must know their dimensions to create right-size radiators so they don't break down. The stronger the satellite, the larger the radiator needed to cool it."],
        ["end"],
        
        ["missionRes","loose"],
        ["boarspeech", "worriedboararms1", "Nooo, that wasn't the right answer."],
        ["boarspeech", "blushingboararms", "Satellites like Sally are objects that move around a larger object. Artificial satellites are machines made by people. These machines are launched into space and orbit the Earth or another celestial body. Satellites have at least two parts in common: an antenna and a power supply. The antenna is used to send and receive information. The power source can be a solar panel or a battery."],
        ["boarspeech", "winkingboardown", "Satellites like Jack are objects that move around a larger object. Artificial satellites are machines made by people. These machines are launched into space and orbit the Earth or another celestial body. Satellites have at least two parts in common: an antenna and a power supply. The antenna is used to send and receive information. The power source can be a solar panel or a battery."],
        ["imgtext", "odyseey.jpg", "Jack, whose actual name is the Mars Odyssey spacecraft, was designed to find out what Mars is made of, detect water and shallow buried ice, and study the radiation environment."],
        ["boarspeech", "blushingboardown", "Communication satellites that always operate at full capacity have an overheating problem. Because there is no air in orbital space, the fans that are used to cool the computer on the ground are useless. In space, the temperature is lower than on the surface of the Earth, but in fact, heat dissipation is a more difficult problem than on the ground. Spaceships and satellites use large radiators to prevent overheating."],
        ["boarspeech", "blushingboararms", "It is important to know that in real life, satellites do not grow in size but, when they are built, scientists and engineers must know their dimensions to create right-size radiators so they don't break down. The stronger the satellite, the larger the radiator needed to cool it."],
        ["end"]
    ]

    goThroughStory(sequence);
}