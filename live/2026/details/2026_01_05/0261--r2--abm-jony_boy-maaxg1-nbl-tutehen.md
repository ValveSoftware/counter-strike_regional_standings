### Roster Details<br />
Team Name: R2<br />
Roster: ABM, JonY BoY, maaxg1, nbl, tutehen<br />
Global Rank: [261](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_01_05.md)<br />
Regional Rank: [71]( ../../standings_americas_2026_01_05.md)<br />
<br />
Final Rank Value:  528.4<br />
<br />
Final Rank Value (528.4) = Starting Rank Value (543.9) + Head To Head Adjustments (-15.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.211[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.066[<sup>2</sup>](#table1)

The average of these factors is 0.073<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 543.9
- 400 + ( ( 0.073 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 543.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     1586 | 2025-10-25 | Fake do Biru   | L   | 0.722      | -            | -                | -                | -         |    -2.72 | ABM, JonY BoY, maaxg1, nbl, tutehen      |
|           14 |     1699 | 2025-10-23 | Galorys        | L   | 0.708      | -            | -                | -                | -         |    -2.48 | ABM, JonY BoY, maaxg1, nbl, tutehen      |
|           13 |     1993 | 2025-10-11 | 9z             | L   | 0.628      | -            | -                | -                | -         |    -0.61 | ABM, JonY BoY, maaxg1, nbl, tutehen      |
|           12 |     2010 | 2025-10-10 | ShindeN        | W   | 0.623      | 0.396        | 0.006 (0.002)    | 0.369 (0.091)    | 1 (0.623) |    17.71 | ABM, JonY BoY, maaxg1, nbl, tutehen      |
|           11 |     2022 | 2025-10-10 | ShindeN        | L   | 0.621      | -            | -                | -                | -         |    -1.80 | ABM, JonY BoY, maaxg1, nbl, tutehen      |
|           10 |     2038 | 2025-10-10 | VEXA           | L   | 0.620      | -            | -                | -                | -         |   -13.13 | ABM, JonY BoY, maaxg1, nbl, tutehen      |
|            9 |     2117 | 2025-10-08 | MAGICOS        | L   | 0.608      | -            | -                | -                | -         |   -13.34 | ABM, JonY BoY, maaxg1, nbl, tutehen      |
|            8 |     2225 | 2025-10-06 | Players        | L   | 0.595      | -            | -                | -                | -         |    -6.58 | ABM, JonY BoY, maaxg1, nbl, tutehen      |
|            7 |     3836 | 2025-08-16 | Fluxo          | L   | 0.255      | -            | -                | -                | -         |    -0.13 | ABM, guidimon, JonY BoY, maaxg1, tutehen |
|            6 |     3927 | 2025-08-14 | Yawara         | W   | 0.242      | 0.371        | 0.003 (0.000)    | 0.247 (0.022)    | 0 (0.000) |     6.28 | ABM, guidimon, JonY BoY, maaxg1, tutehen |
|            5 |     4077 | 2025-08-11 | Vasco          | W   | 0.222      | 0.371        | 0.000 (0.000)    | 0.165 (0.014)    | 0 (0.000) |     3.66 | ABM, guidimon, JonY BoY, maaxg1, tutehen |
|            4 |     4160 | 2025-08-09 | JERSA          | W   | 0.207      | 0.371        | 0.000 (0.000)    | 0.009 (0.001)    | 0 (0.000) |     2.02 | ABM, guidimon, JonY BoY, maaxg1, tutehen |
|            3 |     4191 | 2025-08-07 | Bounty Hunters | L   | 0.195      | -            | -                | -                | -         |    -4.24 | ABM, JonY BoY, maaxg1, nbl, tutehen      |
|            2 |     4363 | 2025-07-27 | BESTIA         | L   | 0.121      | -            | -                | -                | -         |    -0.05 | ABM, guidimon, JonY BoY, maaxg1, tutehen |
|            1 |     4735 | 2025-07-09 | Galorys        | L   | 0.002      | -            | -                | -                | -         |    -0.04 | ABM, JonY BoY, maaxg1, nbl, tutehen      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
