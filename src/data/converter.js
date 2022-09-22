
const duradel = `Abyssal demons,12,85,85,,Priest in Peril
Boss,12,,,Like a boss,
Dark beasts,11,90,90,,Mourning's End Part II
Hellhounds,10,75,,,
Lizardmen,10,,,Reptile got ripped,
TzHaar,10,,,Hot stuff,
Black dragons,9,80,,,Dragon Slayer I
Cave kraken,9,80,87,,
Dagannoth,9,75,,,Horror from the Deep
Greater demons,9,75,,,
Kalphite,9,15,,,
Mithril dragons,9,,,I hope you mith me,
Nechryael,9,85,80,,Priest in Peril
Smoke devils,9,85,93,,
Aviansies,8,,,Watch the birdie,
Black demons,8,80,,,
Bloodveld,8,50,80,,
Drakes,8,,84,,
Gargoyles,8,80,75,,Priest in Peril
Red dragons,8,,,Seeing red,Dragon Slayer I
Suqah,8,85,,,Lunar Diplomacy
Vampyres,8,,,Actual Vampyre Slayer,
Wyrms,8,,62,,
Aberrant spectres,7,65,60,,Priest in Peril
Basilisks,7,,40,Basilocked,
Fire giants,7,65,,,
Skeletal Wyverns,7,70,72,,
Spiritual creatures,7,60,63,,
Steel dragons,7,85,,,Dragon Slayer I
Trolls,6,60,,,
Ankou,5,40,,,
Dust devils,5,70,65,,Desert Treasure
Fossil Island Wyverns,5,60,66,,Bone Voyage-Elemental Workshop I
Iron dragons,5,80,,,Dragon Slayer I
Blue dragons,4,65,,,Dragon Slayer I
Cave horrors,4,85,58,,Cabin Fever
Elves,4,70,,,Regicide
Kurask,4,65,70,,
Adamant dragons,2,,,,Dragon Slayer II
Mutated Zygomites,2,60,57,,Lost City
Rune dragons,2,,,,Dragon Slayer II
Waterfiends,2,75,,,`

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

console.log(convert(duradel));