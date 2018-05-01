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
			description : "When casting a spell, i can choose to have the DM roll from the full list of spells of the corresponding Spell level to decide what spell is cast." + "\n When I choose a specific known spell to cast, there is a 25% chance that it will manifest a wild surge as well. I can elect to negate this by spending 1 sorcery point.",
		},
	},
  spellcastingKnown : {
			cantrips : [4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
			spells : [0, 1, 2, 3, 3, 4, 4, 4, 4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 10]
		},
});
