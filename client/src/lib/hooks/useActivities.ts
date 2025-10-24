import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import agent from '../api/agent'

export const useActivities = () => {
  const queryClient = useQueryClient()

  const { data: activities, isPending } = useQuery ({
    queryKey: ['activities'],
    queryFn: async () => {
      const response = await agent.get<Activity[]>('/activities')
      return response.data
    }
  })

  // REPLACE THIS WITH ...

  const updateActivity = useMutation({
    mutationFn: async(activity: Activity) => {
      await agent.put('/activities', activity)
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['activities']
      })
    }
  })
  
  // FIX
  // const updateActivity = useMutation({
  //   mutationFn: async (activity: Activity) => {
  //     const response = await agent.put<Activity>('/activities', activity)
  //     return response.data // ✅ updated activity from backend
  //   },
  //   onSuccess: (updatedActivity) => {
  //     queryClient.setQueryData<Activity[]>(['activities'], old => {
  //       if (!old) return []
  //       return old.map(act => act.id === updatedActivity.id ? updatedActivity : act)
  //     })
  //   }
  // })

  const createActivity = useMutation({
    mutationFn: async(activity: Activity) => {
      await agent.post('/activities', activity)
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['activities']
      })
    }
  })
  
  const deleteActivity = useMutation({
    mutationFn: async(id: string) => {
      await agent.delete(`/activities/${id}`)
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['activities']
      })
    }
  })

  return {
    activities,
    isPending,
    updateActivity,
    createActivity,
    deleteActivity
  }
}