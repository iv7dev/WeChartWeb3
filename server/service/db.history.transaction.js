var HistoryTransactions = require('../models/history_transactions');
let TRANSACTIONS_PER_PAGE_LIMIT = 30;

async function findTransactions( pair, page ){
    if(!pair) return null;
    if(!page) page = 1;

    let documents = await HistoryTransactions.find(
        { pair: pair.toLowerCase() }
    ).limit(page * TRANSACTIONS_PER_PAGE_LIMIT).lean().exec();
    return documents;
}
module.exports = {
    findTransactions
}