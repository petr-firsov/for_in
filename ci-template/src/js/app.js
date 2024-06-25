export const hero = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
export const mainArgs = ["name", "level"];

export function orderByProps(object, args) {
    let a = Object.keys(object);
    let b = a.filter(element => {
        if (!args.includes(element)) {
            return element;
        }
    });
    let c = b.sort();
    let properties = args.concat(c);

    const heroTraits = []
    for (let i = 0; i < properties.length; i++) {
        let item = {};
        item.key = properties[i];
        item.value = object[properties[i]];
        heroTraits.push(item);
    }

    return heroTraits;
}