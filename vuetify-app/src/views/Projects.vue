<template>
  <div class="projects">
    <v-container class="my-5">

      <v-expansion-panel v-for="project in myProjects" :key="project.title">
        <v-expansion-panel-content>
        <template v-slot:header>
          <div>{{ project.title }}</div>

        </template>
          <v-card>
            <v-card-text class="px-4 grey--text"> 
              <div class="font-weight-bold"> Due by: {{ project.due }} </div>
              <div> {{ project.content }} </div>
              </v-card-text>
          </v-card>
        
        </v-expansion-panel-content>
      </v-expansion-panel>

    </v-container>
  </div>
</template>

<script>
import db from '../fb';
export default {
  data(){
    return{
        projects: []
      /**
        projects: [
          { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
          { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
          { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
          { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
          { title: 'Update my Linkedin Profile', person: 'The Net Ninja', due: '2nd Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        ]
      */
    }
  },
     created() {
      db.collection('projects').onSnapshot(res => {
        const changes = res.docChanges()

        changes.forEach(change => {
          if(change.type === 'added'){
            this.projects.push({
              ...change.doc.data(),
              id: change.doc.id
            })
          }
        })

      })

    },
  computed: {
    myProjects(){
      var myProjects = [];
      
      for(var i = 0; i < this.projects.length; i++){
        if(this.projects[i].person == 'The Net Ninja'){
          myProjects.push(this.projects[i]);
        }
      }
      return myProjects;

    }
  },
}
</script>
