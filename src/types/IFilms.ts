export interface IFilms {
    name:string,
    id:number,
    premiered:string,
    genres: string[],
    image: {
        medium:string,
        original:string,
    }
    network:{
        country:{
            name:string,
        },
    }
    rating:number,
}

