import petro from '../../assets/ruta y petro.jpg'
import petro2 from '../../assets/petro2.jpg'
import petro3 from '../../assets/petro3.jpg'
const Biografia = () => {
  return (
    <div className="p-8">
      <div className='p-8'>
        <h1 className="text-3xl font-semibold text-primary text-center">Ruta Vinotinto con Fernando Petrocelli</h1>
        </div>
        <div className="flex flex-row lg:m-12 items-center justify-center flex-wrap">
        <img className="lg:w-[300px] lg:h-[300px] w-24 h-24 items-center rounded-lg lg:mr-16 mb-4 mr-6 " src={petro} alt="petro"/>
        <img className="lg:w-[300px] lg:h-[300px] w-24 h-24 items-center rounded-lg mb-4 lg:mr-16 mr-6" src={petro2} alt="petro2" />
        <img className="lg:w-[300px] lg:h-[300px] w-24 h-24 items-center rounded-lg mb-4 " src={petro3} alt="" />
      </div>
        <div className="text-primary">
        <p className="text-xl font-semibold text-primary text-justify p-6">Fernando Petrocelli es uno de los periodistas deportivos reconocidos en toda Latinoamérica y se ha convertido en referencia, junto a otros, para las nuevas generaciones de comunicadores que quieren hacer vida con el deporte.</p>
        <p className= "text-xl font-semibold text-primary text-justify p-6">Desde su llegada a DirecTv en 2009 se ha mantenido en los medios tradicionales de mayor alcance. Sin embargo, Útimamente ha encontrado en las plataformas online un espacio donde puede opinar y analizar, como lo demuestra en su canal de Youtube con Ruta Vinotinto o El Drink Team, junto a otras dos grandes caras del periodismo deportivo venezolano.</p>
        <p className="text-xl font-semibold text-primary text-justify p-6">Fernando tuvo la idea cuando viajó a Uruguay y vivió en carne propia el Centenariazo, partido en el que la Vinotinto venció 3-0 a los charrúas en 2004. Fue su primera vez en el exterior. Este pensamiento se hizo realidad con las eliminatorias de Brasil 2014, en las que pudo realizar la cobertura de la selección durante toda la clasificación.</p>
        <p className="text-xl font-semibold text-primary text-justify p-6">Nació como un circuito de radio y mutó más adelante a la cuenta de Instagram, hasta que la red social la bajó tras dos advertencias, pero sin una explicación clara. Volvió de cero y hace un año, a consejo de un amigo, creó su canal de Youtube. «Ruta Vinotinto fue como: ‘bueno, me conocen de Fútbol Total. También puedo hablar de táctica y hacer entrevistas. Cosas que quizás no tengo espacio para hacerlo en Directv’.</p>
        </div>

      
    </div>
  )
}

export default Biografia