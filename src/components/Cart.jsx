const Cart = ({
  isOpen,
  onClose,
  cart,
  data,
  handleAddToCart,
  handleRemoveFromCart,
}) => {
  if (!isOpen) return null;

  const cartItems = Object.entries(cart).map(([id, qty]) => {
    const product = data.find((prod) => prod.id === parseInt(id));
    return product ? (
      <div
        key={product.id}
        className="flex items-center justify-between p-4 border-b border-gray-700"
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-12 h-12 object-contain mr-4"
        />
        <div className="flex-1">
          <h3 className="text-sm font-semibold">{product.title}</h3>
          <p className="text-xs text-gray-400">
            ${product.price.toFixed(2)} x {qty}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleRemoveFromCart(product)}
            className="text-lg bg-gray-700 text-white rounded-full px-3 py-1"
          >
            -
          </button>
          <div className="text-lg font-semibold">{qty}</div>
          <button
            onClick={() => handleAddToCart(product)}
            className="text-lg bg-gray-700 text-white rounded-full px-3 py-1"
          >
            +
          </button>
        </div>
      </div>
    ) : null;
  });

  const totalPrice = Object.entries(cart).reduce((sum, [id, qty]) => {
    const product = data.find((prod) => prod.id === parseInt(id));
    return sum + (product ? product.price * qty : 0);
  }, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
      <div className="bg-[#1f2937] text-white w-96 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        <div className="max-h-64 overflow-y-auto">{cartItems}</div>
        <div className="mt-4">
          <h3 className="text-lg font-bold">Total: ${totalPrice.toFixed(2)}</h3>
        </div>
        <div className="mt-6 flex justify-between">
          <button
            onClick={onClose}
            className="bg-red-600 px-4 py-2 rounded text-white hover:bg-red-700"
          >
            Close
          </button>
          <button className="bg-green-600 px-4 py-2 rounded text-white hover:bg-green-700">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
