### Roster Details<br />
Team Name: MOUZ<br />
Roster: Brollan, Jimpphat, siuhy, torzsi, xertioN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [2](../standings_global.md)<br />
Regional Rank: [2]( ../standings_europe.md)<br />
Final Rank Value:  2007.7<br />
<br />
Final Rank Value (2007.7) = Starting Rank Value (2000.0) + Head To Head Adjustments (7.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.748[<sup>2</sup>](#table1)
- Opponent Network: 0.405[<sup>2</sup>](#table1)
- LAN Wins: 0.998[<sup>2</sup>](#table1)

The average of these factors is 0.787<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 2000.0
- 400 + ( ( 0.787 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 2000.0


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
|           34 |      715 | 2024-05-28 | G2                 | L   | 1.000      | -            | -                | -                | -         |   -21.84 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           33 |      736 | 2024-05-27 | Complexity         | W   | 1.000      | 0.624        | 0.426 (0.266)    | -                | 1 (1.000) |     6.43 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           32 |      747 | 2024-05-27 | 9z                 | L   | 1.000      | -            | -                | -                | -         |   -30.25 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           31 |      964 | 2024-05-19 | Spirit             | W   | 1.000      | 0.769        | 1.000 (0.769)    | 0.498 (0.383)    | 1 (1.000) |    13.79 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           30 |      992 | 2024-05-18 | HEROIC             | W   | 0.995      | 0.769        | 0.354 (0.271)    | 0.545 (0.417)    | 1 (0.995) |     4.61 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           29 |     1071 | 2024-05-16 | Virtus.pro         | W   | 0.981      | 0.769        | -                | 0.427 (0.322)    | 1 (0.981) |     5.35 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           28 |     1176 | 2024-05-14 | BetBoom            | W   | 0.968      | 0.769        | 0.414 (0.308)    | 0.798 (0.594)    | 1 (0.968) |     1.31 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           27 |     1219 | 2024-05-12 | Vitality           | W   | 0.956      | 0.889        | 0.738 (0.627)    | 0.414 (0.352)    | 1 (0.956) |    13.54 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           26 |     1239 | 2024-05-11 | Complexity         | W   | 0.950      | 0.889        | 0.426 (0.360)    | 0.442 (0.373)    | 1 (0.950) |     7.37 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           25 |     1289 | 2024-05-09 | G2                 | W   | 0.936      | 0.889        | 0.756 (0.629)    | 0.508 (0.423)    | 1 (0.936) |     9.63 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           24 |     1382 | 2024-05-04 | Liquid             | W   | 0.903      | 0.889        | 0.498 (0.399)    | 0.629 (0.505)    | 1 (0.903) |     3.40 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           23 |     1451 | 2024-05-01 | GamerLegion        | W   | 0.882      | -            | -                | -                | 1 (0.882) |     0.46 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           22 |     1481 | 2024-04-30 | Bad News Kangaroos | W   | 0.874      | -            | -                | -                | -         |     0.06 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           21 |     1900 | 2024-04-14 | FaZe               | L   | 0.767      | -            | -                | -                | -         |   -13.34 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           20 |     1917 | 2024-04-13 | G2                 | W   | 0.760      | 0.624        | 0.756 (0.358)    | -                | -         |     9.15 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           19 |     2010 | 2024-04-10 | Liquid             | W   | 0.740      | -            | -                | -                | -         |     2.96 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           18 |     2080 | 2024-04-08 | FURIA              | W   | 0.728      | -            | -                | -                | -         |     2.35 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           17 |     2098 | 2024-04-08 | TYLOO              | W   | 0.726      | -            | -                | -                | -         |     0.03 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           16 |     2300 | 2024-03-29 | G2                 | L   | 0.663      | -            | -                | -                | -         |   -12.73 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           15 |     2423 | 2024-03-22 | Complexity         | W   | 0.615      | -            | -                | -                | -         |     4.38 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           14 |     2443 | 2024-03-21 | Eternal Fire       | W   | 0.609      | 1.000        | 1.000 (0.609)    | 0.485 (0.295)    | -         |     5.19 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           13 |     2454 | 2024-03-21 | Gaimin Gladiators  | W   | 0.608      | 1.000        | -                | 0.632 (0.384)    | -         |     0.28 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           12 |     3133 | 2024-02-20 | Spirit             | W   | 0.409      | -            | -                | -                | -         |     6.66 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           11 |     3155 | 2024-02-19 | Gaimin Gladiators  | W   | 0.403      | -            | -                | -                | -         |     0.15 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           10 |     3168 | 2024-02-19 | ex-Guild Eagles    | W   | 0.401      | -            | -                | -                | -         |     0.03 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            9 |     3362 | 2024-02-10 | FaZe               | L   | 0.342      | -            | -                | -                | -         |    -5.81 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            8 |     3405 | 2024-02-06 | ENCE               | W   | 0.316      | -            | -                | -                | -         |     0.78 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            7 |     3417 | 2024-02-05 | GamerLegion        | W   | 0.309      | -            | -                | -                | -         |     0.06 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            6 |     3440 | 2024-02-04 | Cloud9             | W   | 0.302      | -            | -                | -                | -         |     0.24 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            5 |     3753 | 2024-01-20 | ex-Preasy          | W   | 0.203      | -            | -                | -                | -         |     0.01 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            4 |     3768 | 2024-01-20 | Spirit             | L   | 0.202      | -            | -                | -                | -         |    -3.29 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            3 |     3818 | 2024-01-19 | Eternal Fire       | L   | 0.196      | -            | -                | -                | -         |    -4.66 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            2 |     3876 | 2024-01-18 | HEROIC             | W   | 0.189      | -            | -                | -                | -         |     1.41 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            1 |     3892 | 2024-01-18 | EYEBALLERS         | W   | 0.188      | -            | -                | -                | -         |     0.01 | Brollan, Jimpphat, siuhy, torzsi, xertioN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($558,042.41)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-19 |      1.000 | $300,000.00    | $300,000.00     |
| 2024-05-12 |      0.956 | $170,000.00    | $162,439.85     |
| 2024-04-14 |      0.767 | $42,000.00     | $32,231.04      |
| 2024-03-31 |      0.676 | $45,000.00     | $30,434.02      |
| 2024-02-11 |      0.349 | $80,000.00     | $27,937.50      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
