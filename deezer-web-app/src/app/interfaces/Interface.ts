export interface IgetAllGenre{
    data: IGenre[]
}
export interface IGenre {
    id: number,
    name: string,
    picture: string,
    picture_small: string,
    picture_medium: string,
    picture_big: string,
    picture_xl: string,
    type: string
}

export interface IArtist{
    data: IArtistContent[]
}

export interface IArtistContent{

    id?: string,
    readable: boolean,
    title: string,
    title_short: string,
    title_version: string,
    link: string,
    duration: number,
    rank: number,
    explicit_lyrics: boolean,
    explicit_content_lyrics: number,
    explicit_content_cover:number,
    preview:string,
    md5_image: string,
    album: IAlbumContent,
    artist: IArtistInnerContent,
}

interface IAlbumContent{
    id?: number,
    title:string,
    cover:string,
    cover_small:string,
    cover_medium:string,
    cover_big:string,
    cover_xl:string,
    md5_image:string,
    tracklist:string,
    type:string
}

interface IArtistInnerContent{
    id: number,
    name:string,
    link:string,
    picture:string,
    picture_small:string,
    picture_medium:string,
    picture_big:string,
    picture_xl:string,
    tracklist:string,
    type:string
}