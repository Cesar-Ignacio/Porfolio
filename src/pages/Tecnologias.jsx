import React, { useEffect, useState } from 'react'
import react from '../assets/react.svg'
import { InfiniteMovingCards } from '../components/ui/infinite-moving-cards'
import db from '../db/db';
import { collection, getDocs } from 'firebase/firestore';
const Tecnologias = () => {


  const [datos, setDatos] = useState();
  const [listTecFront, setListTecFront] = useState();
  const [listTecBack, setListTecBack] = useState();
  const [listTecRec, setListTecRec] = useState();

  useEffect(() => {

    const q = collection(db, "tecnologias");

    getDocs(q).then(({ docs }) => {
      const nuevoArray = docs.map(doc => {
        return { id: doc.id, ...doc.data() }
      })

      setDatos(nuevoArray);
      setListTecFront(nuevoArray.filter(doc => doc.tema === "frontend"))
      setListTecBack(nuevoArray.filter(doc => doc.tema === "backend"))
      setListTecRec(nuevoArray.filter(doc => doc.tema === "recurso"))
    })


  }, [])


  return (
    <div className="xl:w-[70%]  2xl:h-auto mx-auto rounded-[2rem]  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative] relative " id='tec'>
      {/* Radial gradient for the container to give a faded look */}
      <div className=" transition-all duration-300 ease-linear absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#1a2b2b] bg-silver-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#1a2b2b)]"></div>
      {/* SubTitulo y descripción */}
      <div className='md:text-center text-silver-950 dark:text-silver-100 tracking-[1px] relative z-20 '>
        <h2 className='text-[3rem] font-bold bg-clip-text xl:dark:text-transparent bg-gradient-to-bl from-silver-100 to-silver-400' >Tecnologías</h2>
        <p>En esta sección, te presento las tecnologías que utilizo como programador. Además, compartiré algunos recursos útiles que pueden servirte</p>

      </div>
      {/* Contenido de tec */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-[100%] mt-4'>
        {/* FRONTEND */}
        <div className='bg-firefly-800 bg-opacity-30 shadow-lg backdrop-filter backdrop-blur-[0px]  rounded-2xl z-20 p-4 relative overflow-hidden '>
          <div>
            <strong className='text-fountain-blue-700 dark:text-fountain-blue-600 text-[1.2rem] tracking-wider'>FrontEnd</strong>
          </div>
          <div className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
            {
              datos && (
                <InfiniteMovingCards
                  items={listTecFront}
                  direction="left"
                  speed="slow"
                />
              )
            }
          </div>
          
          <svg enable-background="new 0 0 512 512" className='absolute top-5 left-[15rem] -z-10 w-[23rem] fill-firefly-950'   id="deer" version="1.1" viewBox="0 0 512 512"  xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M155.962,128.453c-0.033,0.034-0.068,0.065-0.102,0.1c-1.096,1.131-2.09,2.333-2.983,3.591  c-2.067-1.272-4.247-2.435-6.499-3.447c-16.503-7.435-35.931,1.739-36.749,2.134l-4.919,2.368l1.483,5.254  c0.247,0.875,6.236,21.509,22.737,28.944c6.817,3.075,13.971,4.732,20.339,4.732c0.244,0,0.482-0.011,0.724-0.017l2.128,17.955  c0.148,3.648,0.927,7.434,2.248,11.118v81.716c0,7.779,0.913,14.571,2.784,20.745c2.347,7.836,6.251,14.666,11.86,20.845  l21.719,74.22l-5.224,94.18h-3.906c-3.559,0-6.663,2.743-6.769,6.301c-0.111,3.681,2.84,6.699,6.497,6.699h37.425l10.655-95.418  v-10.463l41.638,92.881h-3.915c-3.56,0-6.663,2.743-6.77,6.301c-0.111,3.681,2.84,6.699,6.496,6.699h48.413l-31.333-71.188  l-0.307-0.63c-8.56-15.655-10.124-34.458-10.409-40.993c4.939-5.984,10.685-14.97,13.885-26.877  c9.819,2.65,24.575,5.698,47.581,5.698c7.745,0,15.447-0.708,23.02-2.08c3.176,12.332,9.004,21.777,17.351,28.095  c6.856,5.194,10.882,12.824,11.131,21.039l-19.878,73.936h-6.19c-3.56,0-6.663,2.743-6.77,6.301  c-0.11,3.681,2.841,6.699,6.497,6.699h34.976l16.324-55.982v42.979h-3.534c-3.559,0-6.662,2.742-6.77,6.3  c-0.11,3.682,2.841,6.7,6.497,6.7h36.963v-64.299l6.059-50.957c1.439-9.982-2.673-14.398-5.257-16.145  c-6.401-4.326-9.609-11.79-9.793-22.795l7.613-23.246l2.056-10.89c1.376-7.29,1.489-14.642,0.427-21.782v-33.556  c0-18.616-8.963-36.506-24.592-49.084c-2.967-2.387-7.132-2.853-10.606-1.188c-3.286,1.574-5.327,4.743-5.327,8.27v24.458  c-7.581-3.009-15.75-4.611-24.141-4.611h-20.621c-3.559,0-6.663,2.743-6.77,6.3c-0.11,3.681,2.841,6.7,6.497,6.7h20.124  c15.035,0,29.562,6.1,39.633,17.263c11.039,12.238,15.639,28.722,12.601,44.818l-1.897,10.059l-8.005,24.438v1.038  c0,15.803,5.105,27.354,15.179,34.342c0.146,0.473,0.317,1.689,0.005,3.813l-6.138,51.602l-0.046,0.382v52.069h-7.156v-81.586  c0-2.003-0.145-3.994-0.43-5.928l-0.078-0.52c-1.668-10.633-7.359-20.211-16.029-26.972c-6.033-4.696-10.811-13.55-13.815-25.603  l-0.086-0.326c-0.995-4.048-1.781-8.432-2.34-13.047c-0.297-2.409-0.52-4.876-0.664-7.359c-0.177-2.833-1.74-5.385-4.184-6.828  c-2.44-1.439-5.43-1.576-8.002-0.359c-11.264,5.35-23.191,8.063-35.452,8.063c-20.158,0-36.402-2.954-49.684-9.04  c-2.522-1.144-5.047-2.421-7.52-3.803c-3.098-1.722-6.868-1.374-9.604,0.888c-2.727,2.256-3.772,5.882-2.668,9.234  c1.891,5.75,3.853,14.854,2.464,25.615c-0.07,0.572-0.159,1.146-0.245,1.682l-0.027,0.181c-2.318,14.121-9.468,24.062-13.522,28.729  c-1.35,1.554-2.094,3.551-2.094,5.623l0.002,0.131c0.129,6.453,1.375,28.964,11.937,48.431l23.238,52.798h-10.051l-57.281-127.772  c-1.173-4.707-3.102-9.257-5.692-13.469l-16.767-39.745c-1.664-3.943-4.225-7.43-7.412-10.287  c-5.501-4.932-8.653-11.986-8.653-19.378v-12.022c0-3.559-2.743-6.662-6.3-6.77c-3.681-0.109-6.7,2.842-6.7,6.498v11.217  c0,11.464,4.526,22.656,13.11,30.255c1.712,1.516,3.088,3.432,3.978,5.54l6.104,14.47c-8.993-5.058-15.443-9.76-20.16-14.693  c-4.774-4.979-8.017-10.481-9.921-16.837c-1.501-4.953-2.231-10.512-2.231-16.995v-63.41c4.784,3.647,10.177,5.644,15.62,5.644  h8.094c9.172,0,17.239-5.369,22.829-12.926l4.43,11.713c6.634,17.538,23.429,29.141,42.178,29.141h62.523  c3.559,0,6.662-2.743,6.77-6.3c0.11-3.681-2.841-6.7-6.497-6.7h-62.796c-13.263,0-25.327-8.335-30.019-20.741l-6.657-17.599  c-1.418-3.75-2.038-7.752-1.889-11.759l0.002-0.059l2.028-17.792c0.231,0.005,0.459,0.016,0.692,0.016  c6.367,0,13.522-1.657,20.337-4.731c16.5-7.435,22.5-28.067,22.749-28.941l1.486-5.258l-4.924-2.368  c-0.818-0.395-20.255-9.566-36.758-2.133c-2.281,1.029-4.479,2.204-6.552,3.484c-0.868-1.229-1.834-2.401-2.896-3.508  c52.771-13.191,92.507-59.654,95.517-115.716c0.2-3.721-2.77-6.85-6.495-6.85l0,0c-3.427,0-6.301,2.658-6.482,6.08  c-1.972,37.118-21.892,69.549-51.213,88.767c9.325-12.713,14.85-28.381,14.85-45.321V41.046c0-3.589-2.91-6.498-6.498-6.498h-0.005  c-3.588,0-6.497,2.909-6.497,6.498v14.587c0,23.498-12.778,44.054-31.741,55.126c1.608-3.986,2.502-8.334,2.502-12.889V76.304  c0-3.588-2.909-6.498-6.498-6.498h-0.005c-3.588,0-6.498,2.909-6.498,6.498v21.038c0,11.678-9.063,21.637-20.733,22.078  c-12.268,0.464-22.396-9.382-22.396-21.549V76.304c0-3.588-2.909-6.498-6.498-6.498h-0.005c-3.588,0-6.498,2.909-6.498,6.498v21.567  c0,4.555,0.894,8.903,2.502,12.889c-18.963-11.072-31.74-31.629-31.74-55.126V41.046c0-3.589-2.909-6.498-6.498-6.498h-0.005  c-3.588,0-6.498,2.909-6.498,6.498v14.587c0,16.94,5.524,32.608,14.85,45.322C96.217,81.737,76.297,49.306,74.325,12.188  c-0.182-3.421-3.056-6.08-6.482-6.08h0c-3.725,0-6.695,3.127-6.496,6.848C64.339,68.7,103.639,114.961,155.962,128.453z   M134.273,155.546c-6.705-3.021-11.025-10.039-13.375-15.048c5.315-1.56,13.436-2.969,20.145,0.054  c2.415,1.085,4.706,2.376,6.779,3.803c-0.332,1.96-0.47,3.969-0.407,6.006l1.038,8.758  C144.104,158.987,139.147,157.744,134.273,155.546z M432.41,265.423c-0.442-0.57-0.874-1.148-1.337-1.707  c-3.874-4.673-8.318-8.725-13.188-12.092v-23.617c9.304,9.569,14.525,21.723,14.525,34.212V265.423z M383.227,362.479  c3.815,11.522,9.311,20.144,16.396,25.659c5.683,4.432,9.521,10.568,10.925,17.394l-25.473,87.36h-5.301l19.429-72.266v-0.857  c0-12.629-5.938-24.369-16.296-32.215c-5.887-4.456-10.093-11.414-12.531-20.692C375.19,365.478,379.456,363.968,383.227,362.479z   M343.069,345.423c12.101,0,23.909-2.275,35.187-6.77c0.065,0.613,0.137,1.224,0.211,1.83c0.388,3.201,0.889,6.303,1.476,9.303  c-4.051,1.647-8.694,3.35-14.065,4.847c-10.116,2.833-20.609,4.27-31.188,4.27c-22.318,0-36.264-3.053-45.375-5.575  c0.451-5.955,0.148-12.002-0.91-17.928C303.316,342.143,321.205,345.423,343.069,345.423z M195.671,344.067l3.577,2.273  c3.193,2.026,6.049,4.481,8.487,7.295c0.739,0.854,1.422,1.746,2.075,2.656l5.851,13.051c0.49,2.238,0.749,4.385,0.749,6.379v34.029  l-9.284,83.141h-8.597l5.307-95.689l-17.069-58.329C189.495,340.589,192.448,342.313,195.671,344.067z M226.052,144.412  c2.079-1.441,4.396-2.751,6.858-3.862c6.701-3.021,14.82-1.613,20.134-0.056c-2.364,5.017-6.7,12.047-13.372,15.053  c-4.881,2.201-9.854,3.445-14.205,3.573l0.951-8.346l0.04-0.569C226.509,148.241,226.368,146.304,226.052,144.412z M191.084,212.136  h-8.094c-4.162,0-8.571-2.731-12.161-7.502c1.656-7.394,8.26-12.939,16.146-12.939c7.93,0,14.568,5.607,16.177,13.063  C199.881,209.068,195.565,212.136,191.084,212.136z M165.194,137.602c3.229-3.331,7.563-5.166,12.202-5.166h19.077  c4.623,0,8.945,1.823,12.171,5.134c3.165,3.248,4.872,7.513,4.823,12.038l-4.444,38.988c-5.417-6.07-13.292-9.902-22.049-9.902  c-8.714,0-16.557,3.793-21.971,9.812l-4.601-38.81C160.33,145.155,162.026,140.87,165.194,137.602z" /></svg>
        </div>
        {/* BACKEND */}
        <div className='bg-firefly-800 bg-opacity-30 shadow-lg backdrop-filter backdrop-blur-[0px]  rounded-2xl z-20 p-4 '>
          <strong className='text-fountain-blue-700 dark:text-fountain-blue-600 text-[1.2rem] tracking-wider'>BackEnd</strong>
          <div className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
            {
              datos && (
                <InfiniteMovingCards
                  items={listTecBack}
                  direction="right"
                  speed="slow"
                />
              )
            }
          </div>
        </div>
        {/* RECURSOS */}
        <div className='bg-firefly-800 bg-opacity-30 shadow-lg backdrop-filter backdrop-blur-[0px]  rounded-2xl z-20 p-4 md:col-span-2'>
          <strong className='text-fountain-blue-700 dark:text-fountain-blue-600 text-[1.2rem] tracking-wide'>Recursos</strong>
          <div className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
            {
              datos && (
                <InfiniteMovingCards
                  items={listTecRec}
                  direction="left"
                  speed="slow"
                />
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tecnologias
