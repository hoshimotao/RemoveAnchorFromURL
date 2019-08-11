function removeUrlAnchor(url){
 let newStr = url;
 
 if(newStr.includes("#")){
 
 return newStr.slice(0, 16);
 }
  
}