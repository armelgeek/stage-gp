import React from 'react';
import useCurrentUser from 'shared/hooks/currentUser';

import { UserAvatar } from './Styles';
const Profil = () => {
    const { currentUser } = useCurrentUser();
    return <div>
         {currentUser && 
         <div> 
            <UserAvatar name={currentUser.name} avatarUrl={currentUser.avatarUrl} />
            <h3> {currentUser.name} </h3>
         </div>
         }
         
    </div>
};
export default Profil;