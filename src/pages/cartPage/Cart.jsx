import '../../widgets/cart/cart.css'
import reactCart from '../../imgs/cart/image8.jpg'
import reactCart2 from '../../imgs/cart/Vector.jpg'
import reactCart3 from '../../imgs/cart/image8(2).jpg'
import reactCart4 from '../../imgs/cart/Vector.jpg'
import reactCart5 from '../../imgs/cart/image9(1).jpg'
import reactCart6 from '../../imgs/cart/Vector.jpg'


export const Cart = () => {
    return (
        <div className='cartCont'>
            <h1 className='TTT'>Your Cart</h1>
            <div className='mainCart'>
                <div className='WWW'>  
                    <img className='imgCart' src={reactCart} alt="" />
                    <h3>Gradient Graphic T-shirt</h3>
                    <p>Size: Large</p>
                    <p className='AWA'>Color: White</p>
                    <h1 className='III'>$145</h1>
                    <img className='imgCart2' src={reactCart2} alt="" />
                    <div className='One'>-  1  +</div> 
                    <hr />
                </div>
                <div className='WWW2'>  
                    <img className='imgCart3' src={reactCart3} alt="" />
                    <h3>Checkered Shirt</h3>
                    <p>Size: Medium</p>
                    <p className='AWA2'>Color: Red</p>
                    <h1 className='III2'>$180</h1>
                    <img className='imgCart4' src={reactCart4} alt="" />
                    <div className='Two'>-  1  +</div> 
                    <hr className='Hr' />
                </div>
                <div className='WWW3'>  
                    <img className='imgCart5' src={reactCart5} alt="" />
                    <h3>Skinny Fit Jeans</h3>
                    <p>Size: Large</p>
                    <p className='AWA3'>Color: Blue</p>
                    <h1 className='III3'>$240</h1>
                    <img className='imgCart6' src={reactCart6} alt="" />
                    <div className='Three'>-  1  +</div> 
                </div>
            </div>
            <div className='order'>
                <h2 className='order1'>Order Summary</h2>
                <p className='sub'>Subtotal</p>
                <p className='dis'>Discount (-20%)</p>
                <p className='del'>Delivery Fee</p>
                <h4 className='five'>$565</h4>
                <h4 className='live'>-$113</h4>
                <h4 className='kife'>$15</h4>
                <hr className='line'/>
            </div>
        </div>
    );
}