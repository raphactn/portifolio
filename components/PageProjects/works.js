import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Card from './Card'

function Works() {

  return (
    <div className={styles.projects}>
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col'>
          <Card title={'Marvel Heros'} img={'/marvel.png'} description={'Projeto utilizando api publica do Marvel Studios'} src={'https://marvelheros.vercel.app'} modal={'marvel'} />
        </div>
        <div className='col'>
          <Card title={'Star Wars'} img={'/star.png'} description={'Projeto utilizando api publica do Star Wars'} src={'https://starwarsapi-delta.vercel.app'} modal={'star'} />
        </div>
        <div className='col'>
          <Card title={'Pokemon API'} img={'/poke.png'} description={'Projeto utilizando api publica do Pokemon'} src={'https://pokemon-api-raphactn.vercel.app'} modal={'poke'} />
        </div>
        <div className='col'>
          <Card title={'GitHub API'} img={'/git.png'} description={'Projeto utilizando api publica do GitHub'} src={'https://github-api-topaz.vercel.app'} modal={'git'} />
        </div>
        <div className='col'>
          <Card title={'LandingPage Atelier'} img={'/atelier.png'} description={'Projeto LandingPage site Atelier'} src={'https://atelierdamour.vercel.app/'} modal={'atelier'} />
        </div>
        <div className='col'>
          <Card title={'LandingPage Sim Soluções'} img={'/sim.png'} description={'Projeto LandingPage site Sim Soluções'} src={'https://simsolucoes.com.br'} modal={'sim'} />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Works