import { useNavigate } from "react-router"

export const Payment = ()=>{
    const navigate = useNavigate();
    setTimeout(() => {
        navigate("/")
       }, 5000);
    return (
        <>
         <div style={{margin:"10px"}}>
            <img src="https://imgs.search.brave.com/KKEOBdKzMDdbq5EIEbb8Zuv1H2d1di9Dytxx84ITffs/rs:fit:205:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5p/RWdIVFZKVmIzU2dK/SzQ2Y3RxVl9BQUFB/QSZwaWQ9QXBp" alt="" />
        </div>
        
        <h2>Redirecting to Main page.......</h2>
        
        </>
    )
}