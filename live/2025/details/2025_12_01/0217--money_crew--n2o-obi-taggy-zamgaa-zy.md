### Roster Details<br />
Team Name: Money Crew<br />
Roster: N2o, obi, taggy, Zamgaa, zy<br />
Global Rank: [217](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_12_01.md)<br />
Regional Rank: [29]( ../../standings_asia_2025_12_01.md)<br />
<br />
Final Rank Value:  611.6<br />
<br />
Final Rank Value (611.6) = Starting Rank Value (624.5) + Head To Head Adjustments (-12.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.249[<sup>1</sup>](#table2)
- Bounty Collected: 0.209[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.118<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 624.5
- 400 + ( ( 0.118 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 624.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      960 | 2025-10-26 | Take Flyte       | L   | 0.962      | -            | -                | -                | -         |   -15.46 | N2o, obi, taggy, Zamgaa, zy         |
|           14 |     1078 | 2025-10-24 | BOSS             | L   | 0.948      | -            | -                | -                | -         |    -8.32 | N2o, obi, taggy, Zamgaa, zy         |
|           13 |     1196 | 2025-10-21 | Phoenix          | W   | 0.929      | 0.333        | 0.003 (0.001)    | 0.282 (0.087)    | 0 (0.000) |    18.90 | Ethex, N2o, obi, taggy, Zamgaa      |
|           12 |     1237 | 2025-10-18 | anything else    | W   | 0.909      | 0.333        | 0.000 (0.000)    | 0.077 (0.023)    | 0 (0.000) |     9.55 | Ethex, N2o, obi, taggy, zy          |
|           11 |     1396 | 2025-10-13 | regain           | L   | 0.876      | -            | -                | -                | -         |    -8.20 | dantemoren, N2o, obi, taggy, zy     |
|           10 |     1814 | 2025-10-03 | Sakura           | L   | 0.809      | -            | -                | -                | -         |    -6.12 | brett, N2o, obi, Zamgaa, zy         |
|            9 |     1891 | 2025-10-01 | regain           | L   | 0.795      | -            | -                | -                | -         |    -9.22 | brett, N2o, obi, Zamgaa, zy         |
|            8 |     3244 | 2025-08-17 | LAG              | L   | 0.495      | -            | -                | -                | -         |    -5.78 | BeaKie, den1ed, N2o, obi, Zamgaa    |
|            7 |     3314 | 2025-08-15 | Getting Info     | W   | 0.482      | 0.278        | 0.005 (0.001)    | 0.091 (0.012)    | 0 (0.000) |     9.47 | BeaKie, den1ed, N2o, obi, Zamgaa    |
|            6 |     4284 | 2025-06-28 | BOSS             | L   | 0.163      | -            | -                | -                | -         |    -1.71 | laxiee, N2o, obi, piupiupiu, Zamgaa |
|            5 |     4305 | 2025-06-24 | OverKnight       | W   | 0.136      | 0.333        | 0.000 (0.000)    | 0.356 (0.016)    | 0 (0.000) |     2.57 | laxiee, N2o, obi, piupiupiu, zy     |
|            4 |     4428 | 2025-06-15 | Party Astronauts | W   | 0.076      | 0.333        | 0.000 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     0.74 | laxiee, N2o, obi, Zamgaa, zy        |
|            3 |     4494 | 2025-06-13 | Aether           | W   | 0.063      | 0.333        | 0.000 (0.000)    | 0.041 (0.001)    | 0 (0.000) |     0.71 | dantemoren, laxiee, N2o, obi, zy    |
|            2 |     4556 | 2025-06-11 | BOSS             | L   | 0.049      | -            | -                | -                | -         |    -0.52 | laxiee, N2o, obi, piupiupiu, Zamgaa |
|            1 |     4572 | 2025-06-10 | anything else    | W   | 0.041      | 0.333        | 0.000 (0.000)    | 0.077 (0.001)    | 0 (0.000) |     0.43 | laxiee, N2o, obi, Zamgaa, zy        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($546.85)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-17 |      0.495 | $750.00        | $371.08         |
| 2025-06-30 |      0.176 | $1,000.00      | $175.77         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
