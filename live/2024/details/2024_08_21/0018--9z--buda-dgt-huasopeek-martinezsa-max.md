### Roster Details<br />
Team Name: 9z<br />
Roster: buda, dgt, HUASOPEEK, MartinezSa, max<br />
Global Rank: [18](../../standings_global_2024_08_21.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_08_21.md)<br />
Regional Rank: [5]( ../../standings_americas_2024_08_21.md)<br />
<br />
Final Rank Value:  1451.7<br />
<br />
Final Rank Value (1451.7) = Starting Rank Value (1550.6) + Head To Head Adjustments (-98.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.715[<sup>1</sup>](#table2)
- Bounty Collected: 0.551[<sup>2</sup>](#table1)
- Opponent Network: 0.220[<sup>2</sup>](#table1)
- LAN Wins: 0.832[<sup>2</sup>](#table1)

The average of these factors is 0.580<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1550.6
- 400 + ( ( 0.580 - 0.000 ) / ( 0.806 - 0.000 ) ) * 1600 = 1550.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           52 |      333 | 2024-08-11 | paiN              | L   | 1.000      | -            | -                | -                | -         |   -14.76 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           51 |      359 | 2024-08-10 | Astralis          | L   | 1.000      | -            | -                | -                | -         |    -7.44 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           50 |      394 | 2024-08-09 | MIBR              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     9.18 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           49 |      465 | 2024-08-07 | 3DMAX             | W   | 1.000      | 0.143        | 0.519 (0.074)    | -                | 1 (1.000) |    14.13 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           48 |      859 | 2024-07-27 | Monte             | L   | 1.000      | -            | -                | -                | -         |   -30.09 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           47 |      917 | 2024-07-25 | RUBY              | W   | 1.000      | 0.435        | -                | 0.411 (0.179)    | -         |     1.15 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           46 |     1547 | 2024-06-16 | fnatic            | W   | 0.761      | 0.548        | 0.348 (0.145)    | 0.677 (0.283)    | 1 (0.761) |     9.62 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           45 |     1557 | 2024-06-16 | KOI               | W   | 0.759      | -            | -                | -                | 1 (0.759) |     2.00 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           44 |     1577 | 2024-06-15 | paiN              | W   | 0.754      | 0.548        | 0.357 (0.148)    | 0.797 (0.329)    | 1 (0.754) |    11.22 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           43 |     1597 | 2024-06-15 | BESTIA            | W   | 0.752      | 0.548        | 0.113 (0.047)    | 0.804 (0.332)    | 1 (0.752) |     2.02 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           42 |     1618 | 2024-06-14 | Ninjas in Pyjamas | L   | 0.746      | -            | -                | -                | -         |   -10.14 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           41 |     1826 | 2024-06-08 | Imperial          | L   | 0.707      | -            | -                | -                | -         |   -18.12 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           40 |     1883 | 2024-06-07 | Sharks            | W   | 0.701      | -            | -                | -                | -         |     2.40 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           39 |     1939 | 2024-06-06 | MIBR              | W   | 0.694      | 0.450        | 0.197 (0.062)    | 0.585 (0.183)    | -         |     8.82 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           38 |     2008 | 2024-06-05 | RED Canids        | L   | 0.688      | -            | -                | -                | -         |   -19.24 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           37 |     2060 | 2024-06-04 | Fluxo             | W   | 0.681      | 0.450        | -                | 0.598 (0.183)    | -         |     1.49 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           36 |     2141 | 2024-06-01 | G2                | L   | 0.661      | -            | -                | -                | -         |    -1.48 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           35 |     2231 | 2024-05-29 | Vitality          | W   | 0.640      | 0.624        | 1.000 (0.400)    | 0.452 (0.181)    | 1 (0.640) |    18.95 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           34 |     2271 | 2024-05-27 | Liquid            | W   | 0.629      | 0.624        | 0.426 (0.167)    | 0.402 (0.158)    | 1 (0.629) |    15.28 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           33 |     2283 | 2024-05-27 | MOUZ              | W   | 0.626      | 0.624        | 1.000 (0.391)    | -                | 1 (0.626) |    18.30 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           32 |     2378 | 2024-05-22 | Imperial          | L   | 0.594      | -            | -                | -                | -         |   -14.99 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           31 |     2380 | 2024-05-22 | Imperial          | L   | 0.594      | -            | -                | -                | -         |   -15.47 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           30 |     2459 | 2024-05-20 | W7M               | W   | 0.581      | -            | -                | -                | -         |     0.39 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           29 |     2463 | 2024-05-20 | W7M               | W   | 0.580      | -            | -                | -                | -         |     0.40 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           28 |     2466 | 2024-05-20 | BESTIA            | L   | 0.580      | -            | -                | -                | -         |   -17.30 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           27 |     2468 | 2024-05-20 | BESTIA            | W   | 0.580      | 0.450        | -                | 0.804 (0.210)    | -         |     0.93 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           26 |     2489 | 2024-05-19 | RED Canids        | L   | 0.574      | -            | -                | -                | -         |   -16.28 | buda, HUASOPEEK, Luken, MartinezSa, max |
|           25 |     2518 | 2024-05-18 | Fluxo             | W   | 0.567      | -            | -                | -                | -         |     1.28 | buda, HUASOPEEK, Luken, MartinezSa, max |
|           24 |     2582 | 2024-05-16 | ODDIK             | W   | 0.554      | 0.371        | 0.187 (0.038)    | -                | -         |     1.33 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           23 |     2590 | 2024-05-16 | Imperial          | L   | 0.553      | -            | -                | -                | -         |   -14.76 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           22 |     2628 | 2024-05-15 | RED Canids        | W   | 0.548      | 0.450        | -                | 0.655 (0.162)    | -         |     1.43 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           21 |     2630 | 2024-05-15 | RED Canids        | L   | 0.548      | -            | -                | -                | -         |   -15.97 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           20 |     2632 | 2024-05-15 | Sharks            | W   | 0.547      | -            | -                | -                | -         |     1.31 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           19 |     2689 | 2024-05-14 | Smoke             | W   | 0.541      | -            | -                | -                | -         |     0.18 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           18 |     2694 | 2024-05-14 | Smoke             | W   | 0.540      | -            | -                | -                | -         |     0.18 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           17 |     2703 | 2024-05-14 | Galorys           | W   | 0.540      | -            | -                | -                | -         |     0.44 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           16 |     2721 | 2024-05-13 | Galorys           | W   | 0.535      | -            | -                | -                | -         |     0.44 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           15 |     2741 | 2024-05-12 | inSanitY          | W   | 0.528      | -            | -                | -                | -         |     0.49 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           14 |     2745 | 2024-05-12 | paiN              | L   | 0.527      | -            | -                | -                | -         |    -9.07 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           13 |     2771 | 2024-05-11 | KRÜ               | W   | 0.520      | -            | -                | -                | -         |     0.50 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           12 |     2799 | 2024-05-10 | inSanitY          | W   | 0.515      | -            | -                | -                | -         |     0.46 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           11 |     2842 | 2024-05-08 | Sharks            | W   | 0.501      | -            | -                | -                | -         |     1.22 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           10 |     2884 | 2024-05-06 | Vikings KR        | W   | 0.486      | -            | -                | -                | -         |     0.27 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            9 |     2977 | 2024-05-01 | Case              | W   | 0.453      | -            | -                | -                | -         |     0.59 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            8 |     2979 | 2024-05-01 | Case              | W   | 0.453      | -            | -                | -                | -         |     0.60 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            7 |     3247 | 2024-04-19 | OG                | L   | 0.375      | -            | -                | -                | -         |   -11.25 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            6 |     3298 | 2024-04-18 | Imperial          | L   | 0.368      | -            | -                | -                | -         |   -10.29 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            5 |     3307 | 2024-04-18 | FURIA             | W   | 0.366      | 0.589        | 0.300 (0.065)    | -                | 1 (0.366) |     7.31 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            4 |     3627 | 2024-04-08 | HEROIC            | L   | 0.297      | -            | -                | -                | -         |    -5.79 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            3 |     3636 | 2024-04-07 | G2                | L   | 0.296      | -            | -                | -                | -         |    -0.78 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            2 |     4594 | 2024-02-23 | FURIA             | W   | 0.002      | -            | -                | -                | -         |     0.03 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            1 |     4597 | 2024-02-23 | BESTIA            | W   | 0.000      | -            | -                | -                | -         |     0.00 | buda, dgt, HUASOPEEK, MartinezSa, max   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($123,044.86)
- Divide that value by the 5th highest value among all rosters ($307,820.64)
- The final value (0.40) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-18 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-07-28 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-06-16 |      0.761 | $100,000.00    | $76,128.10      |
| 2024-06-09 |      0.714 | $7,500.00      | $5,354.66       |
| 2024-06-02 |      0.667 | $20,000.00     | $13,337.95      |
| 2024-05-19 |      0.574 | $4,000.00      | $2,295.79       |
| 2024-05-16 |      0.553 | $5,000.00      | $2,766.17       |
| 2024-05-12 |      0.527 | $15,000.00     | $7,908.19       |
| 2024-04-20 |      0.381 | $5,000.00      | $1,903.48       |
| 2024-04-14 |      0.338 | $4,000.00      | $1,350.51       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
