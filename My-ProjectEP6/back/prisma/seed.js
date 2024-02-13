const bcrypt = require('bcryptjs')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const password = bcrypt.hashSync('123456')
const userData = [
  { username : 'andy', password, email: 'andy@ggg.mail' ,phone:'001',fristName:'andy',lastName:'andy',address:' ' },
  { username : 'bobby', password, email: 'bobby@ggg.mail',phone:'002',fristName:'bobby',lastName:'bobby',address:' ' },
  { username : 'candy', password, email: 'candy@ggg.mail',phone:'003',fristName:'candy',lastName:'candy',address:' ' },
]

const warehouseData =[
  {name:'room301',userId:1},
  {name:'room302',userId:2},
  {name:'room303',userId:3},
]

const productData = [
  { name:'Learn HTML', type:'HTML',dueDate: new Date(), WarehouseId: 1 },
  { name:'Learn CSS', type:'CSS',dueDate: new Date(), WarehouseId: 1 },
  { name:'Learn JS', type:'JS',dueDate: new Date(), WarehouseId: 2 },
  { name:'Learn React', type:'React',dueDate: new Date(),WarehouseId: 2 },

]

const run = async () => {
  await prisma.user.createMany({
    data : userData
  })
  await prisma.warehouse.createMany({
    data : warehouseData
  })
  await prisma.product.createMany({
    data : productData
  })
}

run()