//1.Find all the information about each products
db.product.find().forEach(function(proc){print(proc.product_name,proc.product_price,proc.product_material,proc.product_color)})
//2.Find the product price which are between 400 to 800
db.product.find({product_price:{$gt:400.00, $lt:800.00}})
//3.Find the product price which are not between 400 to 600
db.product.find({product_price:{$not:{$gt:400.00, $lt:600.00}}})
//4.List the four product which are grater than 500 in price 
db.product.find({product_price:{$gt:500.00}})
//5.Find the product name and product material of each products
db.product.find().forEach(function(proc){print(proc.product_name,proc.product_material)})
//6.Find the product with a row id of 10
db.product.find({id:"10"})
//7.Find only the product name and product material
db.product.find().forEach(function(proc){print(proc.product_name,proc.product_material)})
//8.Find all products which contain the value of soft in product material 
db.product.find({product_material:"Soft"})
//9.Find products which contain product color indigo  and product price 492.00
db.product.find({product_color:"indigo",product_price:"492.00"}).sort({product_name:1})
//10.Delete the products which product price value are same
db.product.delete({product_price:"492.00"})