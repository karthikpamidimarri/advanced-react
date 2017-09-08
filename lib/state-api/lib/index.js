
export default class DataApi{
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

    getState(){
        return this.data;
    }

}