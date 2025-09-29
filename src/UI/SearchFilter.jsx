export const SearchFilter = ({
    search,
    setSearch,
    Filter,
    setFilter,
    countries,
    setCountries,
}) => {

    const handleinputChnage = (event) => {
     
        setSearch(event.target.value);
    };
    const handleSelectChange = (e) => {
      
        setFilter(e.target.value)
    }

    // aesc & desc
    const sortCountries = (value) => {
        const sortCountry = [...countries].sort((a, b) => {
            if (value === "asc") {
                return a.name.common.localeCompare(b.name.common);
            } else if (value === "desc") {
                return b.name.common.localeCompare(a.name.common);
            }
            return 0;
        });
        setCountries(sortCountry);
    };


    return <section className="p-10 flex justify-between">
        <input
            type="text"
            placeholder="Seacrh"
            value={search}
            onChange={handleinputChnage}
            className="border-white border text-gray-300 flex p-1 px-4 rounded-full"
        />
        <div>
            <button
                className="border text-white p-1 px-2 rounded-full cursor-pointer"
                onClick={() => sortCountries("asc")}
            >
                Asc
            </button>
        </div>

        <div>
            <button
                className="border text-white p-1 px-2 rounded-full cursor-pointer"
                onClick={() => sortCountries("desc")} 
            >
                Desc
            </button>
        </div>

        <div className="text-white">
            <select
                className=" border rounded-full border-gray-400 cursor-pointer outline-0 p-1 px-2 bg-black"
                value={Filter}
                onChange={handleSelectChange}
            >
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    </section>
}