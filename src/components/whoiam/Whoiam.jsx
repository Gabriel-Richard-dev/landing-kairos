import './whoiam.css'

export default function Whoiam() {
    return <div className='whoami black'>
        <div className='content'>

            <div className='grid grid-cols-2 items-center gap-20 text-right pl-50'>
                <div className='gap-10'>
                    <h1 className='text-9xl mb-5 quem'>Quem <span className='text-9xl font-bold notquem'>somos?</span></h1>
                </div>
                <div className='text-md text-box text-left'>
                    
                    <div className='blue-border p-10' >
                        <p>Agência que traz <span className='font-bold'>modernidade</span>, eficiência e identidade para sua marca.</p>

                    <p className='mt-8'>Soluções <span className='font-bold'>eficientes</span> para as mais diversas áreas de atuação profissional.</p>
                    </div>
                    
                   
                </div>
            </div>
           
        </div>
          <div className='flex gap-10 mt-5 justify-center'>
                        <span className='pill'> <i className='pi pi-angle-double-up'></i> Eficiência</span> <span className='pill'> <i className='pi pi-microchip'></i> Modernidade</span> <span className='pill'> <i className='pi pi-pencil'></i> Elegância</span>
                    </div>
    </div>
}