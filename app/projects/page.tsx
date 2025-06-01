"use client"

import { useState } from "react"
import { Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PageTransition } from "@/components/ui/page-transition"
import ProjectCard from "@/components/project-card"
import ProjectFilters from "@/components/project-filters"
import { featuredProjects } from "@/lib/dummy-data"

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <PageTransition>
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Jelajahi Proyek</h1>
            <p className="text-gray-600">Temukan dan dukung proyek kewirausahaan pelajar yang inovatif</p>
          </div>
          <Button asChild>
            <a href="/projects/create">Mulai Proyekmu</a>
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block w-64 shrink-0">
            <ProjectFilters />
          </div>

          {/* Mobile Filter Button */}
          <div className="lg:hidden w-full mb-4">
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <Filter className="h-4 w-4" />
              Filter Proyek
            </Button>
          </div>

          <div className="flex-1">
            {/* Search */}
            <div className="mb-6">
              <Input
                type="search"
                placeholder="Cari proyek..."
                className="w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects
                .filter(
                  (project) =>
                    searchQuery === "" ||
                    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    project.category.toLowerCase().includes(searchQuery.toLowerCase()),
                )
                .map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center gap-1">
                <Button variant="outline" size="sm" disabled>
                  Sebelumnya
                </Button>
                <Button variant="outline" size="sm" className="bg-blue-50">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Selanjutnya
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
