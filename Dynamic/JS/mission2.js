function start(){

    var sequence = 
    [
        ["boarspeech","blushingboar","Hello there, fancy seeing you here!  We still have one more task to go and then we can rest. Our last mission of the day is to deliver our report and all the data we have collected and send it to Earth."],
        ["boarspeech","worriedboardown1","Unfortunately we do not have space delivery yet, but the closest thing to this are the DSN or Deep Space Network antennae. Whenever we need to report something, we go with them, because they love talking with their friends on Earth. One of them is in Spain, another one in the United States and the third one is in Australia. They seem very far away, but they are always connected."],
        ["boarspeech", "sweatingboararms", "The antennae are usually very dependable, but they can be shy at times, therefore, their signals need to be amplified so that their friends on Earth understand what they are trying to say. In their neighborhood everyone is very talkative, so it is difficult to acknowledge them without the amplifiers’ aid."],
        ["boarspeech", "questioningboar", "How can we solve this problem?"],
        ["options","How can we solve this problem?","Ask the others to be quiet.","It does not matter.","Bring our friends from Earth to Mars.", "Take the Mars antenna with our friends from Earth.","nv1",5,10],
        ["missionRes","win"],
        ["boarspeech", "blushingboararms", "The correct answer is 'Ask the others to be quiet'."],
        ["boarspeech","blushingboar","The reason for this is that the antennae on Earth use highly sophisticated technology, such as cooling the amplifiers to a few degrees above absolute zero, and using special techniques to encode signals so that the receiving system can distinguish the signal from background noise. This is an analogy to asking the others to be quiet, since what they do at the antennae is ignore the background noise, which in this case is the noise made by the neighborhood."],
        ["imgtext", "latontaantena.png","The Deep Space Network or DSN are our antenna friends from Earth. They are the world's largest and most sensitive scientific telecommunications system. Our high-tech antenna friends are strategically located in Goldstone, Madrid and Canberra, they are also placed at the same distance from each other. This  placement allows constant links to distant spacecraft even as the Earth rotates on its own axis."],
        ["end"],
        ["missionRes","loose"],
        ["boarspeech", "worriedboararms1", "Nooo, that wasn't the right answer."],
        ["boarspeech", "blushingboararms", "The correct answer is 'Ask the others to be quiet'."],
        ["boarspeech","blushingboar","The reason for this is that the antennae on Earth use highly sophisticated technology, such as cooling the amplifiers to a few degrees above absolute zero, and using special techniques to encode signals so that the receiving system can distinguish the signal from background noise. This is an analogy to asking the others to be quiet, since what they do at the antennae is ignore the background noise, which in this case is the noise made by the neighborhood."],
        ["imgtext", "latontaantena.png","The Deep Space Network or DSN are our antenna friends from Earth. They are the world's largest and most sensitive scientific telecommunications system. Our high-tech antenna friends are strategically located in Goldstone, Madrid and Canberra, they are also placed at the same distance from each other. This  placement allows constant links to distant spacecraft even as the Earth rotates on its own axis."],
        ["end"]
    ]

    goThroughStory(sequence);
}

