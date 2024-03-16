import User from './user.model'; // Assuming user.model defines User interface/class
import Product from './product.model'; // Assuming product.model defines Product interface/class

interface Error { // Often a common interface
    message: string;
}

async function subscribeUserToProduct(userId: string, productName: string): Promise<void> {
    try {
        const user = await User.findById(userId);
        const product = await Product.findOne({ name: productName });

        if (!user || !product) {
            throw new Error('User or Product not found');
        }

        user.products.push(product._id); // Assuming product._id is the right type for user.products
        await user.save();
    } catch (error: Error) {
        console.error('Subscription failed:', error);
        // Handle the error appropriately
    }
}

// Expose as part of a route handler:
app.post('/products/:productName/subscribe', async (req, res) => {
    try {
        await subscribeUserToProduct(req.user.id, req.params.productName);
        res.status(200).json({ message: 'Subscription successful!' });
    } catch (error: Error) {
        // ... error handling
    }
});
























// import User from './user.model';
// import Product from './product.model';
//
// async function subscribeUserToProduct(userId: string, productName: string) {
//     try {
//         const user = await User.findById(userId);
//         const product = await Product.findOne({ name: productName });
//
//         if (!user || !product) {
//             throw new Error('User or Product not found');
//         }
//
//         user.products.push(product._id);
//         await user.save();
//     } catch (error) {
//         console.error('Subscription failed:', error);
//         // Handle the error appropriately
//     }
// }
//
// // Expose as part of a route handler:
// app.post('/products/:productName/subscribe', async (req, res) => {
//     try {
//         await subscribeUserToProduct(req.user.id, req.params.productName);
//         res.status(200).json({ message: 'Subscription successful!' });
//     } catch (error) {
//         // ... error handling
//     }
// });
