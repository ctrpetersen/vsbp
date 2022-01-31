const items = [
    {type:'wpn', itmName: 'Whip', img:'img/whip.png'},
    {type:'wpn', itmName: 'Bloody Tear', img:'img/bloodytear.png', evolve:['Hollow Heart']},

    {type:'wpn', itmName: 'Magic Wand', img:'img/magicwand.png'},
    {type:'wpn', itmName: 'Holy Wand', img:'img/holywand.png', evolve:['Empty Tome']},

    {type:'wpn', itmName: 'Knife', img:'img/knife.png'},
    {type:'wpn', itmName: 'Thousand Edge', img:'img/thousandedge.png', evolve:['Bracer']},

    {type:'wpn', itmName: 'Axe', img:'img/axe.png'},
    {type:'wpn', itmName: 'Death Spiral', img:'img/deathspiral.png', evolve:['Candelabrador']},
    
    {type:'wpn', itmName: 'Cross', img:'img/cross.png'},
    {type:'wpn', itmName: 'Heaven Sword', img:'img/heavensword.png', evolve:['Clover']},

    {type:'wpn', itmName: 'King Bible', img:'img/kingbible.png'},
    {type:'wpn', itmName: 'Unholy Vespers', img:'img/unholyvespers.png', evolve:['Spellbinder']},

    {type:'wpn', itmName: 'Fire Wand', img:'img/firewand.png'},
    {type:'wpn', itmName: 'Hellfire', img:'img/hellfire.png', evolve:['Spinach']},

    {type:'wpn', itmName: 'Garlic', img:'img/garlic.png'},
    {type:'wpn', itmName: 'Soul Eater', img:'img/souleater.png', evolve:['Pummarola']},

    {type:'wpn', itmName: 'Peachone', img:'img/peachone.png'},
    {type:'wpn', itmName: 'Ebony Wings', img:'img/ebonywings.png'},
    {type:'wpn', itmName: 'Vandalier', img:'img/vandalier.png', evolve:['Peachone', 'Ebony Wings']},

    {type:'wpn', itmName: 'Santa Water', img:'img/santawater.png'},
    {type:'wpn', itmName: 'Runetracer', img:'img/runetracer.png'},
    {type:'wpn', itmName: 'Lightning Ring', img:'img/lightningring.png'},
    {type:'wpn', itmName: 'Pentagram', img:'img/pentagram.png'},
    {type:'wpn', itmName: 'Clock Lancet', img:'img/clocklancet.png'},
    {type:'wpn', itmName: 'Laurel', img:'img/laurel.png'},
    {type:'wpn', itmName: 'Bone', img:'img/bone.png'},

    {type:'accessory', itmName: 'Spinach', img:'img/spinach.png', stats:{might:10}},
    {type:'accessory', itmName: 'Armor', img:'img/armor.png', stats:{armor:-1}},
    {type:'accessory', itmName: 'Hollow Heart', img:'img/hollowheart.png', stats:{maxHp:10}},
    {type:'accessory', itmName: 'Pummarola', img:'img/pummarola.png', stats:{recovery:10}},
    {type:'accessory', itmName: 'Empty Tome', img:'img/emptytome.png', stats:{cooldown:-8}},
    {type:'accessory', itmName: 'Candelabrador', img:'img/candelabrador.png', stats:{area:10}},
    {type:'accessory', itmName: 'Bracer', img:'img/bracer.png', stats:{speed:10}},
    {type:'accessory', itmName: 'Spellbinder', img:'img/spellbinder.png', stats:{duration:10}},
    {type:'accessory', itmName: 'Duplicator', img:'img/duplicator.png', stats:{amount:1}},
    {type:'accessory', itmName: 'Wings', img:'img/wings.png', stats:{moveSpeed:10}},
    {type:'accessory', itmName: 'Attractorb', img:'img/Attractorb.png', stats:{magnet:10}},
    {type:'accessory', itmName: 'Clover', img:'img/clover.png', stats:{luck:10}},
    {type:'accessory', itmName: 'Crown', img:'img/crown.png', stats:{growth:10}},
    {type:'accessory', itmName: 'Stone Mask', img:'img/stonemask.png', stats:{greed:10}},
]

