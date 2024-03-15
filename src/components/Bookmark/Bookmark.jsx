import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    return (
        <div className='bg-slate-200 p-4 m-4 rounded-xl'>
            <h1>{bookmark.title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.any.isRequired
}

export default Bookmark;