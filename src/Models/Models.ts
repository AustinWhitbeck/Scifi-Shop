

export interface Item {
    name: string,
    image: string,
    price: number,
    description: string,
    itemId: string
}

export interface Cart {
    cart: Item[] | undefined
}

export interface MasterList {
    masterItemsList: Item[] | undefined
}