import { CiSearch } from "react-icons/ci";
import '../sass/searchbar.scss';






export const SearchBar = () => {
    return (
        <>
            <div className="search">
                <label className="search__label" htmlFor="search-input">
                    <CiSearch class="search__icon"/>
                    <input
                        type="text"
                        id="search-input"
                        className="search__input"
                    />
                </label>
            </div>

        </>
    )
}