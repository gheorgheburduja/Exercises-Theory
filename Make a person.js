let Person = function(firstAndLast) {
    
    let fullName = firstAndLast;
  

    this.getFullName = () => fullName;

    this.getLastName = () => (fullName.split(' '))[1];

    this.getFirstName = () => fullName.split(' ')[0];

    this.setFirstName = (name) => fullName = name + ' ' + fullName.split(' ')[1];
    //The key is in set and 'fullName'. Every time when set 'fullName' is either itself or is compound.

    this.setFullName = (name) => fullName = name;

    this.setLastName = (name) => fullName = fullName.split(' ')[0] + ' ' + name;
  
  };
  
  var bob = new Person('Bob Ross');

  console.log(bob.getFullName());
  console.log(bob.setFirstName('Mike'));
  console.log(bob.getFirstName());
  
/*This function has 3 setters and 3 getters methods. 
After passing a string of full name (first and last name), using these methods
you can get first or last name, or you can set one of them.
 */