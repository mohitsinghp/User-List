import chance from 'chance';

export const nameGenerator = () => {
    const newName1 = chance().string({ min: 3, max: 5, pool: 'bcdefghijklnqrstvwxyz' });
    const newName2 = chance().string({ min: 3, max: 5, pool: 'asdfghjklopuytem' });
    const newName3 = chance().string({ min: 3, max: 5, pool: 'bcdfghijklmnpqrstvwxyz0123456789' });
    const newName4 = 't' + chance().string({ min: 2, max: 4, pool: 'abcdefghijklmnopqrstuvwxyz' });
    return newName1 + " " + newName2 + " " + newName3 + " " + newName4;
}

export const ageGenerator = () => {
    return chance().integer({ min: 18, max: 45 });
}

export const phoneNumberGenerator = () => {
    return +chance().phone({ country: "us", formatted: false });
}

export const getRelocation = (age) => {
    let relocationValue = true;
    if (age > 25 && age < 30) {
        relocationValue = false;
    }
    return relocationValue;
}

export const emailGenerator = () => {
    const firstPart = chance().string({ min: 4, max: 20 , pool: 'abcdefghijklmnopqrstuvwxyz0123456789.-_+' });
    const secondPart = chance().string({ min: 5, max: 10 , pool: 'abcdefghijklmnopqrstuvwxyz0123456789' });
    const arr = ['com','net','mx'];
    const thirdPart = arr[Math.floor(Math.random() * arr.length)]
    return firstPart + "@" + secondPart + "." + thirdPart;
}

export const avatarGenerator = () => {
    return chance().avatar({ protocol: 'https', fileExtension: 'jpg', });
}