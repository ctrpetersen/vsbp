const items = [
    {type:'wpn', itmName: 'Whip', img: 'img/whip.png', maxLvl: 8},
    {type:'wpn', itmName: 'Bloody Tear', img: 'img/bloodytear.png', evolve:['Hollow Heart'], baseWpn: ['Whip'], maxLvl: 1},

    {type:'wpn', itmName: 'Magic Wand', img: 'img/magicwand.png', maxLvl: 8},
    {type:'wpn', itmName: 'Holy Wand', img: 'img/holywand.png', evolve:['Empty Tome'], baseWpn: ['Magic Wand'], maxLvl: 1},

    {type:'wpn', itmName: 'Knife', img: 'img/knife.png', maxLvl: 8},
    {type:'wpn', itmName: 'Thousand Edge', img: 'img/thousandedge.png', evolve:['Bracer'], baseWpn: ['Knife'], maxLvl: 1},

    {type:'wpn', itmName: 'Axe', img: 'img/axe.png', maxLvl: 8},
    {type:'wpn', itmName: 'Death Spiral', img: 'img/deathspiral.png', evolve:['Candelabrador'], baseWpn: ['Axe'], maxLvl: 1},
    
    {type:'wpn', itmName: 'Cross', img: 'img/cross.png', maxLvl: 8},
    {type:'wpn', itmName: 'Heaven Sword', img: 'img/heavensword.png', evolve:['Clover'], baseWpn: ['Cross'], maxLvl: 1},

    {type:'wpn', itmName: 'King Bible', img: 'img/kingbible.png', maxLvl: 8},
    {type:'wpn', itmName: 'Unholy Vespers', img: 'img/unholyvespers.png', evolve:['Spellbinder'], baseWpn: ['King Bible'], maxLvl: 1},

    {type:'wpn', itmName: 'Fire Wand', img: 'img/firewand.png', maxLvl: 8},
    {type:'wpn', itmName: 'Hellfire', img: 'img/hellfire.png', evolve:['Spinach'], baseWpn: ['Fire Wand'], maxLvl: 1},

    {type:'wpn', itmName: 'Garlic', img: 'img/garlic.png', maxLvl: 8},
    {type:'wpn', itmName: 'Soul Eater', img: 'img/souleater.png', evolve:['Pummarola'], baseWpn: ['Garlic'], maxLvl: 1},

    {type:'wpn', itmName: 'Peachone', img: 'img/peachone.png', maxLvl: 8},
    {type:'wpn', itmName: 'Ebony Wings', img: 'img/ebonywings.png', maxLvl: 8},
    {type:'wpn', itmName: 'Vandalier', img: 'img/vandalier.png', baseWpn: ['Peachone', 'Ebony Wings'], maxLvl: 8},

    {type:'wpn', itmName: 'Santa Water', img: 'img/santawater.png', maxLvl: 8},
    {type:'wpn', itmName: 'Runetracer', img: 'img/runetracer.png', maxLvl: 8},
    {type:'wpn', itmName: 'Lightning Ring', img: 'img/lightningring.png', maxLvl: 8},
    {type:'wpn', itmName: 'Pentagram', img: 'img/pentagram.png', maxLvl: 7},
    {type:'wpn', itmName: 'Clock Lancet', img: 'img/clocklancet.png', maxLvl: 7},
    {type:'wpn', itmName: 'Laurel', img: 'img/laurel.png', maxLvl: 7},
    {type:'wpn', itmName: 'Bone', img: 'img/bone.png', maxLvl: 8},

    {type:'accessory', itmName: 'Spinach', img: 'img/spinach.png', stats: {might:50}, maxLvl: 5},
    {type:'accessory', itmName: 'Armor', img: 'img/armor.png', stats: {armor:-5}, maxLvl: 5},
    {type:'accessory', itmName: 'Hollow Heart', img: 'img/hollowheart.png', stats: {maxHp:50}, maxLvl: 5},
    {type:'accessory', itmName: 'Pummarola', img: 'img/pummarola.png', stats: {recovery:0.5}, maxLvl: 5},
    {type:'accessory', itmName: 'Empty Tome', img: 'img/emptytome.png', stats: {cooldown:-40}, maxLvl: 5},
    {type:'accessory', itmName: 'Candelabrador', img: 'img/candelabrador.png', stats: {area:50}, maxLvl: 5},
    {type:'accessory', itmName: 'Bracer', img: 'img/bracer.png', stats: {speed:50}, maxLvl: 5},
    {type:'accessory', itmName: 'Spellbinder', img: 'img/spellbinder.png', stats: {duration:50}, maxLvl: 5},
    {type:'accessory', itmName: 'Duplicator', img: 'img/duplicator.png', stats: {amount:2}, maxLvl: 2},
    {type:'accessory', itmName: 'Wings', img: 'img/wings.png', stats: {moveSpeed:50}, maxLvl: 5},
    {type:'accessory', itmName: 'Attractorb', img: 'img/attractorb.png', stats: {magnet:119}, maxLvl: 5},
    {type:'accessory', itmName: 'Clover', img: 'img/clover.png', stats: {luck:50}, maxLvl: 5},
    {type:'accessory', itmName: 'Crown', img: 'img/crown.png', stats: {growth:35}, maxLvl: 5},
    {type:'accessory', itmName: 'Stone Mask', img: 'img/stonemask.png', stats: {greed:50}, maxLvl: 5},
]

