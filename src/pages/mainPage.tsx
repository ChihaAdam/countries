import { Filter } from "../components/filter";
import SearchBar from "../components/searchbar";

export default function MainPage() {
    return (
        <>
        <section className="flex justify-between px-20">
            <SearchBar />
            <Filter />
        </section>
        </>
    )
}