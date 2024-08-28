### Roster Details<br />
Team Name: Secret<br />
Roster: anarkez, Juve, Kind0, NOPEEJ, Tauson<br />
Global Rank: [210](../../standings_global_2024_08_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_28.md)<br />
Regional Rank: [130]( ../../standings_europe_2024_08_28.md)<br />
<br />
Final Rank Value:  516.3<br />
<br />
Final Rank Value (516.3) = Starting Rank Value (521.4) + Head To Head Adjustments (-5.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.238[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.061<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 521.4
- 400 + ( ( 0.061 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 521.4


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
|           16 |     3010 | 2024-05-14 | WOPA          | L   | 0.492      | -            | -                | -                | -         |    -5.06 | anarkez, Juve, Kind0, NOPEEJ, Tauson   |
|           15 |     3020 | 2024-05-13 | LEON          | L   | 0.488      | -            | -                | -                | -         |    -4.70 | anarkez, Juve, Kind0, NOPEEJ, Tauson   |
|           14 |     3555 | 2024-04-19 | Portugal      | L   | 0.328      | -            | -                | -                | -         |    -3.81 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           13 |     3614 | 2024-04-18 | Nemiga        | L   | 0.320      | -            | -                | -                | -         |    -0.25 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           12 |     3629 | 2024-04-18 | 500           | W   | 0.319      | 0.143        | 0.001 (0.000)    | 0.037 (0.002)    | 0 (0.000) |     7.14 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           11 |     3652 | 2024-04-17 | Illuminar     | L   | 0.314      | -            | -                | -                | -         |    -5.23 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           10 |     3701 | 2024-04-16 | Sampi         | L   | 0.305      | -            | -                | -                | -         |    -1.10 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|            9 |     3717 | 2024-04-15 | PGE Turow     | W   | 0.299      | 0.371        | 0.000 (0.000)    | 0.008 (0.001)    | 0 (0.000) |     4.57 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|            8 |     3789 | 2024-04-11 | ENCE Academy  | L   | 0.272      | -            | -                | -                | -         |    -2.58 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|            7 |     3976 | 2024-04-05 | 9 Pandas      | W   | 0.233      | 0.384        | 0.070 (0.006)    | 0.715 (0.064)    | 0 (0.000) |     6.95 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|            6 |     4494 | 2024-03-12 | Endpoint      | L   | 0.072      | -            | -                | -                | -         |    -0.13 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|            5 |     4580 | 2024-03-08 | Metizport     | L   | 0.046      | -            | -                | -                | -         |    -0.27 | anarkez, innocent, Kind0, Maze, Tauson |
|            4 |     4609 | 2024-03-07 | ex-Preasy     | L   | 0.038      | -            | -                | -                | -         |    -0.32 | anarkez, innocent, Kind0, Maze, Tauson |
|            3 |     4690 | 2024-03-04 | Fraud5        | L   | 0.020      | -            | -                | -                | -         |    -0.29 | anarkez, innocent, Kind0, Maze, Tauson |
|            2 |     4726 | 2024-03-03 | Zero Tenacity | L   | 0.012      | -            | -                | -                | -         |    -0.02 | anarkez, innocent, Kind0, Maze, Tauson |
|            1 |     4746 | 2024-03-02 | Zero Tenacity | L   | 0.005      | -            | -                | -                | -         |    -0.01 | anarkez, innocent, Kind0, Maze, Tauson |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($290,989.03)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
