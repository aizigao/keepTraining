fn main() {
    struct User {
        username: String,
        email: String,
        sign_in_count: u64,
        active: bool,
    }
    fn build_user(email: String, username: String) -> User {
        User {
            email,
            username,
            active: true,
            sign_in_count: 1,
        }
    }
    let user1 = build_user(String::from("xxx"), String::from("yyy"));
    let user2 = User {
        email: String::from("yyyyyy"),
        ..user1
    };
    println!("{}", user1.email);
    println!("{}", user2.email);

    // -------------------------------
    struct Color(i32, i32, i32);
    struct Point(i32, i32, i32);

    let black = Color(0, 0, 0);
    let origin = Point(4, 8, 0);

    println!("{}", black.0);
    println!("{}", origin.1);
}
