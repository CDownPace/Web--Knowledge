let data={
  en:'str0',
  cn:'第章',
  extra:[
    {
      en:'str1',
      cn:'第一章',
      extra:[
        {
          en:'str1',
          cn:'第一章',
          
        },
      ],
    },{
          en:'str2',
          cn:'第二章',
          extra:[
            
              {
                en:'str3',
                cn:'第三章',
                
              }
            ]
        },
  ]
}

function getCNTitle(data,enTitle){
  for(let value in data){
    if(data[value]==enTitle){
      return data['cn']
    }else{
      if(typeof data[key]=='object'){
        let temp = getCNTitle(data[key],enTitle)
        if(temp){
          return `${temp}`
        }
      }
    }
  }
}
