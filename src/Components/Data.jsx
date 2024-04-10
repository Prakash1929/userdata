import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const Data = () => {
  // let api ="https://api.github.com/users";
  const [user, setUser] = useState([]);
  const [loading, setLoading]=useState(true)

  let getdata = async () => {
   try {
    setLoading(false)
    const res = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
    const data = await res.json();
    setUser(data);
   } catch (error) {
    setLoading(false)
     alert(error)
   }
  };

  useEffect(() => {
    getdata();
  }, []);
//   console.log(user);
if(loading){
  return (<>
    <Loading/>
  </>)
}

  return (
    <>
      <div className="contianer">
        <div className="row">
         {
            user.map((item)=>{
                let {id,title,url,thumbnailUrl}=item;
                console.log(item)
                return (
                    <>
                    <div className="col-md-4" key={id}>
            <div className="cardsection">
              <div className="row">
                <div className="col-md-6">
                  <div className="cardImg">
                    <img src={thumbnailUrl} alt={url} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="carapara">
                    <h3>{title}</h3>
                  
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
                    </>
                )
            })
         }
        </div>
      </div>
    </>
  );
};

export default Data;
