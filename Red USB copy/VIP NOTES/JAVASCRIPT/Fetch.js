import {
  getFormattedReport, formatRadars, getFormattedCommentFromReportRequest, getFormattedGroup,
   formatReleases, getFormattedComments, getFormattedCleanUpReport,
 } from '../redux/utils/formatHelpers';
 
 const baseUrl = '/api';
 
 
 async function fetchData(url, options = {}) {
   const conf = {
     credentials: 'same-origin',
     contentType: 'application/json',
     headers: {
       'Content-Type': 'application/json; charset=utf-8',
     },
     ...options,
   };
   const response = await fetch(url, conf);
   return response.json();
 }
 
 const getProblemsList = async (ids = []) => {
   let result;
   if (ids.length) {
     const config = {
       path: `/problems/${ids.join(',')}`,
       fields: [
         'id', 'title', 'assignee', 'epm', 'dri', 'milestone', 'priority', 'relatedProblems.parent-of',
         'relatedProblems.blocked-by', 'component', 'event', 'schedule', 'state', 'substate', 'resolution',
         'keywords', 'diagnosisHistory',
       ],
     };
     const json = await fetchData(`${baseUrl}/radar?path=${config.path}&fields=${config.fields}`);
     result = formatRadars(json);
   } else {
     result = { radars: [], users: [] };
   }
   return result;
 };
 
 export default {
   report: {
     async create(report) {
       if (report) {
         delete report.reports;
         const response = await fetchData(`${baseUrl}/report`, {
           method: 'POST',
           body: JSON.stringify(report),
         });
         return getFormattedReport(response);
       }
       return {};
     },
 
     async reportDetails(id) {
       const response = await fetchData(`${baseUrl}/report/${id}`);
       return getFormattedReport(response, id);
     },
 
     async update(report) {
       if (report) {
         delete report.reports;
         const response = await fetchData(`${baseUrl}/report/${report.id}`, {
           method: 'PUT',
           body: JSON.stringify(report),
         });
         return getFormattedReport(response);
       }
       return {};
     },
 
     async list() {
       const json = await fetchData(`${baseUrl}/reports`);
       return json.map(({ data, created, modified }) => ({ ...data, created, modified }));
     },
 
     async delete(id) {
       const response = await fetchData(`${baseUrl}/report/${id}`, {
         method: 'DELETE',
       });
       return response;
     },
 
     async cleanUp(id) {
       const response = await fetchData(`${baseUrl}/report/${id}/cleanup`, {
         method: 'POST',
       });
       return getFormattedCleanUpReport(response);
     },
   },
 
   group: {
     async create({ group, reportId }) {
       const response = await fetchData(`${baseUrl}/radar-group/${reportId}`, {
         method: 'POST',
         body: JSON.stringify(group),
       });
       return getFormattedGroup(response);
     },
 
     async update(group = {}) {
       if (group.id) {
         const response = await fetchData(`${baseUrl}/radar-group/${group.id}`, {
           method: 'PUT',
           body: JSON.stringify(group),
         });
         return getFormattedGroup(response);
       }
       return {};
     },
 
     async delete({ reportId, groupId }) {
       const response = await fetchData(`${baseUrl}/radar-group/${reportId}/${groupId}`, {
         method: 'DELETE',
       });
       return response;
     },
   },
 
   comment: {
     async list({ param, ids }) {
       const response = await fetchData(`${baseUrl}/comments?${param}=${ids}`);
       return getFormattedComments(response);
     },
 
     async create(comment) {
       if (comment) {
         const response = await fetchData(`${baseUrl}/comment`, {
           method: 'POST',
           body: JSON.stringify(comment),
         });
         return getFormattedCommentFromReportRequest(response);
       }
       return {};
     },
 
     async patch(comment) {
       if (comment) {
         const response = await fetchData(`${baseUrl}/comment/${comment.id}`, {
           method: 'PUT',
           body: JSON.stringify(comment),
         });
         return getFormattedCommentFromReportRequest(response);
       }
       return {};
     },
 
     async remove(comment) {
       if (comment) {
         await fetchData(`${baseUrl}/comment/${comment.id}`, {
           method: 'DELETE',
         });
         return comment.id;
       }
       return {};
     },
   },
 
   image: {
     async list() {
       const response = await fetchData(`${baseUrl}/upload/images`);
       return response;
     },
 
     async remove(key) {
       const response = await fetchData(`${baseUrl}/upload/images/${key}`, {
         method: 'DELETE',
       });
       return { key, response };
     },
   },
 
   profile: {
     async get() {
       const response = await fetchData(`${baseUrl}/profile`);
       const { user } = response;
       user.id = user.prsId;
       delete user.prsId;
       return response;
     },
 
     async favoriteAdd(reportId) {
       const response = await fetchData(`${baseUrl}/account/favorite-report`, {
         method: 'POST',
         body: JSON.stringify({ reportId }),
       });
       return response;
     },
 
     async favoriteDelete(reportId) {
       const response = await fetchData(`${baseUrl}/account/favorite-report/${reportId}`, {
         method: 'DELETE',
       });
       return response;
     },
   },
 
   prefs: {
     async update(pref) {
       const response = await fetchData(`${baseUrl}/account/pref`, {
         method: 'PUT',
         body: JSON.stringify(pref),
       });
       return response.prefs;
     },
   },
 
   team: {
     async list() {
       const teams = await fetchData(`${baseUrl}/settings/teams`);
       return teams.map((team) => team.data);
     },
 
     async create(team) {
       const response = await fetchData(`${baseUrl}/settings/team`, {
         method: 'POST',
         body: JSON.stringify(team),
       });
       return response.data;
     },
 
     async update(team) {
       const response = await fetchData(`${baseUrl}/settings/team/${team.id}`, {
         method: 'PUT',
         body: JSON.stringify(team),
       });
       return response.data;
     },
 
     async delete(id) {
       const response = await fetchData(`${baseUrl}/settings/team/${id}`, {
         method: 'DELETE',
       });
       return response;
     },
   },
 
   keyword: {
     async list() {
       const keywords = await fetchData(`${baseUrl}/settings/keywords`);
       return keywords.map((keyword) => keyword.data);
     },
     async create(keyword) {
       const response = await fetchData(`${baseUrl}/settings/keyword`, {
         method: 'POST',
         body: JSON.stringify(keyword),
       });
       return response.data;
     },
     async update(keyword) {
       const response = await fetchData(`${baseUrl}/settings/keyword/${keyword.id}`, {
         method: 'PUT',
         body: JSON.stringify(keyword),
       });
       return response.data;
     },
     async delete(id) {
       const response = await fetchData(`${baseUrl}/settings/keyword/${id}`, {
         method: 'DELETE',
       });
       return response;
     },
   },
 
   radar: {
     list(ids = []) {
       return getProblemsList(ids);
     },
 
     async listByQuery(query) {
       if (query) {
         const response = await fetchData(`${baseUrl}/radar`, {
           method: 'POST',
           body: JSON.stringify({
             data: query,
             fields: 'id,state,title,component,event,milestone,epm,dri,assignee,keywords,priority,lastModifiedAt',
             fresh: true,
             path: '/problems/find',
           }),
         });
         return formatRadars(response);
       }
       return {};
     },
 
     async listBySharedQueryId(queryId) {
       const params = {
         fields: 'id',
         path: `/shared-reports/${queryId}`,
         fresh: true,
       };
       const queryString = Object.keys(params)
         .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`).join('&');
       const response = await fetchData(`${baseUrl}/radar?${queryString}`);
       const ids = response.data.body.map((radar) => radar.id);
       return getProblemsList(ids);
     },
 
     async getDescription(id) {
       const response = await fetchData(`${baseUrl}/radar?path=/problems/${id}/description`);
       return response;
     },
   },
 
   metadata: {
     async list(ids = []) {
       if (ids.length) {
         const response = await fetchData(`${baseUrl}/metadatas?ids=${ids}`);
         return response.map((metadata) => metadata.data);
       }
       return [];
     },
 
     async patch(metadata) {
       if (metadata) {
         const response = await fetchData(`${baseUrl}/metadata/${metadata.id}`, {
           method: 'PATCH',
           body: JSON.stringify(metadata),
         });
         return response.data;
       }
       return {};
     },
   },
 
   // @TODO: refactor with images api part
   upload: {
     async uploadImg(data) {
       if (data) {
         const response = await fetch(`${baseUrl}/upload/images`, {
           credentials: 'same-origin',
           'content-type': 'multipart/form-data',
           method: 'POST',
           body: data,
         });
         return response.json();
       }
       return {};
     },
   },
 
   releases: {
     async list() {
       const response = await fetchData(`${baseUrl}/settings/releases`);
       return formatReleases(response);
     },
 
     async create(release) {
       const response = await fetchData(`${baseUrl}/settings/release`, {
         method: 'POST',
         body: JSON.stringify(release),
       });
       return response.data;
     },
 
     async update(release) {
       const response = await fetchData(`${baseUrl}/settings/release/${release.id}`, {
         method: 'PUT',
         body: JSON.stringify(release),
       });
       return response.data;
     },
 
     async delete(id) {
       const response = await fetchData(`${baseUrl}/settings/release/${id}`, {
         method: 'DELETE',
       });
       return response;
     },
   },
 
   securityGroups: {
     async validate(groups = []) {
       if (groups.length) {
         const param = groups.join(', ');
         return fetchData(`${baseUrl}/groups/${param}`);
       }
       return {
         error: '',
         groups: [],
       };
     },
   },
 
   filter: {
     async set(data) {
       const { filter, reportId } = data;
       return fetchData(`${baseUrl}/report-filters/${reportId}`, {
         method: 'POST',
         body: JSON.stringify(filter),
       });
     },
   },
 };
 