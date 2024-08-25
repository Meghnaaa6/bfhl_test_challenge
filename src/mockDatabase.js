const mockDatabase = {
    user: {
        user_id: 'john_doe_17091999',
        email: 'john@xyz.com',
        roll_number: 'ABCD123'
    },
    dataEntries: []
};

const getUserInfo = () => {
    return mockDatabase.user;
};

const saveDataEntry = (entry) => {
    mockDatabase.dataEntries.push(entry);
    return entry;
};

const getDataEntries = () => {
    return mockDatabase.dataEntries;
};

module.exports = {
    getUserInfo,
    saveDataEntry,
    getDataEntries
};