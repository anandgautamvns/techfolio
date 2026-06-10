import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  developerProfile,
  stats,
  services,
  techLove,
  techStack,
  skills,
  experience,
  projects,
  blogPosts,
  aboutMe,
} from "../mockData";

export const portfolioApi = createApi({
  reducerPath: "portfolioApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getProfile: builder.query<typeof developerProfile, void>({
      queryFn: () => ({ data: developerProfile }),
    }),
    getStats: builder.query<typeof stats, void>({
      queryFn: () => ({ data: stats }),
    }),
    getServices: builder.query<typeof services, void>({
      queryFn: () => ({ data: services }),
    }),
    getTechLove: builder.query<typeof techLove, void>({
      queryFn: () => ({ data: techLove }),
    }),
    getTechStack: builder.query<typeof techStack, void>({
      queryFn: () => ({ data: techStack }),
    }),
    getSkills: builder.query<typeof skills, void>({
      queryFn: () => ({ data: skills }),
    }),
    getExperience: builder.query<typeof experience, void>({
      queryFn: () => ({ data: experience }),
    }),
    getProjects: builder.query<typeof projects, void>({
      queryFn: () => ({ data: projects }),
    }),
    getBlogPosts: builder.query<typeof blogPosts, void>({
      queryFn: () => ({ data: blogPosts }),
    }),
    getAboutMe: builder.query<typeof aboutMe, void>({
      queryFn: () => ({ data: aboutMe }),
    }),
  }),
});

export const {
  useGetProfileQuery,
  useGetStatsQuery,
  useGetServicesQuery,
  useGetTechLoveQuery,
  useGetTechStackQuery,
  useGetSkillsQuery,
  useGetExperienceQuery,
  useGetProjectsQuery,
  useGetBlogPostsQuery,
  useGetAboutMeQuery,
} = portfolioApi;
