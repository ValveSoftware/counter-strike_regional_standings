### Roster Details<br />
Team Name: LaChampionsLiga<br />
Roster: dott1, Hezz, lenci, pavv, rzk<br />
Global Rank: [225](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_02_24.md)<br />
Regional Rank: [65]( ../../standings_americas_2025_02_24.md)<br />
<br />
Final Rank Value:  592.5<br />
<br />
Final Rank Value (592.5) = Starting Rank Value (633.5) + Head To Head Adjustments (-41.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.282[<sup>1</sup>](#table2)
- Bounty Collected: 0.199[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.123<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 633.5
- 400 + ( ( 0.123 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 633.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |      368 | 2025-02-08 | Legacy            | L   | 1.000      | -            | -                | -                | -         |    -4.38 | dott1, Hezz, lenci, pavv, rzk   |
|           15 |      418 | 2025-02-07 | Tropa do KinGui   | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.044 (0.006)    | 0 (0.000) |    10.47 | dott1, Hezz, lenci, pavv, rzk   |
|           14 |      720 | 2024-12-21 | GameHunters       | L   | 0.767      | -            | -                | -                | -         |    -9.80 | dott1, Hezz, lenci, nacho, pavv |
|           13 |      741 | 2024-12-19 | Solid             | L   | 0.753      | -            | -                | -                | -         |    -5.24 | dott1, Hezz, lenci, nacho, pavv |
|           12 |      757 | 2024-12-18 | Bad News Chickens | L   | 0.746      | -            | -                | -                | -         |   -10.41 | dott1, Hezz, lenci, nacho, pavv |
|           11 |      775 | 2024-12-16 | 2070              | W   | 0.734      | 0.143        | 0.001 (0.000)    | 0.188 (0.020)    | 0 (0.000) |    12.07 | dott1, Hezz, lenci, nacho, pavv |
|           10 |      813 | 2024-12-14 | Players           | W   | 0.720      | 0.143        | 0.008 (0.001)    | 0.606 (0.062)    | 0 (0.000) |    15.97 | dott1, Hezz, lenci, nacho, pavv |
|            9 |     1226 | 2024-11-23 | Patins da Ferrari | L   | 0.581      | -            | -                | -                | -         |   -11.19 | dott1, Hezz, lenci, pavv, rzk   |
|            8 |     1267 | 2024-11-22 | BESTIA Academy    | W   | 0.572      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.17 | dott1, Hezz, lenci, pavv, rzk   |
|            7 |     1318 | 2024-11-20 | JOGA DE TERNO     | L   | 0.559      | -            | -                | -                | -         |   -11.47 | dott1, Hezz, lenci, pavv, rzk   |
|            6 |     1341 | 2024-11-18 | ShindeN           | L   | 0.547      | -            | -                | -                | -         |    -6.73 | dott1, Hezz, lenci, pavv, rzk   |
|            5 |     1695 | 2024-11-03 | 9z Academy        | L   | 0.446      | -            | -                | -                | -         |    -9.14 | dott1, Hezz, lenci, pavv, rzk   |
|            4 |     1753 | 2024-11-01 | BeBold            | W   | 0.432      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.97 | dott1, Hezz, lenci, pavv, rzk   |
|            3 |     1796 | 2024-10-30 | Yawara            | L   | 0.418      | -            | -                | -                | -         |    -5.67 | dott1, Hezz, lenci, pavv, rzk   |
|            2 |     1815 | 2024-10-29 | VELOX             | L   | 0.412      | -            | -                | -                | -         |    -8.57 | dott1, Hezz, lenci, pavv, rzk   |
|            1 |     2148 | 2024-10-11 | ShindeN           | L   | 0.295      | -            | -                | -                | -         |    -4.03 | dott1, Hezz, lenci, pavv, rzk   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,062.24)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-11 |      0.295 | $3,600.00      | $1,062.24       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
