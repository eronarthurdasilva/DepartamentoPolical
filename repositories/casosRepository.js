const casos = [];

//função 
function findAll() {
    return casos;
}

function create(caso){
    casos.push(caso);
    return caso;
}

module.exports = {
    findAll,
    create
};