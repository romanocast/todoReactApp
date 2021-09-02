import { useEffect } from 'react'
import { useStoreActions } from '../store/StoreModel'

const useTodoInitDataHook = () => {
    const initData = useStoreActions(actions => actions.todoModel.initData)
    useEffect(
        () => {
            initData()
            console.log('initTodoModelHook() called')
            //eslint-disable-next-line
        }, [] //only run the effect once
    )
}

export { useTodoInitDataHook }