const characters = [
    {chrName: 'Antonio', img: 'img/antonio.png', stats: {might: 50}, items:['Whip']},
    {chrName: 'Arca', img: 'img/arca.png', stats: {cooldown: -15}, items:['Fire Wand']},
    {chrName: 'Clerici', img: 'img/clerici.png', stats: {recovery:0.5, maxHp:30}, items:['Santa Water']},
    {chrName: 'Dommario', img: 'img/dommario.png', stats: {duration:40, moveSpeed:-40}, items:['King Bible']},
    {chrName: 'Exdash', img: 'img/exdash.png', stats: {maxHp:-33, moveSpeed:-10, might: -10, area: -10, speed: -50, duration: -10, cooldown: 10, luck: 100}, items:['Ebony Wings']},
    {chrName: 'Gennaro', img: 'img/gennaro.png', stats: {amount: 1}, items:['Knife']},
    {chrName: 'Imelda', img: 'img/imelda.png', stats: {growth: 30}, items:['Magic Wand']},
    {chrName: 'Mortaccio', img: 'img/mortaccio.png', stats: {amount: 3}, items:['Bone']},
    {chrName: 'Pasqualina', img: 'img/pasqualina.png', stats: {speed: 30}, items:['Runetracer']},
    {chrName: 'Poe', img: 'img/poe.png', stats: {maxHp: -30, magnet: 25}, items:['Garlic']},
    {chrName: 'Porta', img: 'img/porta.png', stats: {area: 30}, items:['Lightning Ring']},
]

const state = {selectedChar:'', selectedItems:[], fullyLeveled: false}

let selectedChar = {}
let selectedItems = []
let statsEl = {}
let wpnsEl = {}
let accessoriesEl = {}
let totalLvlUpEl = {}
let useFullyLeveled = false


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

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getCurrentState() {
    state.selectedChar = selectedChar.chrName
    state.selectedItems = []
    selectedItems.forEach((si) => {
        state.selectedItems.push(si.itmName)
    })
    state.fullyLeveled = useFullyLeveled
    navigator.clipboard.writeText(`https://ctrpetersen.github.io/vsbp/?state=${btoa(JSON.stringify(state))}`);
    console.log(JSON.stringify(state))
}

function loadState() {
    if (getParameterByName('state')){
        const loadedState = JSON.parse(atob(getParameterByName('state')))
        if (loadedState.selectedChar) selectChar(loadedState.selectedChar)
        if (loadedState.fullyLeveled) useFullyLeveled = loadedState.fullyLeveled
        if (loadedState.selectedItems){
            loadedState.selectedItems.forEach((si) => {
                addRemoveItem(si, items.find(itm => itm.itmName === si).type)
            })
        }
    }
}

function resetStats(){
    if (!useFullyLeveled) {
        stats = {maxHp: 0, recovery: 0, armor: 0, moveSpeed: 0, might: 0, area: 0, speed: 0, duration: 0, amount: 0, cooldown: 0, luck: 0, growth: 0, greed: 0, magnet: 0}
    }
    else{
        stats = {maxHp: 30, recovery: 0.5, armor: -3, moveSpeed: 10, might: 25, area: 10, speed: 20, duration: 30, amount: 1, cooldown: 5, luck: 30, growth: 15, greed: 50, magnet: 50}
    }
}

function toggleUseFullyLeveled(){
    useFullyLeveled = !useFullyLeveled
    generateStats()
}

