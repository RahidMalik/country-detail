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
        setFilter(e.target.value);
    };

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

    return (
        <section className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Search */}
            <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={handleinputChnage}
                className="border border-white text-gray-300 p-2 px-4 rounded-full bg-transparent w-full sm:w-64"
            />

            {/* Buttons + Select */}
            <div className="flex flex-wrap gap-3 items-center">
                <button
                    className="border text-white py-1 px-3 rounded-full cursor-pointer hover:bg-white hover:text-black transition"
                    onClick={() => sortCountries("asc")}
                >
                    Asc
                </button>

                <button
                    className="border text-white py-1 px-3 rounded-full cursor-pointer hover:bg-white hover:text-black transition"
                    onClick={() => sortCountries("desc")}
                >
                    Desc
                </button>

                <select
                    className="border rounded-full border-gray-400 cursor-pointer outline-0 py-1 px-3 bg-black text-white"
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
    );
};
