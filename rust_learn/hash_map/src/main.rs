use std::collections::HashMap;
fn main() {
    // -- 001
    // let mut scores = HashMap::new();
    // scores.insert(String::from("Blue"), "fsdfsdf");
    // scores.insert(String::from("Red"), "50");
    // scores.insert(String::from("Red"), "51");
    //
    // scores.entry(String::from("Test")).or_insert("90");
    // scores.entry(String::from("Red")).or_insert("90");
    //
    //
    // println!("{:#?}", scores);
    // println!("{:?}", scores.get(&String::from("Blue")).unwrap());
    // for (key, value) in &scores {
    //     println!("{}: {}", key, value)
    // }
    //
    // -- 002
    // let teams = vec![String::from("Blue"), String::from("Yellow")];
    // let initial_scores = vec![10, 50];
    //
    // let scores: HashMap<_, _> = teams
    //     // --
    //     .iter()
    //     .zip(initial_scores.iter())
    //     .collect();
    //
    // println!("{:#?}", scores)

    // -- 003

    // let field_name = String::from("Favorite color");
    // let field_value = String::from("Blue");
    //
    // let mut map = HashMap::new();
    // map.insert(field_name, field_value);
    //
    // println!("{:?}", map);

    // // -- println!("{}",field_name ) 🌟 // -- [rustc E0382] [E] borrow of moved value: `field_name`

    //  -- 004
    let text = "hello world wonderfull world";

    let mut map = HashMap::new();

    for word in text.split_whitespace() {
        let count = map.entry(word).or_insert(0);
        *count += 1;
    }
    println!("{:#?}", map);
}
