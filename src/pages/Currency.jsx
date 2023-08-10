// import SideBalance from 'components/SideBar/SideBalance/SideBalance';
import SideBalance from 'components/SideBar/SideBalance/SideBalance';
import SideBar from 'components/SideBar/SideBar';
import { Graphics, Line } from 'components/SideBar/SideBar.styled';
import SideCurrency from 'components/SideBar/SideCurrency/SideCurrency';
import SideNav from 'components/SideBar/SideNav/SideNav';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate} from 'react-router-dom';
// import SideNav from 'components/SideBar/SideNav/SideNav';

function Currency() {

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const navigate = useNavigate();
    
    useEffect(()=> {
        if(!isMobile)
        navigate("/", {replace: true});
    })

    return (
        <div>
           <SideNav/>
           <SideCurrency/>
           <Graphics/>
           <Line/>
        </div>
    );
}

export default Currency;