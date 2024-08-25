exports.validateData = (data) => {
    const numbers = [];
    const alphabets = [];
    let highestLowercase = [];

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (/[a-zA-Z]/.test(item)) {
            alphabets.push(item);
            if (/[a-z]/.test(item)) {
                if (!highestLowercase.length || item > highestLowercase[0]) {
                    highestLowercase = [item];
                }
            }
        }
    });

    return { numbers, alphabets, highestLowercase };
};