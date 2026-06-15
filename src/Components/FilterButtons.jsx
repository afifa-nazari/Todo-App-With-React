// src/components/FilterButtons.jsx
function FilterButtons({ currentFilter, setFilter }) {
    const filters = ['All', 'Completed', 'Pending'];

    return (
        <div className="filter-buttons">
            {filters.map(filter => (
                <button
                    key={filter}
                    className={`filter-btn ${currentFilter === filter ? 'active' : ''}`}
                    onClick={() => setFilter(filter)}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}

export default FilterButtons;