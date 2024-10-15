### Roster Details<br />
Team Name: kONO<br />
Roster: amster, byr9, kensizor, Polbandana, s4ltovsk1yy<br />
Global Rank: [118](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_15.md)<br />
Regional Rank: [83]( ../../standings_europe_2024_10_15.md)<br />
<br />
Final Rank Value:  787.0<br />
<br />
Final Rank Value (787.0) = Starting Rank Value (802.6) + Head To Head Adjustments (-15.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.377[<sup>1</sup>](#table2)
- Bounty Collected: 0.331[<sup>2</sup>](#table1)
- Opponent Network: 0.120[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.207<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 802.6
- 400 + ( ( 0.207 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 802.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           52 |      421 | 2024-09-29 | L&G               | L   | 1.000      | -            | -                | -                | -         |   -17.20 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           51 |      425 | 2024-09-29 | TNL               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.34 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           50 |      618 | 2024-09-25 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -13.49 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           49 |      753 | 2024-09-21 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |    -9.29 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           48 |      878 | 2024-09-17 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |    -7.27 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           47 |      890 | 2024-09-16 | L&G               | W   | 1.000      | 0.333        | 0.016 (0.005)    | 0.267 (0.089)    | 0 (0.000) |    12.92 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           46 |      924 | 2024-09-15 | Lazer Cats        | L   | 1.000      | -            | -                | -                | -         |   -22.02 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           45 |      933 | 2024-09-15 | ex-Enterprise     | W   | 0.999      | 0.333        | 0.025 (0.008)    | 0.463 (0.154)    | 0 (0.000) |    13.86 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           44 |      996 | 2024-09-13 | Preasy            | W   | 0.986      | -            | -                | -                | 0 (0.000) |     8.50 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           43 |     1062 | 2024-09-11 | ECLOT             | L   | 0.972      | -            | -                | -                | -         |    -6.00 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           42 |     1594 | 2024-08-26 | Sampi             | L   | 0.867      | -            | -                | -                | -         |    -9.59 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           41 |     1723 | 2024-08-22 | ECSTATIC          | L   | 0.839      | -            | -                | -                | -         |    -8.91 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           40 |     1843 | 2024-08-19 | 500               | L   | 0.821      | -            | -                | -                | -         |   -15.46 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           39 |     1847 | 2024-08-19 | ENCE              | W   | 0.821      | 0.143        | 0.084 (0.010)    | -                | 0 (0.000) |    19.87 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           38 |     1860 | 2024-08-19 | ex-Enterprise     | L   | 0.820      | -            | -                | -                | -         |   -11.81 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           37 |     1910 | 2024-08-17 | Verdant           | L   | 0.806      | -            | -                | -                | -         |   -13.67 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           36 |     1982 | 2024-08-14 | MOUZ NXT          | L   | 0.786      | -            | -                | -                | -         |    -8.70 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           35 |     2015 | 2024-08-13 | Johnny Speeds     | W   | 0.780      | 0.371        | 0.115 (0.033)    | 0.982 (0.284)    | 0 (0.000) |    19.55 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           34 |     2073 | 2024-08-12 | Revenant          | L   | 0.772      | -            | -                | -                | -         |   -10.49 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           33 |     2088 | 2024-08-11 | TSM               | W   | 0.767      | 0.333        | 0.062 (0.016)    | 0.788 (0.201)    | 0 (0.000) |    16.52 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           32 |     2117 | 2024-08-10 | ex-Enterprise     | W   | 0.759      | 0.333        | 0.025 (0.006)    | 0.463 (0.117)    | 0 (0.000) |    14.17 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           31 |     2145 | 2024-08-09 | UNiTY             | L   | 0.752      | -            | -                | -                | -         |    -5.61 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           30 |     2263 | 2024-08-06 | Illuminar         | W   | 0.732      | 0.333        | 0.009 (0.002)    | 0.437 (0.107)    | 0 (0.000) |    12.80 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           29 |     2290 | 2024-08-05 | INFINITE          | W   | 0.725      | -            | -                | -                | 0 (0.000) |     4.62 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           28 |     2476 | 2024-07-31 | TNL               | W   | 0.693      | -            | -                | -                | -         |     6.53 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           27 |     2677 | 2024-07-25 | Nexus             | W   | 0.652      | 0.143        | -                | 0.463 (0.043)    | -         |     9.50 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           26 |     2930 | 2024-07-18 | Lilmix            | L   | 0.606      | -            | -                | -                | -         |   -11.66 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           25 |     2982 | 2024-07-17 | Preasy            | L   | 0.601      | -            | -                | -                | -         |   -12.07 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           24 |     3045 | 2024-07-16 | Illuminar         | L   | 0.593      | -            | -                | -                | -         |    -8.57 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           23 |     3098 | 2024-07-15 | UNiTY             | L   | 0.585      | -            | -                | -                | -         |    -4.19 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           22 |     3101 | 2024-07-14 | Turkey            | W   | 0.582      | -            | -                | -                | -         |     3.15 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           21 |     3103 | 2024-07-14 | Nexus             | W   | 0.582      | -            | -                | -                | -         |     7.35 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           20 |     3107 | 2024-07-14 | Turkey            | L   | 0.581      | -            | -                | -                | -         |   -15.35 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           19 |     3153 | 2024-07-11 | Illuminar         | W   | 0.559      | 0.371        | 0.009 (0.002)    | 0.437 (0.091)    | -         |     9.22 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           18 |     3164 | 2024-07-10 | Nexus             | W   | 0.555      | -            | -                | -                | -         |     6.93 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           17 |     3195 | 2024-07-09 | 500               | W   | 0.547      | -            | -                | -                | -         |     7.75 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           16 |     3224 | 2024-07-07 | Revenant          | L   | 0.533      | -            | -                | -                | -         |    -7.01 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           15 |     3228 | 2024-07-06 | BRUTE             | W   | 0.526      | -            | -                | -                | -         |     1.42 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           14 |     3231 | 2024-07-05 | Johnny Speeds     | L   | 0.520      | -            | -                | -                | -         |    -3.47 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           13 |     3242 | 2024-06-30 | Lazer Cats        | W   | 0.487      | -            | -                | -                | -         |     4.56 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           12 |     3284 | 2024-06-18 | UNiTY             | W   | 0.405      | 0.333        | 0.043 (0.006)    | 0.461 (0.062)    | -         |    10.12 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           11 |     3289 | 2024-06-17 | K10               | W   | 0.399      | -            | -                | -                | -         |     3.72 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           10 |     4079 | 2024-05-25 | Rebels            | L   | 0.245      | -            | -                | -                | -         |    -2.56 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|            9 |     4189 | 2024-05-21 | Partizan          | L   | 0.220      | -            | -                | -                | -         |    -3.08 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|            8 |     4348 | 2024-05-16 | Monte             | L   | 0.187      | -            | -                | -                | -         |    -2.94 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|            7 |     4359 | 2024-05-16 | Zero Tenacity     | L   | 0.185      | -            | -                | -                | -         |    -1.28 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|            6 |     4409 | 2024-05-15 | Preasy            | W   | 0.179      | -            | -                | -                | -         |     2.00 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|            5 |     4456 | 2024-05-14 | Alliance          | W   | 0.174      | -            | -                | -                | -         |     2.59 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|            4 |     4463 | 2024-05-14 | Johnny Speeds     | W   | 0.172      | 0.333        | 0.115 (0.007)    | 0.982 (0.056)    | -         |     4.29 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|            3 |     4483 | 2024-05-13 | Verdant           | W   | 0.166      | -            | -                | -                | -         |     3.06 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|            2 |     4779 | 2024-04-29 | Gaimin Gladiators | W   | 0.073      | -            | -                | -                | -         |     1.48 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|            1 |     4883 | 2024-04-25 | HAVU              | W   | 0.045      | -            | -                | -                | -         |     0.26 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,915.20)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-29 |      1.000 | $975.00        | $975.00         |
| 2024-09-18 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-09-15 |      1.000 | $365.00        | $365.00         |
| 2024-08-13 |      0.779 | $1,000.00      | $778.99         |
| 2024-06-30 |      0.487 | $1,250.00      | $608.33         |
| 2024-06-18 |      0.405 | $6,000.00      | $2,431.26       |
| 2024-05-18 |      0.201 | $1,000.00      | $201.19         |
| 2024-05-16 |      0.185 | $3,000.00      | $555.43         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
