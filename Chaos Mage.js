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
	},
  spellcastingKnown : {
			cantrips : [4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
			spells : [0, 1, 2, 3, 3, 4, 4, 4, 4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 10]
		},
});
