import React from "react";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";

const FilterBar = ({
  activeFilter,
  onFilterChange,
  viewMode,
  onViewModeChange,
  searchTerm,
  onSearchChange,
  sortBy,
  onSortChange,
}) => {
  const filters = [
    { id: "all", label: "All Collections", icon: "Grid3X3" },
    { id: "prewedding", label: "Prewedding Chronicles", icon: "Heart" },
    { id: "wedding", label: "Wedding Celebrations", icon: "Camera" },
    { id: "baby", label: "Baby Milestones", icon: "Baby" },
    { id: "maternity", label: "Maternity Journeys", icon: "User" },
    { id: "fashion", label: "Fashion Narratives", icon: "Sparkles" },
    { id: "signature", label: "Signature Collections", icon: "Award" },
  ];

  const sortOptions = [
    { value: "recent", label: "Most Recent" },
    { value: "popular", label: "Most Popular" },
    { value: "alphabetical", label: "A-Z" },
  ];

  return (
    <div className="bg-background/95 backdrop-blur-md border-border sticky top-16 py-4 lg:top-18 z-40">
      <div className="container-fluid py-4">
        {/* Search and View Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 my-6">
          <div className="flex items-center gap-4 w-full">
            <div className="relative flex-1 lg:w-96">
              <Icon
                name="Search"
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="text"
                placeholder="Search collections..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e?.target?.value)}
                className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-teal focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e?.target?.value)}
              className="px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-teal text-sm"
            >
              {sortOptions?.map((option) => (
                <option key={option?.value} value={option?.value}>
                  {option?.label}
                </option>
              ))}
            </select>

            {/* View Mode Toggle */}
            <div className="flex bg-muted rounded-lg p-1">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => onViewModeChange("grid")}
                className={`${
                  viewMode === "grid"
                    ? "bg-deep-teal text-white hover:bg-deep-teal/90"
                    : ""
                } px-3`}
              >
                <Icon name="Grid3X3" size={16} />
              </Button>
              <Button
                variant={viewMode === "masonry" ? "default" : "ghost"}
                size="sm"
                onClick={() => onViewModeChange("masonry")}
                className={`${
                  viewMode === "masonry"
                    ? "bg-deep-teal text-white hover:bg-deep-teal/90"
                    : ""
                } px-3`}
              >
                <Icon name="LayoutGrid" size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {filters?.map((filter) => (
            <Button
              key={filter?.id}
              variant={activeFilter === filter?.id ? "default" : "outline"}
              size="sm"
              onClick={() => onFilterChange(filter?.id)}
              iconName={filter?.icon}
              iconPosition="left"
              iconSize={16}
              className={`whitespace-nowrap ${
                activeFilter === filter?.id
                  ? "bg-deep-teal text-white hover:bg-deep-teal/90 hover:text-maroon"
                  : "border-deep-teal text-deep-teal hover:bg-deep-teal/10 hover:text-maroon"
              }`}
            >
              {filter?.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
