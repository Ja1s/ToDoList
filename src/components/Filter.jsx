const Filter = ({filter, setFilter, setSort}) => {
    return (
        <div className="filter">
            <h2>Filtrar:</h2>
            <div className="filter-options">
                <p>Status:</p>
                <select value={filter}onChange={(e) => setFilter(e.target.value)} >
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incompleted">Incompletas</option>
                </select>
            </div>
            <div>
                <p>Ordem Alfabética</p>
                <button className='sort' onClick={() => setSort("Asc")}>Asc</button>
                <button className='sort' onClick={() => setSort("Desc")}>Desc</button>
            </div>
        </div>
    )
}

export default Filter