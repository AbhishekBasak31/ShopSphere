import React, { useState } from "react";
import { TextField,Dialog,DialogActions,Button,Box } from "@mui/material";
import { addNewProduct } from "../../../ApiRoutes";
import { makeStyles} from "@material-ui/core/styles"
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

export default function Form(props) {

  const [formData,setFromdata]=useState({
    Product_name:'',
    Product_description:'',
    Product_catagory:'',
    Product_price:null,
    Product_quantity:null
    
  })
  const [imageUrl, setImageeUrl] = useState("");
  const[file,setFile]=useState(null);

  // Handle Paper style of the dialog box
  const useStyles = makeStyles((theme) => ({
    paperRoot: {
      padding: theme.spacing(4), // Customize padding as needed
      width: theme.spacing(50),
      textAlign:"center",
      borderRadius:"1.53rem"
      // Add more custom styles here
    },
  }));

  //Handel input data 
  function handleChnage(event){
    const{name,value}=event.target;
    setFromdata((prevData)=>{
      return{
        ...prevData,
        [name]:value
      }
    })
  }

  //Handel Input image  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file)
     if (file) {
      setFile(file)
      const reader= new FileReader();
       reader.onloadend = () => {
        
        setImageeUrl(reader.result);
       };
     reader.readAsDataURL(file)
       console.log(imageUrl)
     }
    
  };

  //Handel Submit  
  function handleSubmit(event){
    event.preventDefault()
    props.SendData(formData,file)
    setFile(null)
    setFromdata({
        Product_name:'',
        Product_description:'',
        Product_catagory:'',
        Product_price:0,
        Product_quantity:0
        
      })


  }
  const classes = useStyles();
  return(
    <Dialog
    open={props.isopen}
    onClose={props.isClose}
    fullWidth={true}
    classes={{paper:classes.paperRoot}}

    >
        <DialogActions >
        <Button sx={{color:"orange"}} onClick={props.isClose}><CloseIcon/></Button>
        </DialogActions>

        <div component="form" margin={"auto"}  sx={{
        '& .MuiTextField-root': { mb: 5, width: '100%',  }, 
      }}>
            <div >
      <TextField 
      value={formData.Product_name} 
      placeholder='Product name'
      sx={{width:"50%"}} 
      name='Product_name' 
      onChange={handleChnage}/>

      <TextField value={formData.Product_description} 
      placeholder='Descprption'
      sx={{width:"50%"}} 
      name='Product_description' 
      onChange={handleChnage}/>

      <TextField value={formData.Product_catagory}
       placeholder='Catagory'
       sx={{width:"50%"}} 
       name='Product_catagory'
        onChange={handleChnage}/>

      <TextField value={formData.Product_price}
       type='number' 
       placeholder='Price'
       sx={{width:"50%"}} 
       name='Product_price' 
       onChange={handleChnage}/>

      <TextField value={formData.Product_quantity}
       type='number'
        placeholder='Quantity'
        sx={{width:"50%",border:"none"}} 
        name='Product_quantity'
         onChange={handleChnage}/>

      <input  type="file" 
      accept="image/*"
       onChange={handleImageChange} 
       style={{width:"50%" ,marginBottom:5}}/>

            </div>

      <Button  onClick={handleSubmit} fullWidth={true} variant="contained" sx={{bgcolor:"green"}} >Submit</Button>

          </div>
          </Dialog>

  )
 
  
}
