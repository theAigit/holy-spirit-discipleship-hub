
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Edit, Trash } from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import AdminLayout from './AdminLayout';

type Product = {
  id?: number;
  name: string;
  price: number;
  image: string;
  description: string;
};

const AdminStore = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Discipleship Fundamentals",
      price: 19.99,
      image: "https://via.placeholder.com/300x400",
      description: "A comprehensive guide to the basics of discipleship."
    },
    {
      id: 2,
      name: "Holy Spirit in Daily Life",
      price: 24.99,
      image: "https://via.placeholder.com/300x400",
      description: "Learn how to walk with the Spirit every day."
    },
    {
      id: 3,
      name: "Prayer Journal",
      price: 14.99,
      image: "https://via.placeholder.com/300x400",
      description: "A beautifully designed journal to record your prayers."
    },
    {
      id: 4,
      name: "Spiritual Warfare",
      price: 21.99,
      image: "https://via.placeholder.com/300x400",
      description: "Understanding and engaging in spiritual battles."
    },
    {
      id: 5,
      name: "Walking in Authority",
      price: 18.99,
      image: "https://via.placeholder.com/300x400",
      description: "How to exercise your God-given authority as a believer."
    },
    {
      id: 6,
      name: "Identity in Christ",
      price: 16.99,
      image: "https://via.placeholder.com/300x400",
      description: "Discovering who you are in Christ Jesus."
    }
  ]);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleDelete = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement Supabase integration for create/update
    if (!selectedProduct) return;
    
    if (selectedProduct.id) {
      // Update existing product
      setProducts(products.map(p => p.id === selectedProduct.id ? selectedProduct : p));
    } else {
      // Add new product with a generated ID
      const newId = Math.max(0, ...products.map(p => p.id || 0)) + 1;
      setProducts([...products, {...selectedProduct, id: newId}]);
    }
    
    setSelectedProduct(null);
  };

  const handleNew = () => {
    setSelectedProduct({
      name: '',
      price: 0,
      image: '',
      description: ''
    });
  };

  return (
    <AdminLayout title="Store Management">
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <Input 
          placeholder="Product Name" 
          value={selectedProduct?.name || ''} 
          onChange={(e) => setSelectedProduct(prev => prev ? {...prev, name: e.target.value} : null)}
        />
        <Input 
          type="number"
          step="0.01"
          placeholder="Price" 
          value={selectedProduct?.price || ''} 
          onChange={(e) => setSelectedProduct(prev => prev ? {...prev, price: parseFloat(e.target.value)} : null)}
        />
        <Input 
          placeholder="Image URL" 
          value={selectedProduct?.image || ''} 
          onChange={(e) => setSelectedProduct(prev => prev ? {...prev, image: e.target.value} : null)}
        />
        <Textarea 
          placeholder="Description" 
          value={selectedProduct?.description || ''} 
          onChange={(e) => setSelectedProduct(prev => prev ? {...prev, description: e.target.value} : null)}
        />
        <div className="flex gap-2">
          <Button type="submit" className="flex-1">
            {selectedProduct?.id ? 'Update Product' : 'Create Product'}
          </Button>
          {selectedProduct && (
            <Button type="button" variant="outline" onClick={() => setSelectedProduct(null)}>
              Cancel
            </Button>
          )}
        </div>
      </form>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Current Products</h2>
        <Button onClick={handleNew}>Add New Product</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => handleEdit(product)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="icon" 
                    onClick={() => handleDelete(product.id!)}
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </AdminLayout>
  );
};

export default AdminStore;
