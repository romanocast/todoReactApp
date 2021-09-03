export type UniqueKey = string | number | null

export default interface Todo {
    id: UniqueKey,
    title: string,
    completed: boolean
}

export class TodoImpl implements Todo {
    id: UniqueKey;
    title: string;
    completed: boolean

    constructor(title: string) {
        this.id = null;
        this.title = title
        this.completed = false
    }
}