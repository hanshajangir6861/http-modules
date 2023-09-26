import http from "http"


let students = [
    { id: 1, name: 'maruti', age: 18, phone: 1234567892 },
    { id: 2, name: 'toyota', age: 19, phone: 1234569892 },

];

const sever = http.createServer((req, res) => {
    if (req.method === "GET") {
        if (req.url.match("/students")) {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(students))
        }



        else {
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.end("not a valid pge")
        }
    }

    ///adding new data in array by post///
    if (req.method === "POST") {
        if (req.url.match("/new")) {
            let newStudent = ''
            req.on("data", (dt) => {
                newStudent += dt.toString()
            })
            req.on("end", () => {
                students.push(JSON.parse(newStudent))
                res.writeHead(200, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify(students))
            })
        }


        ///deleteing//

    }
    // if (req.method === "DELETE") {
    //     let studentsToDelete = request.url.splite("/")
    //     students = students.filter((students) => {
    //         return students.id !== Number(studentsToDelete);
    //     })
    //     res.writeHead(200, { 'Content-Type': 'application/json' })
    //     res.end(JSON.stringify(students))
    // }

    if (req.method === "PUT") {
        if (req.url.match("/put")) {
            let toDelete = req.url.split("/")[2]
            let newData = ''
            req.on("data", (call) => {
                newData += call.toString()
            })
            req.on("end", () => {
                students[toDelete - 1] = JSON.parse(newData)
                res.writeHead(200, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify(students))
            })
        }
    }
})

sever.listen(5000, () => { console.log("this is my first sever") })