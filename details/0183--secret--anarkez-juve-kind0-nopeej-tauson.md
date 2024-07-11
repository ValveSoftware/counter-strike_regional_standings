### Roster Details<br />
Team Name: Secret<br />
Roster: anarkez, Juve, Kind0, NOPEEJ, Tauson<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [183](../standings_global.md)<br />
Regional Rank: [114]( ../standings_europe.md)<br />
Final Rank Value:  571.2<br />
<br />
Final Rank Value (571.2) = Starting Rank Value (561.6) + Head To Head Adjustments (9.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.284[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.077<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 561.6
- 400 + ( ( 0.077 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 561.6


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
|           21 |     1313 | 2024-05-14 | WOPA          | L   | 0.812      | -            | -                | -                | -         |   -10.63 | anarkez, Juve, Kind0, NOPEEJ, Tauson   |
|           20 |     1323 | 2024-05-13 | LEON          | L   | 0.808      | -            | -                | -                | -         |    -8.19 | anarkez, Juve, Kind0, NOPEEJ, Tauson   |
|           19 |     1858 | 2024-04-19 | Portugal      | L   | 0.647      | -            | -                | -                | -         |    -5.86 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           18 |     1917 | 2024-04-18 | Nemiga        | L   | 0.640      | -            | -                | -                | -         |    -0.43 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           17 |     1932 | 2024-04-18 | 500           | W   | 0.639      | 0.143        | 0.001 (0.000)    | 0.191 (0.017)    | 0 (0.000) |    15.47 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           16 |     1955 | 2024-04-17 | Illuminar     | L   | 0.634      | -            | -                | -                | -         |    -7.14 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           15 |     2004 | 2024-04-16 | Slovakia      | L   | 0.625      | -            | -                | -                | -         |    -2.07 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           14 |     2020 | 2024-04-15 | PGE Turow     | W   | 0.618      | 0.371        | 0.002 (0.000)    | 0.034 (0.008)    | 0 (0.000) |    12.74 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           13 |     2092 | 2024-04-11 | ENCE Academy  | L   | 0.592      | -            | -                | -                | -         |    -4.36 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           12 |     2279 | 2024-04-05 | 9 Pandas      | W   | 0.552      | 0.384        | 0.125 (0.027)    | 0.625 (0.133)    | 0 (0.000) |    16.66 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           11 |     2797 | 2024-03-12 | Endpoint      | L   | 0.392      | -            | -                | -                | -         |    -1.53 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           10 |     2883 | 2024-03-08 | Metizport     | L   | 0.366      | -            | -                | -                | -         |    -1.00 | anarkez, innocent, Kind0, Maze, Tauson |
|            9 |     2912 | 2024-03-07 | ex-Preasy     | L   | 0.358      | -            | -                | -                | -         |    -1.47 | anarkez, innocent, Kind0, Maze, Tauson |
|            8 |     2993 | 2024-03-04 | Fraud5        | L   | 0.339      | -            | -                | -                | -         |    -3.50 | anarkez, innocent, Kind0, Maze, Tauson |
|            7 |     3029 | 2024-03-03 | Zero Tenacity | L   | 0.331      | -            | -                | -                | -         |    -0.51 | anarkez, innocent, Kind0, Maze, Tauson |
|            6 |     3049 | 2024-03-02 | Zero Tenacity | L   | 0.325      | -            | -                | -                | -         |    -0.50 | anarkez, innocent, Kind0, Maze, Tauson |
|            5 |     3091 | 2024-02-28 | Permitta      | W   | 0.306      | 0.143        | 0.038 (0.002)    | 0.837 (0.037)    | 0 (0.000) |     8.73 | anarkez, innocent, Kind0, Maze, Tauson |
|            4 |     3150 | 2024-02-25 | Entropiq      | L   | 0.286      | -            | -                | -                | -         |    -4.26 | anarkez, innocent, Kind0, Maze, Tauson |
|            3 |     3346 | 2024-02-17 | Slovakia      | L   | 0.232      | -            | -                | -                | -         |    -0.81 | anarkez, innocent, Kind0, Maze, Tauson |
|            2 |     3499 | 2024-02-10 | 500           | W   | 0.185      | 0.358        | 0.001 (0.000)    | 0.191 (0.013)    | 0 (0.000) |     4.25 | anarkez, innocent, Kind0, Maze, Tauson |
|            1 |     3571 | 2024-02-04 | Alliance      | W   | 0.146      | 0.358        | 0.020 (0.001)    | 0.377 (0.020)    | 0 (0.000) |     4.03 | anarkez, innocent, Kind0, Maze, Tauson |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
