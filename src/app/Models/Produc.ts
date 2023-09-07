class Product implements IProduct {
    ID: number;
    Name: string;
    Quntity: number;
    Price: number;
    Img: string;

    constructor( id: number, name: string, quntity: number, price: number, img: string ) {
        this.ID = id;
        this.Name = name;
        this.Quntity = quntity;
        this.Price = price;
        this.Img = img;

    }

}