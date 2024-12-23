<script>
    import {score, scoreList} from "$lib/store"
    import {goto} from "$app/navigation"
    import {GameViewModel}   from "../viewModels/GameViewModel";
    import { onMount } from "svelte";

    let viewModel = new GameViewModel()
    let matchList = []
    async function fetchData(){
        matchList = await viewModel.loadGames()
        // 디폴트조건을 통한 검색 구현
        console.log(matchList)
    }

    onMount(() => {
        fetchData()
    })

</script>


<svelte:head>
    <title> Brain Color </title>
</svelte:head>

<h2> 두뇌개발게임</h2>
<h3> 이번 주의 점수</h3>
<table>
    <thead>
        <tr>
            <th>no</th>
            <th>score</th>
            <th>이름</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>===</td>
            <td>===</td>
            <td>===</td>
        </tr>

        {#each $scoreList as item, index}
            <tr>
                <td>{index + 1}</td>
                <td>{item.score}</td>
                <td>{item.name}</td>
            </tr>

        {/each}
    </tbody>
</table>

<p>
    <button id="play-button" style="width:100%; height:60px" on:click={()=>{goto("/quiz")}}> play </button>
</p>