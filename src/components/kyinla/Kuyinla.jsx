import products from '../../product.json';
import './style.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Kuyinla() {
  return (
    <div className ="products" >
   <Card style={{ width: '18rem', } }>
      <Card.Img variant="top" src={products[0].product_img_one} />
      <Card.Body>
        <Card.Title>{products[0].product_name_one}</Card.Title>
        <Card.Text>
         {products[0].product_desc_one}
        </Card.Text>
        <Card.Text>
         {products[0].product_price_one}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', } }>
      <Card.Img variant="top" src={products[1].product_img_two} />
      <Card.Body>
        <Card.Title>{products[1].product_name_two}</Card.Title>
        <Card.Text>
         {products[1].product_desc_two}
        </Card.Text>
        <Card.Text>
         {products[1].product_price_two}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', } }>
      <Card.Img variant="top" src={products[2].product_img_three} />
      <Card.Body>
        <Card.Title>{products[2].product_name_three}</Card.Title>
        <Card.Text>
         {products[2].product_desc_three}
        </Card.Text>
        <Card.Text>
         {products[2].product_price_three}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', } }>
      <Card.Img variant="top" src={products[3].product_img_four} />
      <Card.Body>
        <Card.Title>{products[3].product_name_four}</Card.Title>
        <Card.Text>
         {products[3].product_desc_four}
        </Card.Text>
        <Card.Text>
         {products[3].product_price_four}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
   </div>
   
  )
}

export default Kuyinla