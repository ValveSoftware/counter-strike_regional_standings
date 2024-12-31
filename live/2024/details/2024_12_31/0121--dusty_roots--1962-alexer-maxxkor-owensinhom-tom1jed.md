### Roster Details<br />
Team Name: Dusty Roots<br />
Roster: 1962, alexer, maxxkor, OwensinhoM, tom1jed<br />
Global Rank: [121](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_12_31.md)<br />
Regional Rank: [29]( ../../standings_americas_2024_12_31.md)<br />
<br />
Final Rank Value:  808.1<br />
<br />
Final Rank Value (808.1) = Starting Rank Value (858.6) + Head To Head Adjustments (-50.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.293[<sup>1</sup>](#table2)
- Bounty Collected: 0.291[<sup>2</sup>](#table1)
- Opponent Network: 0.066[<sup>2</sup>](#table1)
- LAN Wins: 0.291[<sup>2</sup>](#table1)

The average of these factors is 0.235<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 858.6
- 400 + ( ( 0.235 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 858.6


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
|           59 |      465 | 2024-11-29 | Solid             | L   | 1.000      | -            | -                | -                | -         |    -9.44 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           58 |      483 | 2024-11-28 | GameHunters       | W   | 0.992      | 0.371        | 0.002 (0.001)    | 0.317 (0.117)    | 0 (0.000) |    12.04 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           57 |      734 | 2024-11-15 | SINNERS Academy   | W   | 0.905      | 0.617        | 0.003 (0.001)    | 0.078 (0.044)    | 1 (0.905) |    14.00 | 1962, maxxkor, meyern, OwensinhoM, tom1jed |
|           56 |      740 | 2024-11-15 | Czech Republic    | W   | 0.905      | 0.617        | -                | 0.116 (0.065)    | 1 (0.905) |    11.33 | 1962, maxxkor, meyern, OwensinhoM, tom1jed |
|           55 |      750 | 2024-11-14 | The Huns          | L   | 0.901      | -            | -                | -                | -         |    -7.31 | 1962, maxxkor, meyern, OwensinhoM, tom1jed |
|           54 |      794 | 2024-11-13 | Kitsune           | W   | 0.893      | 0.617        | 0.008 (0.005)    | -                | 1 (0.893) |     5.82 | 1962, maxxkor, meyern, OwensinhoM, tom1jed |
|           53 |      797 | 2024-11-13 | Partizan          | L   | 0.893      | -            | -                | -                | -         |    -2.28 | 1962, maxxkor, meyern, OwensinhoM, tom1jed |
|           52 |     1055 | 2024-11-01 | Vikings KR        | L   | 0.814      | -            | -                | -                | -         |   -15.19 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           51 |     1496 | 2024-10-09 | ODDIK             | L   | 0.661      | -            | -                | -                | -         |    -5.69 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           50 |     1501 | 2024-10-09 | ODDIK             | L   | 0.661      | -            | -                | -                | -         |    -5.96 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           49 |     1532 | 2024-10-08 | RED Canids        | L   | 0.654      | -            | -                | -                | -         |    -3.74 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           48 |     1536 | 2024-10-08 | RED Canids        | L   | 0.654      | -            | -                | -                | -         |    -3.87 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           47 |     1718 | 2024-10-02 | KRÜ               | L   | 0.615      | -            | -                | -                | -         |    -9.91 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           46 |     1721 | 2024-10-02 | KRÜ               | W   | 0.614      | 0.450        | 0.004 (0.001)    | 0.241 (0.067)    | 0 (0.000) |     9.64 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           45 |     1887 | 2024-09-27 | Fluxo             | L   | 0.582      | -            | -                | -                | -         |    -3.43 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           44 |     1893 | 2024-09-27 | Patins da Ferrari | W   | 0.581      | 0.143        | -                | 0.194 (0.016)    | 0 (0.000) |     5.55 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           43 |     1904 | 2024-09-27 | Bounty Hunters    | W   | 0.581      | 0.143        | 0.006 (0.000)    | -                | 0 (0.000) |     5.91 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           42 |     2010 | 2024-09-25 | Case              | L   | 0.567      | -            | -                | -                | -         |    -9.90 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           41 |     2012 | 2024-09-25 | Case              | W   | 0.567      | 0.450        | 0.011 (0.003)    | 0.286 (0.073)    | 0 (0.000) |     8.10 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           40 |     2049 | 2024-09-24 | Solid             | W   | 0.561      | 0.450        | 0.030 (0.008)    | 0.614 (0.155)    | 0 (0.000) |    11.00 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           39 |     2057 | 2024-09-24 | Solid             | L   | 0.561      | -            | -                | -                | -         |    -6.75 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           38 |     2270 | 2024-09-17 | Hype              | W   | 0.514      | 0.450        | 0.006 (0.001)    | 0.245 (0.057)    | 0 (0.000) |     7.00 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           37 |     2271 | 2024-09-17 | Hype              | L   | 0.514      | -            | -                | -                | -         |    -9.43 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           36 |     2479 | 2024-09-10 | BESTIA            | L   | 0.468      | -            | -                | -                | -         |    -3.28 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           35 |     2481 | 2024-09-10 | BESTIA            | L   | 0.467      | -            | -                | -                | -         |    -3.38 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           34 |     2604 | 2024-09-05 | Sharks            | L   | 0.434      | -            | -                | -                | -         |    -1.68 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           33 |     2605 | 2024-09-05 | Sharks            | L   | 0.434      | -            | -                | -                | -         |    -1.71 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           32 |     2733 | 2024-09-01 | inSanitY          | L   | 0.408      | -            | -                | -                | -         |    -6.92 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           31 |     2968 | 2024-08-26 | Fluxo             | L   | 0.368      | -            | -                | -                | -         |    -2.36 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           30 |     2995 | 2024-08-26 | inSanitY          | L   | 0.366      | -            | -                | -                | -         |    -6.33 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           29 |     3224 | 2024-08-20 | Imperial          | L   | 0.328      | -            | -                | -                | -         |    -1.34 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           28 |     3225 | 2024-08-20 | Imperial          | L   | 0.328      | -            | -                | -                | -         |    -1.35 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           27 |     3511 | 2024-08-10 | Patins da Ferrari | L   | 0.260      | -            | -                | -                | -         |    -6.24 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           26 |     3562 | 2024-08-08 | Galorys           | W   | 0.247      | 0.333        | 0.005 (0.000)    | -                | -         |     2.41 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           25 |     3647 | 2024-08-06 | Case              | L   | 0.235      | -            | -                | -                | -         |    -4.38 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           24 |     3770 | 2024-08-02 | Vikings KR        | L   | 0.208      | -            | -                | -                | -         |    -4.51 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           23 |     3807 | 2024-08-01 | Bounty Hunters    | W   | 0.201      | -            | -                | -                | -         |     1.87 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           22 |     3812 | 2024-08-01 | W7M               | W   | 0.201      | -            | -                | -                | -         |     1.63 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           21 |     3872 | 2024-07-31 | Case              | L   | 0.193      | -            | -                | -                | -         |    -3.63 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           20 |     3881 | 2024-07-31 | paiN              | L   | 0.192      | -            | -                | -                | -         |    -0.15 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           19 |     3903 | 2024-07-30 | MIBR              | W   | 0.188      | 0.450        | 0.194 (0.016)    | 0.652 (0.055)    | -         |     5.82 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           18 |     3906 | 2024-07-30 | MIBR              | L   | 0.188      | -            | -                | -                | -         |    -0.10 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           17 |     3918 | 2024-07-30 | ODDIK             | L   | 0.186      | -            | -                | -                | -         |    -2.04 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           16 |     4140 | 2024-07-23 | Fluxo             | L   | 0.141      | -            | -                | -                | -         |    -0.87 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           15 |     4149 | 2024-07-23 | Hype              | W   | 0.139      | 0.371        | -                | 0.245 (0.013)    | -         |     1.61 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           14 |     4195 | 2024-07-21 | 9z Academy        | W   | 0.127      | -            | -                | -                | -         |     0.55 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           13 |     4254 | 2024-07-19 | Case              | L   | 0.114      | -            | -                | -                | -         |    -2.17 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           12 |     4299 | 2024-07-18 | paiN              | L   | 0.108      | -            | -                | -                | -         |    -0.08 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           11 |     4304 | 2024-07-18 | paiN              | L   | 0.108      | -            | -                | -                | -         |    -0.08 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           10 |     4361 | 2024-07-17 | Galorys           | W   | 0.102      | -            | -                | -                | -         |     0.96 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|            9 |     4364 | 2024-07-17 | Galorys           | L   | 0.101      | -            | -                | -                | -         |    -2.25 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|            8 |     4390 | 2024-07-17 | inSanitY          | L   | 0.100      | -            | -                | -                | -         |    -1.84 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|            7 |     4428 | 2024-07-16 | inSanitY          | L   | 0.095      | -            | -                | -                | -         |    -1.76 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|            6 |     4431 | 2024-07-16 | inSanitY          | L   | 0.094      | -            | -                | -                | -         |    -1.77 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|            5 |     4438 | 2024-07-16 | KRÜ               | W   | 0.094      | -            | -                | -                | -         |     1.23 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|            4 |     4477 | 2024-07-15 | Fluxo             | L   | 0.088      | -            | -                | -                | -         |    -0.59 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|            3 |     4482 | 2024-07-15 | Fluxo             | L   | 0.088      | -            | -                | -                | -         |    -0.59 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|            2 |     4531 | 2024-07-13 | Case              | L   | 0.073      | -            | -                | -                | -         |    -1.44 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|            1 |     4554 | 2024-07-11 | Hype              | L   | 0.061      | -            | -                | -                | -         |    -1.26 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,163.40)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-30 |      1.000 | $750.00        | $750.00         |
| 2024-11-03 |      0.827 | $500.00        | $413.40         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
