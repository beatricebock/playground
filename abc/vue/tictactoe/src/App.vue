<template>
  <div>
    <div class="scoreBoard">
      <span>O has {{ wins.O }} wins</span>
      <h2>Score Board</h2>
      <span>X has {{ wins.X }} wins</span>
    </div>
    <div id="app">
      <div id="details">
        <h1>Tic Tac Toe</h1>
      </div>
      <grid></grid>
      <button class="restart" @click="restart">Restart</button>
    </div>
  </div>
</template>

<script>
  import Grid from './components/Grid.vue'
  export default {
    name: 'app',
    data() {
      return {
        matches: 0,
        wins: {
          O: 0,
          X: 0
        }
      }
    },
    components: {
      Grid
    },
    methods: {
      restart () {
        Event.$emit('clearCell')
        Event.$emit('gridReset')
        this.matches++
      }
      
    },
    created () {
      Event.$on('win', winner => this.wins[winner]++)
    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #fff;
    color: #fff;
    font-family: 'Raleway', Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin: 0px;
  }
  
  #app {
    margin: 0 auto;
    max-width: 270px;
    color: #9EB9FF;
  }
  
  h1 {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.85em;
  }
  
  .restart {
    background-color: #FCBAA4;
    color: #fff;
    border: 0px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    font-family: 'Raleway', Helvetica, sans-serif;
    font-size: 1.4em;
    font-weight: bold;
    margin: 0px;
    padding: 15px;
    width: 100%;
  }
  
  .restart:hover {
    background-color: #FAC9B8;
    cursor: pointer;
  }
  
  .scoreBoard {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 70px;
    background-color: #9EB9FF;
    box-shadow: 10px solid #fff;
    padding: 20px;
    overflow: hidden;
  }
  
  .scoreBoard h2 {
    margin: 0px;
  }
  
  .scoreBoard span {
    float: right;
    font-size: 1.5em;
    font-weight: bold;
    margin-left: 20px;
  }
</style>
