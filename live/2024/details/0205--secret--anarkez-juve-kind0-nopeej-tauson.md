### Roster Details<br />
Team Name: Secret<br />
Roster: anarkez, Juve, Kind0, NOPEEJ, Tauson<br />
Global Rank: [205](../standings_global_2024_08_14.md)<br />
<br />
Region: [Europe]( ../standings_europe_2024_08_14.md)<br />
Regional Rank: [128]( ../standings_europe_2024_08_14.md)<br />
<br />
Final Rank Value:  523.2<br />
<br />
Final Rank Value (523.2) = Starting Rank Value (528.4) + Head To Head Adjustments (-5.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.065<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 528.4
- 400 + ( ( 0.065 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 528.4


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
|           19 |     2488 | 2024-05-14 | WOPA          | L   | 0.585      | -            | -                | -                | -         |    -7.14 | anarkez, Juve, Kind0, NOPEEJ, Tauson   |
|           18 |     2498 | 2024-05-13 | LEON          | L   | 0.580      | -            | -                | -                | -         |    -5.73 | anarkez, Juve, Kind0, NOPEEJ, Tauson   |
|           17 |     3033 | 2024-04-19 | Portugal      | L   | 0.420      | -            | -                | -                | -         |    -4.50 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           16 |     3092 | 2024-04-18 | Nemiga        | L   | 0.412      | -            | -                | -                | -         |    -0.34 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           15 |     3107 | 2024-04-18 | 500           | W   | 0.411      | 0.143        | 0.001 (0.000)    | 0.069 (0.004)    | 0 (0.000) |     9.44 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           14 |     3130 | 2024-04-17 | Illuminar     | L   | 0.406      | -            | -                | -                | -         |    -6.85 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           13 |     3179 | 2024-04-16 | Sampi         | L   | 0.397      | -            | -                | -                | -         |    -1.65 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           12 |     3195 | 2024-04-15 | PGE Turow     | W   | 0.391      | 0.371        | 0.001 (0.000)    | 0.014 (0.002)    | 0 (0.000) |     7.79 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           11 |     3267 | 2024-04-11 | ENCE Academy  | L   | 0.365      | -            | -                | -                | -         |    -3.42 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           10 |     3454 | 2024-04-05 | 9 Pandas      | W   | 0.325      | 0.384        | 0.075 (0.009)    | 0.717 (0.090)    | 0 (0.000) |     9.54 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|            9 |     3972 | 2024-03-12 | Endpoint      | L   | 0.165      | -            | -                | -                | -         |    -0.40 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|            8 |     4058 | 2024-03-08 | Metizport     | L   | 0.138      | -            | -                | -                | -         |    -0.73 | anarkez, innocent, Kind0, Maze, Tauson |
|            7 |     4087 | 2024-03-07 | ex-Preasy     | L   | 0.131      | -            | -                | -                | -         |    -0.94 | anarkez, innocent, Kind0, Maze, Tauson |
|            6 |     4168 | 2024-03-04 | Fraud5        | L   | 0.112      | -            | -                | -                | -         |    -1.30 | anarkez, innocent, Kind0, Maze, Tauson |
|            5 |     4204 | 2024-03-03 | Zero Tenacity | L   | 0.104      | -            | -                | -                | -         |    -0.16 | anarkez, innocent, Kind0, Maze, Tauson |
|            4 |     4224 | 2024-03-02 | Zero Tenacity | L   | 0.097      | -            | -                | -                | -         |    -0.15 | anarkez, innocent, Kind0, Maze, Tauson |
|            3 |     4266 | 2024-02-28 | Permitta      | W   | 0.078      | 0.143        | 0.036 (0.000)    | 0.957 (0.011)    | 0 (0.000) |     2.26 | anarkez, innocent, Kind0, Maze, Tauson |
|            2 |     4325 | 2024-02-25 | Entropiq      | L   | 0.058      | -            | -                | -                | -         |    -0.91 | anarkez, innocent, Kind0, Maze, Tauson |
|            1 |     4521 | 2024-02-17 | Sampi         | L   | 0.005      | -            | -                | -                | -         |    -0.02 | anarkez, innocent, Kind0, Maze, Tauson |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
