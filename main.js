Vue.component('my-project', {
	props : ['project'],
	template:'<div class="row"><div class="column"><div class="content"><img src="res/antivirus-Accueil.png"><h4>{{project.name}}</h4>{{project.description}}</div></div>'
})

var app = new Vue({
	el: "#content",
	data: {
		projects : [
			{ name: "Antivirus",
				year: 2017,
				description: "As part of the first year of university, we had to develop a board game in Ada.",
				technologies : ["Ada"],
				image: "\"res/antivirus-Accueil.png\""
			},
			{ name: "Île Interdite",
				year: 2017,
				description: "As part of the first year of DUT Informatique and in teams of three, we had to design and develop a cooperative board game.",
				technologies : ["Java"],
				image: "res/antivirus-Accueil.png"
			},
			{ name: "Math'Scape World",
				year: 2018,
				description: "During the second year DUT Informatique and by team of 7 people, we imagined, designed and developed a mobile application to educate middle school students about mathematical and computer thinking.",
				technologies : ["Java", "Android"],
				image: "res/antivirus-Accueil.png"
			},
			{ name: "Ski race",
				year: 2018,
				description: "As part of the optional second year Graphics module, I created with two classmates an SVG animation on the theme of ski racing.",
				technologies : ["SVG"],
				image: "res/antivirus-Accueil.png"
			},
			{ name: "UnJeu",
				year: 2018,
				description: "For the Android course, I developed an application to revise mathematics and general cultures for an audience of middle school students.",
				technologies : ["Java", "Android"],
				image: "res/antivirus-Accueil.png"
			},
			{ name: "SpaceTeam",
				year: 2020,
				description: "During the Android workshop, we had to recreate the cooperative shouting game SpaceTeam, in teams of 3.",
				technologies : ["Kotlin", "Android"],
				image: "res/antivirus-Accueil.png"
			},
			{ name: "AuKrowdfunding",
				year: 2020,
				description: "As part of the PHP / Symfony course during the LP DIM, I created with two other people a crowdfunding platform in Symfony.",
				technologies : ["PHP", "Symfony"],
				image: "res/antivirus-Accueil.png"
			},
			{ name: "Movies Explorer",
				year: 2020,
				description: "During the development workshop under IOS, we had to create an application for viewing fact sheets on films, using the Movie Db API.",
				technologies : ["Swift", "IOS"],
				image: "res/antivirus-Accueil.png"
			},
			{ name: "Digital Immersive Museum",
				year: 2020,
				description: "With three others students, we created Digital Immersive Museum, ou final year university project. This project aimed to introduce innovative and interactive experience to the visitors of La Turbine exhibition center.",
				technologies : ["Android", "Kotlin", "Eye tracking", "Javascript"],
				image: "res/antivirus-Accueil.png"
			}
		],
		works: [
			{
				startYear: 2019,
				endYear: 2020,
				type: "Work-study contract",
				company: "Joseph Martin (Bar turning industry)",
				localisation: "Vougy, France",
				description: "Development of industrial production interfaces : identification of needs, data acquisition and processing (Microsoft SQL Server), fullstack development (Javascript + Frameworks)"
			},
			{
				startYear: 2018,
				endYear: 2019,
				type: "Volunteering",
				company: "Unis-cité des Savoies (Volunteer association)",
				localisation: "Chambéry, France",
				description: "Voluntary engagement on two distinct missions : creation of educational tools to raise public awarness on sustainable development in mountain territories & animation of digital workshops in retirement homes"
			},
			{
				startYear: 2018,
				endYear: 2018,
				type: "Intership",
				company: "Orange Labs (Telecommunication)",
				localisation: "Meylan, France",
				description: "Development of a agile dashboard for a project team : identification of needs, data acquisition, fullstack development (Javascript + Frameworks)"
			}
		],
		studies: [
			{
				startYear: 2019,
				endYear: 2020,
				title: 'LP Développement Informatique Multisupports',
				localisation: 'CCI Annecy & USMB - Annecy, France',
				description: 'Professional Bachelor\'s Degree specialized in multi-platform software development'
			},
			{
				startYear: 2016,
				endYear: 2018,
				title: 'DUT Informatique',
				localisation: 'UGA - Grenoble, France',
				description: '2-years university diploma in computer science'
			},
			{
				startYear: 2015,
				endYear: 2016,
				title: 'L1 Chimie-Biologie',
				localisation: 'UGA - Grenoble, France',
				description: '1st-year Bachelor in chemistry and biology'
			},
			{
				startYear: 2012,
				endYear: 2015,
				title: 'Scientific Baccalaureat',
				localisation: 'Pierre Beghin High School - Moirans, France',
				description: 'High school diplom specialized in biology and with European section'
			}
		],
		seenFrench: false,
		seenEnglish : false,
		seenItalian: false,
		seenSpanish: false,
		seenHike: false,
		seenSki: false,
		seenBike: false,
		seenCinema: false,
		seenClimate: false
	}
})

let topButton = document.getElementById("topButton");

window.onscroll = function() {
	this.scrollFunction()
}

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		topButton.style.display = "block";
	} else {
		topButton.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
