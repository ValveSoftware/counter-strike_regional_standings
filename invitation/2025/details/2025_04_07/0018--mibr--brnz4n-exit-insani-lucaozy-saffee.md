### Roster Details<br />
Team Name: MIBR<br />
Roster: brnz4n, exit, insani, Lucaozy, saffee<br />
Global Rank: [18](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [4]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  1205.6<br />
<br />
Final Rank Value (1205.6) = Starting Rank Value (1215.8) + Head To Head Adjustments (-10.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.542[<sup>1</sup>](#table2)
- Bounty Collected: 0.458[<sup>2</sup>](#table1)
- Opponent Network: 0.098[<sup>2</sup>](#table1)
- LAN Wins: 0.674[<sup>2</sup>](#table1)

The average of these factors is 0.443<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1215.8
- 400 + ( ( 0.443 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 1215.8


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
|           39 |      594 | 2025-03-09 | FURIA              | L   | 1.000      | -            | -                | -                | -         |   -13.39 | brnz4n, exit, insani, Lucaozy, saffee |
|           38 |      703 | 2025-03-08 | Eternal Fire       | L   | 0.999      | -            | -                | -                | -         |    -1.30 | brnz4n, exit, insani, Lucaozy, saffee |
|           37 |      762 | 2025-03-07 | Vitality           | L   | 0.992      | -            | -                | -                | -         |    -0.39 | brnz4n, exit, insani, Lucaozy, saffee |
|           36 |      855 | 2025-03-04 | TYLOO              | W   | 0.973      | 0.143        | 0.040 (0.006)    | 0.317 (0.044)    | 1 (0.973) |     5.88 | brnz4n, exit, insani, Lucaozy, saffee |
|           35 |      870 | 2025-03-03 | FURIA              | W   | 0.967      | 0.143        | 0.157 (0.022)    | 0.444 (0.061)    | 1 (0.967) |    17.63 | brnz4n, exit, insani, Lucaozy, saffee |
|           34 |      888 | 2025-03-02 | GamerLegion        | L   | 0.961      | -            | -                | -                | -         |    -4.76 | brnz4n, exit, insani, Lucaozy, saffee |
|           33 |      919 | 2025-03-01 | Nemiga             | W   | 0.954      | 0.143        | 0.121 (0.017)    | 0.902 (0.123)    | 1 (0.954) |     5.83 | brnz4n, exit, insani, Lucaozy, saffee |
|           32 |     1142 | 2025-02-17 | Astralis           | L   | 0.874      | -            | -                | -                | -         |    -4.25 | drop, exit, insani, Lucaozy, saffee   |
|           31 |     1169 | 2025-02-16 | 3DMAX              | L   | 0.865      | -            | -                | -                | -         |    -2.74 | drop, exit, insani, Lucaozy, saffee   |
|           30 |     1198 | 2025-02-15 | Imperial Valkyries | W   | 0.860      | 1.000        | 0.110 (0.095)    | 0.088 (0.076)    | 1 (0.860) |     3.27 | drop, exit, insani, Lucaozy, saffee   |
|           29 |     1226 | 2025-02-14 | Wildcard           | L   | 0.853      | -            | -                | -                | -         |   -17.23 | drop, exit, insani, Lucaozy, saffee   |
|           28 |     1345 | 2025-02-09 | Imperial           | L   | 0.822      | -            | -                | -                | -         |   -21.48 | drop, exit, insani, Lucaozy, saffee   |
|           27 |     1355 | 2025-02-09 | Sharks             | W   | 0.821      | 0.143        | 0.042 (0.005)    | 0.870 (0.102)    | -         |     3.33 | drop, exit, insani, Lucaozy, saffee   |
|           26 |     1401 | 2025-02-08 | Legacy             | W   | 0.814      | 0.143        | -                | 0.669 (0.078)    | -         |     2.27 | drop, exit, insani, Lucaozy, saffee   |
|           25 |     1580 | 2025-01-31 | Virtus.pro         | L   | 0.760      | -            | -                | -                | -         |    -4.73 | drop, exit, insani, Lucaozy, saffee   |
|           24 |     1587 | 2025-01-30 | 3DMAX              | L   | 0.754      | -            | -                | -                | -         |    -2.98 | drop, exit, insani, Lucaozy, saffee   |
|           23 |     1597 | 2025-01-29 | Astralis           | W   | 0.746      | 0.143        | 0.638 (0.068)    | 0.710 (0.076)    | 1 (0.746) |    20.11 | drop, exit, insani, Lucaozy, saffee   |
|           22 |     1651 | 2025-01-14 | FlyQuest           | L   | 0.646      | -            | -                | -                | -         |   -16.66 | drop, exit, insani, Lucaozy, saffee   |
|           21 |     1952 | 2024-12-07 | MOUZ               | L   | 0.397      | -            | -                | -                | -         |    -0.19 | drop, exit, insani, Lucaozy, saffee   |
|           20 |     1980 | 2024-12-07 | Liquid             | L   | 0.391      | -            | -                | -                | -         |    -1.85 | drop, exit, insani, Lucaozy, saffee   |
|           19 |     2008 | 2024-12-05 | Vitality           | L   | 0.384      | -            | -                | -                | -         |    -0.17 | drop, exit, insani, Lucaozy, saffee   |
|           18 |     2026 | 2024-12-05 | Natus Vincere      | W   | 0.379      | 1.000        | 0.718 (0.272)    | 0.470 (0.178)    | 1 (0.379) |    11.28 | drop, exit, insani, Lucaozy, saffee   |
|           17 |     2037 | 2024-12-04 | 3DMAX              | W   | 0.377      | 1.000        | 0.391 (0.148)    | 0.559 (0.211)    | 1 (0.377) |    10.71 | drop, exit, insani, Lucaozy, saffee   |
|           16 |     2080 | 2024-12-02 | FlyQuest           | W   | 0.364      | 0.143        | 0.086 (0.004)    | -                | 1 (0.364) |     2.20 | drop, exit, insani, Lucaozy, saffee   |
|           15 |     2102 | 2024-12-01 | Rare Atom          | W   | 0.357      | 0.143        | -                | 0.707 (0.036)    | 1 (0.357) |     3.04 | drop, exit, insani, Lucaozy, saffee   |
|           14 |     2123 | 2024-11-30 | Passion UA         | L   | 0.350      | -            | -                | -                | -         |    -9.10 | drop, exit, insani, Lucaozy, saffee   |
|           13 |     2148 | 2024-11-30 | The MongolZ        | L   | 0.345      | -            | -                | -                | -         |    -0.22 | drop, exit, insani, Lucaozy, saffee   |
|           12 |     2158 | 2024-11-29 | Virtus.pro         | W   | 0.343      | 0.143        | 0.356 (0.017)    | -                | 1 (0.343) |     9.12 | drop, exit, insani, Lucaozy, saffee   |
|           11 |     2520 | 2024-11-13 | Complexity         | W   | 0.232      | -            | -                | -                | -         |     1.96 | drop, exit, insani, Lucaozy, saffee   |
|           10 |     2540 | 2024-11-12 | Imperial           | W   | 0.226      | -            | -                | -                | -         |     0.93 | drop, exit, insani, Lucaozy, saffee   |
|            9 |     2557 | 2024-11-12 | KRÜ                | W   | 0.224      | -            | -                | -                | -         |     0.28 | drop, exit, insani, Lucaozy, saffee   |
|            8 |     2917 | 2024-10-25 | Monte              | L   | 0.108      | -            | -                | -                | -         |    -3.17 | drop, exit, insani, Lucaozy, saffee   |
|            7 |     2924 | 2024-10-25 | Legacy             | L   | 0.106      | -            | -                | -                | -         |    -3.08 | drop, exit, insani, Lucaozy, saffee   |
|            6 |     2977 | 2024-10-20 | paiN               | L   | 0.075      | -            | -                | -                | -         |    -0.38 | drop, exit, insani, Lucaozy, saffee   |
|            5 |     3005 | 2024-10-19 | BESTIA             | W   | 0.069      | -            | -                | -                | -         |     0.19 | drop, exit, insani, Lucaozy, saffee   |
|            4 |     3059 | 2024-10-17 | paiN               | L   | 0.056      | -            | -                | -                | -         |    -0.28 | drop, exit, insani, Lucaozy, saffee   |
|            3 |     3088 | 2024-10-16 | RED Canids         | W   | 0.049      | -            | -                | -                | -         |     0.10 | drop, exit, insani, Lucaozy, saffee   |
|            2 |     3209 | 2024-10-09 | RED Canids         | W   | 0.002      | -            | -                | -                | -         |     0.00 | drop, exit, insani, Lucaozy, saffee   |
|            1 |     3213 | 2024-10-09 | RED Canids         | W   | 0.002      | -            | -                | -                | -         |     0.00 | drop, exit, insani, Lucaozy, saffee   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($39,094.27)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-16 |      1.000 | $8,500.00      | $8,500.00       |
| 2025-02-23 |      0.915 | $18,750.00     | $17,153.78      |
| 2025-01-31 |      0.761 | $4,500.00      | $3,424.21       |
| 2024-12-15 |      0.446 | $20,000.00     | $8,911.17       |
| 2024-10-27 |      0.121 | $2,000.00      | $241.49         |
| 2024-10-20 |      0.075 | $11,500.00     | $863.61         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
