import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {
    return (
        <div className={css.statistics}>
            <h2 className={css.title}>{title}</h2>
            <ul className={css.statList}>
                {stats.map(({ id, label, percentage }) => (
                    <li className={css.item} key={id} style={{
                        backgroundColor: getRandomHexColor()
                    }} >
                        <span className={css.label}>{label}</span>
                        <span className="percentage">{percentage}</span>
                    </li>))}
            </ul>
        </div>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};