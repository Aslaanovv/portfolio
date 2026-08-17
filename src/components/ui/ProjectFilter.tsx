import { motion } from 'framer-motion';

export type FilterType = 'all' | 'product-design' | 'web-development' | 'ecommerce' | 'technical-sales';

interface FilterOption {
  id: FilterType;
  label: string;
  keywords: string[];
}

const FILTERS: FilterOption[] = [
  {
    id: 'all',
    label: 'All Work',
    keywords: []
  },
  {
    id: 'product-design',
    label: 'Product Design',
    keywords: ['PRODUCT DESIGN', 'UX/UI', 'UX RESEARCH', 'PRODUCT STRATEGY']
  },
  {
    id: 'web-development',
    label: 'Web Development',
    keywords: ['WEB DESIGN', 'DEVELOPMENT', 'FRONTEND', 'REACT', 'TYPESCRIPT', 'ODOO']
  },
  {
    id: 'ecommerce',
    label: 'E-Commerce',
    keywords: ['E-COMMERCE', 'SHOPIFY']
  },
  {
    id: 'technical-sales',
    label: 'Technical Sales',
    keywords: ['TECHNICAL SALES', 'ERP']
  }
];

interface ProjectFilterProps {
  onFilterChange: (filter: FilterType) => void;
  currentFilter: FilterType;
}

export function ProjectFilter({ onFilterChange, currentFilter }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-8 md:mb-12">
      {FILTERS.map((filter) => {
        const isActive = currentFilter === filter.id;

        return (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`
              relative px-4 py-2 md:px-5 md:py-2.5 rounded-full text-sm font-medium
              transition-all duration-300 ease-out
              ${isActive
                ? 'text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground hover:bg-card/50'
              }
            `}
          >
            {isActive && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-primary rounded-full"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{filter.label}</span>
          </button>
        );
      })}
    </div>
  );
}

/**
 * Check if a project matches the selected filter
 */
export function matchesFilter(projectCategory: string, filter: FilterType): boolean {
  if (filter === 'all') return true;

  const filterConfig = FILTERS.find(f => f.id === filter);
  if (!filterConfig) return true;

  return filterConfig.keywords.some(keyword =>
    projectCategory.toUpperCase().includes(keyword)
  );
}
