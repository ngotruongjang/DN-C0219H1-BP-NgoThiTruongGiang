function Apple() {
    this.weight = 10;

    this.getWeight = function() {
        return this.weight;
    }

    this.decrease = function() {
        if (this.weight > 0) {
            this.weight --;
        } 
    }

    this.isEmpty = function() {
       return this.weight == 0; 
    }
}