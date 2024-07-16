import noteContext from "./noteContext";
//ya import kia bany hoay context ko aur use kia 


const NoteState = (props)=>{

    // This is an object we make it to show how we can make obj in useContext
 


    return (
        // noteContext file may ais context ko banaya hay aur yaha ausi context ko use kia hay 
        <noteContext.Provider value={{}}>
            {props.children} 
         {/* ais ka porps.childern ka matlab jitnay bhi component hain aun ko as props pass ho jay */}
        </noteContext.Provider>
    )
}


//  ya to export to NoteState ho rahi hay to ais ko ham wrap kar dain gay LAYOUT.js may NoteStete component ko wrap karin gay saray components pay dakho layout.js may 
export default NoteState