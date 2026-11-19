
const fs=require('node:fs/promises')
async function create(){
    try{await fs.writeFile("mt1_file.txt",
        "hello my name is aviral"
    )}catch{
        console.log("file not created")
    }

}
async function read(){
    try{ read=await fs.readFile("mt1_file.txt",'utf-8'
    )
    console.log(read)}
    catch{
        console.log("file not read")
    }

}
async function update(){
    try{await fs.appendFile("mt1_file.txt",
         "hello my name is aviral / i am a btech student "
    )}catch{
        console.log("file not created")
    }

}
async function deletee(){
    try{await fs.unlink("mt1_file.txt"
    )}catch{
        console.log("file not deleted")
    }

}
create()
read()
update()
read()