function generateStats() {
    resetStats()
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
    let it = 1;
    Object.keys(stats).forEach((s) => {
        if (stats[s] > 0) statString += '+'
        if (stats[s] === 0) statString += '-'
        else{
            statString += `${stats[s]}`
            if (s === 'moveSpeed' || s === 'might' || s === 'area' || s === 'speed' ||
            s === 'duration' || s === 'cooldown' || s === 'luck' || s === 'growth' ||
            s === 'greed' || s === 'magnet') statString += '%'
        } 
        statString += '<br/>'
        if (it === 4 || it === 10) statString += '<br/>'
        it++
    })
    statsEl.innerHTML = statString

    let totalLevelups = 0;
    selectedItems.forEach((i) => {
        totalLevelups += i.maxLvl - 1
        if (i.baseWpn){
            i.baseWpn.forEach((iev) => {
                totalLevelups += items.find(it => it.itmName === iev).maxLvl - 1 
            })
        }
    })
    totalLvlUpEl.innerHTML = `Total level ups: ${totalLevelups}`
}

function selectChar(chrName) {
    if (selectedChar.el) selectedChar.el.setAttribute('obj-state', 'unselected')
    selectedChar = characters.find(c => c.chrName === chrName)
    selectedChar.el.setAttribute('obj-state', 'selected')
    generateStats()
}

function addRemoveItem(itmName, type) {
    // rem
    if (selectedItems.some(i => i.itmName === itmName)){
        selectedItems.splice(selectedItems.findIndex(i => i.itmName === itmName), 1)
        items.find(i => i.itmName === itmName).el.setAttribute('obj-state', 'unselected')
    }
    // add
    else if (selectedItems.filter(si => si.type === type).length < 6){
        selectedItems.push(items.find(i => i.itmName === itmName))
        items.find(i => i.itmName === itmName).el.setAttribute('obj-state', 'selected')
    }

    items.forEach((i) => {
        i.el.setAttribute('obj-highlight', 'none')
    })

    selectedItems.forEach((i) => {
        if (i.evolve){
            i.evolve.forEach((iev) => {
                const evolveItem = items.find(itm => itm.itmName === iev)
                if (!selectedItems.some(ininv => ininv.itmName === iev)) evolveItem.el.setAttribute('obj-highlight', 'evolve')
            })
        }
        if (i.baseWpn){
            i.baseWpn.forEach((ibwpn) => {
                const baseWpn = items.find(itm => itm.itmName === ibwpn)
                if (!selectedItems.some(ininv => ininv.itmName === ibwpn)) baseWpn.el.setAttribute('obj-highlight', 'base')
            })
        }
    })

    generateStats()
    generateSelectedItems()
}

function generateSelectedItems() {
    while (wpnsEl.firstChild) {
        wpnsEl.firstChild.remove()
    }
    while (accessoriesEl.firstChild) {
        accessoriesEl.firstChild.remove()
    }
    selectedItems.forEach((i) => {
        const selEl = document.createElement('img')
        selEl.src = i.img
        selEl.title = i.itmName
        if (i.type === 'wpn') wpnsEl.appendChild(selEl)
        else accessoriesEl.appendChild(selEl)
    })
}

function populateCharacterDiv() {
    const charsEl = document.getElementById('charSelection')
    characters.forEach((c) => {
        const charEl = document.createElement('img')
        charEl.src = c.img
        charEl.className = 'char'
        charEl.title = c.chrName
        charEl.setAttribute('obj-state', 'unselected')
        charEl.onclick = function(){selectChar(c.chrName)}
        c.el = charEl
        charsEl.appendChild(charEl)
    })
}

function populateItemDiv() {
    const itmsEl = document.getElementById('itemSelection')
    items.forEach((i) => {
        const itmEl = document.createElement('img')
        itmEl.src = i.img
        itmEl.className = 'item'
        itmEl.title = i.itmName
        itmEl.setAttribute('obj-state', 'unselected')
        itmEl.onclick = function(){addRemoveItem(i.itmName, i.type)}
        i.el = itmEl
        itmsEl.appendChild(itmEl)
    })
}

function populate() {
    populateItemDiv()
    populateCharacterDiv()
    statsEl = document.getElementById('statsNumbers')
    wpnsEl = document.getElementById('selectedWeapons')
    accessoriesEl = document.getElementById('selectedAccessories')
    totalLvlUpEl = document.getElementById('totalLevelups')
    document.getElementById('fullyLeveledBtn').onclick = toggleUseFullyLeveled
    document.getElementById('copyStateButton').onclick = getCurrentState
    generateStats()
    loadState()
}

document.body.onload = populate
