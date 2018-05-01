/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a new bloodline for the Sorcerer, called "Blood of the Primordials"
				This bloodline is a reskin of the "Draconic Bloodline" from the PHB
				This bloodline is made by Cain
				For more details, download the full text for this bloodline here: http://bit.ly/2kjur6M
    Code by:	Cain
    Date:		2017-11-29 (sheet v12.999)
*/

var iFileName = "Sorcerer - Blood of the Primordials [by Cain].js";
RequiredSheetVersion(12.999);

AddSubClass("sorcerer", "Chaos", {
	regExpSearch : /^(?=.*(sorcerer|witch))(?=.*chaos?).*$/i,
	subname : "Chaotic Blood",
	source : ["HB", 0],
	features : {
		"subclassfeature1" : {
			name : "Chaotic origin",
			source : ["HB", 0],
			minlevel : 1,
			description : "\n   " +  "When interacting with elementals, if I can add my proficiency bonus, I can double it",
		},
		"subclassfeature6" : {
			name : "Elemental Affinity",
			source : ["HB", 0],
			minlevel : 6,
			description : "\n   " + "Choose a Chaotic element using the \"Choose Feature\" button above" + "\n   " + "\n   " + "I gain resistance to my affiliated type",
			choices : ["acid", "cold", "fire", "lightning", "poison", ""],
			choicesNotInMenu : true,
			"acid" : {
				name : "Acid Elemental Affinity",
				description : " [1 sorcery point]" + "\n   " + "I add my Charisma modifier to one damage roll of a spell if it does acid damage" + "\n   " + "When I do this, I can spend 1 sorcery point to gain acid resistance for 1 hour"
			},
			"cold" : {
				name : "Cold Elemental Affinity",
				description : " [1 sorcery point]" + "\n   " + "I add my Charisma modifier to one damage roll of a spell if it does cold damage" + "\n   " + "When I do this, I can spend 1 sorcery point to gain cold resistance for 1 hour"
			},
			"fire" : {
				name : "Fire Elemental Affinity",
				description : " [1 sorcery point]" + "\n   " + "I add my Charisma modifier to one damage roll of a spell if it does fire damage" + "\n   " + "When I do this, I can spend 1 sorcery point to gain fire resistance for 1 hour"
			},
			"lightning" : {
				name : "Lightning Elemental Affinity",
				description : " [1 sorcery point]" + "\n   " + "I add my Charisma modifier to one damage roll of a spell if it does lightning damage" + "\n   " + "When I do this, I can spend 1 sorcery point to gain lightning resistance for 1 hour"
			},
			eval : "if (FeaChoice === \"\") {var CFrem = What(\"Class Features Remember\"); var tReg = /.*?sorcerer,subclassfeature1,(akadi|grumbar|istishia|kossuth).*/i; if ((tReg).test(CFrem)) {FeaChoice = CurrentClasses.sorcerer.features.subclassfeature1[CFrem.replace(tReg, \"$1\")].primordialElement; AddString(\"Class Features Remember\", \"sorcerer,subclassfeature6,\" + FeaChoice, false);};};",
		},
		"subclassfeature14" : {
			name : "Elemental Wings",
			source : ["HB", 0],
			minlevel : 14,
			description : "\n   " + "As a bonus action, unless armor is in the way, I can sprout elemental wings from my back"  + "\n   " + "They are magical and are not affected by the environment" + "\n   " + "I gain a fly speed equal to my current speed until I dismiss the wings as a bonus action",
			action : ["bonus action", " (start/stop)"],
			speed : { fly : { spd : "walk", enc : "walk" } }
		},
		"subclassfeature18" : {
			name : "Presence of the Dawn Titans",
			source : ["HB", 0],
			minlevel : 18,
			description : "\n   " + "As an action, I create 60-ft radius aura of awe/fear for concentration up to 1 minute" + "\n   " + "All hostiles in this aura must make a Wis save or be charmed (awe) or frightened (fear)" + "\n   " + "They make their saves at the beginning of their turns" + "\n   " + "A creature that succeeds on the save is immune to my aura for 24 hours",
			additional : "5 sorcery points",
			action : ["action", ""]
		}
	}
});

ArmourList["primordial resilience"] = {
	regExpSearch : /^(?=.*(primordials?|elementals?))(?=.*(hide|skin|scales|resilience)).*$/i,
	name : "Primordial resilience",
	type : "",
	ac : 13,
	dex : 2000,
	stealthdis : false,
	weight : 0,
	inventory : false,
	strReq : 0
};
