### Roster Details<br />
Team Name: 9z<br />
Roster: buda, dgt, HUASOPEEK, MartinezSa, max<br />
Global Rank: [21](../../standings_global_2024_09_26.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_09_26.md)<br />
Regional Rank: [6]( ../../standings_americas_2024_09_26.md)<br />
<br />
Final Rank Value:  1318.0<br />
<br />
Final Rank Value (1318.0) = Starting Rank Value (1360.5) + Head To Head Adjustments (-42.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.638[<sup>1</sup>](#table2)
- Bounty Collected: 0.498[<sup>2</sup>](#table1)
- Opponent Network: 0.196[<sup>2</sup>](#table1)
- LAN Wins: 0.699[<sup>2</sup>](#table1)

The average of these factors is 0.508<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1360.5
- 400 + ( ( 0.508 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 1360.5


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
|           57 |      609 | 2024-09-07 | The MongolZ       | L   | 1.000      | -            | -                | -                | -         |    -5.93 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           56 |      637 | 2024-09-06 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |   -13.42 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           55 |      667 | 2024-09-05 | Wildcard          | W   | 1.000      | 0.889        | 0.082 (0.073)    | 0.613 (0.545)    | 1 (1.000) |     8.37 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           54 |      727 | 2024-09-03 | MIBR              | L   | 1.000      | -            | -                | -                | -         |   -16.84 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           53 |     1062 | 2024-08-26 | Falcons           | L   | 0.992      | -            | -                | -                | -         |   -10.00 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           52 |     1090 | 2024-08-25 | paiN              | L   | 0.986      | -            | -                | -                | -         |    -8.50 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           51 |     1114 | 2024-08-24 | Falcons           | W   | 0.978      | 0.143        | 0.286 (0.040)    | -                | 1 (0.978) |    19.24 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           50 |     1529 | 2024-08-11 | paiN              | L   | 0.894      | -            | -                | -                | -         |    -7.94 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           49 |     1555 | 2024-08-10 | Astralis          | L   | 0.887      | -            | -                | -                | -         |   -10.22 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           48 |     1590 | 2024-08-09 | MIBR              | W   | 0.879      | 0.143        | 0.234 (0.029)    | -                | 1 (0.879) |    13.13 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           47 |     1661 | 2024-08-07 | 3DMAX             | W   | 0.866      | 0.143        | 0.401 (0.050)    | -                | 1 (0.866) |    17.04 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           46 |     2055 | 2024-07-27 | Monte             | L   | 0.793      | -            | -                | -                | -         |   -22.53 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           45 |     2113 | 2024-07-25 | RUBY              | W   | 0.780      | 0.435        | -                | 0.470 (0.159)    | -         |     1.38 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           44 |     2743 | 2024-06-16 | fnatic            | W   | 0.522      | 0.548        | 0.248 (0.071)    | 0.616 (0.176)    | 1 (0.522) |     6.62 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           43 |     2753 | 2024-06-16 | KOI               | W   | 0.520      | -            | -                | -                | 1 (0.520) |     1.49 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           42 |     2773 | 2024-06-15 | paiN              | W   | 0.515      | 0.548        | 0.319 (0.090)    | 0.926 (0.261)    | 1 (0.515) |    11.86 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           41 |     2793 | 2024-06-15 | BESTIA            | W   | 0.513      | 0.548        | -                | 0.813 (0.228)    | 1 (0.513) |     1.86 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           40 |     2814 | 2024-06-14 | Ninjas in Pyjamas | L   | 0.508      | -            | -                | -                | -         |    -8.26 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           39 |     3022 | 2024-06-08 | Imperial          | L   | 0.468      | -            | -                | -                | -         |   -10.70 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           38 |     3079 | 2024-06-07 | Sharks            | W   | 0.462      | 0.450        | -                | 0.517 (0.108)    | -         |     1.91 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           37 |     3135 | 2024-06-06 | MIBR              | W   | 0.456      | 0.450        | 0.234 (0.048)    | 0.607 (0.124)    | -         |     9.01 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           36 |     3204 | 2024-06-05 | RED Canids        | L   | 0.449      | -            | -                | -                | -         |   -11.31 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           35 |     3256 | 2024-06-04 | Fluxo             | W   | 0.442      | 0.450        | -                | 0.628 (0.125)    | -         |     1.63 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           34 |     3337 | 2024-06-01 | G2                | L   | 0.422      | -            | -                | -                | -         |    -0.66 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           33 |     3427 | 2024-05-29 | Vitality          | W   | 0.401      | 0.624        | 1.000 (0.251)    | 0.436 (0.109)    | 1 (0.401) |    12.08 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           32 |     3467 | 2024-05-27 | Liquid            | W   | 0.390      | 0.624        | 0.368 (0.089)    | -                | 1 (0.390) |    10.51 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           31 |     3479 | 2024-05-27 | MOUZ              | W   | 0.387      | 0.624        | 1.000 (0.242)    | -                | -         |    11.65 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           30 |     3574 | 2024-05-22 | Imperial          | L   | 0.355      | -            | -                | -                | -         |    -7.86 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           29 |     3576 | 2024-05-22 | Imperial          | L   | 0.355      | -            | -                | -                | -         |    -8.06 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           28 |     3655 | 2024-05-20 | W7M               | W   | 0.342      | -            | -                | -                | -         |     0.36 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           27 |     3659 | 2024-05-20 | W7M               | W   | 0.341      | -            | -                | -                | -         |     0.36 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           26 |     3662 | 2024-05-20 | BESTIA            | L   | 0.341      | -            | -                | -                | -         |    -9.78 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           25 |     3664 | 2024-05-20 | BESTIA            | W   | 0.341      | 0.450        | -                | 0.813 (0.125)    | -         |     0.95 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           24 |     3685 | 2024-05-19 | RED Canids        | L   | 0.335      | -            | -                | -                | -         |    -8.45 | buda, HUASOPEEK, Luken, MartinezSa, max |
|           23 |     3714 | 2024-05-18 | Fluxo             | W   | 0.328      | -            | -                | -                | -         |     1.29 | buda, HUASOPEEK, Luken, MartinezSa, max |
|           22 |     3778 | 2024-05-16 | ODDIK             | W   | 0.315      | -            | -                | -                | -         |     1.52 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           21 |     3786 | 2024-05-16 | Imperial          | L   | 0.314      | -            | -                | -                | -         |    -7.21 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           20 |     3824 | 2024-05-15 | RED Canids        | W   | 0.309      | -            | -                | -                | -         |     1.83 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           19 |     3826 | 2024-05-15 | RED Canids        | L   | 0.309      | -            | -                | -                | -         |    -8.00 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           18 |     3828 | 2024-05-15 | Sharks            | W   | 0.308      | -            | -                | -                | -         |     1.08 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           17 |     3885 | 2024-05-14 | Players           | W   | 0.302      | -            | -                | -                | -         |     0.20 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           16 |     3890 | 2024-05-14 | Players           | W   | 0.302      | -            | -                | -                | -         |     0.20 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           15 |     3899 | 2024-05-14 | Galorys           | W   | 0.301      | -            | -                | -                | -         |     0.23 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           14 |     3917 | 2024-05-13 | Galorys           | W   | 0.296      | -            | -                | -                | -         |     0.22 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           13 |     3937 | 2024-05-12 | inSanitY          | W   | 0.289      | -            | -                | -                | -         |     0.60 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           12 |     3941 | 2024-05-12 | paiN              | L   | 0.288      | -            | -                | -                | -         |    -2.14 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           11 |     3967 | 2024-05-11 | KRÜ               | W   | 0.281      | -            | -                | -                | -         |     0.51 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           10 |     3995 | 2024-05-10 | inSanitY          | W   | 0.276      | -            | -                | -                | -         |     0.57 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            9 |     4038 | 2024-05-08 | Sharks            | W   | 0.262      | -            | -                | -                | -         |     0.93 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            8 |     4080 | 2024-05-06 | Vikings KR        | W   | 0.247      | -            | -                | -                | -         |     0.23 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            7 |     4173 | 2024-05-01 | Case              | W   | 0.214      | -            | -                | -                | -         |     0.50 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            6 |     4175 | 2024-05-01 | Case              | W   | 0.214      | -            | -                | -                | -         |     0.50 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            5 |     4443 | 2024-04-19 | OG                | L   | 0.136      | -            | -                | -                | -         |    -3.96 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            4 |     4494 | 2024-04-18 | Imperial          | L   | 0.129      | -            | -                | -                | -         |    -3.04 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            3 |     4503 | 2024-04-18 | FURIA             | W   | 0.127      | -            | -                | -                | -         |     3.32 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            2 |     4823 | 2024-04-08 | HEROIC            | L   | 0.058      | -            | -                | -                | -         |    -0.75 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            1 |     4832 | 2024-04-07 | G2                | L   | 0.057      | -            | -                | -                | -         |    -0.09 | buda, dgt, HUASOPEEK, MartinezSa, max   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($90,314.89)
- Divide that value by the 5th highest value among all rosters ($332,851.90)
- The final value (0.27) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-22 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-08-18 |      0.941 | $10,000.00     | $9,409.20       |
| 2024-07-28 |      0.801 | $2,000.00      | $1,601.27       |
| 2024-06-16 |      0.522 | $100,000.00    | $52,236.77      |
| 2024-06-09 |      0.475 | $7,500.00      | $3,562.81       |
| 2024-06-02 |      0.428 | $20,000.00     | $8,559.69       |
| 2024-05-19 |      0.335 | $4,000.00      | $1,340.14       |
| 2024-05-16 |      0.314 | $5,000.00      | $1,571.61       |
| 2024-05-12 |      0.288 | $15,000.00     | $4,324.49       |
| 2024-04-20 |      0.142 | $5,000.00      | $708.91         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
