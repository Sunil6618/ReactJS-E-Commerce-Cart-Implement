//function component
function Cart() {
  //      get     set 
  const [getTotal, setTotal] = React.useState({
      // import default values
     totQty: 0, 
    totPrc: 0
  });
   //      get     set 
  const [getPro, setPro] = React.useState([
    {
      // import default values
      img:"https://spicesandaroma.in/wp-content/uploads/2021/01/Jalebi-An-Indian-Dessert.jpg",
      nm: "Jalebi",
      qty: 0,
      prc: 300,
      weight:"1 KG",
      total: 0
    },
    {
      img:"https://cdn.tasteatlas.com/Images/Dishes/23fba80da08c46ceba5a99a5b1f1f200.jpg?w=375&h=280",
      nm: "Gulab Jamun",
      qty: 0,
      prc: 500,
      weight:"500 gms",
      total: 0
    },
    {
      img:"https://decider.com/wp-content/uploads/2019/09/great-british-baking-show-mishti.png?w=646&h=431&crop=1",
      nm: "Kalakand",
      qty: 0,
      prc: 700,
      weight:"250 Gms",
      total: 0
    },
    {
      img:"https://www.cookwithkushi.com/wp-content/uploads/2021/05/d.jpg",
      nm: "Kaju Katali",
      qty: 0,
      prc: 850,
      weight:"1 KG",
      total: 0
    },
    {
      img:"https://t4.ftcdn.net/jpg/02/54/92/05/360_F_254920579_xOIyVqIWxgUi0fSQ8FwBC95YlIVZpuCd.jpg",
      nm: "Mix Sweets",
      qty: 0,
      prc: 650,
      weight:"1 KG",
      total: 0
    },
    {
      img:"https://upload.wikimedia.org/wikipedia/commons/9/91/Indian_Sweet_Dessert_Peda_in_a_white_bone_china_plate.jpg",
      nm: "Kesar Peda",
      qty: 0,
      prc: 700,
      weight:"1 KG",
      total: 0
    }
  ]);
  // arrow function calculate particular amount and quantity of product
  const proQtyPrc = () => {
    var qty = 0,      price = 0;
    
//arrayName . goes throuh array
    getPro.map(
      //take element out from array
      (item) => (
     // var_name   //array.element
        (qty = qty + item.qty), (price = price + item.prc)  
      )
    );
    
    // set or send price and qty above cart function
    setTotal({ totQty: qty, totPrc: price });
    
  };
  // increment button arrow function
  const [getQP, setQP] = React.useState(getPro);
  const incr = (index) => {
  
    getPro[index].qty = getPro[index].qty + 1;
    getPro[index].total = getPro[index].prc * getPro[index].qty;
   
    setQP(getPro);
    setPro(getQP);
  
    proQtyPrc();
  };
  // decrementarrow function
  const decr = (index) => {
    if (getPro[index].qty <= 0)
    {
      
    } 
    else 
    {
      getPro[index].qty = getPro[index].qty - 1;
      getPro[index].total = getPro[index].prc * getPro[index].qty;
      setQP(getPro);
      setPro(getQP);
      proQtyPrc();
    }
  };

  return (
    <div>
      <div style={{textAlign : 'center',
                   height:0
                  }}>
          <h3 style={{fontSize:50, color:'black',textAlign:'center'}}>My Cart</h3>
       </div>
       <div style={{display:'flex',height:100}}>
        <div style={{marginRight:10,flex:1}}>
          <p style={{fontSize:25,fontWight: 'bold' ,color:'black',textAlign:'right'}}>Quantity : {getTotal.totQty}</p>
          <p style={{fontSize:25,fontWight: 'bold' ,color:'black',textAlign:'right'}}>Amount: {getTotal.totPrc}</p>
        </div>
      </div>
      {getPro.map((item, index) => (
        <div style={{display:'flex',height:150}} >
         <div style={{flex:1,margin:5}}>
           <img src={item.img} height={130} width={170}
                                                   />
          </div>
         <div style={{flex:1}}>
            <h1 style={{color:'black',margin:0}}>{item.nm}</h1>
           <h3  style={{color:'black'}}>{item.weight}</h3>
           <h3  style={{color:'black'}}>Price:{item.prc}</h3>
           
          </div>
           <div style={{marginTop:40,marginLeft:20,flex:2}} >
            <button
              
            onClick={() => {
              incr(index);
            }}
            style={{
              backgroundColor: "Green",
              color: "white",
              fontSize: 30,
              width: 40,
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            +
          </button>
              {item.qty}
          <button
            onClick={() => {
              decr(index);
            }}
            style={{
              backgroundColor: "red",
              color: "white",
              fontSize: 30,
              width: 40,
              marginLeft: 20
            }}
          >
            -
          </button>
             <p style={{fontSize:30,color:'black',textAlign:'right',margin:0,paddingRight:20}}>Price: {item.total}</p>
          </div>
        </div>
      ))}
       </div>
  );
}
 // invoke cart function component
ReactDOM.render(
      <Cart />,
      document.getElementById("root")
      );
