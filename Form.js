class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Next');
      this.button1 = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');

    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.button1.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("NBA Selections");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
       var playername = this.input.value();
        this.greeting.html("Hello " + playername)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
        this.button1.position(displayWidth/2 + 30, displayHeight/2);
      });

      this.button1.mousePressed(()=>{
        this.button1.hide();
        this.greeting.hide();
      });
    }
}