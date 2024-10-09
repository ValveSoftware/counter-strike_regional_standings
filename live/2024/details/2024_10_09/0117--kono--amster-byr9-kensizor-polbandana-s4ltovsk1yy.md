### Roster Details<br />
Team Name: kONO<br />
Roster: amster, byr9, kensizor, Polbandana, s4ltovsk1yy<br />
Global Rank: [117](../../standings_global_2024_10_09.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_09.md)<br />
Regional Rank: [83]( ../../standings_europe_2024_10_09.md)<br />
<br />
Final Rank Value:  791.5<br />
<br />
Final Rank Value (791.5) = Starting Rank Value (808.1) + Head To Head Adjustments (-16.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.382[<sup>1</sup>](#table2)
- Bounty Collected: 0.337[<sup>2</sup>](#table1)
- Opponent Network: 0.125[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.211<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 808.1
- 400 + ( ( 0.211 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 808.1


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
|           52 |      324 | 2024-09-29 | L&G               | L   | 1.000      | -            | -                | -                | -         |   -17.34 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           51 |      328 | 2024-09-29 | TNL               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.02 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           50 |      521 | 2024-09-25 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -13.52 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           49 |      656 | 2024-09-21 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |    -9.40 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           48 |      781 | 2024-09-17 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |    -7.43 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           47 |      793 | 2024-09-16 | L&G               | W   | 1.000      | 0.333        | 0.016 (0.005)    | 0.266 (0.089)    | 0 (0.000) |    12.75 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           46 |      827 | 2024-09-15 | Lazer Cats        | L   | 1.000      | -            | -                | -                | -         |   -22.24 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           45 |      836 | 2024-09-15 | ex-Enterprise     | W   | 1.000      | 0.333        | 0.028 (0.009)    | 0.457 (0.152)    | 0 (0.000) |    13.81 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           44 |      899 | 2024-09-13 | Preasy            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.51 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           43 |      965 | 2024-09-11 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |    -6.35 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           42 |     1497 | 2024-08-26 | Sampi             | L   | 0.906      | -            | -                | -                | -         |   -10.06 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           41 |     1626 | 2024-08-22 | ECSTATIC          | L   | 0.879      | -            | -                | -                | -         |    -9.44 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           40 |     1746 | 2024-08-19 | 500               | L   | 0.861      | -            | -                | -                | -         |   -17.36 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           39 |     1750 | 2024-08-19 | ENCE              | W   | 0.860      | 0.143        | 0.092 (0.011)    | -                | 0 (0.000) |    21.15 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           38 |     1763 | 2024-08-19 | ex-Enterprise     | L   | 0.859      | -            | -                | -                | -         |   -12.24 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           37 |     1813 | 2024-08-17 | Verdant           | L   | 0.846      | -            | -                | -                | -         |   -14.52 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           36 |     1885 | 2024-08-14 | MOUZ NXT          | L   | 0.825      | -            | -                | -                | -         |    -8.84 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           35 |     1918 | 2024-08-13 | Johnny Speeds     | W   | 0.819      | 0.371        | 0.121 (0.037)    | 1.000 (0.304)    | 0 (0.000) |    20.66 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           34 |     1976 | 2024-08-12 | Revenant          | L   | 0.812      | -            | -                | -                | -         |   -11.11 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           33 |     1991 | 2024-08-11 | TSM               | W   | 0.807      | 0.333        | 0.065 (0.017)    | 0.807 (0.217)    | 0 (0.000) |    17.39 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           32 |     2020 | 2024-08-10 | ex-Enterprise     | W   | 0.798      | 0.333        | 0.028 (0.007)    | 0.457 (0.122)    | 0 (0.000) |    15.10 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           31 |     2048 | 2024-08-09 | UNiTY             | L   | 0.792      | -            | -                | -                | -         |    -6.18 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           30 |     2166 | 2024-08-06 | Illuminar         | W   | 0.772      | 0.333        | 0.010 (0.003)    | 0.378 (0.097)    | 0 (0.000) |    13.72 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           29 |     2193 | 2024-08-05 | INFINITE          | W   | 0.765      | -            | -                | -                | 0 (0.000) |     4.78 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           28 |     2379 | 2024-07-31 | TNL               | W   | 0.733      | -            | -                | -                | -         |     6.63 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           27 |     2580 | 2024-07-25 | Nexus             | W   | 0.692      | 0.143        | -                | 0.477 (0.047)    | -         |     9.88 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           26 |     2833 | 2024-07-18 | Lilmix            | L   | 0.645      | -            | -                | -                | -         |   -12.33 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           25 |     2885 | 2024-07-17 | Preasy            | L   | 0.640      | -            | -                | -                | -         |   -12.88 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           24 |     2948 | 2024-07-16 | Illuminar         | L   | 0.633      | -            | -                | -                | -         |    -8.94 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           23 |     3001 | 2024-07-15 | UNiTY             | L   | 0.625      | -            | -                | -                | -         |    -4.62 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           22 |     3004 | 2024-07-14 | Turkey            | W   | 0.622      | -            | -                | -                | -         |     3.29 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           21 |     3006 | 2024-07-14 | Nexus             | W   | 0.621      | -            | -                | -                | -         |     7.56 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           20 |     3010 | 2024-07-14 | Turkey            | L   | 0.621      | -            | -                | -                | -         |   -16.47 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           19 |     3056 | 2024-07-11 | Illuminar         | W   | 0.599      | 0.371        | 0.010 (0.002)    | 0.378 (0.084)    | -         |    10.03 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           18 |     3067 | 2024-07-10 | Nexus             | W   | 0.595      | -            | -                | -                | -         |     7.13 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           17 |     3098 | 2024-07-09 | 500               | W   | 0.587      | -            | -                | -                | -         |     7.46 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           16 |     3127 | 2024-07-07 | Revenant          | L   | 0.572      | -            | -                | -                | -         |    -7.64 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           15 |     3131 | 2024-07-06 | BRUTE             | W   | 0.565      | -            | -                | -                | -         |     1.46 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           14 |     3134 | 2024-07-05 | Johnny Speeds     | L   | 0.560      | -            | -                | -                | -         |    -3.61 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           13 |     3145 | 2024-06-30 | Lazer Cats        | W   | 0.526      | -            | -                | -                | -         |     4.75 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           12 |     3187 | 2024-06-18 | UNiTY             | W   | 0.445      | 0.333        | 0.046 (0.007)    | 0.470 (0.070)    | -         |    11.01 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           11 |     3192 | 2024-06-17 | K10               | W   | 0.439      | -            | -                | -                | -         |     4.02 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           10 |     3982 | 2024-05-25 | Rebels            | L   | 0.285      | -            | -                | -                | -         |    -2.95 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|            9 |     4092 | 2024-05-21 | Partizan          | L   | 0.259      | -            | -                | -                | -         |    -3.69 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|            8 |     4251 | 2024-05-16 | Monte             | L   | 0.227      | -            | -                | -                | -         |    -3.43 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|            7 |     4262 | 2024-05-16 | Zero Tenacity     | L   | 0.225      | -            | -                | -                | -         |    -1.60 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|            6 |     4312 | 2024-05-15 | Preasy            | W   | 0.218      | -            | -                | -                | -         |     2.41 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|            5 |     4359 | 2024-05-14 | Alliance          | W   | 0.213      | -            | -                | -                | -         |     3.17 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|            4 |     4366 | 2024-05-14 | Johnny Speeds     | W   | 0.212      | 0.333        | 0.121 (0.009)    | 1.000 (0.071)    | -         |     5.33 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|            3 |     4386 | 2024-05-13 | Verdant           | W   | 0.206      | -            | -                | -                | -         |     3.79 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|            2 |     4682 | 2024-04-29 | Gaimin Gladiators | W   | 0.113      | -            | -                | -                | -         |     2.28 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|            1 |     4786 | 2024-04-25 | HAVU              | W   | 0.085      | -            | -                | -                | -         |     0.49 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,400.56)
- Divide that value by the 5th highest value among all rosters ($304,769.86)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-29 |      1.000 | $975.00        | $975.00         |
| 2024-09-18 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-09-15 |      1.000 | $365.00        | $365.00         |
| 2024-08-13 |      0.819 | $1,000.00      | $818.61         |
| 2024-06-30 |      0.526 | $1,250.00      | $657.85         |
| 2024-06-18 |      0.445 | $6,000.00      | $2,668.99       |
| 2024-05-18 |      0.241 | $1,000.00      | $240.81         |
| 2024-05-16 |      0.225 | $3,000.00      | $674.29         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
