

const axios = require('axios');


exports.homeRoutes = (req, res) => {
    
    //make a get request to /api/users
    axios.get("http://localhost:1011/api/users")
    .then(function (response) {
          
            res.render('index', { users:response.data });
        })
        .catch(err => {
            res.send(err);
        })
   
} 

 exports.adduserRoutes = (req, res) => {
 
    res.render('add_user');
}

 exports.updateuserRoutes = (req, res) => {
  
     axios.get("http://localhost:1011/api/users",{params:{id:req.query.id }})
         .then(function (userdata){
          res.render('update_user',{users:userdata.data})
     })
         .catch(err => {
          
             res.send(err);
      })
}
