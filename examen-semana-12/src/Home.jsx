import './Home.css'
import Contenido from './components/Contenido'
import MenuLateral from './components/MenuLateral'

const Home = () => {
  return (
    <div className="aplicacion">
    <MenuLateral />
    <div className="aplicacion__contenido">
      <div className="aplicacion__contenido-fondo"></div>
      <main className="aplicacion__principal">
        <section className="aplicacion__eslogan">
          <h2 className="aplicacion__eslogan-texto">Bienvenido <span>
             <span className="aplicacion__eslogan-texto--resaltado"></span>
          </span></h2>
        </section>
        <Contenido />
      </main>
    </div>
  </div>
  )
}

export default Home