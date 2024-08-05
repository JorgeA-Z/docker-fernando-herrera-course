let times = 0;

const syncDB = () => {
    times ++;
    console.log("Tick cada multuplo de 5: ", times)
    return times;
}

module.exports = 
{
    syncDB 
}