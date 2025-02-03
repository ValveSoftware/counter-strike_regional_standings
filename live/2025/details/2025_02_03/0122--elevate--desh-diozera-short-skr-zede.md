### Roster Details<br />
Team Name: Elevate<br />
Roster: desh, diozera, short, skr, zede<br />
Global Rank: [122](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_02_03.md)<br />
Regional Rank: [31]( ../../standings_americas_2025_02_03.md)<br />
<br />
Final Rank Value:  801.4<br />
<br />
Final Rank Value (801.4) = Starting Rank Value (737.7) + Head To Head Adjustments (63.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.317[<sup>1</sup>](#table2)
- Bounty Collected: 0.293[<sup>2</sup>](#table1)
- Opponent Network: 0.086[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.174<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 737.7
- 400 + ( ( 0.174 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 737.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |      205 | 2025-01-23 | RED Canids      | L   | 1.000      | -            | -                | -                | -         |    -9.28 | desh, diozera, short, skr, zede       |
|           17 |      211 | 2025-01-23 | RED Canids      | W   | 1.000      | 0.450        | 0.066 (0.030)    | 0.425 (0.191)    | 0 (0.000) |    22.73 | desh, diozera, short, skr, zede       |
|           16 |      300 | 2025-01-21 | Yawara          | W   | 1.000      | 0.450        | 0.005 (0.002)    | 0.399 (0.180)    | 0 (0.000) |    12.52 | desh, diozera, short, skr, zede       |
|           15 |      305 | 2025-01-21 | Yawara          | W   | 1.000      | 0.450        | 0.005 (0.002)    | 0.399 (0.180)    | 0 (0.000) |    13.64 | desh, diozera, short, skr, zede       |
|           14 |      352 | 2025-01-10 | BESTIA          | L   | 1.000      | -            | -                | -                | -         |    -4.17 | desh, fREQ, Leomonster, short, zede   |
|           13 |      364 | 2025-01-09 | 9z Academy      | W   | 1.000      | 0.384        | -                | 0.277 (0.106)    | 0 (0.000) |     7.31 | desh, fREQ, Leomonster, short, zede   |
|           12 |      472 | 2024-12-18 | LaChampionsLiga | W   | 0.887      | 0.143        | 0.008 (0.001)    | 0.131 (0.017)    | 0 (0.000) |     8.73 | Alisson, desh, Leomonster, short, skr |
|           11 |      492 | 2024-12-16 | UNO MILLE       | W   | 0.874      | 0.143        | 0.016 (0.002)    | 0.519 (0.065)    | 0 (0.000) |    15.44 | Alisson, desh, Leomonster, short, skr |
|           10 |      564 | 2024-12-13 | GameHunters     | W   | 0.853      | 0.143        | 0.002 (0.000)    | 0.464 (0.057)    | 0 (0.000) |    14.49 | Alisson, desh, Leomonster, short, skr |
|            9 |      885 | 2024-11-27 | Tropa do Taco   | L   | 0.746      | -            | -                | -                | -         |    -8.42 | Alisson, desh, Leomonster, short, skr |
|            8 |     1060 | 2024-11-17 | Tropa do Taco   | L   | 0.682      | -            | -                | -                | -         |    -8.64 | Alisson, desh, Leomonster, short, skr |
|            7 |     1347 | 2024-11-06 | GameHunters     | L   | 0.607      | -            | -                | -                | -         |    -9.36 | Alisson, desh, Leomonster, short, skr |
|            6 |     1974 | 2024-10-06 | MIBR Academy    | W   | 0.401      | 0.270        | 0.003 (0.000)    | 0.203 (0.022)    | 0 (0.000) |     4.87 | Alisson, desh, Leomonster, short, skr |
|            5 |     2289 | 2024-09-27 | Case            | L   | 0.341      | -            | -                | -                | -         |    -5.72 | Alisson, desh, Leomonster, short, skr |
|            4 |     2292 | 2024-09-27 | GameHunters     | W   | 0.341      | 0.143        | 0.002 (0.000)    | 0.464 (0.023)    | 0 (0.000) |     5.23 | Alisson, desh, Leomonster, short, skr |
|            3 |     2947 | 2024-09-07 | MIBR Academy    | W   | 0.206      | 0.270        | 0.003 (0.000)    | -                | 0 (0.000) |     2.56 | Alisson, desh, Leomonster, short, skr |
|            2 |     2968 | 2024-09-06 | Yawara          | W   | 0.201      | 0.270        | 0.005 (0.000)    | 0.399 (0.022)    | -         |     3.27 | Alisson, desh, Leomonster, short, skr |
|            1 |     3110 | 2024-09-02 | Solid           | L   | 0.173      | -            | -                | -                | -         |    -1.50 | Alisson, desh, Leomonster, short, skr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,328.48)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-17 |      0.682 | $523.00        | $356.57         |
| 2024-10-06 |      0.401 | $1,600.00      | $641.61         |
| 2024-09-07 |      0.206 | $1,600.00      | $330.30         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
