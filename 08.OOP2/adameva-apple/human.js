function Human(name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight || 50;

    this.isMale = function() {
        return this.gender;
    }

    this.setGender = function(gender) {
        this.gender = gender;
    }

    this.say = function(message) {
        console.log(message);
    }

    this.checkApple = function(apple) {
        return !apple.isEmpty();
    }

    this.eat = function(apple) {
        if (this.checkApple(apple)) {
            this.weight ++;
            apple.decrease();
        }
    }
    
    this.getGender = function() {
        return this.gender;
    }

    this.getWeight = function() {
        return this.weight;
    }
}