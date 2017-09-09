
export default class StateApi{
    constructor(rawData){
        this.data = {
            articles : this.mapIntoObjects(rawData.articles),
            authors : this.mapIntoObjects(rawData.authors)
        };

    }

    mapIntoObjects(array){
        return array.reduce((acdcumulate,current) => {
            acdcumulate[current.id] = current;
            return acdcumulate;
        },{});
    }

    lookUpAuthor = (authorId) =>{
        return this.data.authors[authorId];
    }

    getState(){
        return this.data;
    }

}