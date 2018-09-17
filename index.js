// mocha
const formatDate = (timeInSeconds) => {
    
    if(timeInSeconds == undefined){
    return `0s`;
    }

    if(timeInSeconds > 3600){
      
        const hours = Math.floor(timeInSeconds / 3600);
        let minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds - (minutes * 60);

        if(minutes > 60){
            minutes = Math.floor(minutes - 60);
        }

        return `${hours}h ${minutes}m ${seconds}s`
    }
    
    if((timeInSeconds % 60) == 0 ){
        const minutes = timeInSeconds / 60;
        return `${minutes}m`;
     }

    if(timeInSeconds > 60){
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds - (minutes * 60);
        return `${minutes}m ${seconds}s`;
    }


    return `${timeInSeconds}s`;
    
} 


module.exports = formatDate;