class RecepieService {
    save(jsonRecep) {
        console.log("Saving", jsonRecep);
    }

    get(id) {
        var a = server.get(id);
    }
}

export default new RecepieService();


// [
//     {id: 1, name: "omri"},
//     {id: 2, name: 'dor'}
// ]