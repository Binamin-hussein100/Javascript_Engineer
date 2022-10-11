import {readFile} from 'fs'

readFile(new URL('sep.mj',import.meta.url),'utf-8', (err, data)=> {
    if(err){
        throw err
    }else{

    }
})