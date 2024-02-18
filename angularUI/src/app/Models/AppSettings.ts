export class AppSettings{
    storesApi: string = "";
    storesApiSecured: string = "";
}


export const appSettings: AppSettings = {
    storesApiSecured: "https://localhost:7288/api",
    storesApi: "http://localhost:5053/api"
}