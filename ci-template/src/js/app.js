export const hero = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
export const mainArgs = ["name", "level"];

export function orderByProps(object, mainArgs) {
    let properties = Object.keys(object);
    properties.filter(element => {
        if (!mainArgs.includes(element)) {
            return element;
        }
    })
    properties.sort();
    let keys = mainArgs.concat(properties);
    
    const heroTraits = [];
    for (let i = 0; i < keys; i++) {
        let item = {};
        item.key = keys[i];
        item.value = object[i];
        heroTraits.push(item);
    }

    return heroTraits;
}

