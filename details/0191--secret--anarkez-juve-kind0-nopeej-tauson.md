### Roster Details<br />
Team Name: Secret<br />
Roster: anarkez, Juve, Kind0, NOPEEJ, Tauson<br />
Global Rank: [191](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [123]( ../standings_europe.md)<br />
<br />
Final Rank Value:  538.2<br />
<br />
Final Rank Value (538.2) = Starting Rank Value (540.8) + Head To Head Adjustments (-2.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.260[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.068<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 540.8
- 400 + ( ( 0.068 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 540.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |     2007 | 2024-05-14 | WOPA          | L   | 0.678      | -            | -                | -                | -         |    -8.35 | anarkez, Juve, Kind0, NOPEEJ, Tauson   |
|           20 |     2017 | 2024-05-13 | LEON          | L   | 0.674      | -            | -                | -                | -         |    -6.59 | anarkez, Juve, Kind0, NOPEEJ, Tauson   |
|           19 |     2552 | 2024-04-19 | Portugal      | L   | 0.513      | -            | -                | -                | -         |    -5.07 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           18 |     2611 | 2024-04-18 | Nemiga        | L   | 0.506      | -            | -                | -                | -         |    -0.52 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           17 |     2626 | 2024-04-18 | 500           | W   | 0.504      | 0.143        | 0.001 (0.000)    | 0.106 (0.008)    | 0 (0.000) |    11.97 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           16 |     2649 | 2024-04-17 | Illuminar     | L   | 0.500      | -            | -                | -                | -         |    -8.58 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           15 |     2698 | 2024-04-16 | Sampi         | L   | 0.490      | -            | -                | -                | -         |    -1.82 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           14 |     2714 | 2024-04-15 | PGE Turow     | W   | 0.484      | 0.371        | 0.001 (0.000)    | 0.021 (0.004)    | 0 (0.000) |     9.91 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           13 |     2786 | 2024-04-11 | ENCE Academy  | L   | 0.458      | -            | -                | -                | -         |    -3.75 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           12 |     2973 | 2024-04-05 | 9 Pandas      | W   | 0.418      | 0.384        | 0.083 (0.013)    | 0.579 (0.093)    | 0 (0.000) |    12.35 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           11 |     3491 | 2024-03-12 | Endpoint      | L   | 0.258      | -            | -                | -                | -         |    -0.98 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           10 |     3577 | 2024-03-08 | Metizport     | L   | 0.232      | -            | -                | -                | -         |    -0.78 | anarkez, innocent, Kind0, Maze, Tauson |
|            9 |     3606 | 2024-03-07 | ex-Preasy     | L   | 0.224      | -            | -                | -                | -         |    -1.28 | anarkez, innocent, Kind0, Maze, Tauson |
|            8 |     3687 | 2024-03-04 | Fraud5        | L   | 0.205      | -            | -                | -                | -         |    -2.26 | anarkez, innocent, Kind0, Maze, Tauson |
|            7 |     3723 | 2024-03-03 | Zero Tenacity | L   | 0.197      | -            | -                | -                | -         |    -0.26 | anarkez, innocent, Kind0, Maze, Tauson |
|            6 |     3743 | 2024-03-02 | Zero Tenacity | L   | 0.191      | -            | -                | -                | -         |    -0.25 | anarkez, innocent, Kind0, Maze, Tauson |
|            5 |     3785 | 2024-02-28 | Permitta      | W   | 0.172      | 0.143        | 0.025 (0.001)    | 0.799 (0.020)    | 0 (0.000) |     4.87 | anarkez, innocent, Kind0, Maze, Tauson |
|            4 |     3844 | 2024-02-25 | Entropiq      | L   | 0.152      | -            | -                | -                | -         |    -2.31 | anarkez, innocent, Kind0, Maze, Tauson |
|            3 |     4040 | 2024-02-17 | Sampi         | L   | 0.098      | -            | -                | -                | -         |    -0.38 | anarkez, innocent, Kind0, Maze, Tauson |
|            2 |     4193 | 2024-02-10 | 500           | W   | 0.051      | 0.358        | 0.001 (0.000)    | 0.106 (0.002)    | 0 (0.000) |     1.16 | anarkez, innocent, Kind0, Maze, Tauson |
|            1 |     4265 | 2024-02-04 | Alliance      | W   | 0.012      | 0.358        | 0.014 (0.000)    | 0.273 (0.001)    | 0 (0.000) |     0.33 | anarkez, innocent, Kind0, Maze, Tauson |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
