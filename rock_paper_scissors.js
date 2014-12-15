var start = function() {
	var userChoice = prompt("Do you choose rock, paper or scissors?");

// start validation input of userChoice
// when input invalid, need tell user, what's wrong, and input userChoice again
// after 2 try, need give opportunity to write mail

	if (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
		userChoice = prompt("INVALID INPUT! Please use only \"rock\" or \"paper\" or \"scissors\" !");
	} 
	if (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
		var result = confirm("Want to mail developers?");
		if (result == true) {
			var email = "@yahoo.com"
			var mailtoLink = "mailto:" + email
			window = window.open(mailtoLink, "emailWindow")
			if (window && window.open && !window.closed) {        
				window.close()
			}
		} else {
			alert("please try again");
		}
	} else {        

//code of computerChoice start here         
		var computerChoice = Math.random();
		if (computerChoice >= 0 && computerChoice <= 0.33) {
			computerChoice = "rock";
		} else if (computerChoice >= 0.34 && computerChoice <= 0.66) {
			computerChoice = "paper";
		} else {
			computerChoice = "scissors";
		} 

//need to show userChoice and ComputerChoice
		console.log("User: " + userChoice);
		console.log("Computer: " + computerChoice);

//need compare userChoice and ComputerChoice
		var compare = function(choice1, choice2) {
			choice1 = userChoice;
			choice2 = computerChoice;
			if (choice1 === choice2) {
				return "The result is a tie!";
			} else if (choice1 == "rock") {
				if (choice2 === "scissors") {
					return "User wins";
				} else {
					return "Comp wins";
				}
			} else if (choice1 === "paper") {
				if (choice2 === "rock") {
					return "User wins";
				} else {
					return "Comp wins"; 
				}
			} else if (choice1 === "scissors") {
				if (choice2 === "paper") {
					return "User wins";
				} else {
					return "Comp wins"; 
				}
			}
		};

		compare();

		var count = function (score1, score2) {
			var userScore = score1;
			var compScore = score2;
			score1 = 0;
			score2 = 0;
			if (compare() == "The result is a tie!") {
				userScore = score1;
				compScore = score2;
			} else if (compare() == "User wins") {
				userScore = score1 + 1;
				compScore = score2;
			} else {
				userScore = score1;
				compScore = score2 + 1;
			}
			console.log("User= " + userScore);
			console.log("comp= " + compScore);
			return score1, score2;
		};
		count();
	} 

	var again = confirm("Want to play again?");
	if (again == true) {
		start();
	} else {
		console.log("Bye");
	}
};

start();
