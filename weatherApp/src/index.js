async function getAllData(city) {
    try {
        const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=8a288039a6f72a04ab0ed8727844e1b4`, {mode: 'cors'})
        let data = await res.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

async function getData(city) {
    let allData = await getAllData(city)
    let data = `{
        "city": "${allData.name}",
        "temp": "${allData.main.temp}",
        "feel": "${allData.main.feels_like}",
        "wind": "${allData.wind.speed}",
        "humidity": "${allData.main.humidity}",
        "pressure": "${allData.main.pressure}"
    }`

    console.log(JSON.parse(data))
    return JSON.parse(data)
}

getData('london')