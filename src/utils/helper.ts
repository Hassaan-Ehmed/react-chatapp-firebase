export const currentTime =()=>{
    const date = new Date();     
    const hour = date.getHours() > 12 ?  date.getHours()-12  : date.getHours() ;
    const min = date.getMinutes();

    return `${hour < 10 ? '0'+hour : hour }:${min < 10 ? '0'+min : min}`;
} 

export const currentUrlPath = ()=> window.location.pathname;
export let uname = "";