### Roster Details<br />
Team Name: R2<br />
Roster: ABM, JonY BoY, maaxg1, nbl, tutehen<br />
Global Rank: [244](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_12_01.md)<br />
Regional Rank: [67]( ../../standings_americas_2025_12_01.md)<br />
<br />
Final Rank Value:  542.5<br />
<br />
Final Rank Value (542.5) = Starting Rank Value (560.1) + Head To Head Adjustments (-17.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.221[<sup>2</sup>](#table1)
- Opponent Network: 0.029[<sup>2</sup>](#table1)
- LAN Wins: 0.086[<sup>2</sup>](#table1)

The average of these factors is 0.084<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 560.1
- 400 + ( ( 0.084 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 560.1


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
|           15 |     1026 | 2025-10-25 | Fake do Biru   | L   | 0.955      | -            | -                | -                | -         |    -2.85 | ABM, JonY BoY, maaxg1, nbl, tutehen      |
|           14 |     1139 | 2025-10-23 | Galorys        | L   | 0.941      | -            | -                | -                | -         |    -3.11 | ABM, JonY BoY, maaxg1, nbl, tutehen      |
|           13 |     1433 | 2025-10-11 | 9z             | L   | 0.861      | -            | -                | -                | -         |    -0.66 | ABM, JonY BoY, maaxg1, nbl, tutehen      |
|           12 |     1450 | 2025-10-10 | ShindeN        | W   | 0.856      | 0.396        | 0.007 (0.002)    | 0.551 (0.187)    | 1 (0.856) |    24.91 | ABM, JonY BoY, maaxg1, nbl, tutehen      |
|           11 |     1462 | 2025-10-10 | ShindeN        | L   | 0.854      | -            | -                | -                | -         |    -1.78 | ABM, JonY BoY, maaxg1, nbl, tutehen      |
|           10 |     1478 | 2025-10-10 | VEXA           | L   | 0.853      | -            | -                | -                | -         |   -18.24 | ABM, JonY BoY, maaxg1, nbl, tutehen      |
|            9 |     1557 | 2025-10-08 | MAGICOS        | L   | 0.841      | -            | -                | -                | -         |   -16.73 | ABM, JonY BoY, maaxg1, nbl, tutehen      |
|            8 |     1665 | 2025-10-06 | Players        | L   | 0.828      | -            | -                | -                | -         |    -9.21 | ABM, JonY BoY, maaxg1, nbl, tutehen      |
|            7 |     3276 | 2025-08-16 | Fluxo          | L   | 0.488      | -            | -                | -                | -         |    -0.26 | ABM, guidimon, JonY BoY, maaxg1, tutehen |
|            6 |     3367 | 2025-08-14 | Yawara         | W   | 0.475      | 0.371        | 0.004 (0.001)    | 0.345 (0.061)    | 0 (0.000) |    12.47 | ABM, guidimon, JonY BoY, maaxg1, tutehen |
|            5 |     3517 | 2025-08-11 | Vasco          | W   | 0.455      | 0.371        | 0.000 (0.000)    | 0.231 (0.039)    | 0 (0.000) |     7.75 | ABM, guidimon, JonY BoY, maaxg1, tutehen |
|            4 |     3600 | 2025-08-09 | JERSA          | W   | 0.440      | 0.371        | 0.000 (0.000)    | 0.020 (0.003)    | 0 (0.000) |     5.37 | ABM, guidimon, JonY BoY, maaxg1, tutehen |
|            3 |     3631 | 2025-08-07 | Bounty Hunters | L   | 0.428      | -            | -                | -                | -         |    -9.41 | ABM, JonY BoY, maaxg1, nbl, tutehen      |
|            2 |     3803 | 2025-07-27 | BESTIA         | L   | 0.354      | -            | -                | -                | -         |    -0.54 | ABM, guidimon, JonY BoY, maaxg1, tutehen |
|            1 |     4175 | 2025-07-09 | Galorys        | L   | 0.235      | -            | -                | -                | -         |    -5.24 | ABM, JonY BoY, maaxg1, nbl, tutehen      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
