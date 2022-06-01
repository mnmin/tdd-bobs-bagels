// NOUNS -> properties/data
// VERBS/ACTIONS -> methods/functions

class CLASS_NAME
- PROPERTIES
  - propertyName: datattype

- METHODS
  - functionName(parameter1: datatype, parameter2: datatype) -> returns RETURN_VALUE: datatype


FOR EACH method, pick a name, decide what data is needed for the function to work: a) is any of that data in the class properties, or are you expecting who calls the function to give you some data (ie. via parameters); what is the data type of each parameter; what should the function give back? a value, an array, an object, etc...


// EXAMPLE - BOB's BAGELS

JS Object BagelItem
- PROPERTIES
  - id: number 
  - name: string
  - price: number

class Basket
- PROPERTIES (what data I need to store)
  - items (name of the property): array of Bagel Items (datatype) 

- METHODS (actions/functions)
  - addItem(item: BagelItem JS Object) -> returns updated array of items
  - removeItem(item: BagelItem JS Object) -> returns updated array of items 