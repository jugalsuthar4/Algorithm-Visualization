import React from 'react'
import { Router } from "@reach/router"
import  Home from "./components/Home"
import BubbleSort from "./Algorithm/Sorting/BubbleSort"
import SelectionSort from "./Algorithm/Sorting/SelectionSort"
import Pathfinding from './components/Pathfinding'
import SearchingSorting from "./components/SearchingSorting"
import DataStructure from "./components/DataStructure"
import Nqueen from "./components/Nqueen"
import Stack from "./components/Stack"
import Queue from "./components/Queue"

function App() {
  return (
    <div>
         <Router>
           <Home path="/"/>
           <BubbleSort path="/bubblesort" />
           <SelectionSort path="/selectionsort" />
           <SearchingSorting path="/searching-sorting"/>
           <DataStructure path="/data-structure" />
           <Pathfinding path="/pathfinding" />
           <Nqueen path="/nqueen" />
           <Stack path="/stack" />
           <Queue path="/queue" />
         </Router>
    </div>
  )
}

export default App
