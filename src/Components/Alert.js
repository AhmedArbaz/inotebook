import React from 'react'
//alert jab a raha tha to layout shift ho raha tha to hamari CLS karab ho rahi thi jis say SEO achi nahi ho gi to aus say bachnay kay liay ham ak div bana kay aus may sara width height fix kar dain gay ta kay kuch bhi shift na ho 

const Alert = (props) => {
const capitalize = (word)=>{
  const lower = word.toLowerCase()
  return lower.charAt(0).toUpperCase() + lower.slice(1)
}

  return (
    <div style={{height:'60px'}}>

   { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}role="alert">
          <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
    </div>}
    </div>

  )
}

export default Alert
