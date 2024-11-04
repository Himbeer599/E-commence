import '../Search/searchbox.module.css'

const Searchbox =({searchItem, onSearch}) => (
    <input
        className={StyleSheet.searchBox}
        type="text"
        placeholder="search products"
        value={searchItem}
        onChange={onSearch}
    />
);
export default Searchbox;