import celebracion from '../../assets/Venezuela celebracion.jpg'

const Noticias = () => {
  return (
    <div className="w-full h-full">
      <div className="p-6 text-center">
      <h1 className="text-3xl text-primary font-semibold ">
      NOTICIAS RUTERAS
      </h1>
      </div>
      <div>
        <img src={celebracion} alt="" />
      </div>
    
    </div>
  )
}

export default Noticias