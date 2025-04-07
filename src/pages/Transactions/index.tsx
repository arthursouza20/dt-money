import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsTable, TrasactionsContainer } from "./style";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />
            <TrasactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <table width={"100%"}>
                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Valor</th>
                                <th>Categoria</th>
                                <th>Data</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td width="50%">Desenvolvimento de website</td>
                                <td>
                                    <PriceHighlight variant="income">
                                        R$12.000
                                    </PriceHighlight>
                                </td>
                                <td>Desenvolvimento</td>
                                <td>04/04/2025</td>
                            </tr>
                            <tr>
                                <td width="50%">Desenvolvimento de website</td>
                                <td>
                                    <PriceHighlight variant="outcome">
                                        R$12.000
                                    </PriceHighlight></td>
                                <td>Desenvolvimento</td>
                                <td>04/04/2025</td>
                            </tr>
                        </tbody>
                    </table>
                </TransactionsTable>

            </TrasactionsContainer >
        </div >

    )
}