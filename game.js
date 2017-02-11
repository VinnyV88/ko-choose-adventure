var sceneData = [
    { question: "The setting is that you're in your apartment in Brooklyn. You hear someone scream for help outside. You run out and see two bloody people chasing a guy with glasses. The guy is running straight toward you. What do you do", choices: [
        { answer: "Let the guy come inside and try to quickly lock the door", next: 2 },
        { answer: "Close and bolt the door", next: 3}]
    }, //1
    { question: "The guy's name is Peter. He's a scientist at the CDC and he keeps cursing. You ask him why those people were chasing you and he says that they're not people. They're zombies and they're going to break your door down.", choices: [
        { answer: "Get out the back door", next: 4 },
        { answer: "Reinforce the door", next: 11}
        ]
    }, //2
    { question: "The person dies at your door, but the zombies hear you, and are trying to break your door down", choices: [
        { answer: "open the door and tell them to go away", next: 11 },
        { answer: "get out the back door", next: 5}
        ]
    }, //3
    { question: "Peter wants to go back to his lab because he thinks he has a cure for the zombies.", choices: [
        { answer: "Go with Peter to his lab.", next: 11 },
        { answer: "Convince Peter we need to find weapons before we do anything else.", next: 6},
        { answer: "Ditch Peter, and go at it alone.", next: 5}
        ]
    }, //4
    { question: "You are now alone without a clue about what is going on outside your front door. You hear another person screaming for help.", choices: [
        { answer: "Go to the front of your apartment to see what's going on.", next: 11 },
        { answer: "Run to your car, turn on the radio to find out what's going on.", next: 7},
        { answer: "Run to your car, drive around front to see whats going on.", next: 11},
        { answer: "Get a weapon and go around front to investigate.", next: 8}
        ]
    }, //5
    { question: "You escaped through the back door. You and peter found a couple of rusty pipes for weapons. What do you do next?", choices: [
        { answer: "Run down the main street.", next: 11 },
        { answer: "Make your way the police station.", next: 9},
        { answer: "You go back in the apartment to attack the zombies.", next: 11},
        { answer: "Make your way to the hospital.", next: 10}
        ]
    }, //6
    { question: "You're in your car, as you are listening to the radio, two zombies approach your car.", choices: [
        { answer: "Attempt to mow down the zombies with your car.", next: 11 },
        { answer: "You take out your gun and shoot the zombies.", next: 9},
        { answer: "You try to back up to the main street, get caught in traffic and have nowhere to go.", next: 11},
        { answer: "Take out your gun and blow out your brains!", next: 11}
        ]
    }, //7
    { question: "eighth question. What do you do", choices: [
        { answer: "8 part 1", next: 11 },
        { answer: "8 part 2", next: 11},
        { answer: "8 part 3", next: 11},
        { answer: "8 part 4", next: 10}
        ]
    }, //8
    { question: "ninth question. What do you do", choices: [
        { answer: "9 part 1", next: 10 },
        { answer: "9 part 2", next: 11},
        { answer: "9 part 3", next: 11},
        { answer: "9 part 4", next: 11}
        ]
    }, //9
    { question: "you win", choices: [
        { answer: "try again", next: 1 }
        ]
    }, //10 WIN
    { question: "dead", choices: [
        { answer: "try again", next: 1 }
        ]
    } //11 DEAD
];
 
var ScenesModel = function(scenes) {
    var self = this;
    
    self.activequestion = ko.observable(scenes[0].question)
    self.activechoices = ko.observableArray(scenes[0].choices)

    self.nextScene = function(choice) {
    	self.activequestion(scenes[choice.next -1].question);
    	self.activechoices(scenes[choice.next -1].choices);
    } 
};
 
ko.applyBindings(new ScenesModel(sceneData));

/*
	score
	pictures
			
*/