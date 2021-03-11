var Userdb = require('../model/model');


//create user and save the new user

exports.create = (req, res) => {

    //validate request
    if (!req.body) {
        res.status(400).send({ message: "COnetent Can not be empty" });
        return;
    }
    
    //create new user

  

    const user = new Userdb({  //new user is made here 
   name: req.body.name,
    fees: req.body.fees,
   mobno: req.body.mobno,
    status: req.body.status,
  });

    user
        .save(user)   //then that user is saved here>>
        .then(data => {
             
            res.redirect("/add_user");
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "SOme error occured while creating the user"
            });
         });

};




//retrieve and return user from the database

exports.find = (req, res) => {
  
    if (req.query.id)
    {
        const id = req.query.id;

        Userdb
            .findById(id)
            .then(data => {
            if(data){
                res.send(data)
            }
            else {
    
                 res.status(404).send({message: "Not found user with id " + id })
            }
            

        })
        .catch(err => {
             
            res.status(500).send({ message: err.message || "error Occurred with retreiving user information" });
        })
    }
    else {
          Userdb
        .find()
        .then(user => {
            res.send(user)

        })
        .catch(err => {
             
            res.status(500).send({ message: err.message || "error Occurred with retreiving user information" });
        })
    }
  
    
}


//update a new identified user by user id 
exports.update = (req, res) => {

    if (!req.body) {
          
        return res
            .status(400)
            .send({ message: "Data to update can not be empty" });
              
    }
    
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (data) {
                
                res.send(data); 
            }
            else {
                
               res.status(404).send({ message: `Cannot Update user ${id}.May be user not found` });
                
            }
        })
        .catch(err => {
        
            res.status(500).send({ message: "Error Update User Informmation " });

        });
}

//delete a user from the database

exports.delete = (req, res) => {

    const id = req.params.id;

    Userdb.
        findByIdAndDelete(id)
        .then(data => {
            
            if (data) {
                res.send({ message: "user ki maa chod di bhaiyaji" });
            }
            else {
                res.status(404).send({ message: `Cannot delete user ${id}` });
            }
        })
        .catch(err => {

            res.status(500).send({
                message: "cannot delete the user with id = " + id
            })
            
        });
}