fn main() {
    let s1 = String::from("hello world");
    let result = first_word(&s1);
    println!("{}", result);
}


fn first_word(s: &String) -> &str{
  let bytes = s.as_bytes();

  for (i , &item) in bytes.iter().enumerate(){
    if item == b' ' {
      return &s[0..i];
    }
  }
  &s[..]
} 
