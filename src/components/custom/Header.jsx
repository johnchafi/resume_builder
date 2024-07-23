import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../ui/button'
import { UserButton, useUser } from '@clerk/clerk-react';


function Header() {
  const {user, isSignedIn} = useUser();
  return (
    <div className='p-3 px-5 flex justify-between shadow-md'>
        <img src="/logo.svg" width={100} height={100}/>
        {
            isSignedIn ? 
            <div><Link to="/dashboard"><Button variant="outline">Dashboard</Button></Link>
            <UserButton></UserButton>
            </div>
            
            :
            <Link to="/auth/sign-in"><Button>Get started</Button></Link>
        }
        
    </div>
  );
}

export default Header;