const characters = [
    {chrName: 'Antonio', img:'img/antonio.png', stats:{might: 50}, items:['Whip']},
    {chrName: 'Arca', img:'img/arca.png', stats:{cooldown: -15}, items:['Fire Wand']},
    {chrName: 'Clerici', img:'img/clerici.png', stats:{recovery:0.5, maxHp:30}, items:['Santa Water']},
    {chrName: 'Dommario', img:'img/Dommario.png', stats:{duration:40, moveSpeed:-40}, items:['King Bible']},
    {chrName: 'Exdash', img:'img/exdash.png', stats:{maxHp:-33, moveSpeed:-10, might: -10, area: -10, speed: -50, duration: -10, cooldown: 10, luck: 100}, items:['Ebony Wings']},
    {chrName: 'Gennaro', img:'img/gennaro.png', stats:{amount: 1}, items:['Knife']},
    {chrName: 'Imelda', img:'img/imelda.png', stats:{growth: 30}, items:['Magic Wand']},
    {chrName: 'Mortaccio', img:'img/mortaccio.png', stats:{amount: 3}, items:['Bone']},
    {chrName: 'Pasqualina', img:'img/pasqualina.png', stats:{speed: 30}, items:['Runetracer']},
    {chrName: 'Poe', img:'img/poe.png', stats:{maxHp: -30, magnet: 25}, items:['Garlic']},
    {chrName: 'Porta', img:'img/porta.png', stats:{area: 30}, items:['Lightning Ring']},
]

let selectedChar = {}
let selectedItems = []
let statsEl = {}

let stats = {
    maxHp: 0,
    recovery: 0,
    armor: 0,
    moveSpeed: 0,
    might: 0,
    area: 0,
    speed: 0,
    duration: 0,
    amount: 0,
    cooldown: 0,
    luck: 0,
    growth: 0,
    greed: 0,
    magnet: 0
}

function generateStats() {
    stats = {maxHp: 0, recovery: 0, armor: 0, moveSpeed: 0, might: 0, area: 0, speed: 0, duration: 0, amount: 0, cooldown: 0, luck: 0, growth: 0, greed: 0, magnet: 0}
    if (selectedChar.chrName){
        Object.keys(selectedChar.stats).forEach((s) => {
        stats[s] += selectedChar.stats[s]
    })}
    selectedItems.forEach((i) => {
        if (i.stats){
            Object.keys(i.stats).forEach((s) => {
                stats[s] += i.stats[s]
            })
        }
    })
    let statString = ''
    Object.keys(stats).forEach((s) => {
        if (stats[s] > 0) statString += '+'
        statString += `${stats[s]}<br/>`
    })
    statsEl.innerHTML = statString
}

function selectChar(chrName) {
    if (selectedChar.el) selectedChar.el.className = 'char'
    selectedChar = characters.find(c => c.chrName === chrName)
    selectedChar.el.className = 'charSelected'
    generateStats()
}

function addRemoveItem(itmName, type) {
    // rem
    if (selectedItems.some(i => i.itmName === itmName)){
        selectedItems.splice(selectedItems.findIndex(i => i.itmName === itmName), 1)
        items.find(i => i.itmName === itmName).el.className = 'item'
    }
    // add
    else if (selectedItems.filter(si => si.type === type).length < 6){
        selectedItems.push(items.find(i => i.itmName === itmName))
        items.find(i => i.itmName === itmName).el.className = 'itemSelected'
    }
    generateStats()
}

function populateCharacterDiv() {
    const charsEl = document.getElementById('charSelection')
    characters.forEach((c) => {
        const charEl = document.createElement('img')
        charEl.src = c.img
        charEl.className = 'char'
        charEl.title = c.chrName
        charEl.setAttribute('data-tooltip', c.chrName)
        charEl.onclick = function(){selectChar(c.chrName)}
        c.el = charEl
        charsEl.appendChild(charEl)
        console.log(charEl)
    })
}

function populateItemDiv() {
    const itmsEl = document.getElementById('itemSelection')
    items.forEach((i) => {
        const itmEl = document.createElement('img')
        itmEl.src = i.img
        itmEl.className = 'item'
        itmEl.title = i.itmName
        itmEl.setAttribute('data-tooltip', i.itmName)
        itmEl.onclick = function(){addRemoveItem(i.itmName, i.type)}
        i.el = itmEl
        itmsEl.appendChild(itmEl)
    })
}

function populate() {
    populateItemDiv()
    populateCharacterDiv()
    statsEl = document.getElementById('statsNumbers')
    generateStats()
}

document.body.onload = populate
