const http=require('http')
const server=http.createServer((req,res)=>{
    

    res.end("hello ABES")
})
server.listen(3000,()=>{
    console.log("server working")
})
