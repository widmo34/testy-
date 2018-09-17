

const formatDate = (timeInSeconds) => {
    
   //if(timeInSeconds === undefined)  return `0s`;
   if(timeInSeconds > 60){
       const minutes = Math.floor(timeInSeconds / 60);
       const seconds = timeInSeconds - (minutes * 60);
      
       console.log(minutes, seconds);
   }
    
} 

const check = formatDate(365);
document.write(check);