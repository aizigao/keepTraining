pub trait Summary {
    fn summarize(&self) -> String;
}

pub struct NewArticle {
    pub haedline: String,
    pub location: String,
    pub author: String,
    pub content: String,
}

impl Summary for NewArticle {
    fn summarize(&self) -> String {
        format!("{}, by {} ({})", self.haedline, self.author, self.location)
    }
}

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
    fn test(&self) -> String {
        String::from("test")
    }
    pub fn notify<T: Summary>(item: T) {
        println!("Breacking news! {}", item.summarize())
    }
}
