/**
 * Example usage of query key factory for new features
 * This file demonstrates how to use the query key factory for different scenarios
 */
import { createQueryKeys, createExtendedQueryKeys } from './query-key-factory'

// Example 1: Standard CRUD operations for a user feature
export const userQueryKeys = createQueryKeys('user')

// Usage examples:
// userQueryKeys.all                    // ['user']
// userQueryKeys.lists()                // ['user', 'list']
// userQueryKeys.list({ active: true }) // ['user', 'list', { filters: { active: true } }]
// userQueryKeys.details()              // ['user', 'detail']
// userQueryKeys.detail('123')          // ['user', 'detail', '123']
// userQueryKeys.statusChanges()        // ['user', 'status']
// userQueryKeys.statusChange('123')    // ['user', 'status', '123']
// userQueryKeys.custom('search', { query: 'john' }) // ['user', 'search', { query: 'john' }]

// Example 2: Extended query keys for features with specialized operations
export const analyticsQueryKeys = createExtendedQueryKeys('analytics', {
  // Monthly reports
  monthlyReport: (year: number, month: number) =>
    ['analytics', 'monthlyReport', year, month] as const,

  // Custom date range analytics
  dateRange: (startDate: string, endDate: string) =>
    ['analytics', 'dateRange', startDate, endDate] as const,

  // Real-time metrics
  realTimeMetrics: () => ['analytics', 'realTimeMetrics'] as const,

  // User behavior tracking
  userBehavior: (userId: string, timeframe: 'day' | 'week' | 'month') =>
    ['analytics', 'userBehavior', userId, timeframe] as const,
})

// Example 3: Simple feature with minimal operations
export const notificationQueryKeys = createQueryKeys('notification')

// Example 4: Feature with complex hierarchical data
export const projectQueryKeys = createExtendedQueryKeys('project', {
  // Project-specific tasks
  tasks: (projectId: string) => ['project', 'tasks', projectId] as const,

  // Task details within a project
  taskDetail: (projectId: string, taskId: string) =>
    ['project', 'tasks', projectId, taskId] as const,

  // Project members
  members: (projectId: string) => ['project', 'members', projectId] as const,

  // Project settings
  settings: (projectId: string) => ['project', 'settings', projectId] as const,
})

// Example usage in components:

// For FAQ-like CRUD operations:
// const faqQuery = useQuery({
//   queryKey: faqQueryKeys.lists(),
//   queryFn: faqAPI.getAll
// })

// For dashboard-like specialized operations:
// const analyticsQuery = useQuery({
//   queryKey: analyticsQueryKeys.monthlyReport(2024, 3),
//   queryFn: () => analyticsAPI.getMonthlyReport(2024, 3)
// })

// For invalidating specific caches:
// queryClient.invalidateQueries({ queryKey: userQueryKeys.details() })
// queryClient.invalidateQueries({ queryKey: projectQueryKeys.tasks(projectId) })

// For invalidating all related queries:
// queryClient.invalidateQueries({ queryKey: userQueryKeys.all })
// queryClient.invalidateQueries({ queryKey: analyticsQueryKeys.all })
