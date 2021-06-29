const sentence = "hello there from lighthouse labs";
let timeout = 1000;
let end = 0;
for (const char of sentence) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
    end++;
    if (end === sentence.length) {
      process.stdout.write("\n");
    }
  }, timeout); // <= 1s delay to make it noticeable. Can dial it down later.
  timeout += 50;
}

