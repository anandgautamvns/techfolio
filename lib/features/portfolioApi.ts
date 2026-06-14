import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Profile, Stat, Service, TechLove, TechStack, Skill, Experience, Project, BlogPost, AboutMe } from "./model";

// ── RTK Query API ─────────────────────────────────────────────────────────────
export const portfolioApi = createApi({
  reducerPath: "portfolioApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),

  tagTypes: [
    "Profile", "Stats", "Services", "TechLove", "TechStack",
    "Skills", "Experience", "Projects", "Blog", "About",
  ],

  endpoints: (builder) => ({

    // ── Profile (singleton) ──────────────────────────────────────────────────
    getProfile: builder.query<Profile, void>({
      query: () => "/profile",
      providesTags: ["Profile"],
    }),
    updateProfile: builder.mutation<Profile, Partial<Profile>>({
      query: (body) => ({ url: "/profile", method: "PUT", body }),
      invalidatesTags: ["Profile"],
    }),

    // ── Stats ────────────────────────────────────────────────────────────────
    getStats: builder.query<Stat[], void>({
      query: () => "/stats",
      providesTags: ["Stats"],
    }),
    createStat: builder.mutation<Stat, Omit<Stat, "id">>({
      query: (body) => ({ url: "/stats", method: "POST", body }),
      invalidatesTags: ["Stats"],
    }),
    updateStat: builder.mutation<Stat, Partial<Stat> & { id: number }>({
      query: ({ id, ...body }) => ({ url: `/stats/${id}`, method: "PUT", body }),
      invalidatesTags: ["Stats"],
    }),
    deleteStat: builder.mutation<Stat, number>({
      query: (id) => ({ url: `/stats/${id}`, method: "DELETE" }),
      invalidatesTags: ["Stats"],
    }),

    // ── Services ─────────────────────────────────────────────────────────────
    getServices: builder.query<Service[], void>({
      query: () => "/services",
      providesTags: ["Services"],
    }),
    createService: builder.mutation<Service, Omit<Service, "id">>({
      query: (body) => ({ url: "/services", method: "POST", body }),
      invalidatesTags: ["Services"],
    }),
    updateService: builder.mutation<Service, Partial<Service> & { id: number }>({
      query: ({ id, ...body }) => ({ url: `/services/${id}`, method: "PUT", body }),
      invalidatesTags: ["Services"],
    }),
    deleteService: builder.mutation<Service, number>({
      query: (id) => ({ url: `/services/${id}`, method: "DELETE" }),
      invalidatesTags: ["Services"],
    }),

    // ── Tech Love ────────────────────────────────────────────────────────────
    getTechLove: builder.query<TechLove[], void>({
      query: () => "/tech-love",
      providesTags: ["TechLove"],
    }),
    createTechLove: builder.mutation<TechLove, Omit<TechLove, "id">>({
      query: (body) => ({ url: "/tech-love", method: "POST", body }),
      invalidatesTags: ["TechLove"],
    }),
    updateTechLove: builder.mutation<TechLove, Partial<TechLove> & { id: number }>({
      query: ({ id, ...body }) => ({ url: `/tech-love/${id}`, method: "PUT", body }),
      invalidatesTags: ["TechLove"],
    }),
    deleteTechLove: builder.mutation<TechLove, number>({
      query: (id) => ({ url: `/tech-love/${id}`, method: "DELETE" }),
      invalidatesTags: ["TechLove"],
    }),

    // ── Tech Stack ───────────────────────────────────────────────────────────
    getTechStack: builder.query<TechStack[], void>({
      query: () => "/tech-stack",
      providesTags: ["TechStack"],
    }),
    createTechStack: builder.mutation<TechStack, Omit<TechStack, "id">>({
      query: (body) => ({ url: "/tech-stack", method: "POST", body }),
      invalidatesTags: ["TechStack"],
    }),
    updateTechStack: builder.mutation<TechStack, Partial<TechStack> & { id: number }>({
      query: ({ id, ...body }) => ({ url: `/tech-stack/${id}`, method: "PUT", body }),
      invalidatesTags: ["TechStack"],
    }),
    deleteTechStack: builder.mutation<TechStack, number>({
      query: (id) => ({ url: `/tech-stack/${id}`, method: "DELETE" }),
      invalidatesTags: ["TechStack"],
    }),

    // ── Skills ───────────────────────────────────────────────────────────────
    getSkills: builder.query<Skill[], void>({
      query: () => "/skills",
      providesTags: ["Skills"],
    }),
    createSkill: builder.mutation<Skill, Omit<Skill, "id">>({
      query: (body) => ({ url: "/skills", method: "POST", body }),
      invalidatesTags: ["Skills"],
    }),
    updateSkill: builder.mutation<Skill, Partial<Skill> & { id: number }>({
      query: ({ id, ...body }) => ({ url: `/skills/${id}`, method: "PUT", body }),
      invalidatesTags: ["Skills"],
    }),
    deleteSkill: builder.mutation<Skill, number>({
      query: (id) => ({ url: `/skills/${id}`, method: "DELETE" }),
      invalidatesTags: ["Skills"],
    }),

    // ── Experience ───────────────────────────────────────────────────────────
    getExperience: builder.query<Experience[], void>({
      query: () => "/experience",
      providesTags: ["Experience"],
    }),
    createExperience: builder.mutation<Experience, Omit<Experience, "id">>({
      query: (body) => ({ url: "/experience", method: "POST", body }),
      invalidatesTags: ["Experience"],
    }),
    updateExperience: builder.mutation<Experience, Partial<Experience> & { id: number }>({
      query: ({ id, ...body }) => ({ url: `/experience/${id}`, method: "PUT", body }),
      invalidatesTags: ["Experience"],
    }),
    deleteExperience: builder.mutation<Experience, number>({
      query: (id) => ({ url: `/experience/${id}`, method: "DELETE" }),
      invalidatesTags: ["Experience"],
    }),

    // ── Projects ─────────────────────────────────────────────────────────────
    getProjects: builder.query<Project[], void>({
      query: () => "/projects",
      providesTags: ["Projects"],
    }),
    createProject: builder.mutation<Project, Omit<Project, "id">>({
      query: (body) => ({ url: "/projects", method: "POST", body }),
      invalidatesTags: ["Projects"],
    }),
    updateProject: builder.mutation<Project, Partial<Project> & { id: number }>({
      query: ({ id, ...body }) => ({ url: `/projects/${id}`, method: "PUT", body }),
      invalidatesTags: ["Projects"],
    }),
    deleteProject: builder.mutation<Project, number>({
      query: (id) => ({ url: `/projects/${id}`, method: "DELETE" }),
      invalidatesTags: ["Projects"],
    }),

    // ── Blog ─────────────────────────────────────────────────────────────────
    getBlogPosts: builder.query<BlogPost[], void>({
      query: () => "/blog",
      providesTags: ["Blog"],
    }),
    createBlogPost: builder.mutation<BlogPost, Omit<BlogPost, "id">>({
      query: (body) => ({ url: "/blog", method: "POST", body }),
      invalidatesTags: ["Blog"],
    }),
    updateBlogPost: builder.mutation<BlogPost, Partial<BlogPost> & { id: number }>({
      query: ({ id, ...body }) => ({ url: `/blog/${id}`, method: "PUT", body }),
      invalidatesTags: ["Blog"],
    }),
    deleteBlogPost: builder.mutation<BlogPost, number>({
      query: (id) => ({ url: `/blog/${id}`, method: "DELETE" }),
      invalidatesTags: ["Blog"],
    }),

    // ── About (singleton) ────────────────────────────────────────────────────
    getAboutMe: builder.query<AboutMe, void>({
      query: () => "/about",
      providesTags: ["About"],
    }),
    updateAboutMe: builder.mutation<AboutMe, Partial<AboutMe>>({
      query: (body) => ({ url: "/about", method: "PUT", body }),
      invalidatesTags: ["About"],
    }),
  }),
});

// ── Query hooks ───────────────────────────────────────────────────────────────
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

// ── Mutation hooks ────────────────────────────────────────────────────────────
export const {
  useUpdateProfileMutation,
  useCreateStatMutation, useUpdateStatMutation, useDeleteStatMutation,
  useCreateServiceMutation, useUpdateServiceMutation, useDeleteServiceMutation,
  useCreateTechLoveMutation, useUpdateTechLoveMutation, useDeleteTechLoveMutation,
  useCreateTechStackMutation, useUpdateTechStackMutation, useDeleteTechStackMutation,
  useCreateSkillMutation, useUpdateSkillMutation, useDeleteSkillMutation,
  useCreateExperienceMutation, useUpdateExperienceMutation, useDeleteExperienceMutation,
  useCreateProjectMutation, useUpdateProjectMutation, useDeleteProjectMutation,
  useCreateBlogPostMutation, useUpdateBlogPostMutation, useDeleteBlogPostMutation,
  useUpdateAboutMeMutation,
} = portfolioApi;
