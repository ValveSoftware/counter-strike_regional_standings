### Roster Details<br />
Team Name: MOUZ<br />
Roster: Brollan, Jimpphat, siuhy, torzsi, xertioN<br />
Global Rank: [5](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_15.md)<br />
Regional Rank: [5]( ../../standings_europe_2024_10_15.md)<br />
<br />
Final Rank Value:  1812.2<br />
<br />
Final Rank Value (1812.2) = Starting Rank Value (1887.7) + Head To Head Adjustments (-75.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.693[<sup>2</sup>](#table1)
- Opponent Network: 0.370[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.766<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1887.7
- 400 + ( ( 0.766 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1887.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |       13 | 2024-10-13 | Natus Vincere      | L   | 1.000      | -            | -                | -                | -         |    -8.54 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           36 |       28 | 2024-10-12 | FURIA              | W   | 1.000      | 0.624        | 0.336 (0.210)    | 0.508 (0.317)    | 1 (1.000) |    10.33 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           35 |       46 | 2024-10-11 | Vitality           | W   | 1.000      | 0.624        | 1.000 (0.624)    | -                | 1 (1.000) |    18.81 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           34 |       92 | 2024-10-09 | FaZe               | W   | 1.000      | 0.624        | 0.520 (0.325)    | -                | 1 (1.000) |    10.59 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           33 |      128 | 2024-10-08 | Complexity         | W   | 1.000      | 0.624        | 0.300 (0.187)    | -                | 1 (1.000) |     8.31 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           32 |      154 | 2024-10-07 | FURIA              | L   | 1.000      | -            | -                | -                | -         |   -21.19 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           31 |      163 | 2024-10-07 | paiN               | W   | 1.000      | 0.624        | -                | 0.773 (0.483)    | 1 (1.000) |     3.70 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           30 |      926 | 2024-09-15 | Complexity         | L   | 0.999      | -            | -                | -                | -         |   -24.17 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           29 |      959 | 2024-09-14 | fnatic             | W   | 0.993      | 0.889        | 0.217 (0.191)    | 0.438 (0.387)    | 1 (0.993) |     1.01 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           28 |     1009 | 2024-09-12 | Complexity         | L   | 0.981      | -            | -                | -                | -         |   -24.71 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           27 |     1040 | 2024-09-11 | Imperial           | L   | 0.975      | -            | -                | -                | -         |   -29.74 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           26 |     1081 | 2024-09-10 | Rooster            | W   | 0.967      | -            | -                | -                | 1 (0.967) |     0.06 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           25 |     1346 | 2024-08-31 | Eternal Fire       | L   | 0.901      | -            | -                | -                | -         |   -16.92 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           24 |     1357 | 2024-08-30 | Spirit             | L   | 0.895      | -            | -                | -                | -         |   -13.64 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           23 |     1390 | 2024-08-29 | paiN               | W   | 0.888      | 0.769        | -                | 0.773 (0.528)    | 1 (0.888) |     3.30 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           22 |     1439 | 2024-08-28 | Eternal Fire       | W   | 0.882      | 0.769        | 0.932 (0.632)    | 0.602 (0.408)    | 1 (0.882) |    10.00 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           21 |     1894 | 2024-08-17 | Natus Vincere      | L   | 0.808      | -            | -                | -                | -         |    -9.82 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           20 |     1918 | 2024-08-16 | G2                 | W   | 0.801      | 1.000        | 1.000 (0.801)    | 0.417 (0.334)    | 1 (0.801) |    14.38 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           19 |     2006 | 2024-08-13 | Vitality           | L   | 0.781      | -            | -                | -                | -         |   -12.19 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           18 |     2061 | 2024-08-12 | Complexity         | W   | 0.774      | 1.000        | 0.300 (0.232)    | 0.356 (0.275)    | -         |     4.29 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           17 |     2090 | 2024-08-11 | Falcons            | W   | 0.766      | 1.000        | 0.255 (0.195)    | 0.359 (0.276)    | -         |     1.40 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           16 |     2815 | 2024-07-20 | Natus Vincere      | L   | 0.622      | -            | -                | -                | -         |    -7.28 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           15 |     2855 | 2024-07-19 | FURIA              | W   | 0.614      | 1.000        | 0.336 (0.206)    | 0.508 (0.312)    | -         |     4.42 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           14 |     2990 | 2024-07-17 | Sashi              | W   | 0.600      | 1.000        | -                | 0.634 (0.380)    | -         |     0.14 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           13 |     3997 | 2024-05-28 | G2                 | L   | 0.270      | -            | -                | -                | -         |    -3.76 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           12 |     4018 | 2024-05-27 | Complexity         | W   | 0.263      | -            | -                | -                | -         |     1.59 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           11 |     4029 | 2024-05-27 | 9z                 | L   | 0.261      | -            | -                | -                | -         |    -8.01 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           10 |     4246 | 2024-05-19 | Spirit             | W   | 0.207      | -            | -                | -                | -         |     3.36 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            9 |     4274 | 2024-05-18 | HEROIC             | W   | 0.201      | -            | -                | -                | -         |     0.80 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            8 |     4353 | 2024-05-16 | Virtus.pro         | W   | 0.186      | -            | -                | -                | -         |     1.17 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            7 |     4458 | 2024-05-14 | BetBoom            | W   | 0.173      | -            | -                | -                | -         |     0.09 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            6 |     4501 | 2024-05-12 | Vitality           | W   | 0.161      | -            | -                | -                | -         |     2.55 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            5 |     4521 | 2024-05-11 | Complexity         | W   | 0.155      | -            | -                | -                | -         |     0.96 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            4 |     4571 | 2024-05-09 | G2                 | W   | 0.141      | -            | -                | -                | -         |     2.55 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            3 |     4664 | 2024-05-04 | Liquid             | W   | 0.108      | -            | -                | -                | -         |     0.70 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            2 |     4733 | 2024-05-01 | GamerLegion        | W   | 0.087      | -            | -                | -                | -         |     0.00 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            1 |     4763 | 2024-04-30 | Bad News Kangaroos | W   | 0.079      | -            | -                | -                | -         |     0.00 | Brollan, Jimpphat, siuhy, torzsi, xertioN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($308,815.62)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      1.000 | $42,000.00     | $42,000.00      |
| 2024-09-22 |      1.000 | $12,000.00     | $12,000.00      |
| 2024-09-01 |      0.906 | $50,000.00     | $45,318.95      |
| 2024-08-18 |      0.815 | $80,000.00     | $65,185.80      |
| 2024-07-21 |      0.628 | $85,000.00     | $53,409.42      |
| 2024-06-02 |      0.302 | $5,000.00      | $1,509.43       |
| 2024-05-19 |      0.207 | $300,000.00    | $62,066.34      |
| 2024-05-12 |      0.161 | $170,000.00    | $27,325.68      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
