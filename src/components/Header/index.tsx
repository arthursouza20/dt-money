import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style";
import * as Dialog from '@radix-ui/react-dialog'
import Logo from "../../assets/Logo.svg"
import { NewTrasactionModal } from "../NewTrasactionModal";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={Logo} alt="" width={170} />

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova transação</NewTransactionButton>
                    </Dialog.Trigger>
                    <NewTrasactionModal/>
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>

    )
}   