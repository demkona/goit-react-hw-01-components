// import PropTypes from 'prop-types';
import css from '../TransactionHistory/TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            {items.map(({ id, type, amount, currency }) => (
                <tbody key={id} className={css.tabRow}>
                    <tr>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                </tbody>))}
        </table>
    )
}