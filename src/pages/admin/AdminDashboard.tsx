
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Book, FileText, Store, Users } from "lucide-react";

const AdminDashboard = () => {
  const adminModules = [
    {
      title: "Groups",
      icon: <Users className="h-8 w-8 text-blue-500" />,
      description: "Manage discipleship groups - add, edit or delete groups",
      link: "/admin/groups"
    },
    {
      title: "Library",
      icon: <Book className="h-8 w-8 text-blue-500" />,
      description: "Manage e-library resources and materials",
      link: "/admin/library"
    },
    {
      title: "Store",
      icon: <Store className="h-8 w-8 text-blue-500" />,
      description: "Manage store products, pricing and availability",
      link: "/admin/store"
    },
    {
      title: "Missions",
      icon: <FileText className="h-8 w-8 text-blue-500" />,
      description: "Manage mission updates and content",
      link: "/admin/missions"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {adminModules.map((module, index) => (
          <Link to={module.link} key={index}>
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex justify-center">{module.icon}</div>
                <CardTitle className="text-center mt-2">{module.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">{module.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
