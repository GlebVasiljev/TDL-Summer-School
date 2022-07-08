module.exports = {
    UrlGetter: function(userInput){
    let myMap = new Map();
    let input = userInput.slice('');

    const checkType = function(input){
        if(input.includes('/a/') ){
            return 'album';
        }else if(input.includes('/gallery/') ){
            return 'gallery';
        }else if(input.includes('i.imgur.com') ){
            return 'directLink';
        }else{
            return 'image';
        }
    }
    
    
    let type = checkType(input);
    const UniqueId = function(input, type){
        if(type == 'album'){
            return input.slice(19);
        }
        if(type == 'gallery'){
            return input.slice(25);
        }
        if(type == 'directLink'){
            return input.slice(19);
        }
        if(type == 'image'){
            return input.slice(17);
        }
        
    }
    let id = UniqueId(input,type);
    console.log(id);
    
    myMap.set(id , type);
    let result = `{id:"${id}",type:"${type}"}`;
    return result;
    }
}
