### Roster Details<br />
Team Name: Nemiga<br />
Roster: 1eeR, khaN, riskyb0b, Xant3r, zweih<br />
Global Rank: [28](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_17.md)<br />
Regional Rank: [20]( ../../standings_europe_2025_01_17.md)<br />
<br />
Final Rank Value:  1216.2<br />
<br />
Final Rank Value (1216.2) = Starting Rank Value (1274.6) + Head To Head Adjustments (-58.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.772[<sup>1</sup>](#table2)
- Bounty Collected: 0.443[<sup>2</sup>](#table1)
- Opponent Network: 0.162[<sup>2</sup>](#table1)
- LAN Wins: 0.387[<sup>2</sup>](#table1)

The average of these factors is 0.441<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1274.6
- 400 + ( ( 0.441 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1274.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           57 |        1 | 2025-01-17 | FURIA           | L   | 1.000      | -            | -                | -                | -         |    -3.66 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           56 |      715 | 2024-11-18 | BetBoom         | L   | 0.802      | -            | -                | -                | -         |   -15.98 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           55 |      724 | 2024-11-18 | Rebels          | W   | 0.797      | -            | -                | -                | 1 (0.797) |     2.66 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           54 |      740 | 2024-11-17 | Cloud9          | L   | 0.791      | -            | -                | -                | -         |   -18.01 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           53 |      754 | 2024-11-16 | MOUZ            | L   | 0.789      | -            | -                | -                | -         |    -1.32 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           52 |      970 | 2024-11-09 | NAVI Junior     | L   | 0.739      | -            | -                | -                | -         |   -16.50 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           51 |      988 | 2024-11-08 | 500             | W   | 0.732      | 0.426        | -                | 0.855 (0.266)    | 0 (0.000) |     4.73 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           50 |     1013 | 2024-11-07 | PARIVISION      | W   | 0.724      | -            | -                | -                | 0 (0.000) |     2.96 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           49 |     1040 | 2024-11-05 | Into the Breach | W   | 0.712      | 0.426        | -                | 0.512 (0.155)    | 0 (0.000) |     3.46 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           48 |     1332 | 2024-10-20 | HEROIC          | L   | 0.605      | -            | -                | -                | -         |   -10.09 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           47 |     1351 | 2024-10-19 | UNPAID          | W   | 0.600      | 0.624        | 0.141 (0.053)    | -                | 1 (0.600) |     3.64 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           46 |     1354 | 2024-10-19 | 3DMAX           | W   | 0.599      | 0.500        | 0.430 (0.129)    | 0.576 (0.173)    | 0 (0.000) |    12.05 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           45 |     1368 | 2024-10-19 | fnatic          | W   | 0.597      | 0.624        | 0.182 (0.068)    | -                | 1 (0.597) |     6.58 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           44 |     1393 | 2024-10-18 | Fluxo           | W   | 0.591      | 0.624        | 0.130 (0.048)    | 0.530 (0.195)    | 1 (0.591) |     6.67 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           43 |     1408 | 2024-10-17 | HEROIC          | L   | 0.586      | -            | -                | -                | -         |    -9.13 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           42 |     1423 | 2024-10-17 | Aurora          | W   | 0.584      | 0.624        | 0.058 (0.021)    | 0.313 (0.114)    | 1 (0.584) |     2.99 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           41 |     1441 | 2024-10-16 | 3DMAX           | W   | 0.579      | 0.500        | 0.430 (0.124)    | 0.576 (0.167)    | 0 (0.000) |    12.13 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           40 |     1448 | 2024-10-16 | HEROIC          | L   | 0.578      | -            | -                | -                | -         |    -9.57 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           39 |     1933 | 2024-09-28 | SAW             | L   | 0.459      | -            | -                | -                | -         |    -5.37 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           38 |     1966 | 2024-09-27 | Alliance        | W   | 0.453      | -            | -                | -                | -         |     2.03 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           37 |     1981 | 2024-09-27 | 3DMAX           | L   | 0.452      | -            | -                | -                | -         |    -4.05 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           36 |     2011 | 2024-09-26 | GUN5            | W   | 0.446      | -            | -                | -                | -         |     3.95 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           35 |     2027 | 2024-09-26 | RUSTEC          | W   | 0.445      | -            | -                | -                | -         |     0.12 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           34 |     2131 | 2024-09-24 | 9INE            | L   | 0.431      | -            | -                | -                | -         |   -10.95 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           33 |     2163 | 2024-09-23 | Johnny Speeds   | W   | 0.426      | 0.443        | 0.109 (0.021)    | 0.770 (0.145)    | -         |     3.38 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           32 |     2167 | 2024-09-23 | AMKAL           | L   | 0.425      | -            | -                | -                | -         |   -12.12 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           31 |     2197 | 2024-09-22 | 9 Pandas        | W   | 0.417      | 0.443        | 0.159 (0.029)    | 0.802 (0.148)    | -         |     3.94 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           30 |     2213 | 2024-09-21 | CYBERSHOKE      | W   | 0.412      | 0.443        | -                | 0.627 (0.114)    | -         |     1.30 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           29 |     2235 | 2024-09-20 | 9INE            | L   | 0.406      | -            | -                | -                | -         |   -10.61 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           28 |     2282 | 2024-09-19 | 9 Pandas        | W   | 0.398      | 0.443        | 0.159 (0.028)    | 0.802 (0.141)    | -         |     3.91 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           27 |     2306 | 2024-09-18 | SINNERS         | W   | 0.392      | -            | -                | -                | -         |     3.33 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           26 |     2358 | 2024-09-16 | CYBERSHOKE      | W   | 0.379      | -            | -                | -                | -         |     1.15 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           25 |     2368 | 2024-09-16 | BOGATYRI        | W   | 0.377      | -            | -                | -                | -         |     0.09 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           24 |     2493 | 2024-09-12 | Monte           | W   | 0.351      | -            | -                | -                | -         |     2.23 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           23 |     2607 | 2024-09-07 | Zero Tenacity   | L   | 0.320      | -            | -                | -                | -         |    -7.80 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           22 |     2672 | 2024-09-05 | los kogutos     | W   | 0.306      | -            | -                | -                | -         |     3.29 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           21 |     2764 | 2024-09-03 | Sashi           | W   | 0.291      | -            | -                | -                | -         |     1.76 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           20 |     2936 | 2024-08-28 | Metizport       | L   | 0.251      | -            | -                | -                | -         |    -3.08 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           19 |     2978 | 2024-08-27 | ALTERNATE aTTaX | L   | 0.246      | -            | -                | -                | -         |    -5.53 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           18 |     3148 | 2024-08-23 | Insilio         | W   | 0.219      | -            | -                | -                | -         |     0.44 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           17 |     3162 | 2024-08-23 | 9 Pandas        | L   | 0.218      | -            | -                | -                | -         |    -4.79 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           16 |     3202 | 2024-08-22 | Sashi           | W   | 0.210      | -            | -                | -                | -         |     1.23 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           15 |     3244 | 2024-08-21 | los kogutos     | L   | 0.205      | -            | -                | -                | -         |    -4.16 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           14 |     3266 | 2024-08-21 | ARCRED          | W   | 0.204      | -            | -                | -                | -         |     0.38 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           13 |     3429 | 2024-08-15 | HEROIC          | W   | 0.165      | -            | -                | -                | -         |     2.03 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           12 |     3519 | 2024-08-12 | 3DMAX           | W   | 0.146      | 0.500        | 0.430 (0.031)    | -                | -         |     3.19 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           11 |     3559 | 2024-08-11 | Endpoint        | W   | 0.138      | -            | -                | -                | -         |     0.38 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           10 |     3583 | 2024-08-10 | B8              | W   | 0.131      | -            | -                | -                | -         |     1.28 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            9 |     3604 | 2024-08-09 | 9 Pandas        | W   | 0.125      | -            | -                | -                | -         |     0.20 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            8 |     3621 | 2024-08-08 | Sampi           | W   | 0.120      | -            | -                | -                | -         |     0.65 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            7 |     3656 | 2024-08-07 | B8              | W   | 0.113      | -            | -                | -                | -         |     1.13 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            6 |     3777 | 2024-08-04 | Aurora          | W   | 0.092      | -            | -                | -                | -         |     0.12 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            5 |     3813 | 2024-08-03 | los kogutos     | L   | 0.086      | -            | -                | -                | -         |    -1.59 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            4 |     3857 | 2024-08-02 | fnatic          | L   | 0.078      | -            | -                | -                | -         |    -1.65 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            3 |     3861 | 2024-08-02 | Johnny Speeds   | L   | 0.077      | -            | -                | -                | -         |    -1.83 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            2 |     3927 | 2024-07-31 | SovvyKiNG       | W   | 0.066      | -            | -                | -                | -         |     0.04 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            1 |     3989 | 2024-07-30 | G2 Ares         | W   | 0.058      | -            | -                | -                | -         |     0.03 | 1eeR, khaN, riskyb0b, Xant3r, zweih |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($114,438.14)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.51) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-09 |      0.739 | $10,000.00     | $7,386.30       |
| 2024-10-20 |      0.605 | $12,500.00     | $7,565.66       |
| 2024-10-19 |      0.600 | $150,000.00    | $89,983.84      |
| 2024-09-26 |      0.446 | $500.00        | $222.83         |
| 2024-09-24 |      0.431 | $12,000.00     | $5,176.93       |
| 2024-09-08 |      0.326 | $2,000.00      | $651.77         |
| 2024-08-11 |      0.138 | $25,000.00     | $3,450.82       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
