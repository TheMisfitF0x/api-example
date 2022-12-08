export async function NasaAPIConnection(year) {
    let key = "M5dkt1lIEGSH70HBAFewLQWOToRB54B3wYiLOGen";
    let date = year.toString() + "-12-25";
    let query = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${key}`;

    //fetch
    let res = await fetch(query);

    //translate to js object

    let data = await res.json();

    return data;

}