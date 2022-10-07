import {atom} from 'jotai'



const authAtom = atom({ 
    token: null, 
    groupId: null,

});

export default authAtom;