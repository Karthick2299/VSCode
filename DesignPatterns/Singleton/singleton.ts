export class Singleton{
    private static singleton: Singleton;

    //private constructor so that no instance is Created.
    private constructor(){

    }

    public static getInstance(): Singleton{

    console.log("Singleton class is working");

        if(!Singleton.singleton){
            Singleton.singleton = new Singleton();
        }


        return Singleton.singleton;

    }

}