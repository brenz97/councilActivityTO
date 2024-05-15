<template>
    <div v-if="vote">
      <h2>Vote Detail</h2>
      <p>Councilor: {{ vote['First Name'] }} {{ vote['Last Name'] }}</p>
      <p>Term: {{ vote.Term }}</p>
      <p>Committee: {{ vote.Committee }}</p>
      <p>Date/Time: {{ vote['Date/Time'] }}</p>
      <p>Agenda Item #: {{ vote['Agenda Item #'] }}</p>
      <p>Agenda Item Title: {{ vote['Agenda Item Title'] }}</p>
      <p>Motion Type: {{ vote['Motion Type'] }}</p>
      <p>Vote: {{ vote.Vote }}</p>
      <p>Result: {{ vote.Result }}</p>
      <p>Vote Description: {{ vote['Vote Description'] }}</p>
    </div>
  </template>
  
  <script>
  import { getResourceData } from '@/api';
  
  export default {
    data() {
      return {
        vote: null,
      };
    },
    props: {
      id: {
        type: String,
        required: true,
      },
    },
    async mounted() {
      try {
        // Assuming the votes data is not very large and can be handled in-memory
        const votes = await getResourceData('YOUR_RESOURCE_ID');
        this.vote = votes.find(vote => vote._id === this.id);
      } catch (error) {
        console.error('Error fetching vote details:', error);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  