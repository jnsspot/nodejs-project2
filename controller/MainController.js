const main={
    index:(req,res)=>{
        res.render('index');
    },
    about:(req,res)=>{
        res.render('about');
    },
    blog:(req,res)=>{
        res.render('blog');
    },
    contact:(req,res)=>{
        res.render('contact');
    },
    HomeCrossfitLite:(req,res)=>{
        res.render('HomeCrossfitLite');
    },
    HomeFitness:(req,res)=>{
        res.render('HomeFitness');
    },
    Index2:(req,res)=>{
        res.render('Index2');
    },
    program:(req,res)=>{
        res.render('program');
    },
    service:(req,res)=>{
        res.render('service');
    },
    SingleBlog:(req,res)=>{
        res.render('SingleBlog');
    },
    trainer:(req,res)=>{
        res.render('trainer');
    },
    
  
  
};

module.exports = main;