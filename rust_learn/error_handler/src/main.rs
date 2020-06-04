use std::io;
use std::fs::File;
use std::io::Read;
// use std::io::ErrorKind;
fn read_username_from_file() -> Result<String, io::Error> {
    let mut f = File::open("hello.txt")?;
    let mut s = String::new();

    f.read_to_string(&mut s)?;
    Ok(s)
}

fn main() {
    // panic!("crash and burn");
    // let v = vec![1, 2, 3];
    // let test = v[99];
    // println!("{}", test)
    read_username_from_file().unwrap();
}


