class mylist {
    constructor(){
        this.state = {
         data : [{id:"1",name:"family",massage:3},
         {id:"2",name:"buisnes",massage:3},
         {id:"3",name:"trip",massage:3},
         {id:"4",name:"fun",massage:3},
         {id:"5",name:"kids",massage:3},
         {id:"6",name:"gulot",massage:3}]
            ,dataDelete : [],
       } 
      }
      
      getlist()
      {
          return this.state.data;
      }
}

export default new mylist();


// [
//     {id: 1, name: "omri"},
//     {id: 2, name: 'dor'}
// ]