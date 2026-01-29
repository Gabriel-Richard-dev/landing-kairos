import './main.css'

export default function Main() {
    return <div className='main pt-1 flex items-center justify-center'>
        
        <div className='flex  ml-20 mr-20 gap-40 justify-center items-center'>
            <div className='title-box'>
                <div className=' p-3 pill flex justify-center items-center gap-5'>
                    <div className='icon'>
                        <i className="pi pi-briefcase"></i>
                    </div>
                    Soluções para sua empresa
                </div>
                <h1 className='text-9xl mb-10' >Kairós Agência</h1>
                <a href='' className='button'>Venha conhecer</a>
            </div>
            <img className='img-border w-140' src="src/assets/imgs/beni.png" alt="" />
        </div>


    </div>
}