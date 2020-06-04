#![allow(unused_variables)]
fn main() {

    #[derive(Debug)]
    enum UsState {
        Alabama,
        Alaska,
    }
    enum Coin {
        Penny,
        Nickel,
        Dime,
        Quarter(UsState),
    }

    fn value_in_cents(coin: Coin) -> u32 {
        match coin {
            Coin::Penny=>{
                println!("test");
                5
            },
            Coin:: Nickel=>1,
            Coin:: Dime=>12,
            Coin:: Quarter(state)=> {
                println!("State quarter from {:?}", state);
                25
            }
        }
    }
    println!("{}",value_in_cents(
            Coin::Quarter(
                UsState::Alaska
                )
            ))
}

