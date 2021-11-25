import PropTypes from 'prop-types'
import { useLocation } from 'react-router'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
	const location = useLocation()

	return (
		<header className='header'>
			<h1>{title}</h1>
			{location.pathname === '/' && (
				<Button
					color={showAdd ? 'red' : 'green'}
					text={showAdd ? 'Close' : 'Add'}
					onAdd={onAdd}
				/>
			)}
		</header>
	)
}

Header.defaultProps = {
	title: 'Task Tracker',
}

Header.propTypes = {
	//lowercase
	title: PropTypes.string.isRequired,
}

// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Header
