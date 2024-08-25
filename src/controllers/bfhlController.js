const { getUserInfo, saveDataEntry } = require('../mockDatabase');
const { validateData } = require('../validations/bfhlValidation');

exports.handlePostRequest = (req, res) => {
    try {
        const { data } = req.body;

        const { numbers, alphabets, highestLowercase } = validateData(data);

        const userInfo = getUserInfo();

        saveDataEntry({
            numbers,
            alphabets,
            highestLowercase
        });

        const response = {
            is_success: true,
            user_id: userInfo.user_id,
            email: userInfo.email,
            roll_number: userInfo.roll_number,
            numbers,
            alphabets,
            highest_lowercase_alphabet: highestLowercase
        };

        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ is_success: false, error: error.message });
    }
};

exports.handleGetRequest = (req, res) => {
    res.status(200).json({ operation_code: 1 });
};