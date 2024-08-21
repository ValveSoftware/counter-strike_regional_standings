### Roster Details<br />
Team Name: Secret<br />
Roster: anarkez, Juve, Kind0, NOPEEJ, Tauson<br />
Global Rank: [205](../../standings_global_2024_08_21.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_21.md)<br />
Regional Rank: [128]( ../../standings_europe_2024_08_21.md)<br />
<br />
Final Rank Value:  520.9<br />
<br />
Final Rank Value (520.9) = Starting Rank Value (525.1) + Head To Head Adjustments (-4.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.244[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.063<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 525.1
- 400 + ( ( 0.063 - 0.000 ) / ( 0.806 - 0.000 ) ) * 1600 = 525.1


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
|           18 |     2715 | 2024-05-14 | WOPA          | L   | 0.538      | -            | -                | -                | -         |    -5.58 | anarkez, Juve, Kind0, NOPEEJ, Tauson   |
|           17 |     2725 | 2024-05-13 | LEON          | L   | 0.534      | -            | -                | -                | -         |    -5.21 | anarkez, Juve, Kind0, NOPEEJ, Tauson   |
|           16 |     3260 | 2024-04-19 | Portugal      | L   | 0.373      | -            | -                | -                | -         |    -4.13 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           15 |     3319 | 2024-04-18 | Nemiga        | L   | 0.366      | -            | -                | -                | -         |    -0.28 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           14 |     3334 | 2024-04-18 | 500           | W   | 0.364      | 0.143        | 0.001 (0.000)    | 0.050 (0.003)    | 0 (0.000) |     8.27 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           13 |     3357 | 2024-04-17 | Illuminar     | L   | 0.360      | -            | -                | -                | -         |    -6.03 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           12 |     3406 | 2024-04-16 | Sampi         | L   | 0.350      | -            | -                | -                | -         |    -1.45 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           11 |     3422 | 2024-04-15 | PGE Turow     | W   | 0.344      | 0.371        | 0.001 (0.000)    | 0.010 (0.001)    | 0 (0.000) |     6.65 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           10 |     3494 | 2024-04-11 | ENCE Academy  | L   | 0.318      | -            | -                | -                | -         |    -3.02 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|            9 |     3681 | 2024-04-05 | 9 Pandas      | W   | 0.278      | 0.384        | 0.072 (0.008)    | 0.678 (0.073)    | 0 (0.000) |     8.15 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|            8 |     4199 | 2024-03-12 | Endpoint      | L   | 0.118      | -            | -                | -                | -         |    -0.24 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|            7 |     4285 | 2024-03-08 | Metizport     | L   | 0.092      | -            | -                | -                | -         |    -0.51 | anarkez, innocent, Kind0, Maze, Tauson |
|            6 |     4314 | 2024-03-07 | ex-Preasy     | L   | 0.084      | -            | -                | -                | -         |    -0.65 | anarkez, innocent, Kind0, Maze, Tauson |
|            5 |     4395 | 2024-03-04 | Fraud5        | L   | 0.065      | -            | -                | -                | -         |    -0.78 | anarkez, innocent, Kind0, Maze, Tauson |
|            4 |     4431 | 2024-03-03 | Zero Tenacity | L   | 0.057      | -            | -                | -                | -         |    -0.09 | anarkez, innocent, Kind0, Maze, Tauson |
|            3 |     4451 | 2024-03-02 | Zero Tenacity | L   | 0.051      | -            | -                | -                | -         |    -0.08 | anarkez, innocent, Kind0, Maze, Tauson |
|            2 |     4493 | 2024-02-28 | Permitta      | W   | 0.032      | 0.143        | 0.036 (0.000)    | 0.953 (0.004)    | 0 (0.000) |     0.91 | anarkez, innocent, Kind0, Maze, Tauson |
|            1 |     4552 | 2024-02-25 | Entropiq      | L   | 0.012      | -            | -                | -                | -         |    -0.18 | anarkez, innocent, Kind0, Maze, Tauson |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($307,820.64)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
