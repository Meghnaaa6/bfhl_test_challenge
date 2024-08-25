exports.formatResponse = (status, userId, email, rollNumber, numbers, alphabets, highestLowercase) => {
    return {
        is_success: status,
        user_id: userId,
        email: email,
        roll_number: rollNumber,
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercase
    };
};