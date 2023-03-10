import React, { useState, useEffect } from "react";
import './App.css';
import ContentApp from './comp/ContentApp';
import HeaderApp from './comp/HeaderApp';
import ImgPost from './comp/ImgPost';


function App() {
  let [dataContents, setDataContents] = useState([]);
  let testData = [
    {

      "name": "test",
      "url": "./images/item1.png",
      "title": "test1"
    },
    {

      "name": "test",
      "url": "./images/item1.png",
      "title": "test1"
    },
    {

      "name": "test",
      "url": "./images/item1.png",
      "title": "test1"
    },
    {

      "name": "test",
      "url": "./images/item1.png",
      "title": "test1"
    },
    {

      "name": "test",
      "url": "./images/item1.png",
      "title": "test1"
    }
  ]


  useEffect(() => {
    const fetchApi = () => {
      return setDataContents(testData)
      //const urlApi = 'https://app-api-eight.vercel.app/posts';
      //  const urlApi = 'http://localhost:4000/posts';
      //  const res = await fetch(urlApi);
      //  res.json()
      //  .then(res => setDataContents(res))
      //   .catch((err)=>{console.log("ERR : "+err)});
    };
    fetchApi();
  }, [])


  let [selectImgOpen, setSelectImgOpen] = useState(null);
  function ClickOpenImg(imgItem) {
    setSelectImgOpen(imgItem)
  }
  function ClickCloseImg() {
    setSelectImgOpen(null)
  }



  let dataElements = null
  dataElements = dataContents.map((dataContent, index) => {
    return (<ContentApp key={index}
      dataContent={dataContent}
      onClickOpen={ClickOpenImg}
    />);
  })

  let imgPost = null;
  if (!!selectImgOpen) {
    imgPost = <ImgPost
      imgItem={selectImgOpen}
      clickCloseImg={ClickCloseImg}
    />;
  }


  return (
    <div className='app'>
      <HeaderApp />
      {/* <div className="description-app">
      <span>บริการสักยันโดยช่างมืออาชีพ</span>
      </div> */}
      <div className="show-img">
        {dataElements}
      </div>
      {imgPost}
    </div>
  );
}
export default App;
