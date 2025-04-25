
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Edit, Trash } from "lucide-react";
import AdminLayout from './AdminLayout';

type Group = {
  id?: number;
  name: string;
  verse: string;
  description: string;
  image: string;
};

const AdminGroups = () => {
  const [groups, setGroups] = useState<Group[]>([
    {
      name: "League of Disciplers",
      verse: "Matthew 16:24",
      description: "If you are already a Discipler, who had graduated from the GLDSH, click here to join your fellow comrades.",
      image: "/lovable-uploads/4dd569e9-c5fa-430c-892e-fc4cdf36ddb0.png"
    },
    {
      name: "Youths Aflame",
      verse: "Psalm 119:9",
      description: "Click here to join the disciples of youth group. How can a youth guide his way except he fears the Lord? Join our vibrant Youths Aflame for Christ.",
      image: "/lovable-uploads/7af1c166-b1e9-47a9-9531-6b76eeec472b.png"
    },
    {
      name: "Watchmen Intercessors",
      verse: "Isaiah 62:1",
      description: "Click here to join our intercessors team in prayers for nations, disciples, missions, and the body of Christ.",
      image: "/lovable-uploads/a0b2bd1e-ef70-49a6-8dae-95f91c3505f1.png"
    },
    {
      name: "The Kingsmen Forum",
      verse: "Ezekiel 22:30",
      description: "Click to join men to enjoy fellowship and wisdom on practical issues of living.",
      image: "/lovable-uploads/f36997c7-1c21-4298-a1a6-7776b15fdb92.png"
    },
    {
      name: "Women of Virtue",
      verse: "Proverbs 31:31",
      description: "Click here to join our Women of Virtue group. A wonderful encounter awaits you.",
      image: "/lovable-uploads/618be9d6-6d12-4235-8655-2e4b8c3418b6.png"
    },
    {
      name: "Let the Children Come to Me",
      verse: "Matthew 19:14",
      description: "Click here to enjoy Christ Jesus fellowship in the eyes of children in an exciting environment.",
      image: "/lovable-uploads/618be9d6-6d12-4235-8655-2e4b8c3418b6.png"
    },
    {
      name: "Book Reviews / Content Study",
      verse: "2 Timothy 2:15",
      description: "Click here to join our book reviews and study. This will aid your study life and unfailing new spiritual development.",
      image: "/lovable-uploads/618be9d6-6d12-4235-8655-2e4b8c3418b6.png"
    }
  ]);

  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);

  const handleEdit = (group: Group) => {
    setSelectedGroup(group);
  };

  const handleDelete = (groupName: string) => {
    setGroups(groups.filter(group => group.name !== groupName));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement Supabase integration for create/update
    if (!selectedGroup) return;
    
    const existingIndex = groups.findIndex(g => g.name === selectedGroup.name);
    
    if (existingIndex >= 0) {
      // Update existing group
      const updatedGroups = [...groups];
      updatedGroups[existingIndex] = selectedGroup;
      setGroups(updatedGroups);
    } else {
      // Add new group
      setGroups([...groups, selectedGroup]);
    }
    
    setSelectedGroup(null);
  };

  const handleNew = () => {
    setSelectedGroup({
      name: '',
      verse: '',
      description: '',
      image: ''
    });
  };

  return (
    <AdminLayout title="Groups Management">
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <Input 
          placeholder="Group Name" 
          value={selectedGroup?.name || ''} 
          onChange={(e) => setSelectedGroup(prev => prev ? {...prev, name: e.target.value} : null)}
        />
        <Input 
          placeholder="Verse" 
          value={selectedGroup?.verse || ''} 
          onChange={(e) => setSelectedGroup(prev => prev ? {...prev, verse: e.target.value} : null)}
        />
        <Textarea 
          placeholder="Description" 
          value={selectedGroup?.description || ''} 
          onChange={(e) => setSelectedGroup(prev => prev ? {...prev, description: e.target.value} : null)}
        />
        <Input 
          placeholder="Image URL" 
          value={selectedGroup?.image || ''} 
          onChange={(e) => setSelectedGroup(prev => prev ? {...prev, image: e.target.value} : null)}
        />
        <div className="flex gap-2">
          <Button type="submit" className="flex-1">
            {selectedGroup?.name ? 'Update Group' : 'Create Group'}
          </Button>
          {selectedGroup && (
            <Button type="button" variant="outline" onClick={() => setSelectedGroup(null)}>
              Cancel
            </Button>
          )}
        </div>
      </form>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Current Groups</h2>
        <Button onClick={handleNew}>Add New Group</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Verse</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {groups.map((group, index) => (
            <TableRow key={index}>
              <TableCell>{group.name}</TableCell>
              <TableCell>{group.verse}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => handleEdit(group)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="icon" 
                    onClick={() => handleDelete(group.name)}
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

export default AdminGroups;
