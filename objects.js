const o = new Object()
o.firstName = "Prem"
o.lastName = 'Kumar'
o. isTeaching = true
o. greet = function() {
  console.log("hi");
}

const o2 = {}
o2.firstName = "Prem"
o2["lastName"] = 'Kumar'
const key = "isTeaching"
o2[key] = true
o2['greet'] = function() {
  console.log("hi");
}

const o3 = {
  firstName: "Prem",
  lastName: "Kumar",
  isTeaching: true,
  greet: function() {
    console.log("hi")
  },
  address: {
    street: "Kalinga nagar",
    number: 1245
  },
}
