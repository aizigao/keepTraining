pub trait Summary {
    fn summarize_author(&self) -> String;
    fn summarize(&self) -> String {
        format!("(Read more from {}..)", self.summarize_author())
    }
}

pub struct NewArticle {
    pub haedline: String,
    pub location: String,
    pub author: String,
    pub content: String,
    pub username: String,
}

// impl Summary for NewArticle {
// fn summarize(&self) -> String {
//     format!("{}, by {} ({})", self.haedline, self.author, self.location)
// }
// }

pub struct Tweet {
    pub username: String,
    pub content: String,
    pub reply: bool,
    pub retweet: bool,
}

impl Summary for Tweet {
    fn summarize(&self) -> String {
        format!("{}:{}", self.username, self.content)
    }
    fn summarize_author(&self) -> String {
        format!("@{}", self.username)
    }
}

pub fn notify<T: Summary>(item: T) {
    println!("Braking news! {}", item.summarize())
}

fn main() {
    let tweet = Tweet {
        username: String::from("horse_ebook"),
        content: String::from("of cousesdfsdf sdfasdfasdfasdfasdfadfsdfds"),
        reply: false,
        retweet: false,
    };
    // println!("1 new tweet:{}", tweet.summarize());
    notify(tweet)
}
