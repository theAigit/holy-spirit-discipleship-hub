
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
import { format } from 'date-fns';

type MissionUpdate = {
  id?: number;
  title: string;
  date: string;
  content: string;
  location?: string;
};

const AdminMissions = () => {
  const [missionUpdates, setMissionUpdates] = useState<MissionUpdate[]>([
    {
      id: 1,
      title: "Mission Update 1",
      date: "2023-03-05",
      content: "Latest update from our mission field in East Asia..."
    },
    {
      id: 2,
      title: "Mission Update 2",
      date: "2023-03-10",
      content: "Progress report from our team in West Africa..."
    },
    {
      id: 3,
      title: "Mission Update 3",
      date: "2023-03-15",
      content: "New opportunities opening in South America..."
    },
    {
      id: 4,
      title: "Mission Update 4",
      date: "2023-03-20",
      content: "Testimonies from recent converts in Central Asia..."
    }
  ]);

  const [selectedUpdate, setSelectedUpdate] = useState<MissionUpdate | null>(null);

  const handleEdit = (update: MissionUpdate) => {
    setSelectedUpdate(update);
  };

  const handleDelete = (id: number) => {
    setMissionUpdates(missionUpdates.filter(update => update.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement Supabase integration for create/update
    if (!selectedUpdate) return;
    
    if (selectedUpdate.id) {
      // Update existing mission update
      setMissionUpdates(missionUpdates.map(u => u.id === selectedUpdate.id ? selectedUpdate : u));
    } else {
      // Add new mission update with a generated ID
      const newId = Math.max(0, ...missionUpdates.map(u => u.id || 0)) + 1;
      setMissionUpdates([...missionUpdates, {...selectedUpdate, id: newId}]);
    }
    
    setSelectedUpdate(null);
  };

  const handleNew = () => {
    setSelectedUpdate({
      title: '',
      date: format(new Date(), 'yyyy-MM-dd'),
      content: '',
      location: ''
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, 'MMMM d, yyyy');
  };

  return (
    <AdminLayout title="Missions Management">
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <Input 
          placeholder="Mission Update Title" 
          value={selectedUpdate?.title || ''} 
          onChange={(e) => setSelectedUpdate(prev => prev ? {...prev, title: e.target.value} : null)}
        />
        <Input 
          type="date"
          placeholder="Date" 
          value={selectedUpdate?.date || ''} 
          onChange={(e) => setSelectedUpdate(prev => prev ? {...prev, date: e.target.value} : null)}
        />
        <Input 
          placeholder="Location (optional)" 
          value={selectedUpdate?.location || ''} 
          onChange={(e) => setSelectedUpdate(prev => prev ? {...prev, location: e.target.value} : null)}
        />
        <Textarea 
          placeholder="Content" 
          value={selectedUpdate?.content || ''} 
          onChange={(e) => setSelectedUpdate(prev => prev ? {...prev, content: e.target.value} : null)}
        />
        <div className="flex gap-2">
          <Button type="submit" className="flex-1">
            {selectedUpdate?.id ? 'Update Mission' : 'Create Mission'}
          </Button>
          {selectedUpdate && (
            <Button type="button" variant="outline" onClick={() => setSelectedUpdate(null)}>
              Cancel
            </Button>
          )}
        </div>
      </form>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Current Mission Updates</h2>
        <Button onClick={handleNew}>Add New Update</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {missionUpdates.map((update) => (
            <TableRow key={update.id}>
              <TableCell>{update.title}</TableCell>
              <TableCell>{formatDate(update.date)}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => handleEdit(update)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="icon" 
                    onClick={() => handleDelete(update.id!)}
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

export default AdminMissions;
