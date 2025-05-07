import { useNavigate } from 'react-router-dom';


function Dashboard(){
    const navigate=useNavigate();
    return (
        <div>
            <button className="mx-4" onClick={()=>navigate('/login')}> login</button>
            <button onClick={()=>navigate('/signup')}>signup</button>
        </div>
    )
}
export default Dashboard    