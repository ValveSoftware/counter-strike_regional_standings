### Roster Details<br />
Team Name: MIBR<br />
Roster: brnz4n, exit, insani, Lucaozy, saffee<br />
Global Rank: [19](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [4]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  1352.0<br />
<br />
Final Rank Value (1352.0) = Starting Rank Value (1328.8) + Head To Head Adjustments (23.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.616[<sup>1</sup>](#table2)
- Bounty Collected: 0.550[<sup>2</sup>](#table1)
- Opponent Network: 0.168[<sup>2</sup>](#table1)
- LAN Wins: 0.691[<sup>2</sup>](#table1)

The average of these factors is 0.506<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1328.8
- 400 + ( ( 0.506 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 1328.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |      228 | 2025-05-16 | FURIA              | L   | 1.000      | -            | -                | -                | -         |   -11.74 | brnz4n, exit, insani, Lucaozy, saffee |
|           31 |      278 | 2025-05-14 | Virtus.pro         | W   | 1.000      | 1.000        | 0.324 (0.324)    | 0.352 (0.352)    | 1 (1.000) |    20.41 | brnz4n, exit, insani, Lucaozy, saffee |
|           30 |      313 | 2025-05-13 | paiN               | W   | 1.000      | 1.000        | 0.226 (0.226)    | 0.235 (0.235)    | 1 (1.000) |    11.14 | brnz4n, exit, insani, Lucaozy, saffee |
|           29 |      342 | 2025-05-12 | FURIA              | L   | 1.000      | -            | -                | -                | -         |   -11.49 | brnz4n, exit, insani, Lucaozy, saffee |
|           28 |      371 | 2025-05-10 | The MongolZ        | L   | 1.000      | -            | -                | -                | -         |    -2.50 | brnz4n, exit, insani, Lucaozy, saffee |
|           27 |      393 | 2025-05-10 | G2                 | W   | 1.000      | 1.000        | 0.719 (0.719)    | 0.464 (0.464)    | 1 (1.000) |    28.25 | brnz4n, exit, insani, Lucaozy, saffee |
|           26 |      782 | 2025-04-22 | Liquid             | L   | 0.935      | -            | -                | -                | -         |    -7.56 | brnz4n, exit, insani, Lucaozy, saffee |
|           25 |      793 | 2025-04-22 | SAW                | W   | 0.930      | 1.000        | 0.124 (0.115)    | 0.294 (0.273)    | 1 (0.930) |     8.67 | brnz4n, exit, insani, Lucaozy, saffee |
|           24 |      805 | 2025-04-21 | Natus Vincere      | L   | 0.923      | -            | -                | -                | -         |    -3.80 | brnz4n, exit, insani, Lucaozy, saffee |
|           23 |     2088 | 2025-03-09 | FURIA              | L   | 0.639      | -            | -                | -                | -         |    -6.46 | brnz4n, exit, insani, Lucaozy, saffee |
|           22 |     2203 | 2025-03-08 | Aurora             | L   | 0.629      | -            | -                | -                | -         |    -0.93 | brnz4n, exit, insani, Lucaozy, saffee |
|           21 |     2265 | 2025-03-07 | Vitality           | L   | 0.623      | -            | -                | -                | -         |    -0.43 | brnz4n, exit, insani, Lucaozy, saffee |
|           20 |     2372 | 2025-03-04 | TYLOO              | W   | 0.604      | 0.143        | 0.267 (0.023)    | 0.668 (0.058)    | 1 (0.604) |    11.11 | brnz4n, exit, insani, Lucaozy, saffee |
|           19 |     2389 | 2025-03-03 | FURIA              | W   | 0.598      | 0.143        | 0.344 (0.029)    | -                | 1 (0.598) |    13.50 | brnz4n, exit, insani, Lucaozy, saffee |
|           18 |     2407 | 2025-03-02 | GamerLegion        | L   | 0.592      | -            | -                | -                | -         |    -1.65 | brnz4n, exit, insani, Lucaozy, saffee |
|           17 |     2438 | 2025-03-01 | Nemiga             | W   | 0.584      | 0.143        | 0.066 (0.006)    | 0.693 (0.058)    | 1 (0.584) |     2.58 | brnz4n, exit, insani, Lucaozy, saffee |
|           16 |     2791 | 2025-02-17 | Astralis           | L   | 0.505      | -            | -                | -                | -         |    -1.93 | drop, exit, insani, Lucaozy, saffee   |
|           15 |     2818 | 2025-02-16 | 3DMAX              | L   | 0.496      | -            | -                | -                | -         |    -2.51 | drop, exit, insani, Lucaozy, saffee   |
|           14 |     2847 | 2025-02-15 | Imperial Valkyries | W   | 0.490      | 1.000        | 0.077 (0.038)    | 0.192 (0.094)    | 1 (0.490) |     1.19 | drop, exit, insani, Lucaozy, saffee   |
|           13 |     2875 | 2025-02-14 | Wildcard           | L   | 0.484      | -            | -                | -                | -         |   -13.26 | drop, exit, insani, Lucaozy, saffee   |
|           12 |     2996 | 2025-02-09 | Imperial           | L   | 0.453      | -            | -                | -                | -         |   -12.13 | drop, exit, insani, Lucaozy, saffee   |
|           11 |     3006 | 2025-02-09 | Sharks             | W   | 0.452      | 0.143        | -                | 0.862 (0.056)    | -         |     1.84 | drop, exit, insani, Lucaozy, saffee   |
|           10 |     3052 | 2025-02-08 | Legacy             | W   | 0.445      | 0.143        | 0.120 (0.008)    | 0.873 (0.056)    | -         |     1.92 | drop, exit, insani, Lucaozy, saffee   |
|            9 |     3233 | 2025-01-31 | Virtus.pro         | L   | 0.391      | -            | -                | -                | -         |    -3.44 | drop, exit, insani, Lucaozy, saffee   |
|            8 |     3240 | 2025-01-30 | 3DMAX              | L   | 0.384      | -            | -                | -                | -         |    -2.32 | drop, exit, insani, Lucaozy, saffee   |
|            7 |     3252 | 2025-01-29 | Astralis           | W   | 0.377      | 0.143        | 0.699 (0.038)    | 0.588 (0.032)    | 1 (0.377) |    10.57 | drop, exit, insani, Lucaozy, saffee   |
|            6 |     3494 | 2025-01-14 | FlyQuest           | L   | 0.277      | -            | -                | -                | -         |    -6.10 | drop, exit, insani, Lucaozy, saffee   |
|            5 |     3795 | 2024-12-07 | MOUZ               | L   | 0.028      | -            | -                | -                | -         |    -0.03 | drop, exit, insani, Lucaozy, saffee   |
|            4 |     3823 | 2024-12-07 | Liquid             | L   | 0.022      | -            | -                | -                | -         |    -0.19 | drop, exit, insani, Lucaozy, saffee   |
|            3 |     3851 | 2024-12-05 | Vitality           | L   | 0.015      | -            | -                | -                | -         |    -0.01 | drop, exit, insani, Lucaozy, saffee   |
|            2 |     3869 | 2024-12-05 | Natus Vincere      | W   | 0.010      | -            | -                | -                | 1 (0.010) |     0.25 | drop, exit, insani, Lucaozy, saffee   |
|            1 |     3880 | 2024-12-04 | 3DMAX              | W   | 0.008      | -            | -                | -                | -         |     0.21 | drop, exit, insani, Lucaozy, saffee   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($105,923.59)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.24) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-18 |      1.000 | $62,500.00     | $62,500.00      |
| 2025-04-27 |      0.963 | $25,000.00     | $24,080.28      |
| 2025-03-16 |      0.685 | $8,500.00      | $5,820.83       |
| 2025-02-23 |      0.546 | $18,750.00     | $10,231.81      |
| 2025-01-31 |      0.392 | $4,500.00      | $1,762.93       |
| 2024-12-15 |      0.076 | $20,000.00     | $1,527.74       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
