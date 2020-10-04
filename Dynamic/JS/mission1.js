function start(){

    var sequence = 
    [
        ["boarspeech","blushingboar","Hello there, crewmate! It’s me, Eros, the wild boar.  Are you ready to complete today's tasks?"],
        ["imgtext", "dust.gif", "[ALERT!]"],
        ["boarspeech","worriedboardown1","Oh no! Did you see that? A dust storm is coming! It looks like we won’t be able to go out today."],
        ["imgtext", "tormentadearena.png", "[Angry storm noises]"],
        ["boarspeech", "sweatingboararms", "Oh boy! I just remembered I left Robert the rover outside yesterday!"],
        ["yesno","Should I go get him?",7,6],
        ["boarspeechrepeat","worriedboardown1","But he needs us...",5],
        ["boarspeechrepeat","winkingboar","Okay, let's go",8],
        ["boarspeech", "blushingboardown", "Remember that dust storms are formed due to the strong winds on Mars, which lift the sand from the ground by several meters. These can last a long time, during which the Sun's rays cannot reach the surface to recharge our communication devices."],
        ["boarspeech", "questioningboar", "What’s the best thing we can do in this situation?"],
        ["options","What’s the best thing we can do in this situation?","Let Robert the rover on.","Talk to Robert with a walkie talkie and comfort him.","Set Robert the rover to sleep mode.", "Get a new rover.","nv3",11,14],
        ["missionRes","win"],
        ["boarspeech", "blushingboararms", "The correct answer was 'Set Robert the rover to sleep mode.' By doing this, Robert saves his energy and uses it solely on his mission watch, which will wake him up when the storm passes, preventing him from being partial or completely damaged. Robert cannot be recharged because the dust clouds from the storm are so thick that they block the Sun's rays that Robert uses to power his batteries."],
        ["imgtext", "duststorm.jpg","This story was inspired by NASA’s Opportunity rover. The Opportunity rover stopped communicating with Earth when a severe Mars-wide dust storm blanketed its location in June 2018. The rover recovery efforts are concluded and the Opportunity mission is complete."],
        ["boarspeech","blushingboar","Other situations that rovers like Robert face on Mars are temperatures as low as -153 ° C which can freeze their circuits. Let's remember that rovers are special robots that we use to explore Mars’ surface. They are important sources of information because they allow us to learn about the planet and its characteristics remotely and securely."],
        ["end"],
        ["missionRes","loose"],
        ["boarspeech", "worriedboararms1", "Nooo, that wasn't the right answer."],
        ["boarspeech", "blushingboararms", "The correct answer was 'Set Robert the rover to sleep mode.' By doing this, Robert saves his energy and uses it solely on his mission watch, which will wake him up when the storm passes, preventing him from being partial or completely damaged. Robert cannot be recharged because the dust clouds from the storm are so thick that they block the Sun's rays that Robert uses to power his batteries."],
        ["boarspeech","blushingboar","Other situations that rovers like Robert face on Mars are temperatures as low as -153 ° C which can freeze their circuits. Let's remember that rovers are special robots that we use to explore Mars’ surface. They are important sources of information because they allow us to learn about the planet and its characteristics remotely and securely."],
        ["end"]
    ]

    goThroughStory(sequence);
}

