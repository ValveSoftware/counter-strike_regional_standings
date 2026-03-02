### Roster Details<br />
Team Name: Gaimin Gladiators<br />
Roster: felps, HEN1, JOTA, Luken, NEKIZ<br />
Global Rank: [62](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_02.md)<br />
Regional Rank: [14]( ../../standings_americas_2026_03_02.md)<br />
<br />
Final Rank Value:  1119.1<br />
<br />
Final Rank Value (1119.1) = Starting Rank Value (1058.6) + Head To Head Adjustments (60.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.369[<sup>1</sup>](#table2)
- Bounty Collected: 0.357[<sup>2</sup>](#table1)
- Opponent Network: 0.104[<sup>2</sup>](#table1)
- LAN Wins: 0.563[<sup>2</sup>](#table1)

The average of these factors is 0.348<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1058.6
- 400 + ( ( 0.348 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 1058.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |      991 | 2026-02-06 | 9z             | L   | 1.000      | -            | -                | -                | -         |    -7.05 | felps, HEN1, JOTA, Luken, NEKIZ |
|           17 |     1304 | 2026-01-25 | MIBR           | L   | 0.962      | -            | -                | -                | -         |    -5.88 | felps, HEN1, JOTA, Luken, NEKIZ |
|           16 |     1333 | 2026-01-24 | 9z             | W   | 0.955      | 0.384        | 0.105 (0.039)    | 0.563 (0.206)    | 1 (0.955) |    23.45 | felps, HEN1, JOTA, Luken, NEKIZ |
|           15 |     1350 | 2026-01-24 | Sharks         | W   | 0.953      | 0.384        | 0.191 (0.070)    | 0.798 (0.292)    | 1 (0.953) |    23.59 | felps, HEN1, JOTA, Luken, NEKIZ |
|           14 |     1421 | 2026-01-22 | BESTIA Academy | W   | 0.942      | 0.384        | 0.000 (0.000)    | 0.112 (0.041)    | 1 (0.942) |     2.05 | felps, HEN1, JOTA, Luken, NEKIZ |
|           13 |     1427 | 2026-01-22 | A FUNDAÇÃO     | W   | 0.941      | 0.384        | 0.000 (0.000)    | -                | 1 (0.941) |     0.63 | felps, HEN1, JOTA, Luken, NEKIZ |
|           12 |     1615 | 2026-01-16 | Imperial       | L   | 0.902      | -            | -                | -                | -         |    -7.26 | felps, HEN1, JOTA, Luken, NEKIZ |
|           11 |     1679 | 2026-01-15 | GameHunters    | W   | 0.894      | 0.435        | 0.002 (0.001)    | 0.395 (0.153)    | 1 (0.894) |     3.56 | felps, HEN1, JOTA, Luken, NEKIZ |
|           10 |     1713 | 2026-01-14 | MIBR           | L   | 0.887      | -            | -                | -                | -         |    -4.11 | felps, HEN1, JOTA, Luken, NEKIZ |
|            9 |     2535 | 2025-11-20 | 9z             | W   | 0.523      | 0.143        | 0.105 (0.008)    | 0.563 (0.042)    | 0 (0.000) |    14.18 | bsd, felps, JOTA, NEKIZ, shz    |
|            8 |     2578 | 2025-11-19 | BESTIA         | W   | 0.516      | 0.143        | 0.051 (0.004)    | 0.468 (0.034)    | 0 (0.000) |    11.27 | bsd, felps, JOTA, NEKIZ, shz    |
|            7 |     2644 | 2025-11-15 | BESTIA         | L   | 0.487      | -            | -                | -                | -         |    -4.78 | bsd, felps, JOTA, NEKIZ, shz    |
|            6 |     2667 | 2025-11-14 | Sharks         | W   | 0.481      | 0.371        | 0.191 (0.034)    | 0.798 (0.142)    | 0 (0.000) |    13.35 | bsd, felps, JOTA, NEKIZ, shz    |
|            5 |     2711 | 2025-11-12 | Galorys        | W   | 0.469      | 0.371        | 0.008 (0.001)    | 0.340 (0.059)    | -         |     3.87 | bsd, felps, JOTA, NEKIZ, shz    |
|            4 |     2854 | 2025-11-08 | Sharks         | L   | 0.440      | -            | -                | -                | -         |    -1.54 | bsd, felps, JOTA, NEKIZ, shz    |
|            3 |     2900 | 2025-11-07 | Bounty Hunters | W   | 0.434      | 0.333        | 0.016 (0.002)    | 0.425 (0.062)    | 1 (0.434) |     4.24 | bsd, felps, JOTA, NEKIZ, shz    |
|            2 |     2988 | 2025-11-06 | Charrados      | W   | 0.430      | 0.333        | -                | 0.034 (0.005)    | 1 (0.430) |     0.35 | bsd, felps, JOTA, NEKIZ, shz    |
|            1 |     2989 | 2025-11-06 | Bounty Hunters | L   | 0.429      | -            | -                | -                | -         |    -9.48 | bsd, felps, JOTA, NEKIZ, shz    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,500.83)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-25 |      0.962 | $6,000.00      | $5,769.47       |
| 2025-11-15 |      0.488 | $1,500.00      | $731.36         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
