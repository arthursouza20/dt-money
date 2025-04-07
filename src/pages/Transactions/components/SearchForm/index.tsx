import { MagnifyingGlass } from "phosphor-react";
import { SearchButton, SearchFormContainer, SearchInput } from "./style";

export function SearchForm() {
    return (
        <SearchFormContainer>
            <SearchInput type="text" placeholder="Busque por transações"/>
            <SearchButton>
                <MagnifyingGlass size={20} />
                Buscar</SearchButton>
        </SearchFormContainer>
    )
}