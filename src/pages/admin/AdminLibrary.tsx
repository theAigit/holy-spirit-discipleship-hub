
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

type Resource = {
  id?: number;
  title: string;
  type: string;
  description: string;
};

const AdminLibrary = () => {
  const [resources, setResources] = useState<Resource[]>([
    {
      title: "Fundamentals of Discipleship",
      type: "E-Book",
      description: "A comprehensive guide to understanding the foundations of biblical discipleship."
    },
    {
      title: "Walking in the Spirit",
      type: "Audio Series",
      description: "Learn how to cultivate a daily walk with the Holy Spirit."
    },
    {
      title: "Prayer and Fasting",
      type: "E-Book",
      description: "Discover the power of prayer and fasting in your spiritual journey."
    },
    {
      title: "The Discipler's Handbook",
      type: "PDF",
      description: "Essential guidance for those who disciple others in their walk with Christ."
    },
    {
      title: "Biblical Leadership Principles",
      type: "Video Series",
      description: "Lessons on leading with integrity and wisdom according to Scripture."
    },
    {
      title: "Intimacy with God",
      type: "Audio Devotionals",
      description: "Daily devotionals to help you develop a deeper relationship with God."
    }
  ]);

  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  const handleEdit = (resource: Resource) => {
    setSelectedResource(resource);
  };

  const handleDelete = (title: string) => {
    setResources(resources.filter(resource => resource.title !== title));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement Supabase integration for create/update
    if (!selectedResource) return;
    
    const existingIndex = resources.findIndex(r => r.title === selectedResource.title);
    
    if (existingIndex >= 0) {
      // Update existing resource
      const updatedResources = [...resources];
      updatedResources[existingIndex] = selectedResource;
      setResources(updatedResources);
    } else {
      // Add new resource
      setResources([...resources, selectedResource]);
    }
    
    setSelectedResource(null);
  };

  const handleNew = () => {
    setSelectedResource({
      title: '',
      type: '',
      description: ''
    });
  };

  return (
    <AdminLayout title="Library Management">
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <Input 
          placeholder="Resource Title" 
          value={selectedResource?.title || ''} 
          onChange={(e) => setSelectedResource(prev => prev ? {...prev, title: e.target.value} : null)}
        />
        <Input 
          placeholder="Resource Type (E-Book, PDF, Audio, etc.)" 
          value={selectedResource?.type || ''} 
          onChange={(e) => setSelectedResource(prev => prev ? {...prev, type: e.target.value} : null)}
        />
        <Textarea 
          placeholder="Description" 
          value={selectedResource?.description || ''} 
          onChange={(e) => setSelectedResource(prev => prev ? {...prev, description: e.target.value} : null)}
        />
        <div className="flex gap-2">
          <Button type="submit" className="flex-1">
            {selectedResource?.title ? 'Update Resource' : 'Create Resource'}
          </Button>
          {selectedResource && (
            <Button type="button" variant="outline" onClick={() => setSelectedResource(null)}>
              Cancel
            </Button>
          )}
        </div>
      </form>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Current Resources</h2>
        <Button onClick={handleNew}>Add New Resource</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {resources.map((resource, index) => (
            <TableRow key={index}>
              <TableCell>{resource.title}</TableCell>
              <TableCell>{resource.type}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => handleEdit(resource)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="icon" 
                    onClick={() => handleDelete(resource.title)}
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

export default AdminLibrary;
