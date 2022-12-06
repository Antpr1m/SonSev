import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProfileResponse } from '../types/types';



export const profileApi = createApi({
	reducerPath: 'profileApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://social-network.samuraijs.com/api/1.0/profile/',
		headers: { "API-KEY": "d443463f-67c1-4459-b735-7d91522d64b4" }
	}),
	endpoints: build => ({
		getProfile: build.query<IProfileResponse, number>({
			query: (userId: number) => ({
				url: `${userId}`
			})
		})
	})
});

export const { useLazyGetProfileQuery } = profileApi;
export const { useGetProfileQuery } = profileApi;
