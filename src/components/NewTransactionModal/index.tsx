import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'


export const NewTransactionModal = () => {
    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova transação</Dialog.Title>
                <CloseButton>
                    <X size={24}/>
                </CloseButton>

                <form action=''>
                    <input type='text' placeholder='Descrição' required/>
                    <input type='text' placeholder='Preço' required/>
                    <input type='text' placeholder='Categoria' required/>

                    <TransactionType>
                        <TransactionTypeButton variant='income'>
                            <ArrowCircleUp />
                            Entrada
                        </TransactionTypeButton>
            
                        <TransactionTypeButton variant='outcome'>
                            <ArrowCircleDown />
                            Saída
                        </TransactionTypeButton>
                    </TransactionType>

                    <button type='submit'>
                        Cadastrar 
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}
