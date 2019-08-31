// Importing required node labraries
const express = require('express')
const app = express()

// Importing required java classes
const BigInteger = Java.type('java.math.BigInteger')

// Creating an http endpoint
app.get('/', function (req, res) {
  var response = 'Hello World from Graal.js!<br> '

  response += Polyglot.eval('python',
      `"Python is too working, for example here is multiplying: " + str(4*4)`) + '<br>';

  // Calculate vale of 10 raised to power 100 and sum to it 43 units
  response += BigInteger.valueOf(10)
            .pow(100)
            .add(BigInteger.valueOf(43))
            .toString() + '<br>'

  // Using R methods to return arrays
  response += Polyglot.eval('R',
      'ifelse(1 > 2, "no", paste(1:42, c="|"))') + '<br>'

  // Using R interoperability to create graphs
  response += Polyglot.eval('R',
    `svg();
     require(lattice);
     x <- 1:100
     y <- sin(x/10)
     z <- cos(x^1.3/(runif(1)*5+10))
     print(cloud(x~y*z, main="cloud plot"))
     grDevices:::svg.off()
    `);

  res.send(response)
})

// Start up the application over 4004 port
app.listen(4004, function () {
  console.log('Polyglot app listening on port 4004!')
})
