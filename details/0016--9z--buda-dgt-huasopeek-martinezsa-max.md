### Roster Details<br />
Team Name: 9z<br />
Roster: buda, dgt, HUASOPEEK, MartinezSa, max<br />
Global Rank: [16](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [4]( ../standings_americas.md)<br />
<br />
Final Rank Value:  1459.0<br />
<br />
Final Rank Value (1459.0) = Starting Rank Value (1574.4) + Head To Head Adjustments (-115.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.722[<sup>1</sup>](#table2)
- Bounty Collected: 0.553[<sup>2</sup>](#table1)
- Opponent Network: 0.265[<sup>2</sup>](#table1)
- LAN Wins: 0.736[<sup>2</sup>](#table1)

The average of these factors is 0.569<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1574.4
- 400 + ( ( 0.569 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1574.4


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
|           64 |      151 | 2024-07-27 | Monte             | L   | 1.000      | -            | -                | -                | -         |   -28.31 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           63 |      209 | 2024-07-25 | RUBY              | W   | 1.000      | 0.435        | 0.097 (0.042)    | 0.506 (0.220)    | 0 (0.000) |     1.22 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           62 |      839 | 2024-06-16 | fnatic            | W   | 0.901      | 0.548        | 0.374 (0.185)    | 0.633 (0.313)    | 1 (0.901) |    14.10 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           61 |      849 | 2024-06-16 | KOI               | W   | 0.899      | -            | -                | -                | 1 (0.899) |     3.46 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           60 |      869 | 2024-06-15 | paiN              | W   | 0.894      | 0.548        | 0.305 (0.150)    | 0.796 (0.390)    | 1 (0.894) |    10.51 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           59 |      889 | 2024-06-15 | BESTIA            | W   | 0.892      | 0.548        | 0.093 (0.046)    | 0.731 (0.357)    | 1 (0.892) |     2.59 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           58 |      910 | 2024-06-14 | Ninjas in Pyjamas | L   | 0.886      | -            | -                | -                | -         |    -9.60 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           57 |     1118 | 2024-06-08 | Imperial          | L   | 0.847      | -            | -                | -                | -         |   -19.39 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           56 |     1175 | 2024-06-07 | Sharks            | W   | 0.841      | 0.450        | -                | 0.558 (0.211)    | 0 (0.000) |     2.20 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           55 |     1231 | 2024-06-06 | MIBR              | W   | 0.834      | 0.450        | 0.202 (0.076)    | 0.610 (0.229)    | -         |    12.54 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           54 |     1300 | 2024-06-05 | RED Canids        | L   | 0.828      | -            | -                | -                | -         |   -22.46 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           53 |     1352 | 2024-06-04 | Fluxo             | W   | 0.821      | 0.450        | 0.123 (0.045)    | 0.685 (0.253)    | -         |     2.40 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           52 |     1433 | 2024-06-01 | G2                | L   | 0.801      | -            | -                | -                | -         |    -1.86 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           51 |     1523 | 2024-05-29 | Vitality          | W   | 0.780      | 0.624        | 0.592 (0.288)    | -                | 1 (0.780) |    22.02 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           50 |     1563 | 2024-05-27 | Liquid            | W   | 0.769      | 0.624        | 0.323 (0.155)    | 0.430 (0.206)    | 1 (0.769) |    13.74 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           49 |     1575 | 2024-05-27 | MOUZ              | W   | 0.766      | 0.624        | 1.000 (0.478)    | -                | 1 (0.766) |    22.61 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           48 |     1670 | 2024-05-22 | Imperial          | L   | 0.734      | -            | -                | -                | -         |   -16.13 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           47 |     1672 | 2024-05-22 | Imperial          | L   | 0.734      | -            | -                | -                | -         |   -17.00 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           46 |     1751 | 2024-05-20 | W7M               | W   | 0.721      | -            | -                | -                | -         |     0.51 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           45 |     1755 | 2024-05-20 | W7M               | W   | 0.720      | -            | -                | -                | -         |     0.51 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           44 |     1758 | 2024-05-20 | BESTIA            | L   | 0.720      | -            | -                | -                | -         |   -21.38 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           43 |     1760 | 2024-05-20 | BESTIA            | W   | 0.720      | 0.450        | -                | 0.731 (0.237)    | -         |     1.21 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           42 |     1781 | 2024-05-19 | RED Canids        | L   | 0.714      | -            | -                | -                | -         |   -19.70 | buda, HUASOPEEK, Luken, MartinezSa, max |
|           41 |     1810 | 2024-05-18 | Fluxo             | W   | 0.706      | -            | -                | -                | -         |     2.19 | buda, HUASOPEEK, Luken, MartinezSa, max |
|           40 |     1874 | 2024-05-16 | ODDIK             | W   | 0.694      | -            | -                | -                | -         |     0.93 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           39 |     1882 | 2024-05-16 | Imperial          | L   | 0.693      | -            | -                | -                | -         |   -16.44 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           38 |     1920 | 2024-05-15 | RED Canids        | W   | 0.688      | 0.450        | -                | 0.738 (0.228)    | -         |     2.19 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           37 |     1922 | 2024-05-15 | RED Canids        | L   | 0.688      | -            | -                | -                | -         |   -19.73 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           36 |     1924 | 2024-05-15 | Sharks            | W   | 0.687      | -            | -                | -                | -         |     0.99 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           35 |     1981 | 2024-05-14 | Smoke             | W   | 0.681      | -            | -                | -                | -         |     0.22 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           34 |     1986 | 2024-05-14 | Smoke             | W   | 0.680      | -            | -                | -                | -         |     0.23 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           33 |     1995 | 2024-05-14 | Galorys           | W   | 0.680      | -            | -                | -                | -         |     0.62 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           32 |     2013 | 2024-05-13 | Galorys           | W   | 0.675      | -            | -                | -                | -         |     0.62 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           31 |     2033 | 2024-05-12 | inSanitY          | W   | 0.668      | -            | -                | -                | -         |     0.73 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           30 |     2037 | 2024-05-12 | paiN              | L   | 0.667      | -            | -                | -                | -         |   -14.45 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           29 |     2063 | 2024-05-11 | KRÜ               | W   | 0.660      | -            | -                | -                | -         |     0.61 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           28 |     2091 | 2024-05-10 | inSanitY          | W   | 0.655      | -            | -                | -                | -         |     0.67 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           27 |     2134 | 2024-05-08 | Sharks            | W   | 0.641      | -            | -                | -                | -         |     0.84 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           26 |     2176 | 2024-05-06 | Vikings KR        | W   | 0.626      | -            | -                | -                | -         |     0.37 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           25 |     2269 | 2024-05-01 | Case              | W   | 0.593      | -            | -                | -                | -         |     0.55 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           24 |     2271 | 2024-05-01 | Case              | W   | 0.593      | -            | -                | -                | -         |     0.55 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           23 |     2539 | 2024-04-19 | OG                | L   | 0.515      | -            | -                | -                | -         |   -15.16 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           22 |     2590 | 2024-04-18 | Imperial          | L   | 0.508      | -            | -                | -                | -         |   -12.79 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           21 |     2599 | 2024-04-18 | FURIA             | W   | 0.506      | 0.589        | 0.286 (0.085)    | -                | 1 (0.506) |    10.90 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           20 |     2919 | 2024-04-08 | HEROIC            | L   | 0.437      | -            | -                | -                | -         |    -6.78 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           19 |     2928 | 2024-04-07 | G2                | L   | 0.436      | -            | -                | -                | -         |    -1.21 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           18 |     3886 | 2024-02-23 | FURIA             | W   | 0.142      | -            | -                | -                | -         |     3.29 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           17 |     3889 | 2024-02-23 | BESTIA            | W   | 0.140      | -            | -                | -                | -         |     0.21 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           16 |     3899 | 2024-02-22 | FURIA             | L   | 0.134      | -            | -                | -                | -         |    -1.12 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           15 |     3906 | 2024-02-22 | BESTIA            | W   | 0.134      | -            | -                | -                | -         |     0.19 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           14 |     3952 | 2024-02-20 | Solid             | W   | 0.121      | -            | -                | -                | -         |     0.09 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           13 |     3954 | 2024-02-20 | Case              | W   | 0.120      | -            | -                | -                | -         |     0.12 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           12 |     3958 | 2024-02-20 | Salao do Corte    | W   | 0.120      | -            | -                | -                | -         |     0.01 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           11 |     4010 | 2024-02-18 | LA RUGONETA       | L   | 0.106      | -            | -                | -                | -         |    -3.31 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           10 |     4051 | 2024-02-16 | Fluxo             | L   | 0.093      | -            | -                | -                | -         |    -2.80 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            9 |     4076 | 2024-02-15 | Imperial          | L   | 0.088      | -            | -                | -                | -         |    -2.29 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            8 |     4079 | 2024-02-15 | Case              | W   | 0.087      | -            | -                | -                | -         |     0.08 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            7 |     4082 | 2024-02-15 | KRÜ               | W   | 0.087      | -            | -                | -                | -         |     0.06 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            6 |     4107 | 2024-02-14 | 2GAME             | W   | 0.081      | -            | -                | -                | -         |     0.02 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            5 |     4171 | 2024-02-12 | LA RUGONETA       | W   | 0.067      | -            | -                | -                | -         |     0.01 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            4 |     4254 | 2024-02-04 | Imperial          | L   | 0.014      | -            | -                | -                | -         |    -0.36 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            3 |     4274 | 2024-02-03 | W7M               | W   | 0.009      | -            | -                | -                | -         |     0.00 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            2 |     4307 | 2024-02-02 | Imperial          | W   | 0.001      | -            | -                | -                | -         |     0.01 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            1 |     4312 | 2024-02-02 | ODDIK             | W   | 0.000      | -            | -                | -                | -         |     0.00 | buda, dgt, HUASOPEEK, MartinezSa, max   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($135,512.01)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.41) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-28 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-06-16 |      0.901 | $100,000.00    | $90,126.33      |
| 2024-06-09 |      0.854 | $7,500.00      | $6,404.53       |
| 2024-06-02 |      0.807 | $20,000.00     | $16,137.60      |
| 2024-05-19 |      0.714 | $4,000.00      | $2,855.72       |
| 2024-05-16 |      0.693 | $5,000.00      | $3,466.09       |
| 2024-05-12 |      0.667 | $15,000.00     | $10,007.93      |
| 2024-04-20 |      0.521 | $5,000.00      | $2,603.39       |
| 2024-04-14 |      0.478 | $4,000.00      | $1,910.44       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
