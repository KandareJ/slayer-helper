const konar = `Drakes,10,,84,,
Hydras,10,,95,,
Wyrms,10,,62,,
Abyssal demons,9,85,85,,Priest in Peril
Black demons,9,80,,,
Bloodveld,9,50,50,,Priest in Peril
Cave kraken,9,80,87,,
Fire giants,9,65,,,
Kalphite,9,15,,,
Boss,8,,,Like a Boss,
Dagannoth,8,75,,,Horror from the Deep
Hellhounds,8,75,,,
Lizardmen,8,,,Reptile got ripped,
Greater demons,7,75,,,
Nechryael,7,85,80,,Priest in Peril
Smoke devils,7,85,93,,
Aberrant spectres,6,65,60,,
Aviansies,6,,,Watch the birdie,
Black dragons,6,80,,,Dragon Slayer I
Dust devils,6,70,65,,Desert Treasure
Gargoyles,6,80,75,,Priest in Peril
Jellies,6,57,52,,
Trolls,6,60,,,
Adamant dragons,5,,,,Dragon Slayer II
Ankou,5,40,,,
Basilisks,5,,40,Basilocked,
Bronze dragons,5,75,,,Dragon Slayer I
Dark beasts,5,90,90,,Mourning's End Part II
Fossil Island Wyverns,5,60,66,,Bone Voyage-Elemental Workshop I
Iron dragons,5,80,,,Dragon Slayer I
Mithril dragons,5,,,I hope you mith me,
Red dragons,5,68,,Seeing red,Dragon Slayer I,
Rune dragons,5,,,,Dragon Slayer II
Skeletal Wyverns,5,70,72,,Elemental Workshop I
Steel dragons,5,85,,,Dragon Slayer I
Blue dragons,4,65,,,Dragon Slayer I
Vampyres,4,,,Actual Vampyre Slayer,
Kurask,3,65,70,,
Turoth,3,60,55,,
Brine rats,2,45,47,,Olaf's Quest
Mutated Zygomites,2,60,57,,Lost City
Waterfiends,2,75,,,`;

const convert = (data) => {
    return data.split('\n').map((line) => {
        const array = line.split(',');
        const combatLevel = array[2].length > 0 ? parseInt(array[2]) : 3;
        const slayerLevel = array[3].length > 0 ? parseInt(array[3]) : 1;
        const slayerUnlocks = array[4].length > 0 ? array[4].split('-') : [];
        const questRequirements = array[5].length > 0 ? array[5].split('-') : [];

        return {
            name: array[0],
            weight: parseInt(array[1]),
            combatLevel,
            slayerLevel,
            slayerUnlocks,
            questRequirements,
        }
    })
};

console.log(convert(konar));