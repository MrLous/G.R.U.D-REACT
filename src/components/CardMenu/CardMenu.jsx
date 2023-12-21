import './index.scss';
import { Link } from 'react-router-dom';
import Button from '../Button/Button'

const CardMenu = ({ data, type }) => {
  return (
    <div className='CardMenupen'>
      <h2>Otimize seu tempo e se organize com o nosso Planejador Diário.</h2>
        <div className='Card'>
          <h2>{`Deseja ${type} esse item?`}</h2>
          <p>{data.description}</p>
          <div className='Card__button'>
            <Link to={"/"}><Button type='submit' collor='blue' text='Não'/></Link>
            <Link to={"/"}><Button type='submit' collor='white' text='Sim'/></Link>
          </div>
        </div>
    </div>
  )
}

export default CardMenu