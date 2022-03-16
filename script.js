



let levelsa = {
	l1: {
		q1: ["Centralized Support System"],
		a1: ["Grevience", "Suggestion", "Complaint", "Enquiry"],
		m1: [	"You have selected centralized Support System. would you like to give us some suggestions and the complaints"],

		q2: ["PGDM"],
		a2: ["Result verification", "For student uni"],
		m2: ["You have selected results verification section"],

		q3: ["Parakh"],
		a3: ["ULB smart city, about us"],
		m3: ["You have selected ULB smart city"],

		q4: ["Internship portal"],
		a4: ["Syllabus", "2year courses avilable"],
		m4: ["You have selected Internship section"],
	},

	l2: {
		q1: ["Grevience"],
		a1: ["84894979"],
		m1: ["You can contact at out andline number: "],

		q2: ["Suggestion"],
		a2: ["Good"],
		m2: ["Email id of our Centralised support system"],

		q3: ["Complaint"],
		a3: ["ULB smart city"],
		m3: ["Reez"],

		q4: ["Enquiry"],
		a4: ["Syllabus", "2year courses avilable"],
		m4: ["Ross"],
	},
};

let a, b, c, d;
let user_choice = 0;
let level_indicator = 0;

function choice_a() {
	console.log("a");
	user_choice = 1;
	console.log(user_choice);
	disable_button();
	cases();
}

function choice_b() {
	console.log("b");
	user_choice = 2;
	console.log(user_choice);
	disable_button();
	cases();
}
function choice_c() {
	console.log("c");
	user_choice = 3;
	console.log(user_choice);
	disable_button();
	cases();
}
function choice_d() {
	console.log("d");
	user_choice = 4;
	console.log(user_choice);
	disable_button();
	cases();
}

function disable_button() {
	document.getElementById("b1").disabled = true;
	document.getElementById("b2").disabled = true;
	document.getElementById("b3").disabled = true;
	document.getElementById("b4").disabled = true;
}

function cases() {
	if (level_indicator == 0) {
		
		if (user_choice == 1) {
			createnew(levelsa.l1.m1[0])
			level_indicator++;


			levelsa.l1.a1.forEach((element) => {
				const para = document.createElement("butt");
				
				createButton(element,para);

			});

		} else if (user_choice == 2) {
			createnew(levelsa.l1.m2[0])
			level_indicator++;

			levelsa.l1.a2.forEach((element) => {
				
				const para = document.createElement("butt1");
				
				createButton(element,para);
				user_choice = 2;
			});
		} else if (user_choice == 3) {
			level_indicator++;
			createnew(levelsa.l1.m3[0])

			levelsa.l1.a3.forEach((element) => {
				const para = document.createElement("butt2");
				createButton(element,para);
				user_choice = 3
			});
		} else {
			level_indicator++;
			createnew(levelsa.l1.m4[0])
			levelsa.l1.a4.forEach((element) => {
				const para = document.createElement("butt3");
				createButton(element,para);
			});
		}

		console.log("Dept level = " + level_indicator);
	} else {
		console.log("Dept level else = " + level_indicator);

		if (user_choice == 1 && level_indicator) {
			createnew(levelsa.l1.m1[0])
			level_indicator++;

			levelsa.l2.a1.forEach((element) => {
				const para = document.createElement("butt4");
				createnew(levelsa.l2.m1[0])
				createButton(element,para);
			});
		} else if (user_choice == 2) {
			level_indicator++;
			createnew(levelsa.l2.m2[0])
			levelsa.l2.a2.forEach((element) => {
				const para = document.createElement("butt5");
				createButton(element,para);
			});
		} else if (user_choice == 3) {
			level_indicator++;
			createnew(levelsa.l2.m3[0])
			levelsa.l2.a3.forEach((element) => {
				const para = document.createElement("butt6");
				createButton(element, para);
			});
		} else if (user_choice == 4) {
			level_indicator++;
			createnew(levelsa.l2.m4[0])

			levelsa.l2.a4.forEach((element) => {
				const para = document.createElement("butt7");
				createButton(element,para);

			});
		}
	}
}

function createButton(ans, para) {
	
	
	para.innerHTML = ans;
	document.getElementById("chatbotbox").appendChild(para);
	para.addEventListener("click", function () {
		cases();
	 console.log(cases);
	 document.getElementById("butt1").disabled = true;
	 document.getElementById("butt2").disabled = true;
	 document.getElementById("butt3").disabled = true;
	 
	});
}

function levels() {
	level_indicator++;
	
}

function createnew(p){
	const para = document.createElement("butt");
				
	para.innerHTML = p;
	document.getElementById("chatbotbox").appendChild(para)
}