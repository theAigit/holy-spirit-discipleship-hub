
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Book, FileText, Store, Users } from "lucide-react";

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, title }) => {
  const navItems = [
    { name: "Dashboard", path: "/admin", icon: null },
    { name: "Groups", path: "/admin/groups", icon: <Users className="h-4 w-4 text-skyblue" /> },
    { name: "Library", path: "/admin/library", icon: <Book className="h-4 w-4 text-skyblue" /> },
    { name: "Store", path: "/admin/store", icon: <Store className="h-4 w-4 text-skyblue" /> },
    { name: "Missions", path: "/admin/missions", icon: <FileText className="h-4 w-4 text-skyblue" /> },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Admin Panel</CardTitle>
            </CardHeader>
            <CardContent>
              <nav>
                <ul className="space-y-2">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <Link 
                        to={item.path} 
                        className="flex items-center gap-2 p-2 rounded hover:bg-muted transition-colors"
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
              {children}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
