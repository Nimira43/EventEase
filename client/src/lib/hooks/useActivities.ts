import { useMutation, useQuery } from '@tanstack/react-query'
import agent from '../api/agent'

export const useActivities = () => {
  const { data: activities, isPending } = useQuery ({
    queryKey: ['activities'],
    queryFn: async () => {
      const response = await agent.get<Activity[]>('/activities')
      return response.data
    }
  })

  const updateActivity = useMutation({
    mutationFn: async(activity: Activity) => {}
  })

  return {
    activities,
    isPending
  }
}