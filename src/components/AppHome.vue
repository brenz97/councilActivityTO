<template>
  <div>
    <h1>City Council Votes</h1>
    <input
      type="text"
      v-model="searchQuery"
      @input="filterVotes"
      placeholder="Search by councilor, agenda item, or date"
    />
    <ul>
      <li v-for="vote in filteredVotes" :key="vote._id">
        <router-link :to="{ name: 'VoteDetail', params: { id: vote._id }}">
          {{ vote['First Name'] }} {{ vote['Last Name'] }} - {{ vote['Agenda Item Title'] }} - {{ vote.Vote }} on {{ vote['Date/Time'] }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { getPackage, getResourceData } from '@/api';

export default {
  name: 'AppHome',
  data() {
    return {
      searchQuery: '',
      votes: [],
      filteredVotes: []
    };
  },
  methods: {
    filterVotes() {
      this.filteredVotes = this.votes.filter(vote => {
        const searchLower = this.searchQuery.toLowerCase();
        return (
          vote['First Name'].toLowerCase().includes(searchLower) ||
          vote['Last Name'].toLowerCase().includes(searchLower) ||
          vote['Agenda Item Title'].toLowerCase().includes(searchLower) ||
          vote['Date/Time'].includes(this.searchQuery)
        );
      });
    },
    async fetchVotes() {
      try {
        const packageData = await getPackage('members-of-toronto-city-council-voting-record');
        const resourceId = packageData.resources.find(resource => resource.datastore_active).id;
        this.votes = await getResourceData(resourceId);
        this.filteredVotes = this.votes;
      } catch (error) {
        console.error('Error fetching votes:', error);
      }
    }
  },
  mounted() {
    this.fetchVotes();
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>