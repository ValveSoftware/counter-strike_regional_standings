### Roster Details<br />
Team Name: Dusty Roots<br />
Roster: 1962, alexer, maxxkor, OwensinhoM, tom1jed<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [133](../standings_global.md)<br />
Regional Rank: [34]( ../standings_americas.md)<br />
Final Rank Value:  770.3<br />
<br />
Final Rank Value (770.3) = Starting Rank Value (805.5) + Head To Head Adjustments (-35.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.324[<sup>1</sup>](#table2)
- Bounty Collected: 0.290[<sup>2</sup>](#table1)
- Opponent Network: 0.084[<sup>2</sup>](#table1)
- LAN Wins: 0.103[<sup>2</sup>](#table1)

The average of these factors is 0.200<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 805.5
- 400 + ( ( 0.200 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 805.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |       34 | 2024-07-23 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |    -2.74 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           27 |       43 | 2024-07-23 | Hype              | W   | 1.000      | 0.371        | 0.030 (0.011)    | 0.466 (0.173)    | 0 (0.000) |    21.22 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           26 |       89 | 2024-07-21 | 9z Academy        | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.075 (0.028)    | 0 (0.000) |     6.49 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           25 |      148 | 2024-07-19 | Case              | L   | 1.000      | -            | -                | -                | -         |    -9.65 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           24 |      193 | 2024-07-18 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -0.90 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           23 |      198 | 2024-07-18 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -0.91 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           22 |      255 | 2024-07-17 | Galorys           | W   | 1.000      | 0.450        | 0.021 (0.010)    | 0.592 (0.266)    | 0 (0.000) |    18.36 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           21 |      258 | 2024-07-17 | Galorys           | L   | 1.000      | -            | -                | -                | -         |   -12.91 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           20 |      284 | 2024-07-17 | inSanitY          | L   | 1.000      | -            | -                | -                | -         |    -4.85 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           19 |      322 | 2024-07-16 | inSanitY          | L   | 1.000      | -            | -                | -                | -         |    -5.08 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           18 |      325 | 2024-07-16 | inSanitY          | L   | 1.000      | -            | -                | -                | -         |    -5.33 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           17 |      332 | 2024-07-16 | KRÜ               | W   | 1.000      | 0.371        | 0.029 (0.011)    | 0.477 (0.177)    | 0 (0.000) |    21.05 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           16 |      371 | 2024-07-15 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |    -2.75 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           15 |      376 | 2024-07-15 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |    -2.83 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           14 |      425 | 2024-07-13 | Case              | L   | 1.000      | -            | -                | -                | -         |   -11.16 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           13 |      448 | 2024-07-11 | Hype              | L   | 1.000      | -            | -                | -                | -         |   -10.30 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           12 |      558 | 2024-06-28 | Vikings KR        | L   | 1.000      | -            | -                | -                | -         |   -14.77 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|           11 |      569 | 2024-06-26 | Patins da Ferrari | L   | 1.000      | -            | -                | -                | -         |   -14.20 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|           10 |      589 | 2024-06-17 | inSanitY          | L   | 0.955      | -            | -                | -                | -         |    -7.88 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            9 |      910 | 2024-06-08 | paiN              | L   | 0.893      | -            | -                | -                | -         |    -1.08 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            8 |     1003 | 2024-06-06 | Vikings KR        | W   | 0.880      | 0.371        | 0.011 (0.003)    | 0.415 (0.135)    | 0 (0.000) |    13.24 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            7 |     1064 | 2024-06-05 | LA RUGONETA       | W   | 0.874      | 0.284        | 0.003 (0.001)    | 0.000 (0.000)    | 1 (0.874) |     5.40 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            6 |     1166 | 2024-06-02 | 9z Academy        | W   | 0.854      | 0.371        | 0.000 (0.000)    | 0.075 (0.024)    | 0 (0.000) |     4.54 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            5 |     1236 | 2024-05-31 | FURIA Academy     | W   | 0.840      | 0.371        | 0.000 (0.000)    | 0.112 (0.035)    | 0 (0.000) |     5.04 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            4 |     1280 | 2024-05-29 | Case              | L   | 0.828      | -            | -                | -                | -         |    -8.80 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            3 |     1339 | 2024-05-27 | Galorys           | L   | 0.813      | -            | -                | -                | -         |    -9.63 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            2 |     3815 | 2024-02-16 | FURIA Academy     | L   | 0.140      | -            | -                | -                | -         |    -3.67 | alexer, guishu, KvNs, maxxkor, OwensinhoM  |
|            1 |     3931 | 2024-02-12 | Case              | L   | 0.113      | -            | -                | -                | -         |    -1.15 | alexer, guishu, KvNs, maxxkor, OwensinhoM  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,275.80)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-19 |      0.968 | $545.00        | $527.35         |
| 2024-06-05 |      0.874 | $2,000.00      | $1,748.45       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
