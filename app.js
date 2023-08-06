const axios = require('axios')


const GET_REQ = async () => {
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log("🚀 ~ file: app.js:6 ~ constGET_REQ= ~ data:", data.map(p => ({title: p.title})));

    } catch (error) {
        console.log("🚀 ~ file: app.js:5 ~ constPOST_REQ= ~ error:", error)
    }
}
const CREATE_REQ = async () => {
    try {
        const body = {
            "title": "FC-SM-2023",
            "body": "OMAR",
            "userId": 1,
        }
        const { data } = await axios.post('https://jsonplaceholder.typicode.com/posts', body, {})
        console.log("🚀 ~ file: app.js:23 ~ constCREATE_REQ= ~ data:", data)
    } catch (error) {
        console.log("🚀 ~ file: app.js:5 ~ constPOST_REQ= ~ error:", error)
    }
}
const UPDATE_REQ = async () => {
    try {

        const headers = {
            'Content-type': 'application/json; charset=UTF-8',
        }

        const body = {
            "title": "FC-SM-2023",
            "body": "MILIBARI 12",
            "userId": 1,
            "id": 1
        }
        const { data } = await axios.put('https://jsonplaceholder.typicode.com/posts/1', body, {headers})
        console.log("🚀 ~ file: app.js:23 ~ constCREATE_REQ= ~ data:", data)
    } catch (error) {
        console.log("🚀 ~ file: app.js:5 ~ constPOST_REQ= ~ error:", error)
    }
}
const DELETE_REQ = async () => {
    try {
        const { data } = await axios.delete('https://jsonplaceholder.typicode.com/posts/1')
        console.log("🚀 ~ file: app.js:50 ~ constDELETE_REQ= ~ data:", data)
    } catch (error) {
        console.log("🚀 ~ file: app.js:5 ~ constPOST_REQ= ~ error:", error)
    }
}

const run = async () => {

    await GET_REQ()
    await CREATE_REQ()
    await UPDATE_REQ()
    await DELETE_REQ()

}

run()