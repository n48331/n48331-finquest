import { v4 as uuid } from 'uuid'

let inventory = [
  {
    categories:
      ['on sale', 'tshirt black'],
    name: 'Tshirt 1',
    price: '1100',
    image: '/images/shop/tshirt2.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia pretium eros. Maecenas ornare pulvinar neque, mattis fermentum purus cursus sit amet. Praesent sit amet mollis libero. Donec eros enim, accumsan ac augue quis, faucibus convallis diam. Sed convallis est at libero gravida, eu egestas arcu faucibus. Phasellus sed tellus elit. Sed eleifend eros eu cursus cursus. Vivamus molestie, ante nec tristique semper, velit magna porttitor orci, non egestas turpis mi id massa.',
    brand: 'Jason Bourne',
    currentInventory: 13
  },
  {
    categories:
      ['on sale', 'mug'],
    name: 'Bitcoin Mug',
    price: '600',
    image: '/images/shop/journal-2.png',
    description: 'Finquest Graphics White Mug.',
    brand: 'Finquest',
    currentInventory: 15
  },

  {
    categories:
      ['on sale', 'tshirt black'],
    name: 'Tshirt 3',
    price: '775',
    image: '/products/tshirt2.png',
    description: 'Finquest Graphics Black Tshirt.',
    brand: 'Finquest',
    currentInventory: 44
  },
  {
    categories:
      ['on sale', 'tshirt white'],
    name: 'Tshirt 4',
    price: '1200',
    image: '/products/tshirt1.png',
    description: 'Finquest Graphics White Tshirt.',
    brand: 'Finquest',
    currentInventory: 17
  },
  {
    categories:
      ['on sale', 'tshirt black'],
    name: 'Tshirt 5',
    price: '1600',
    image: '/products/tshirt2.png',
    description: 'Finquest Graphics White Mug.',
    brand: 'Finquest',
    currentInventory: 28
  },
  {
    categories:
      ['on sale', 'mug'],
    name: 'Bitcoin Mug',
    price: '550',
    image: '/products/mug.png',
    description: 'Bitcoin Graphics Black Tshirt.',
    brand: 'Finquest',
    currentInventory: 31
  },
]

inventory.map(i => {
  i.id = uuid()
  return i
})

export default inventory