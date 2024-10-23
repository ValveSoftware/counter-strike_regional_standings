### Roster Details<br />
Team Name: MOUZ<br />
Roster: Brollan, Jimpphat, siuhy, torzsi, xertioN<br />
Global Rank: [6](../../standings_global_2024_10_23.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_23.md)<br />
Regional Rank: [6]( ../../standings_europe_2024_10_23.md)<br />
<br />
Final Rank Value:  1825.7<br />
<br />
Final Rank Value (1825.7) = Starting Rank Value (1891.2) + Head To Head Adjustments (-65.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.697[<sup>2</sup>](#table1)
- Opponent Network: 0.346[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.761<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1891.2
- 400 + ( ( 0.761 - 0.000 ) / ( 0.816 - 0.000 ) ) * 1600 = 1891.2


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
|           37 |      191 | 2024-10-13 | Natus Vincere      | L   | 1.000      | -            | -                | -                | -         |    -8.62 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           36 |      206 | 2024-10-12 | FURIA              | W   | 1.000      | 0.624        | 0.358 (0.223)    | 0.484 (0.302)    | 1 (1.000) |    10.73 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           35 |      224 | 2024-10-11 | Vitality           | W   | 1.000      | 0.624        | 1.000 (0.624)    | -                | 1 (1.000) |    18.57 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           34 |      270 | 2024-10-09 | FaZe               | W   | 1.000      | 0.624        | 0.558 (0.348)    | -                | 1 (1.000) |    11.02 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           33 |      306 | 2024-10-08 | Complexity         | W   | 1.000      | -            | -                | -                | 1 (1.000) |     8.19 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           32 |      332 | 2024-10-07 | FURIA              | L   | 1.000      | -            | -                | -                | -         |   -20.74 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           31 |      341 | 2024-10-07 | paiN               | W   | 1.000      | 0.624        | 0.345 (0.215)    | 0.759 (0.473)    | 1 (1.000) |     4.11 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           30 |     1104 | 2024-09-15 | Complexity         | L   | 0.945      | -            | -                | -                | -         |   -22.94 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           29 |     1137 | 2024-09-14 | fnatic             | W   | 0.938      | 0.889        | 0.314 (0.262)    | 0.508 (0.423)    | 1 (0.938) |     1.59 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           28 |     1187 | 2024-09-12 | Complexity         | L   | 0.926      | -            | -                | -                | -         |   -23.35 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           27 |     1218 | 2024-09-11 | Imperial           | L   | 0.920      | -            | -                | -                | -         |   -28.04 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           26 |     1259 | 2024-09-10 | Rooster            | W   | 0.912      | -            | -                | -                | 1 (0.912) |     0.06 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           25 |     1524 | 2024-08-31 | Eternal Fire       | L   | 0.846      | -            | -                | -                | -         |   -14.66 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           24 |     1535 | 2024-08-30 | Spirit             | L   | 0.841      | -            | -                | -                | -         |   -12.93 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           23 |     1568 | 2024-08-29 | paiN               | W   | 0.834      | 0.769        | 0.345 (0.221)    | 0.759 (0.486)    | 1 (0.834) |     3.63 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           22 |     1617 | 2024-08-28 | Eternal Fire       | W   | 0.827      | 0.769        | 0.973 (0.619)    | 0.574 (0.365)    | 1 (0.827) |    10.72 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           21 |     2072 | 2024-08-17 | Natus Vincere      | L   | 0.753      | -            | -                | -                | -         |    -9.04 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           20 |     2096 | 2024-08-16 | G2                 | W   | 0.747      | 1.000        | 1.000 (0.747)    | 0.403 (0.301)    | 1 (0.747) |    13.67 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           19 |     2184 | 2024-08-13 | Vitality           | L   | 0.726      | -            | -                | -                | -         |   -11.38 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           18 |     2239 | 2024-08-12 | Complexity         | W   | 0.719      | 1.000        | 0.311 (0.224)    | 0.336 (0.242)    | -         |     4.09 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           17 |     2268 | 2024-08-11 | Falcons            | W   | 0.712      | 1.000        | -                | 0.340 (0.242)    | -         |     1.27 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           16 |     2993 | 2024-07-20 | Natus Vincere      | L   | 0.567      | -            | -                | -                | -         |    -6.56 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           15 |     3033 | 2024-07-19 | FURIA              | W   | 0.560      | 1.000        | 0.358 (0.200)    | 0.484 (0.271)    | -         |     4.36 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           14 |     3168 | 2024-07-17 | Sashi              | W   | 0.545      | 1.000        | -                | 0.653 (0.356)    | -         |     0.14 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           13 |     4175 | 2024-05-28 | G2                 | L   | 0.215      | -            | -                | -                | -         |    -2.91 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           12 |     4196 | 2024-05-27 | Complexity         | W   | 0.209      | -            | -                | -                | -         |     1.20 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           11 |     4207 | 2024-05-27 | 9z                 | L   | 0.207      | -            | -                | -                | -         |    -6.28 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           10 |     4424 | 2024-05-19 | Spirit             | W   | 0.152      | -            | -                | -                | -         |     2.44 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            9 |     4452 | 2024-05-18 | HEROIC             | W   | 0.146      | -            | -                | -                | -         |     1.17 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            8 |     4531 | 2024-05-16 | Virtus.pro         | W   | 0.131      | -            | -                | -                | -         |     0.82 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            7 |     4636 | 2024-05-14 | BetBoom            | W   | 0.119      | -            | -                | -                | -         |     0.06 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            6 |     4679 | 2024-05-12 | Vitality           | W   | 0.106      | -            | -                | -                | -         |     1.67 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            5 |     4699 | 2024-05-11 | Complexity         | W   | 0.100      | -            | -                | -                | -         |     0.59 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            4 |     4749 | 2024-05-09 | G2                 | W   | 0.087      | -            | -                | -                | -         |     1.59 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            3 |     4842 | 2024-05-04 | Liquid             | W   | 0.053      | -            | -                | -                | -         |     0.35 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            2 |     4911 | 2024-05-01 | GamerLegion        | W   | 0.032      | -            | -                | -                | -         |     0.00 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            1 |     4941 | 2024-04-30 | Bad News Kangaroos | W   | 0.025      | -            | -                | -                | -         |     0.00 | Brollan, Jimpphat, siuhy, torzsi, xertioN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($270,964.47)
- Divide that value by the 5th highest value among all rosters ($270,964.47)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      1.000 | $42,000.00     | $42,000.00      |
| 2024-09-22 |      0.993 | $12,000.00     | $11,921.83      |
| 2024-09-01 |      0.852 | $50,000.00     | $42,581.77      |
| 2024-08-18 |      0.760 | $80,000.00     | $60,806.32      |
| 2024-07-21 |      0.574 | $85,000.00     | $48,756.23      |
| 2024-06-02 |      0.247 | $5,000.00      | $1,235.72       |
| 2024-05-19 |      0.152 | $300,000.00    | $45,643.31      |
| 2024-05-12 |      0.106 | $170,000.00    | $18,019.29      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
