//========================================================================================================================
//                                                  AKRITI
//========================================================================================================================

var express                 = require("express"),
    app                     = express(),
    bodyParser              = require("body-parser"),
    indexRoutes             = require("./routes/index");

app.use(bodyParser.urlencoded({extended:true}));
                                            // For CSS FILE
app.use(express.static(__dirname + "/public"));
app.set("view engine","ejs");


//_____________________________________________________________________________________________________________
//                                                 USING ROUTES
//                                   ADDING INITIAL ROUTE TO AVOID REPETITION
//_____________________________________________________________________________________________________________
app.use(indexRoutes);

app.listen(3000,function(){
    console.log("Connected you son a bitch");
})

