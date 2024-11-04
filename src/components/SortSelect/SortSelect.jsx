import '../SortSelect/SortSelect.module.css'

const SortSelect = ({sortOption,onSort})=>(
    <select value={sortOption} onChange={onSort}>
        <option value="">Sort by</option>
        <option value="price">Price</option>
        <option value="size"color>Size</option>
        <option value="brand">Brand</option>
        {/* <option value="color">Color</option> */}
    </select>
);
export default SortSelect;