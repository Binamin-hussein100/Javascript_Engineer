const pool = require('../../db')
const queries = require('./queries')

const getStudents = (req,res)=>{
    pool.query(queries.getStudents,(error, results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    })
    }

const getStudentById = (req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById,[id],(error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const addStudents = (req,res)=>{
    const {name, email, age, dob} = req.body;
    // check if email already exists
    pool.query(queries.emailExists,[email], (error, results)=>{
        if(results.rows.length){
            res.send("email already exists");
        }

        // add student to database
        pool.query(queries.addStudents,[name, email, age, dob],(error, results)=>{
            if (error) throw error;
            res.status(201).send("Student created successfully")
            console.log("Student created successfully")
        })
    })
}

const deleteStudentById = (req, res) =>{
    const id = parseInt(req.params.id)
    pool.query(queries.getStudentById,[id],(error, results)=>{
        const noStudentFound = !results.rows.length
        if (noStudentFound){
            res.send("Could not remove student")
        }
    })

    pool.query(queries.removeStudent,[id],(error, results)=>{
        if(error) throw error;
        res.status(200).send("student removed successfully")
    })
}

const editStudent = (req, res) => {
    const id = parseInt(req.params.id)
    const {name} = req.body

    pool.query(queries.getStudentById,[id],(error, results)=>{
        if(error) throw error;
        const noStudentFound = !results.rows.length
        if (noStudentFound) res.send("Could not find student in the database!")
        pool.query(queries.updateStudents,[name,id], (error, results)=>{
            if (error) throw error
            res.status(200).send("Student updated successfully")
        })
    })
}

module.exports={
    getStudents,
    getStudentById,
    addStudents,
    deleteStudentById,
    editStudent
}