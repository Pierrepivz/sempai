import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js';
import { React, useState, useRef, useEffect } from "react";
import { redirect, Route, Router } from "react-router";
import image1 from "./images/page1.jpg";
import image2 from "./images/page2.jpg";
import image3 from "./images/page3.jpg";
import image4 from "./images/page4.jpg";
import image5 from "./images/page5.jpg";
import image6 from "./images/page6.jpg";
import image7 from "./images/page7.jpg";
import image8 from "./images/page8.jpg";
import image9 from "./images/page9.jpg";
import image10 from "./images/page10.jpg";
import image11 from "./images/page11.jpg";
import image12 from "./images/page12.jpg";
import image13 from "./images/page13.jpg";
import image14 from "./images/page14.jpg";
import image15 from "./images/page15.jpg";
import image16 from "./images/page16.jpg";
import image17 from "./images/page17.jpg";
import image18 from "./images/page18.jpg";
import image19 from "./images/page19.jpg";
import image20 from "./images/page20.jpg";
import image21 from "./images/page21.jpg";
import image22 from "./images/page22.jpg";
import image23 from "./images/page23.jpg";
import image24 from "./images/page24.jpg";
import image25 from "./images/page25.jpg";
import image26 from "./images/page26.jpg";
import image27 from "./images/page27.jpg";
import image28 from "./images/page28.jpg";
import image29 from "./images/page29.jpg";
import image30 from "./images/page30.jpg";



import './Pages.css';


/*                  <option value={image9}>9</option>
                    <option value={image10} >10</option>
                    <option value={image11}>11</option>
                    <option value={image12} >12</option>
                    <option value={image13}>13</option>
                    <option value={image14} >14</option>
                    <option value={image15}>15</option>
                    <option value={image16} >16</option>
                    <option value={image17}>17</option>
                    <option value={image18} >18</option>
                    <option value={image19}>19</option>
                    <option value={image20} >20</option>
                    <option value={image21}>21</option>
                    <option value={image22} >22</option>
                    <option value={image23}>23</option>
                    <option value={image24} >24</option>
                    <option value={image25}>25</option>
                    <option value={image26} >26</option>
                    <option value={image27}>27</option>
                    <option value={image28} >28</option>
                    <option value={image29}>29</option>
                    <option value={image30} >30</option>
                    <option value={image31}>31</option>
                    <option value={image32} >32</option>
                    <option value={image33}>33</option>
                    <option value={image34} >34</option>
                    <option value={image35}>35</option>
                    <option value={image36} >36</option>
                    <option value={image37}>37</option>
                    <option value={image38} >38</option>
                    <option value={image39}>39</option>
                    <option value={image40} >40</option>
                    <option value={image41}>41</option>
                    <option value={image42}>42</option>
                    <option value={image43}>43</option>
                    <option value={image44}>44</option>
                    <option value={image45}>45</option>
                    <option value={image46}>46</option>
                    <option value={image47}>47</option>
                    <option value={image48}>48</option>
                    <option value={image49}>49</option>
                    <option value={image50}>50</option>
                    <option value={image51}>51</option>
                    <option value={image52}>52</option>
                    <option value={image53}>53</option>
                    <option value={image54}>54</option>
                    <option value={image55}>55</option>
                    <option value={image56}>56</option>
                    <option value={image57}>57</option>
                    <option value={image58}>58</option>
                    <option value={image59}>59</option>
                    <option value={image60}>60</option> */



export default function Page(props){

  const editorRef = useRef();
  const page_list = [image1,image2,image3,image4,image5,image6,
    image7,image8,image9,image10,image11,image12,image13,image14,
    image15,image16,image17,image18,image19,image20,image21,image22,image23,image24,image25,image26,image27,image28,image29,image30];
  const [imagetest,setImage] = useState() ;
  const [id,setId] = useState();
  const [uploader,setupload] = useState("uploader");
  
  
   
  useEffect (() => {
    
  var upload = document.querySelector(".transition").classList;
  const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get("id");
  setId(id);
  

  if(id == 6  || id == 11){
    setupload("uploader_large");
  }else{
    setupload("uploader");
  }

    setImage(page_list[id-1]);
    upload.add("appear");

    
    }, []); 
  
  function pageselect(select){

   window.location.href = `/?id=${select}`;
  
  }  

  
  function nextpage(){

    
    

    if( id == 30 ){
      return false;
    }
    
    var newid = Number(id) + 1;
    pageselect(newid);


  }
   function previouspage(){

    
    if( id == 0 ){
      return false;
    }
    
    var newid = Number(id) - 1;
    pageselect(newid);

    
   
   }  

return(



    <div class="container background">
      <br/><br/><br/><br/>
        <div class="buton">
        
        
        <option value="chap1">Chapitre 1 : Et toi, pourquoi sautes-tu ? </option>
        
</div><br/>
          <div class="flex">
            

        
        <div class="pages">
        
        <buton class="buton" onClick={e => previouspage()}>Prec</buton>
        
        <label for="page_select"></label>
        <select class="filtres research buton" id="page_select"  onChange={ (e) => {pageselect(e.target.value,e.target.key)}} value={id} >
        
                    
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10} >10</option>
                    <option value={11}>11</option>
                    <option value={12} >12</option>
                    <option value={13}>13</option>
                    <option value={14} >14</option>
                    <option value={15}>15</option>
                    <option value={16} >16</option>
                    <option value={17}>17</option>
                    <option value={18} >18</option>
                    <option value={19}>19</option>
                    <option value={20} >20</option>
                    <option value={21}>21</option>
                    <option value={22} >22</option>
                    <option value={23}>23</option>
                    <option value={24} >24</option>
                    <option value={25}>25</option>
                    <option value={26} >26</option>
                    <option value={27}>27</option>
                    <option value={28} >28</option>
                    <option value={29}>29</option>
                    <option value={30} >30</option>
                    <option value={31}>31</option>
                    <option value={32} >32</option>
                    <option value={33}>33</option>
                    <option value={34} >34</option>
                    <option value={35}>35</option>
                    <option value={36} >36</option>
                    <option value={37}>37</option>
                    <option value={38} >38</option>
                    <option value={39}>39</option>
                    <option value={40} >40</option>
                    <option value={41}>41</option>
                    <option value={42}>42</option>
                    <option value={43}>43</option>
                    <option value={44}>44</option>
                    
        </select>
        <buton class="buton" onClick={e => nextpage()} >Next</buton>
        
        </div>

        </div>
       
        <div class={uploader} id="manga_page" onClick={e => nextpage()}>
            <img src={imagetest} class="transition" />      
        
        </div>
        




        </div>


);
  
}