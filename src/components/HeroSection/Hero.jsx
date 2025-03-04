import React from 'react'
import video1 from '../../assets/video1.mp4'
import video2 from '../../assets/video2.mp4'

const Hero = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:7xl text-center tracking-wide">
                Aretis constrói ferramentas <span className='bg-gradient-to-r from-orange-500 to bg-red-800 text-transparent bg-clip-text'>
                    para desenvolvedores</span>
            </h1>
            <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
                Fortaleça sua criatividade e dê vida às suas ideias de aplicativo de VR com nossas
                ferramentas de desenvolvimento intuitivas. Comece hoje mesmo e transforme sua imaginação
                em realidade imersiva!
            </p>
            <div className="flex flex-wrap justify-center items-center my-10 gap-4">
                <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 rounded-md text-center"> Comece de graça </a>
                <a href="#" className="py-3 px-4 rounded-md border text-center" > Documentações </a>
            </div>

            <div className="flex mt-10 justify-center">
                <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4'>
                    <source src={video1} type='video/mp4' />
                    Seu navegador não suporta a tag vídeo.
                </video>
                <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4'>
                    <source src={video2} type='video/mp4' />
                    Seu navegador não suporta a tag vídeo.
                </video>

            </div>

        </div>
    )
}

export default Hero
