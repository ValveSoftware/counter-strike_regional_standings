### Roster Details<br />
Team Name: Secret<br />
Roster: anarkez, Juve, Kind0, NOPEEJ, Tauson<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [184](../standings_global.md)<br />
Regional Rank: [114]( ../standings_europe.md)<br />
Final Rank Value:  586.2<br />
<br />
Final Rank Value (586.2) = Starting Rank Value (566.3) + Head To Head Adjustments (19.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.291[<sup>2</sup>](#table1)
- Opponent Network: 0.037[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.082<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 566.3
- 400 + ( ( 0.082 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 566.3


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
|           21 |     1179 | 2024-05-14 | WOPA          | L   | 0.968      | -            | -                | -                | -         |   -13.88 | anarkez, Juve, Kind0, NOPEEJ, Tauson   |
|           20 |     1189 | 2024-05-13 | LEON          | L   | 0.963      | -            | -                | -                | -         |   -11.14 | anarkez, Juve, Kind0, NOPEEJ, Tauson   |
|           19 |     1724 | 2024-04-19 | esmagaB       | L   | 0.803      | -            | -                | -                | -         |    -7.46 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           18 |     1783 | 2024-04-18 | Nemiga        | L   | 0.795      | -            | -                | -                | -         |    -0.62 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           17 |     1798 | 2024-04-18 | 500           | W   | 0.794      | 0.143        | 0.001 (0.000)    | 0.292 (0.033)    | 0 (0.000) |    19.43 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           16 |     1821 | 2024-04-17 | Illuminar     | L   | 0.789      | -            | -                | -                | -         |    -4.75 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           15 |     1870 | 2024-04-16 | Sampi         | L   | 0.780      | -            | -                | -                | -         |    -2.58 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           14 |     1886 | 2024-04-15 | PGE Turow     | W   | 0.774      | 0.371        | 0.002 (0.001)    | 0.040 (0.012)    | 0 (0.000) |    15.66 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           13 |     1958 | 2024-04-11 | ENCE Academy  | L   | 0.748      | -            | -                | -                | -         |    -5.46 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           12 |     2145 | 2024-04-05 | 9 Pandas      | W   | 0.708      | 0.384        | 0.114 (0.031)    | 0.663 (0.180)    | 0 (0.000) |    21.48 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           11 |     2664 | 2024-03-12 | Endpoint      | L   | 0.548      | -            | -                | -                | -         |    -2.28 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           10 |     2750 | 2024-03-08 | Metizport     | L   | 0.521      | -            | -                | -                | -         |    -1.31 | anarkez, innocent, Kind0, Maze, Tauson |
|            9 |     2779 | 2024-03-07 | ex-Preasy     | L   | 0.514      | -            | -                | -                | -         |    -1.71 | anarkez, innocent, Kind0, Maze, Tauson |
|            8 |     2860 | 2024-03-04 | Fraud5        | L   | 0.495      | -            | -                | -                | -         |    -5.21 | anarkez, innocent, Kind0, Maze, Tauson |
|            7 |     2896 | 2024-03-03 | Zero Tenacity | L   | 0.487      | -            | -                | -                | -         |    -0.86 | anarkez, innocent, Kind0, Maze, Tauson |
|            6 |     2916 | 2024-03-02 | Zero Tenacity | L   | 0.480      | -            | -                | -                | -         |    -0.86 | anarkez, innocent, Kind0, Maze, Tauson |
|            5 |     2958 | 2024-02-28 | Permitta      | W   | 0.461      | 0.143        | 0.039 (0.003)    | 0.885 (0.058)    | 0 (0.000) |    13.07 | anarkez, innocent, Kind0, Maze, Tauson |
|            4 |     3017 | 2024-02-25 | Entropiq      | L   | 0.441      | -            | -                | -                | -         |    -6.23 | anarkez, innocent, Kind0, Maze, Tauson |
|            3 |     3213 | 2024-02-17 | Sampi         | L   | 0.388      | -            | -                | -                | -         |    -1.36 | anarkez, innocent, Kind0, Maze, Tauson |
|            2 |     3366 | 2024-02-10 | 500           | W   | 0.341      | 0.358        | 0.001 (0.000)    | 0.292 (0.036)    | 0 (0.000) |     7.83 | anarkez, innocent, Kind0, Maze, Tauson |
|            1 |     3438 | 2024-02-04 | Alliance      | W   | 0.302      | 0.358        | 0.018 (0.002)    | 0.432 (0.047)    | 0 (0.000) |     8.16 | anarkez, innocent, Kind0, Maze, Tauson |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
