### Roster Details<br />
Team Name: Secret<br />
Roster: anarkez, Juve, Kind0, NOPEEJ, Tauson<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [188](../standings_global.md)<br />
Regional Rank: [121]( ../standings_europe.md)<br />
Final Rank Value:  565.3<br />
<br />
Final Rank Value (565.3) = Starting Rank Value (561.0) + Head To Head Adjustments (4.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.281[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.075<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 561.0
- 400 + ( ( 0.075 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 561.0


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
|           21 |     1477 | 2024-05-14 | WOPA          | L   | 0.772      | -            | -                | -                | -         |    -9.77 | anarkez, Juve, Kind0, NOPEEJ, Tauson   |
|           20 |     1487 | 2024-05-13 | LEON          | L   | 0.768      | -            | -                | -                | -         |    -7.41 | anarkez, Juve, Kind0, NOPEEJ, Tauson   |
|           19 |     2022 | 2024-04-19 | Portugal      | L   | 0.608      | -            | -                | -                | -         |    -5.50 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           18 |     2081 | 2024-04-18 | Nemiga        | L   | 0.600      | -            | -                | -                | -         |    -0.41 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           17 |     2096 | 2024-04-18 | 500           | W   | 0.599      | 0.143        | 0.001 (0.000)    | 0.169 (0.014)    | 0 (0.000) |    14.52 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           16 |     2119 | 2024-04-17 | Illuminar     | L   | 0.594      | -            | -                | -                | -         |   -10.74 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           15 |     2168 | 2024-04-16 | Sampi         | L   | 0.585      | -            | -                | -                | -         |    -1.83 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           14 |     2184 | 2024-04-15 | PGE Turow     | W   | 0.579      | 0.371        | 0.002 (0.000)    | 0.031 (0.007)    | 0 (0.000) |    11.94 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           13 |     2256 | 2024-04-11 | ENCE Academy  | L   | 0.552      | -            | -                | -                | -         |    -4.05 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           12 |     2443 | 2024-04-05 | 9 Pandas      | W   | 0.513      | 0.384        | 0.126 (0.025)    | 0.591 (0.116)    | 0 (0.000) |    15.45 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           11 |     2961 | 2024-03-12 | Endpoint      | L   | 0.352      | -            | -                | -                | -         |    -1.34 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           10 |     3047 | 2024-03-08 | Metizport     | L   | 0.326      | -            | -                | -                | -         |    -0.89 | anarkez, innocent, Kind0, Maze, Tauson |
|            9 |     3076 | 2024-03-07 | ex-Preasy     | L   | 0.319      | -            | -                | -                | -         |    -1.38 | anarkez, innocent, Kind0, Maze, Tauson |
|            8 |     3157 | 2024-03-04 | Fraud5        | L   | 0.300      | -            | -                | -                | -         |    -3.06 | anarkez, innocent, Kind0, Maze, Tauson |
|            7 |     3193 | 2024-03-03 | Zero Tenacity | L   | 0.292      | -            | -                | -                | -         |    -0.45 | anarkez, innocent, Kind0, Maze, Tauson |
|            6 |     3213 | 2024-03-02 | Zero Tenacity | L   | 0.285      | -            | -                | -                | -         |    -0.44 | anarkez, innocent, Kind0, Maze, Tauson |
|            5 |     3255 | 2024-02-28 | Permitta      | W   | 0.266      | 0.143        | 0.039 (0.001)    | 0.794 (0.030)    | 0 (0.000) |     7.62 | anarkez, innocent, Kind0, Maze, Tauson |
|            4 |     3314 | 2024-02-25 | Entropiq      | L   | 0.246      | -            | -                | -                | -         |    -3.67 | anarkez, innocent, Kind0, Maze, Tauson |
|            3 |     3510 | 2024-02-17 | Sampi         | L   | 0.192      | -            | -                | -                | -         |    -0.62 | anarkez, innocent, Kind0, Maze, Tauson |
|            2 |     3663 | 2024-02-10 | 500           | W   | 0.146      | 0.358        | 0.001 (0.000)    | 0.169 (0.009)    | 0 (0.000) |     3.34 | anarkez, innocent, Kind0, Maze, Tauson |
|            1 |     3735 | 2024-02-04 | Alliance      | W   | 0.107      | 0.358        | 0.021 (0.001)    | 0.349 (0.013)    | 0 (0.000) |     2.95 | anarkez, innocent, Kind0, Maze, Tauson |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
