let user = {
    name:'Kiran',
    getName:function(){
        return this.name;
    }
}

let outer = function(){
    console.log(this)
    let inner = ()=>{
        console.log(this);
    }
    inner();
}

outer.call({name:'vishnu'});

