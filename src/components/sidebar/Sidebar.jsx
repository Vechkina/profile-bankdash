import home from '../../img/home.png'
import transaction from '../../img/transaction.png'
import user from '../../img/user.png'
import investment from '../../img/investment.png'
import creditCard from '../../img/credit-card.png'
import loan from '../../img/loan.png'
import service from '../../img/service.png'
import privilege from '../../img/privilege.png'
import settingSolid from '../../img/settings-solid.png'

import './sidebar.scss'

const Sidebar = ({isOpen}) => {
  return (
    <aside className={`sidebar ${isOpen ? "sidebar--active" : ""}`}>
      <nav className='sidebar__nav'>
        <ul className='sidebar__list'>
          <li className='sidebar__item'>
            <a className='sidebar__link' href='#'>
              <img className='sidebar__icon' src={home} alt="home" />Dashboard
            </a>
          </li>
          <li className='sidebar__item'>
            <a className='sidebar__link' href='#'>
              <img className='sidebar__icon' src={transaction} alt="Transactions" />Transactions
            </a>
          </li>
          <li className='sidebar__item'>
            <a className='sidebar__link' href='#'>
              <img className='sidebar__icon' src={user} alt="Accounts" />Accounts
            </a>
          </li>
          <li className='sidebar__item'>
            <a className='sidebar__link' href='#'>
              <img className='sidebar__icon' src={investment} alt="Investments" />Investments
            </a>
          </li>
          <li className='sidebar__item'>
            <a className='sidebar__link' href='#'>
              <img className='sidebar__icon' src={creditCard} alt="Credit Cards" />Credit Cards
            </a>
          </li>
          <li className='sidebar__item'>
            <a className='sidebar__link' href='#'>
              <img className='sidebar__icon' src={loan} alt="Loans" />Loans
            </a>
          </li>
          <li className='sidebar__item'>
            <a className='sidebar__link' href='#'>
              <img className='sidebar__icon' src={service} alt="Services" />Services
            </a>
          </li>
          <li className='sidebar__item'>
            <a className='sidebar__link' href='#'>
              <img className='sidebar__icon' src={privilege} alt="My Privileges" />My Privileges
            </a>
          </li>
          <li className='sidebar__item'>
            <a className='sidebar__link sidebar__link--active' href='#'>
              <img className='sidebar__icon' src={settingSolid} alt="Setting" />Setting
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
 
export default Sidebar;